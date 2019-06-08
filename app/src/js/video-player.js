/**
 * @file video-player.js
 * @summary This js file controls the working of the video player in section-1 (about)
 * @todo
 * + on clicking the play button:
 *      -> Remove the overlay
 *      -> Start playing video
 * + on pausing/end of the video:
 *      -> re-render the overlay
 * @description Elements needed and the ids
 *      - Play Button: #about-video-play-btn
 *      - Overlay: #about-video-overlay
 *      - Video Player: #about-video
 */

(function () {
    // element ids
    const _play_button = "about-video-play-btn";
    const _overlay = "about-video-overlay";
    const _video_player = "about-video";

    // elements
    const play_btn = document.getElementById(_play_button);
    const overlay = document.getElementById(_overlay);
    const video_player = document.getElementById(_video_player);

    // on pausing or end of video
    const on_pause_or_end = () => {

        // show overlay
        $(overlay).css('display', 'initial')

        // hide controls
        video_player.controls = false
    }
    video_player.onended = on_pause_or_end
    video_player.onpause = on_pause_or_end

    // on clicking the play button
    $(play_btn).click((e) => {

        // prevent default
        e.preventDefault();

        // remove the overlay
        $(overlay).css('display', 'none');

        // start playing
        video_player.play();

        // enable controls
        video_player.controls = true;

    })

})()