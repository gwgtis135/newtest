/**
 * 
 */
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

    form.append($('<h1>회원가입</h1>'));
    form.append($('<input />', {
        type: 'text',
        name: 'data1',
        placeholder:'enter EMAIL',
        onfocus: "this.value=''"
    }), $('<br>'), $('<input />', {
        type: 'text',
        name: 'data1',
        placeholder:'RE - enter EMAIL',
        onfocus: "this.value=''"
    }), $('<br>'), $('<input />', {
        type: 'password',
        name: 'data1',
        placeholder:'enter PASSWORD',
        onfocus: "this.value=''"
    }), $('<br>'), $('<input />', {
        type: 'text',
        name: 'data1',
        placeholder:'enter NAME',
        onfocus: "this.value=''"
    }), $('<br>'), $('<input />', {
        type: 'submit',
        value: '회원가입'
    }));

    return form;
}