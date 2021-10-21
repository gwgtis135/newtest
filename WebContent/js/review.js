$(document).ready(function() {
	var restid = getParameterByName('id');
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
	$(document).on('keyup', '#reviewcon', function() {
		$('#text_cnt').html("(" + $(this).val().length + " / 50)");

		if ($(this).val().length > 50) {
			$('#reviewcon').val($('#reviewcon').val().substring(0, 50));
			console.log($('#reviewcon').val());
			$('#text_cnt').html("(50 / 50)");
		}
	})
	$(document).on('click', '#addreview', function(e) {
		e.preventDefault();

		let recontent = $('#reviewcon').val();
		let grade = $('input[type="radio"]:checked').val();
		$.ajax({
			url: './addrevServ',
			type: 'post',
			data: {
				restid: restid,
				id: sessionStorage.getItem('userId'),
				content: recontent,
				grade: grade
			},
			dataType: 'json',
			success: function(dat) {
				let list = $('#revlist');
				let outdiv = $('<div />');
				let indiv = $('<div />');
				let thdiv = $('<div />');
				outdiv.attr('class','mx-6 my-3 reviewcontent');
				indiv.attr('class','reviewid');
				thdiv.attr('class','reviewdate');
				indiv.html(dat.id);
				outdiv.append(indiv);
				outdiv.html(outdiv.html()+dat.content);
				thdiv.html(dat.credate);
				outdiv.append(thdiv);
				list.append(outdiv);
				let modal = $('.modal')
				$(modal.toggleClass("show"))
			},
			error: function() {
				//경고 메세지
			}
		});
	})
});
function makearform() {
	var form = $('<form />');
	form.attr("name", "form");
	form.attr("method", "post");
	form.attr("action", "");
	form.attr("target", "_blank");

	form.append($('<h1>리뷰 작성</h1>'));
	form.append($('<input />', {
		id: 'userid',
		type: 'hidden',
		name: 'user',
		onfocus: "this.value='" + sessionStorage.getItem('userId') + "'" // 쿠키에 유저 아이디 받아오기
	}), $('<br>'), $('<textarea />', {
		id: "reviewcon",
		style: 'resize :none',
		name: 'contents',
		placeholder: '리뷰를 작성해주세요!',
		rows: "7",
		cols: "25",
		onfocus: "this.value=''"
	}), $('<br>'), $('<div />', {
		id: 'text_cnt',
		html: '(0/50)',
	}), $('<br>'),
		makegrade(1), makelabel(1),
		makegrade(2), makelabel(2),
		makegrade(3), makelabel(3),
		makegrade(4), makelabel(4),
		makegrade(5), makelabel(5),
		$('<br>'), $('<input />', {
			type: 'submit',
			id: 'addreview',
			value: '리뷰 등록'
		}));
	return form;
}

function makegrade(point) {
	let input = $('<input />', {
		type: 'radio',
		name: 'grade',
		value: point,
		html: point,
		id: 'checkbox' + point
	})
	return input;
}

function makelabel(point) {
	let label = $('<label />', {
		html: point + '&nbsp&nbsp&nbsp&nbsp&nbsp',
		for: 'checkbox' + point
	})
	return label;
}