;(function($){
	$.fn.start=function(ppt){
		var pop={

		}
		var set=$.extend({},pop,ppt)
		var imgW=$("#small li").outerWidth(true),
			len=$("#small li").length,
			liW=$("#list li").outerWidth(true),
			index;
		var timer=null;
		$("#left").on("click",function(){
			if($("#small").is(":animated")){
				return false
			}
			$("#small").css({"margin-left":-imgW})
			$("#small li").slice(-1).prependTo('#small')
			$("#small").stop().animate({"margin-left":0},800)
			$("#list").css({"margin-left":-liW})
			$("#list li").slice(-1).prependTo('#list')
			$("#list").stop().animate({"margin-left":0},800)
			$("#small li:eq(0)").addClass('on').siblings().removeClass('on')
		})
		$("#right").on("click",function(){
			if($("#small").is(":animated")){
				return false
			}
			$("#small").stop().animate({"margin-left":-imgW},800,function(){
				$("#small li").slice(0,1).appendTo('#small')
				$("#small").css({"margin-left":0})
			})
			$("#list").stop().animate({"margin-left":-liW},800,function(){
				$("#list li").slice(0,1).appendTo('#list')
				$("#list").css({"margin-left":0})
			})
			$("#small li:eq(1)").addClass('on').siblings().removeClass('on')
		})
		$("#small").on("click","li",function(){
			index=$(this).index()
			$(this).addClass('on').siblings().removeClass('on')
			$("#list li").eq(index).show().siblings().hide()
		})
		function copy(){
			$("#small").css({"margin-left":-imgW})
			$("#small li").slice(-1).prependTo('#small')
			$("#small").stop().animate({"margin-left":0},800)
			$("#list").css({"margin-left":-liW})
			$("#list li").slice(-1).prependTo('#list')
			$("#list").stop().animate({"margin-left":0},800)
			$("#small li:eq(0)").addClass('on').siblings().removeClass('on')
		}
		$("#box").hover(function(){
			clearInterval(timer)
		},function(){
			timer=setInterval(function(){
				copy()
			},1000)
		}).trigger("mouseleave")
	}
})(jQuery)