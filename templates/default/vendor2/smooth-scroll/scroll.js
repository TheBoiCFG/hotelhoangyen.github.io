(function($){
	$.fn.scrollAnchors = function(options) {
		var settings = { duration: 500, easing: "swing" };
		if (options) $.extend(settings,options);
		return $(this).click(function(event) {
			event.preventDefault();
			// Get target object (#hash) offset
			var target_offset = $("a[name="+this.hash.slice(1)+"]").offset();
			
			if (target_offset == undefined) target_offset = $("#"+this.hash.slice(1)).offset();
			// If no find target && same current page, cancel this function.
			if (target_offset == undefined || target_offset.top == undefined) {
				if ($(this).attr('href').charAt(0) == '#') {
					// If same page but unable to find ID or a[name] by target hash.
					$('html, body').animate({scrollTop: 0}, settings.duration, settings.easing);
					return false;
				} else {
					// If different page with hash.
					window.location.href = event.target.href;
				}
			}
			var hdr_position = $('#hdr').css('position');
			var positive = (hdr_position == 'fixed') ? $('#hdr').height() : 0;
			// Go to target. 
			$('html, body').animate({scrollTop:target_offset.top - positive}, settings.duration, settings.easing);
		});
	}
})(jQuery);

$(document).ready( function() { $("a[href*=#]").scrollAnchors(); });