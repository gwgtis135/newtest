$(document).ready(function () {
    let modal = $('.modal')
    let modalbody = $('.modal_body')
    let signinbtn = $('#signinbtn')

    $(signinbtn).click(function () {
        $(modal).toggleClass("show");
        $(modalbody).empty();
        $(modalbody).append(makeinform());
        if ($(modal).hasClass("show")) {
            $(modalbody).css("overflow","auto");
        }
    })
})

function makeinform() {
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
        type: 'password',
        name: 'data1',
        value: 'password'
    }), $('<br>'), $('<input />', {
        type: 'submit',
        value: '로그인'
    }) );


    // console.log(form);
    return form;
}