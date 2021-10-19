/**
 * 
 */
//


// 등록아이디가 존재하는지 여부 체크
// 아이디값을 가지고 서버에 값이 존재여부 체크.
// ajax > 서블릿 > EmpDAO: 한건 조회해서 메소드.
// 존재하면 true, 존지하지 않으면 false;












$(document).ready(function() {
	let modal = $('.modal')
	let modalbody = $('.modal_body')
	let signinbtn = $('#signinbtn')


	$(signinbtn).click(function() {
		$(modal).toggleClass("show");
		$('.modal_body').empty();
		$(modalbody).append(makeinform());
		renderButton();
		kakaoLogin();

		if ($(modal).hasClass("show")) {
			$(modalbody).css("overflow", "auto");
		}
	})


$(document).on('click', '#loginbtn' , function(e){
	e.preventDefault();
	console.log('111111');
	let id = $('#userId').val();
	console.log(id);
	
	let xhttp = new XMLHttpRequest();
	xhttp.onload = function () {
		let exists = JSON.parse(xhttp.responseText); // {retCode: 'OK'}
				// exist or notExist
		if (exists.retCode == 'NG') {
			console.log(exists.retCode);
			window.alert('로그인 되었습니다.');
			return;
		}
				// 정상적인 등록....
		console.log('1111111');
		console.log(exists.retCode);
		console.log('2222222');
				if (id == "") {
					window.alert("필수입력항목 확인!");
					return;
				}
			}
			xhttp.open('get', 'loginServlet?userId=' + id);
			xhttp.send();
	
	});
})




//구글 로그인 버튼
function onSuccess(googleUser) {
	console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
	console.log(error);
}
function renderButton() {
	gapi.signin2.render('my-signin2', {
		'scope': 'profile email',
		'width': 240,
		'height': 50,
		'longtitle': true,
		'theme': 'dark',
		'onsuccess': onSuccess,
		'onfailure': onFailure
	});
}

function kakaoLogin() {
	Kakao.init('7894c8c2b394b9b798092f6237f6f681');

	// 카카오 로그인 버튼을 생성합니다.
	Kakao.Auth.createLoginButton({
		container: '#kakao-login-btn',
		success: function(authObj) {
			alert(JSON.stringify(authObj));
		},
		fail: function(err) {
			alert(JSON.stringify(err));
		}
	});
}

function makeinform() {



	var form = $('<form />');
	form.attr("name", "form");
	form.attr("method", "post");
	form.attr("action", "");
	form.attr("target", "_blank");

	form.append($('<h1>로그인</h1>'));



	form.append($('<input />', {
		type: 'text',
		name: 'userId',
		id: 'userId',
		placeholder: 'insert ID',
		onfocus: "this.value=''"
	}), $('<br>'), $('<input />', {
		type: 'password',
		name: 'userPw',
		placeholder: 'insert PW',
		onfocus: "this.value=''"
	}), $('<br>'), $('<input />', {
		type: 'submit',
		id: 'loginbtn',
		value: '로그인'
	}), $('<br>'), $('<div />', {
		id: 'my-signin2', /*구글 로그인 버튼*/
	}), $('<a />', {
		id: 'kakao-login-btn', /*카카오 로그인 버튼*/
		href: 'http://developers.kakao.com/logout'
	}), $('<br>'), $('<a />', {
		href: 'http://developers.kakao.com/logout'
	}));

	return form;
}