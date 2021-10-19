
$(document).ready(function() {

	let xhtp = new XMLHttpRequest();
	xhtp.open('get', '/minpro/MainServ?cmd=1');
	xhtp.send();
	xhtp.onload = function() {
		let data = JSON.parse(xhtp.responseText);
		let tar = $('#restlist');
		for (datum of data) {
			makemain(datum, tar);
		}
		// console.log(data);
	}
	xhtp1 = new XMLHttpRequest();
	xhtp1.open('get', '/minpro/MainServ?cmd=0');
	xhtp1.send();
	xhtp1.onload = function() {
		let data1 = JSON.parse(xhtp1.responseText);
		for (datum of data1) {
			let tar = $('#cafelist');
			makemain(datum, tar);
		}
		// console.log(data);
	}

})
function makemain(datum, tar) {
	let outdiv = $('<div />');
	let indiv = $('<div />');
	let h2 = $('<h2 />');
	let a = $('<a />');
	let p = $('<p />');
	let p2 = $('<p>' + datum.menu + '</p>');
	let i = $('<i />')
	let img = $('<img />');
	outdiv.attr('class', 'col-lg-4 mb-5 mb-lg-0');
	indiv.attr('class', 'feature bg-primary bg-gradient text-white rounded-3 mb-3');
	h2.attr('class', 'h4 fw-bolder');
	a.attr('class', 'text-decoration-none');
	img.attr({ 'alt': '이미지를 불러오는데 실패했습니다', 'width': '250px' });
	i.attr('class', 'bi bi-collection');
	h2.html(datum.name);
	//p2.html(datum.manu);
	a.attr('href', 'Particularity.html?id=' + datum.id);
	img.attr('src', '../minpro/' + datum.image_loc);
	p.append(img);
	a.append(p);
	indiv.append(i);
	outdiv.append(indiv);
	outdiv.append(h2, a);
	outdiv.append(p2);
	tar.append(outdiv);
}