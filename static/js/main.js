
// CONTACT INFO

$("#contact-info-btn").click (function(){
	$('.contact-cover').addClass('animated fadeOutDown');
});

// RECOS

$("#show-more-recos").click (function (){
	$(this).toggleClass("hide");
	$(".more-recos").toggleClass("hide").addClass("animated fadeIn");
});