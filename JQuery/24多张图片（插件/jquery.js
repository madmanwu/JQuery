;(function($){
	$.fn.start=function(ppt){
		var pop={
			count:"3",
			timer:"1000"
		}
		var set=$.extend({},pop,ppt)
		var imgw=$("#list li").width(),
			timer=null;
		$("#left").on("click",function(){
			if($("#list").is(":animated")){
				return false
			}
			$("#list").css({"margin-left":-imgw*set.count})
			$("#list li").slice(-set.count).prependTo("#list")
			$("#list").stop().animate({"margin-left":0},800)
		})
		$("#right").on("click",function(){
			copy()
		})
		function copy(){
			$("#list").stop().animate({"margin-left":-imgw*set.count},800,function(){
				$("#list li").slice(0,set.count).appendTo("#list")
				$("#list").css({"margin-left":0})
			})
		}
		$("#box").hover(function(){
			clearInterval(timer)
		},function(){
			timer=setInterval(function(){
				copy()
			},set.timer)
		}).trigger("mouseleave")
	}
})(jQuery)