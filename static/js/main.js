
// CONTACT INFO

$("#contact-info-btn").click (function(){
	$('.contact-cover').addClass('animated fadeOutDown');
});

// RECOS

$("#show-more-recos").click (function (){
	$(this).toggleClass("hide");
	$(".more-recos").toggleClass("hide").addClass("animated fadeIn");
});

// CAROUSEL

$('.carousel').carousel({
	interval: 3500
});


// SCROLLING EFFECT VIA WAYPOINTS

$('#header-trigger').waypoint(function() {
	console.log('test');
	$(".header-fixed").toggleClass('fixed animated fadeInDownBig');
});
