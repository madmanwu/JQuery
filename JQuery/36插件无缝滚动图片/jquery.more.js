;(function(){
	$.fn.start=function(ppt){
		var pop={
			type:"click",//事件类型
			direction:"left",//运动方向
			time:"600",//一张图片移动的时间
			prev:"#left",//左按钮
			nxt:"#right",//右按钮
			timer:"1000"//定时器时间
		}
		var set=$.extend({},pop,ppt)
		var timer=null,
			imgW=$("#list li").width(),
			imgH=$("#list li").height(),
			len=$("#list li").length,
			index=0;
		//左按钮点击切换
		$(set.prev).on(set.type,function(){
			if($("#list").is(":animated")) return false
			index--;
			if(index<0){
				index=len-1
			}
			if(set.direction=="left"){
				$("#list").css({"margin-left":-imgW})
				$("#list li").slice(-1).prependTo('#list')
				$("#list").stop().animate({"margin-left":0},set.time)
				$("#word li").eq(index).addClass('on').siblings().removeClass('on')
			}else{
				$("#list").css({"width":imgW,"height":imgH*len})
				$("#list").css({"margin-top":-imgH})
				$("#list li").slice(-1).prependTo('#list')
				$("#list").stop().animate({"margin-top":0},set.time)
				$("#word li").eq(index).addClass('on').siblings().removeClass('on')
			}
		})
		//右按钮点击切换
		$(set.nxt).on(set.type,function(){
			copy()
		})
		function copy(){
			if($("#list").is(":animated")) return false
			index++;
			if(index>len-1){
				index=0
			}
			if(set.direction=="left"){
				$("#list").stop().animate({"margin-left":-imgW},set.time,function(){
					$("#list li").slice(0,1).appendTo('#list')
					$("#list").css({"margin-left":0})
				})
				$("#word li").eq(index).addClass('on').siblings().removeClass('on')
			}else{
				$("#list").css({"width":imgW,"height":imgH*len})
				$("#list").stop().animate({"margin-top":-imgH},set.time,function(){
					$("#list li").slice(0,1).appendTo('#list')
					$("#list").css({"margin-top":0})
				})
				$("#word li").eq(index).addClass('on').siblings().removeClass('on')
			}
		}
		$("#box").hover(function(){
			clearInterval(timer)
		},function(){
			timer=setInterval(function(){
				copy()
			},set.timer)
		}).trigger("mouseleave")
		$("#word").on("click","li",function(){
			var ind=$(this).index()
			$("#list").stop().animate({"margin-left":-imgW*ind},set.time)
			$(this).addClass("on").siblings().removeClass("on")
		})
	}
})(jQuery)