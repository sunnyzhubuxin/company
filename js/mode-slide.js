(function($){
	var _col = $(".mode-col");
	var _colD = $(".mode-detail");
	var _colP = $(".mode-detail-content");
	var len = _col.length;
	var timer;
	
	function modeSlide(i) {
		var idx = i ? i : 0;
		timer = setInterval(function(){
			if (idx < len-1) {
				idx++
			} else {
				idx = 0
			}
			_col.eq(idx).addClass("mode-on").siblings().removeClass("mode-on")
			_colP.eq(idx).show().siblings().hide();
			_colD.css({"backgroundImage": "url(images/pingtai" + idx +".png)"})
		},2000)
	}

	_col.on("mouseenter",function(){
		clearInterval(timer)
		var _idx = $(this).index()
		$(this).addClass("mode-on").siblings().removeClass("mode-on")
		_colP.eq(_idx).show().siblings().hide()
		_colD.css({"backgroundImage": "url(images/pingtai" + _idx +".png)"})
	}).on("mouseleave",function(){
		var _idx = $(this).index()
		modeSlide(_idx)
	})

	
	_colD.on("mouseenter",function(){
		clearInterval(timer)
	}).on("mouseleave",function(){
		var _idx = $(".mode-on").index()
		modeSlide(_idx)
	})
	
	$(function(){
		modeSlide()
	})

	
	
}(jQuery))
