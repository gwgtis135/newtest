window.addEventListener('DOMContentLoaded', () => {
	let scrollPos = 0;
	const mainNav = document.getElementById('mainNav');
	const headerHeight = mainNav.clientHeight;
	window.addEventListener('scroll', function() {
		const currentTop = document.body.getBoundingClientRect().top * -1;
		if (currentTop < scrollPos) {
			// Scrolling Up
			if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
				mainNav.classList.add('is-visible');
			} else {
				console.log(123);
				mainNav.classList.remove('is-visible', 'is-fixed');
			}
		} else {
			// Scrolling Down
			mainNav.classList.remove(['is-visible']);
			if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
				mainNav.classList.add('is-fixed');
			}
		}
		scrollPos = currentTop;
	});
})

$(document).ready(function() {

	let ul = $('#navbarResponsive>ul');
	ul.append('<li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" id="cafebtn">Cafe</a></li>')
	if ($.cookie('user_id')) {
		ul.append('<li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" id="signoutbtn">Sign Out</a></li>', '<li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4 mypagebtn" id="mypagebtn">my page</a></li>')
	} else {
		ul.append('<li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" id="signupbtn">Sign Up</a></li>', '<li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" id="signinbtn">Sign In</a></li>')
	}
	//     <div class="col-lg-4 mb-5 mb-lg-0">
	//     <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
	//             class="bi bi-collection"></i></div>
	//     <h2 class="h4 fw-bolder">한옥집</h2>
	//     <a class="text-decoration-none" href="Particularity.html">
	//         <p>
	//             <img src="../WebContent/assets/img/한옥집.jpg" alt="이미지를 불러오는데 실패했습니다." width="250px">
	//         </p>
	//     </a>
	//     김치찜, 제육볶음, 김치찌개
	// </div>

	let xhtp = new XMLHttpRequest();
	xhtp.open('get', '/minpro/MainServ');
	xhtp.send();
	xhtp.onload = function() {
		let data = JSON.parse(xhtp.responseText);
		let tar = $('#restlist');
		for (datum of data) {
			console.log(datum.name);
			let outdiv = $('<div />');
			let indiv = $('<div />');
			let h2 = $('<h2 />');
			let a = $('<a />');
			let p = $('<p />');
			let img = $('<img />');
			outdiv.attr('class', 'col-lg-4 mb-5 mb-lg-0');
			indiv.attr('class', 'feature bg-primary bg-gradient text-white rounded-3 mb-3');
			h2.attr('class', 'h4 fw-bolder');
			a.attr('class', 'text-decoration-none');
			img.attr({ 'alt': '이미지를 불러오는데 실패했습니다', 'width': '250px' });
			h2.html(datum.name);
			a.attr('href', 'Paricularity.html');
			img.attr('src', datum.image_loc);
			p.append(img);
			a.append(p);
			indiv.append(h2, a);
			outdiv.append(indiv);
			tar.append(outdiv);
		}
		// console.log(data);
	}

	// xhtp.onload = function () { //서버로 부터 데이터를 가져 올 때 실행
	//     let data = JSON.parse(xhtp.responseText);
	//     console.log(data);

	//     for (let datum of data) {
	//         let list = document.querySelector('section>div>div');
	//         list.appendChild(makeProdutDiv(datum));
	//     }
	//     //form>button>span : innerHTML
	//     let cart = document.querySelector('form>button>span');
	//     let cnt = cart.innerHTML;
	//     console.log(cnt);

	//     // a 태그 선택 후 a 태그에 이벤트 등록.
	//     let allA = document.querySelectorAll('div.text-center>a');
	//     for (let a of allA) {
	//         a.addEventListener('click', showCart);
	//     }

	//     function showCart(e) {
	//         console.log(this, e);
	//         e.preventDefault(); //원래 기능 차단.

	//         //form>button>span > innerHTML
	//         let cart = document.querySelector('form>button>span');
	//         let cnt = cart.innerHTML;
	//         cnt = parseInt(cnt);

	//         cart.innerHTML = ++cnt;
	//     }
	// } //onload
	// MainServ


	// function makeProdutDiv(prod) { //상품 하나를 받아서 db가 넘어 오게 만들어 준다. 
	//     let outDiv = document.createElement('div');
	//     outDiv.className = "col mb-5";

	//     let innerDiv = document.createElement('div');
	//     innerDiv.className = "card h-100";

	//     outDiv.appendChild(innerDiv); //부모-자식

	//     //하위 요소들을 innerDiv 에 달아주는...
	//     //(1)
	//     let divBadge = document.createElement('div');
	//     divBadge.className = "badge bg-dark text-white position-absolute";
	//     divBadge.style.top = "0.5rem";
	//     divBadge.style.right = "0.5rem";
	//     divBadge.innerHTML = "badge";
	//     //(2)
	//     let img = document.createElement('img');
	//     img.className = "card-img-top";
	//     img.setAttribute('src', '../images/' + prod.prodImage);
	//     //(3)
	//     let itemDiv = document.createElement('div');
	//     itemDiv.className = "card-body p-4 ";

	//     let itemInner = document.createElement('div');
	//     itemInner.className = "text-center";

	//     let h5 = document.createElement('h5');
	//     h5.className = "fw-bolder";
	//     h5.innerHTML = prod.prodName;
	//     let likeIt = document.createElement('div');
	//     likeIt.className = "d-flex justify-content-center small text-warning mb-2";

	//     let span = document.createElement('span');
	//     span.className = "text-muted text-decoration-line-through";
	//     span.innerHTML = getCurrency(prod.originPrice);

	//     let text = document.createTextNode(getCurrency(prod.offPrice));


	//     /* //star
	//     let styleDiv = document.createElement('div');
	//     styleDiv.className = "d-flex justify-content-center small text-warning mb-2";

	//     let starrDiv = document.createElement('div');
	//     starrDiv.className =  "bi-star-fill"; */

	//     //평점그려주는부분
	//     let point = parseFloat(prod.likeIt); // 실수 타입으로 변환 결과를 가져오기.
	//     let digitValue = Math.floor(point); // 소수부분과 정수부분을 분리해서 계산.
	//     let halfValue = point - digitValue;

	//     console.log(digitValue + halfValue);

	//     for (let i = 0; i < digitValue; i++) {
	//         let starDiv = document.createElement('div');
	//         starDiv.className = "bi-star-fill";
	//         likeIt.appendChild(starDiv);
	//     }
	//     if (halfValue) {
	//         let starDiv = document.createElement('div');
	//         starDiv.className = "bi-star-half";
	//         likeIt.appendChild(starDiv);
	//     }


	//     itemInner.appendChild(h5);
	//     itemInner.appendChild(likeIt);
	//     console.log(likeIt);
	//     itemInner.appendChild(span);
	//     itemInner.appendChild(text);
	//     itemDiv.appendChild(itemInner);


	//     //(4)
	//     let cartDiv = document.createElement('div');
	//     cartDiv.className = "card-footer p-4 pt-0 border-top-0 bg-transparent";
	//     cartDiv.innerHTML =
	//         '<div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>';


	//     innerDiv.appendChild(divBadge);
	//     innerDiv.appendChild(img);
	//     innerDiv.appendChild(itemDiv);
	//     innerDiv.appendChild(cartDiv);


	//     return outDiv;
	// }


})