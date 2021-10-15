$(document).ready(function () {

    $("#signup").append(makeform());

})

function makeform() {
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
        value: 'your name'
    }), $('<br>'), $('<input />', {
        type: 'submit',
        value: '회원가입'
    }), );


    console.log(form);
    return form;
}

function makeDiv(row) {
    let div = $('<tr />').append(
        $('<td />').html(row.id),
        $('<td />').html(row.centerName),
        $('<td />').html(row.sido),
        $('<td />').html(row.facilityName),
        $('<td />').html('<a href="daum_map.jsp?x=' + row.lat + '&y=' + row.lng + '&fname=' + row.facilityName + '" target="_blank">지도</a>'),
    )
    // console.log(div)
    return div
}