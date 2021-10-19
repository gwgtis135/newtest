$(document).ready(function() {
	let cafebtn = $('#cafebtn')
	let cafe = $('#cafe')
	$(cafebtn).click(function() {
		if ($(cafebtn).html() === "Cafe") {
			$(cafebtn).html("Restaurant")
		} else {
			$(cafebtn).html("Cafe")
		}
		$(cafe).toggleClass("show");
		$(rest).toggleClass("show");
	})
})