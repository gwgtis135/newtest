$(document).ready(function () {
    let modal = $('.modal')
    let modalbody = $('.modal_body')
    let signupbtn = $('#signupbtn')

    $(signupbtn).click(function () {
        $(modal).toggleClass("show");
        $('.modal_body').empty();
        $('.modal_body').append(makeupform());
        if ($(modal).hasClass("show")) {
            $(modalbody).css("overflow","auto");
        }
    })

    $(modal).click(function (event) {
        if ($(event.target).hasClass("show") == $(modal).hasClass("show")) {
            $(modal.toggleClass("show"))
        }
    })
})

function makeupform() {
    var form = $('<form />');
    form.attr("name", "form");
    form.attr("method", "post");
    form.attr("action", "https://ifuwanna.tistory.com/196");
    form.attr("target", "_blank");

    form.append($('<input />', {
        type: 'text',
        name: 'data1',
        value: 'enter email'
    }), $('<br>'), $('<input />', {
        type: 'text',
        name: 'data1',
        value: 're enter email'
    }), $('<br>'), $('<input />', {
        type: 'password',
        name: 'data1',
        value: 'password'
    }), $('<br>'), $('<input />', {
        type: 'text',
        name: 'data1',
        // current-password:'password',
        value: 'your name'
    }), $('<br>'), $('<input />', {
        type: 'submit',
        value: '회원가입'
    }));

    return form;
}