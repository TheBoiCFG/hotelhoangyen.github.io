/*--------------------
CALL FUNCTION
--------------------*/
$(document).ready(function () {
	int();
	// When window resize
	$(window).bind('resize', function () { int(); });
	
	var lv_accessed = set_cookie('accessed-template', '/');
	/* if(isCookieToAccess) { If needs something do here } */
		
	// Set open zoom (image)
	$('.open-zoom').on('mousedown', function (e) { open_zoom(this); });
	
	// Sset open modal (ajax)
	$('.open-modal-ajax').on('mousedown', function(e) { open_modal_ajax(this); });
	
	// Set open window
	$('.open-window').on('mousedown', function (e) { e.preventDefault(); open_window(this); });
	
	// Set totop
	$().UItoTop({ easingType: 'easeOutQuart' });

	// Set tooltip, propover
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();
	
	//
	// Set link at content separate.
	$('[data-link]').bind('click', function(e) {
		var location = $(this).attr('data-link');
		window.location.href = location;
		return false;
	});


		// Set image slider
	$('.slick').slick({
		infinite: true,
		speed: 300,
		adaptiveHeight: true,
		asNavFor: '.l-list-nav',
		dots: false,
		prevArrow: false,
		nextArrow: false,
		autoplay: true
	});

	$('.l-list-nav').slick({
		slidesToShow: 4,
		asNavFor: '.slick',
		focusOnSelect: true,
		autoplay: true
	});
});

// After load & show all content.
$(window).load(function () { int(); });