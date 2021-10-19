$(document).ready(function() {
	var id = getParameterByName('id');
	console.log(id);
	let xhtp = new XMLHttpRequest();
	xhtp.open('get', '/minpro/detail?id=' + id);
	xhtp.send();
	xhtp.onload = function() {
		let data = JSON.parse(xhtp.responseText);
		let tar = $('#tar');
		let outdiv = $('<div />');
		let indiv = $('<div />');
		let i = $('<i />');
		let h2 = $('<h2 />');
		let span = $('<span />');
		let img = $('<img />');
		outdiv.attr('class', 'col-lg-10 mb-5 mb-lg-0');
		indiv.attr('class', 'feature bg-primary bg-gradient text-white rounded-3 mb-3');
		i.attr('class', 'bi bi-collection');
		h2.attr('class', 'h4 fw-bolder');
		h2.html(data.name + '&nbsp');
		span.attr('style', 'color:rgb(250,170,70)');
		span.html(data.grade);
		img.attr({ 'alt': '이미지를 불러오는데 실패했습니다', 'width': '350px', 'src': '../minpro/' + data.image_loc });
		indiv.append(i);
		outdiv.append(indiv);
		h2.append(span);
		span = $('<span />');
		span.attr("class", 'restpos');
		span.append(img);
		outdiv.append(h2);
		outdiv.append(span);

		let pre = $('<pre />');
		pre.attr('class', 'fw-bolder');
		pre.html('주소');
		outdiv.append(pre);
		let pre2 = $('<pre />');
		pre2.html('       ' + data.addr);
		outdiv.append(pre2);

		pre = $('<pre />');
		pre2 = $('<pre />');
		pre.attr('class', 'fw-bolder');
		pre.html('연락처')
		pre2.html('       ' + data.phone_number);
		outdiv.append(pre);
		outdiv.append(pre2);

		pre = $('<pre />');
		pre2 = $('<pre />');
		pre.attr('class', 'fw-bolder');
		pre.html('메인메뉴')
		pre2.attr('class', 'xflow');
		pre2.html('       ' + data.menu);
		outdiv.append(pre);
		outdiv.append(pre2);

		pre = $('<pre />');
		pre2 = $('<pre />');
		pre.attr('class', 'fw-bolder');
		pre.html('주차공간')
		pre2.html('       ' + data.park);
		outdiv.append(pre);
		outdiv.append(pre2);

		pre = $('<pre />');
		pre2 = $('<pre />');
		pre.attr('class', 'fw-bolder');
		pre.html('영업시간')
		pre2.html('       ' + data.off_hours);
		outdiv.append(pre);
		outdiv.append(pre2);

		tar.append(outdiv);
		console.log(data);
		/*for (datum of data) {
			makemain(datum, tar);
		}*/
		// console.log(data);
	}
})

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

