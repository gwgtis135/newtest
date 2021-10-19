$(document).ready(function() {
	let revbtn = $('#revbtn');
	let modal = $('.modal');
	let modalbody = $('.modal_body');
	$(revbtn).click(function() {
		$(modal).toggleClass("show");
		$('.modal_body').empty();
		$(modalbody).append(makearform());

		if ($(modal).hasClass("show")) {
			$(modalbody).css("overflow", "auto");
		}
	})
})
$('#addreview').click(function(){
	
})
function makearform() {
    var form = $('<form />');
    form.attr("name", "form");
    form.attr("method", "post");
    form.attr("action", "");
    form.attr("target", "_blank");

    form.append($('<h1>리뷰 작성</h1>'));
    form.append($('<input />', {
        type: 'hidden',
        name: 'user',
        onfocus: "this.value=''" // 쿠키에 유저 아이디 받아오기
    }), $('<br>'), $('<textarea />', {
		style:'resize :none',
        name: 'contents',
        placeholder:'리뷰를 작성해주세요!',
		rows:"7",
		cols:"25",		
        onfocus: "this.value=''"
    }), $('<br>'), $('<input />', {
        type: 'submit',
		id:'addreview',
        value: '리뷰 등록'
    }));
    return form;
}
