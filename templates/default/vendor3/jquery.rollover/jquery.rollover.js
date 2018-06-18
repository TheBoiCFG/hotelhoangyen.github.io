$(document).ready(function () {
		if(!$.support.opacity)
		{
			$(".ro").each(function(){
				if($(this).attr('src').indexOf('.png') != -1) {
					$(this).css({
							'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
							$(this).attr('src') +
							'", sizingMethod="scale");'
					});
				}
			});
			$(".ro").hover(function () {
				$(this).parent().css({"display":"block","opacity":"0.5"});
			},function(){
				$(this).parent().removeAttr("style");
			});
		}
		else
		{
			$(".ro").hover(function () {
				$(this).fadeTo(100,0.6);
			},function(){
				$(this).fadeTo(50, 1.0);
			});
		}
});