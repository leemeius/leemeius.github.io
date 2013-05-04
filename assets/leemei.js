$(function() {

	$("#disposable-index li img").tooltip({
		placement: "top"
	});

	$("#disposable-carousel").carousel({
		interval: false
	});

	$("#disposable-index li").click( function(e) {
		e.preventDefault;
		var slide = parseInt($(this).attr("data-slide"));

		$("#disposable-carousel").carousel(slide);
	});

});