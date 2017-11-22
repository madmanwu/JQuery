;(function($){
	$.fn.start=function(){
		/*var pop={

		}
		var set=$.extend({},pop,ppt)
		var chec=$(this)*/
		$("ul").on("click","li",function(i){
			$(this).remove()
		})
	}
})(jQuery)