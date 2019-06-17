// import bootstrap js
import "./bootstrap";

/*
* You can add your custom JavaScript below.
* You can either start writing the entire code below or
* Divide the code into seperate modules and require them below.
* 
* Note: Make sure you import all the modules inside this file.
* 
* Use bootstrap.js to require node packages.
*/

// import "./video-player";

import "./form";


// open contact modal
$(".btn-get-started").click((e) => {

    e.preventDefault();

    UIkit.modal('#contact-form-modal').show();
})

$(window).on('scroll', (e) => {

    if ($(window).scrollTop() > 500) {

        if ($('#to-top').hasClass('uk-hidden')) {

            $('#to-top').removeClass('uk-hidden').addClass('uk-animation-slide-bottom')
        }
    }

    else {

        if (!$('#to-top').hasClass('uk-hidden')) {

            $('#to-top').addClass('uk-hidden')
        }
    }
})