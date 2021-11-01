
$(document).ready(function() {
	let modal = $('.modal')
	let modalbody = $('.modal_body')
	let mypagebtn = $('#mypagebtn')



	$(mypagebtn).click(function() {
		console.log('555555555555')
		$(modal).toggleClass("show");
		$('.modal_body').empty();



		$(modalbody).append(makeinMyInfo());


		$('#userId').val(sessionStorage.getItem('userId'));
		$('#userName').val(sessionStorage.getItem('userName'));


		if ($(modal).hasClass("show")) {
			$(modalbody).css("overflow", "auto");
		}
	})

	//내정보 버튼 이벤트 
	$(document).on('click', '#myInfoBtn', function(e) {


		//$(form).empty();
		$(modalbody).empty();
		$(modalbody).append(makeinMyInfo());

		$('#userId').val(sessionStorage.getItem('userId'));
		$('#userName').val(sessionStorage.getItem('userName'));


		if ($(modal).hasClass("show")) {
			$(modalbody).css("overflow", "auto");
		}
	})


	//즐겨찾기 버튼 이벤트 
	$(document).on('click', '#myFavoriteBtn', function(e) {

		$(form).empty();
		$(modalbody).empty();

		$.ajax({
			url: 'GetFavoreiteListServlet',
			type: 'get',
			dataType: 'json',
			data: {
				userId: sessionStorage.getItem('userId')
			},
			success: function(result) {
				console.log(result);



				//내정보, 즐겨찾기 버튼 생성 
				var myInfoBtn = $('<button />', {
					id: 'myInfoBtn',
					type: 'button',
					html: '내정보'
				})

				myInfoBtn.css('margin-bottom', 10);
				myInfoBtn.css('margin-right', 30);

				var myFavoriteBtn = $('<button />', {
					id: 'myFavoriteBtn',
					type: 'button',
					html: '즐겨찾기'
				})
				myFavoriteBtn.css('margin-bottom', 10);
				//어펜트 

				modalbody.append($('<h1 id = "titleValue" style="margin-bottom: 30px">내 정보</h1>'));
				modalbody.append(myInfoBtn);
				modalbody.append(myFavoriteBtn);

				for (let row of result) {
					$(modalbody).append(makeinFavorite(row));
					console.log(row);
				}
			},
			errror: function(reject) {
				console.log(reject)
			}
		});

	})



})






//태그 생성 메소드 
function makeinMyInfo() {

	var form = $('<form />');
	form.attr("name", "form");
	form.attr("method", "post");
	form.attr("action", "");
	form.attr("target", "_blank");

	//Id
	var divId = $('<div/>', {
		html: '아이디:    '
	})

	var myInfoBtn = $('<button />', {
		id: 'myInfoBtn',
		type: 'button',
		html: '내정보'
	})
	myInfoBtn.css('margin-bottom', 10);
	myInfoBtn.css('margin-right', 30);

	var myFavoriteBtn = $('<button />', {
		id: 'myFavoriteBtn',
		type: 'button',
		html: '즐겨찾기'
	})
	myFavoriteBtn.css('margin-bottom', 10);




	divId.append($('<input />', {
		type: 'text',
		name: 'userId',
		id: 'userId',
		readonly: 'ture'
	})
	)
	divId.css('width', 370);
	divId.css("text-align", "left");


	//NAME
	var divName = $('<div/>', {
		text: '이름   :'
	})
	divName.css('width', 370);
	divName.css("text-align", "left");
	divName.append($('<input />', {
		type: 'text',
		id: 'userName',
		name: 'userName',
		readonly: 'ture'
	})
	)

	form.append($('<h1 style="margin-bottom: 30px">내 정보</h1>'));
	form.append(myInfoBtn);
	form.append(myFavoriteBtn);


	form.append(
		divId,
		$('<br>'),
		divName,
		$('<br>')
	);



	return form;
}


//즐겨찾기 태그 생성 
function makeinFavorite(row) {

	var form = $('<form />');
	form.attr("name", "form");
	form.attr("method", "post");
	form.attr("action", "");
	form.attr("target", "_blank");

	//Id
	var divId = $('<div/>', {
		html: '111111:    '
	})

	var myInfoBtn = $('<button />', {
		id: 'myInfoBtn',
		type: 'button',
		html: '내정보'
	})
	myInfoBtn.css('margin-bottom', 10);
	myInfoBtn.css('margin-right', 30);

	var myFavoriteBtn = $('<button />', {
		id: 'myFavoriteBtn',
		type: 'button',
		html: '즐겨찾기'
	})
	myFavoriteBtn.css('margin-bottom', 10);




	divId.append($('<div />', {
		type: 'text',
		name: 'userId',
		id: 'userId',
		readonly: 'ture'
	})
	)
	//0divId.css('width', 370);
	//divId.css("text-align", "left");


	//NAME
	var divName = $('<div/>', {
		text: '이름   :'
	})
	divName.css('width', 370);
	divName.css("text-align", "left");
	divName.append($('<input />', {
		type: 'text',
		id: 'userName',
		name: 'userName',
		readonly: 'ture'
	})
	)

	//즐겨찾기 콘텐츠 부분 
	let spanRow = $('<span />', {
		id: 'favoriteContent'
	}).addClass('row');

	let divText = $('<div />', {
		id: 'favoriteContentSecond'
	})
	divText.append($('<p />').html(row.rsName),
		$('<p />').html(row.StrAddr))


	$(spanRow).append(

		$('<a />').html('<img width="100px" src="imgTest/' + row.imgLo + '">'),
		divText

	);

	$('#titleValue').html('즐겨찾기')

	form.append(spanRow);

	/*form.append(
		divId,
		$('<br>'),
		divName,
		$('<br>')
	);*/



	return form;
}