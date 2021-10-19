/**
 * 
 */
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

})
