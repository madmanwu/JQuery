;(function($){
	$.fn.start=function(ppt){
		var moren={
			direction:"left",
			speed:"1000",
			change:"width"
		}
		var set=$.extend({},moren,ppt)
		var timer=null,
			li_w=$("#list li").width(),
			li_num=$("#list li").length,
			li_h=$("#list li").height()
		$("#box").css({"overflow":"hidden"})
		function auto(){
			timer=setInterval(function(){
				$("#list").stop().animate({"marginLeft":"-=1"},0,function(){
					var mov_w=Math.abs(parseInt($("#list").css("marginLeft")))
					if(mov_w>=li_w){
						$("#list li:first").appendTo('#list')
						$("#list").css({"marginLeft":0})
					}
				})
			},set.speed)
		}
		if(set.direction=="left"){
			$("#list").width(li_w*li_num)
			if(parseInt($("#list").css(set.change))<=parseInt($("#box").css(set.change))){
				clearInterval(timer)
			}else{
				auto()
			}
		}else{
			$("#list").width(li_w)
			$("#list").height(li_h*li_num)
			timer=setInterval(function(){
				$("#list").stop().animate({"marginTop":"-=1"},0,function(){
					var mov_h=Math.abs(parseInt($("#list").css("marginTop")))
					if(mov_h>=li_h){
						$("#list li:first").appendTo('#list')
						$("#list").css({"marginTop":0})
					}
				})
			},set.speed)
		}
	}
})(jQuery)