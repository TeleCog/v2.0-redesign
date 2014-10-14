
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
	$(".header-fixed").toggleClass('fixed animated fadeInDownBig');
});

$('#profile-cover1').waypoint(function() {
	$("img.profile-cover1").addClass('covered animated fadeInUp');
	$(".caption1").addClass('covered');
});

$('#profile-cover2').waypoint(function() {
	$("img.profile-cover2").addClass('covered animated fadeInUp');
	$(".caption2").addClass('covered');
});

$('#device-trigger').waypoint(function() {
	$(".devices-container").addClass('device-moved');
});

$('#tweet-trigger').waypoint(function() {
	$(".tweet-txt").addClass('animated fadeInUp show');
});

$('#chart-trigger').waypoint(function() {
	$(".bars").addClass('animated fadeInUp show');
});


// FIXED HEADER SCROLL EFFECT

$(".header-fixed-container a").click(function(event){
		event.preventDefault();
		var scrollDiv = $(this).attr('href');
		$("html, body").animate({
			scrollTop: $(scrollDiv).position().top
		}, 900);
	});

