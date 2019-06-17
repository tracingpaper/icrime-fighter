const config = require('../../config/data.json').forms.contact;
// CHANGE IF NEEDED
function submitToAPI(api_url, formData, onSuccess, onError) {

    if (validate(formData)) {

        /*
        Data format:
        {
            name: string,
            phone: string,
            email: string,
            desc: string
        }
        */

        $.ajax({
            type: 'POST',
            method: 'post',
            url: api_url,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(formData),
            success: onSuccess,
            error: onError
        })

    }

}

function validate(formData) {

    const regexps = {
        name: /[A-Za-z]{1}[A-Za-z]/,
        mobile: /^[0-9]{10}$/,
        email: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/
    }

    const notif_status = {
        status: 'danger',
        pos: 'top-center'
    }

    if (!regexps.name.test(formData[config.fields.name])) {

        UIkit.notification('Please enter a valid name', notif_status);
        return false;
    } 

    if (!regexps.mobile.test(formData[config.fields.phone])) {

        UIkit.notification('Please enter a valid mobile number', notif_status);
        return false;
    } 

    if (!regexps.email.test(formData[config.fields.email])) {

        UIkit.notification('Please enter a valid email address', notif_status);
        return false;
    } 

    return true;
}

$.fn.serializeObject = function() {

    const arr = $(this).serializeArray();

    const obj = {};

    for (let item of arr) {
        obj[item['name']] = item['value'];
    }

    return obj;
}

$('.contact-form').each((i, ele) => {

    $(ele).submit((ev) => {
        ev.preventDefault();
    
        // console.log($(this).html())

        const data = $(ele).serializeObject();
        const url = $(ele).attr('action')
    
        submitToAPI(
            url,
            data,
            function (res) {
                UIkit.notification('Successful', {
                    status: 'success',
                    pos: 'top-center'
                })

                console.log(res)

                $(ele).reset()

                UIkit.modal('#contact-form-modal').hide()
            },
            function (err) {

                UIkit.notification('Unsuccessful', {
                    status: 'danger',
                    pos: 'top-center'
                })

                console.log(err)
            }
        );
    })
})