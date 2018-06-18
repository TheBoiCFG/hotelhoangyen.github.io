(function($) {
	$.fn.set_hgt = function(byThis, last){
		
			//Set default target
			byThis = byThis || '.clm';
			last = last || '.las, .clm:last-child';
			
			var that = $(this);
			var arr_pos = [];
			var arr_hgts = [];
				//Get columns height
				that.find(byThis).each(function (index,item) {
					var l_hgt = ($(this).css("box-sizing") == "border-box") ? $(this).outerHeight() : $(this).innerHeight();
					arr_hgts.push(l_hgt);
				});
				//Get position height
				that.find(last).each(function () {
					var l_pos = that.find(byThis).index($(this));
					arr_pos.push(l_pos);
				});
				//If cannot find "last" item, Use The last-child.
				if (arr_pos[arr_pos.length - 1] != arr_hgts.length - 1) arr_pos.push(arr_hgts.length - 1);
				//Get max height
				for(var i = 0; i < arr_pos.length; i++)
				{
						var first = 0;
						//If item is not .clm:first-child
						if(i != 0) { first = arr_pos[i - 1] + 1; }
						//Get array height from start(.clm:first-child & .las + .clm) --> .clm.las
						var l_clm_hgt = arr_hgts.slice(first, arr_pos[i] + 1);
						l_clm_hgt.sort(function(a, b){return b-a});
						//Get average in array
						var sum = 0;
						for (var j = 0; j < l_clm_hgt.length; j++) sum += l_clm_hgt[j];
						var average = sum / l_clm_hgt.length;
						//If only 1 .clm, no need go to {for} ||
						//If average is same 1st value in array, no need go to {for}
						if(l_clm_hgt.length == 1 || l_clm_hgt[0] == average) { first = arr_pos[i] + 1; }
						//Set max height
						for(var j = first; j < arr_pos[i] + 1; j++ )
						{
							$(that.find(byThis)[j]).css({height: l_clm_hgt[0]});
						}
				}
				
	}
	$.fn.reset_hgt = function (byThis){
		byThis = byThis || '.clm';
		var that = $(this);
		that.find(byThis).each(function () {
			$(this).removeAttr("style");
		});
	}
})(jQuery);
