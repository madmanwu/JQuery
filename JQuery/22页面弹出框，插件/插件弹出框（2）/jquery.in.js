;(function($){
	$.start=function(ppt){
		var pop={
			title:"你确定要退出吗？",
			arr:["确定","取消"]
		}
		var set=$.extend({},pop,ppt)
		var str=""
		$.each(set.arr,function(i){
			str+="<span>"+set.arr[i]+"</span>"
		})
		var divs=$("<div class='tip'>"+"<p>"+set.title+"</p>"+str+"</div>")
		var zhezhao="<div id='zhezhao'></div>"
		$(zhezhao).appendTo("body")
		divs.appendTo($("#zhezhao"))
		$(window).on("scroll",function(){
			var wH=$(this).scrollTop()
			$("#zhezhao").css({"top":wH})
		})
		$(window).resize(function(){
			var wH=$(this).scrollTop()
			$("#zhezhao").css({"top":wH})
		})
		$(".tip").on("click","span",function(){
			//if($(this).index()==1){
				$(this).parents("#zhezhao").remove()
			//}
		})
	}
})(jQuery)