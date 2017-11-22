;(function($){
	$.fn.start=function(ppt){
		var pop={

		}
		var set=$.extend({},pop,ppt)
		$(this).on("click",function(){
				if($(".box input:checked").length==0){
					var newDiv=$("<div class='move'></div>"),
					str=$("<p>"+"你确定要退出吗"+"</p><button id='sure'>"+"确定"+"</button><button id='mohu'>"+"取消"+"</button>")
					str.appendTo(newDiv)
					newDiv.appendTo("body")
					$("#sure").click(function(){
						$(this).parent().remove()
					})	
				}
		})
		$(document).on("mousemove",function(e){
				var l=e.pageX-$(".move").width()/2,
					t=e.pageY-$(".move").height()/2
					maxl=$(window).width()-$(".move").width(),
					maxt=$(window).height()-$(".move").height()
				if(l<0){
					l=0
				}else if(l>maxl){
					l=maxl
				}
				if(t<0){
					t=0
				}else if(t>maxt){
					t=maxt
				}
				$(".move").css({"left":l,"top":t})
		}
})(jQuery)