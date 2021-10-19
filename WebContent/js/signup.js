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
//회원가입 버튼 이벤트
	$(document).on('click', '#signUpBtn' , function(event){	
		event.preventDefault();
		
	
		let id = $('#userEmail').val();
		let pw = $('#userSignUpPw').val();
		let name = $('#username').val();
		console.log(id);
		console.log(pw);
		console.log(name);
	
		let xhttp = new XMLHttpRequest();
		xhttp.onload = function () {
			let exists = JSON.parse(xhttp.responseText); // {retCode: 'OK'}
				// exist or notExist
			if (exists.retCode == 'OK') {
				console.log('성공성공성공'+exists.retCode);
				window.alert('아이디 생성가능');
				return;
			}
			else{
			
				window.alert('이미 만들어진 아이디 입니다');
				// 정상적인 등록....
			}
			console.log(exists.retCode);
		
			if (id == "" || pw == "" || name == "" ) {
					window.alert("필수입력항목 확인!");
					return;
				}
		}	
			xhttp.open('post', 'signUpServlet?cmd=add&userEmail=' + id+'&userSignUpPw=' + pw+'&username=' + name);
			xhttp.send();
	
	
		})

//회원가입 아이디 비교 
	/*$(document).on('click', '#idCheckBtn' , function(event){
		event.preventDefault();
		let id = $('#userEmail').val();
		let xhttp = new XMLHttpRequest();
		console.log(id);
		
		xhttp.onload = function () {
			let exists = JSON.parse(xhttp.responseText); // {retCode: 'OK'}
				// exist or notExist
			if (exists.retCode == 'OK') {
				
				window.alert('아이디 생성가능 ');
				return;
			}
			else{
				console.log('아이디 중복 '+exists.retCode);
				window.alert('이미 만들어진 아이디입니다. ');
				// 정상적인 등록....
			}
	
		}
		xhttp.open('post', 'signUpServlet?cmd=idCheck&userId=' + id);
		xhttp.send();
	})*/
	
})


/*function idcheckbtn(event){
	event.preventDefault();
}*/



function makeupform() {
    var form = $('<form />');
    form.attr("name", "form");
    form.attr("method", "post");
    form.attr("action", "https://ifuwanna.tistory.com/196");
    form.attr("target", "_blank");

    var span = $('<span />');
    span.attr("idcheckMsg");

    form.append($('<h1>회원가입</h1>'));
    form.append($('<input />', {
		id : 'userEmail',			//아이디
        type: 'text',
        name: 'data1',
        placeholder:'enter EMAIL',
        onfocus: "this.value=''"
    }),$('<input />', {				//중복버튼 
		    id : 'idCheckBtn',
            type: 'button',
            name: 'signUpbtn',
            value:'ID중복'
       
    }), $('<br>'), $('<input />', {
		id : 'userSignUpPw',	//비밀번호 
        type: 'text',
        name: 'data1',
        placeholder:'enter PASSWORD',
        onfocus: "this.value=''"
    }), $('<br>'), $('<input />', {
		id : 'userReSignUpPw',		
        type: 'password',
        name: 'data1',
        placeholder:'RE - enter PASSWORD',
        onfocus: "this.value=''"
    }), $('<br>'), $('<input />', {
		id:'username',				//이름 
        type: 'text',
        name: 'data1',
        placeholder:'enter NAME',
        onfocus: "this.value=''"
    }), $('<br>'), $('<input />', {
        type: 'submit',
        value: '회원가입',
		id: 'signUpBtn'
    }));

    return form;
}