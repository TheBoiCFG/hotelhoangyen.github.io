/*--------------------
VARIABLES
--------------------*/
//VARIABLES BASIC
var gv_top_flg = ($('#top-page').size() > 0) ? true : false,
		gv_width = $(window).width(),
		gv_height = $(window).height();

/*--------------------
FUNCTIONS
--------------------*/

// INITIALIZE
function int () {
	gv_top_flg = ($('#top-page').size() > 0) ? true : false;
	gv_width = $(window).width();
	gv_height = $(window).height();
	
	// Set same height by line for .cnt-spr class
	if (gv_width > 767) call_clms_hgt('.lst-cnt', 'div > dl', 'div.las > dl');
	else $('.lst-cnt dl').removeAttr('style');
}

// OPEN ZOOM (IMAGE)
function open_zoom (byThis) {
	var parent = $(byThis).parents('.gallery');
	if($(parent).size() > 0) {
		$(parent).magnificPopup({
			delegate: 'a',
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: { verticalFit: true },
			gallery: { enabled: true }
		});
	} else {
		$(byThis).magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: { verticalFit: true }
		});
	}
}

function open_modal_ajax (byThis) {
	$(byThis).magnificPopup({
		type: 'ajax',
		closeBtnInside: false,
		ajax: { tError: '読み込みエラーが発生しました。ページを再読み込みしてください。' }
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
}

// OPEN WINDOW
function open_window (byThis) {
		var l_width = 0,
				l_height = 0;
		
		if($(byThis).attr('data-size')) l_width = $(byThis).attr('data-size').split(',')[0].replace(/\s+/g, "");
		if(gv_width < l_width) l_width = gv_width;
		else if(l_width == 'null') l_width = gv_width;
		
		if($(byThis).attr('data-size')) l_height = $(byThis).attr('data-size').split(',')[1].replace(/\s+/g, "");
		if(gv_height < l_height) l_height = gv_height;
		else if(l_height == 'null') l_height = gv_height;
		
		var href = $(byThis).attr('href');
		window.open(href, '', 'width = ' + l_width + ',height = ' + l_height + ',resizable=yes,scrollbars=yes');
}

// SET HEIGHT
function call_clms_hgt (obj, target, last) {
	if($(obj).size() > 0) {
		gv_width = $(window).width();
		$(obj).reset_hgt(target);
		if(gv_width > 767) { $(obj).set_hgt(target, last);}
	}
}

// SET & CREATE & READ COOKIE
function set_cookie (name, url_path) {
	var result = false;
	url_path = url_path || '/';
	if(!$.cookie(name)) {
		$.cookie(name, true, {path: url_path});
		result = true;
	}
	return result;
}