;(function($){
	$.fn.start=function(ppt){
		var pop={

		}
		var set=$.extend({},pop,ppt)
		var timer=null,
			imgH=$("#pic li").innerHeight(),
			len=$("#pic li").length;
		function auto(){
			var index=0
			timer=setInterval(function(){
				if($("#pic").is(":animated")) return false
				index++;
				if(index>len-1){
					index=0
				}
				$("#pic li").eq(index).fadeIn(800).siblings().fadeOut(600)
				$("#small li").eq(index).addClass('on').siblings().removeClass('on')
			},1000)
		}
		auto()
		$("#box").hover(function(){
			clearInterval(timer)
		},function(){
			auto()
		})
		$("#small").on("click","li",function(){
			var ind=$(this).index()
			$(this).addClass('on').siblings().removeClass('on')
			$("#pic li").eq(ind).fadeIn(800).siblings().fadeOut(600)
		})
	}
})(jQuery)