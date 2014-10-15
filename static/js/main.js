
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
	interval: 2500,
	wrap: false
});


// SCROLLING EFFECT VIA WAYPOINTS

$('#header-trigger').waypoint(function() {
	$(".header-fixed").toggleClass('fixed animated fadeInDownBig');
});

$('#profile-cover1').waypoint(function() {
	$("img.profile-cover1").addClass('covered animated fadeIn');
	$(".caption1").addClass('covered');
});

$('#profile-cover2').waypoint(function() {
	$("img.profile-cover2").addClass('covered animated fadeIn');
	$(".caption2").addClass('covered');
});

$('#how-to-trigger').waypoint(function() {
	$("#how-to-trigger li").addClass('animated fadeIn ').removeClass('invisible');
});

$('#makes-it-trigger').waypoint(function() {
	$("#makes-it-trigger li").addClass('animated fadeIn ').removeClass('invisible');
});

$('#device-trigger').waypoint(function() {
	$(".devices-container").addClass('device-moved');
});

$('#big-deal-trigger').waypoint(function() {
	$("#big-deal-trigger img.press").addClass('animated fadeInUp ').removeClass('invisible');
});

$('#chart-trigger').waypoint(function() {
	$(".bars").addClass('animated fadeInUp show');
});


$('#tweet-trigger').waypoint(function() {
	$(".tweet-txt").addClass('animated fadeInUp show');
});

$('.more-tailored').waypoint(function() {
	$('.more-tailored .img-pulse').addClass('animated pulse');
}, { offset: '18%' });

$('.how-to-livewire').waypoint(function() {
	$('.how-to-livewire .img-pulse').addClass('animated pulse');
}, { offset: '18%' });

$('.makes-it-easy').waypoint(function() {
	$('.makes-it-easy .img-pulse').addClass('animated pulse');
}, { offset: '18%' });

$('.big-deal').waypoint(function() {
	$('.big-deal .img-pulse').addClass('animated pulse');
}, { offset: '18%' });

$('.people-are-talking').waypoint(function() {
	$('.people-are-talking .img-pulse').addClass('animated pulse');
}, { offset: '18%' });

$('.where-is').waypoint(function() {
	$('.where-is .img-pulse').addClass('animated pulse');
}, { offset: '18%' });



// FIXED HEADER SCROLL EFFECT

$(".header-fixed-container a").click(function(event){
		event.preventDefault();
		var scrollDiv = $(this).attr('href');
		$("html, body").animate({
			scrollTop: $(scrollDiv).position().top
		}, 900);
	});

