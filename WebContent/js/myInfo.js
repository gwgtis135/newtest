
$(document).ready(function() {
	let modal = $('.modal')
	let modalbody = $('.modal_body')
	let mypagebtn = $('#mypagebtn')



	$(mypagebtn).click(function() {
		$(modal).toggleClass("show");
		$('.modal_body').empty();
		
		$(modalbody).append(makeinMyInfo());
		
		console.log(sessionStorage.getItem('userId'));
		$('#userId').val(sessionStorage.getItem('userId'));
		console.log(sessionStorage.getItem('userName'));
		$('#userName').val(sessionStorage.getItem('userName'));
		
		if ($(modal).hasClass("show")) {
			$(modalbody).css("overflow", "auto");
		}
	})
	
	
	
})

function makeinMyInfo() {

	var form  = $('<form />');
	form.attr("name", "form");
	form.attr("method", "post");
	form.attr("action", "");
	form.attr("target", "_blank");
	
	//Id
	var divId = $('<div/>',{
		html:'아이디:    '	
	})
	
	divId.append($('<input />', {
		type: 'text',
		name: 'userId',
		id: 'userId',
		readonly:'ture'
	})
	)
	divId.css('width',370);
	divId.css("text-align", "left"); 
	
	
	//NAME
	var divName = $('<div/>',{
		text:'이름   :'	
	})
	divName.css('width',370);
	divName.css("text-align", "left"); 
	divName.append($('<input />', {
		type: 'text',
		id: 'userName',
		name: 'userName',
		readonly:'ture'
	})
	)
	
	form.append($('<h1>내 정보</h1>'));
	
	form.append(
		divId,
	 	$('<br>'),
		divName, 
		$('<br>')
	);

	return form;
}