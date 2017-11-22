;(function($){
	$.fn.start=function(ppt){
		var pop={
		}
		var set=$.extend({},pop,ppt)
		$("#tip").on("keyup",function(){
				var vals=$(this).val(),
					str=""
				if($.trim(vals)!=""){
					$.each(data,function(i,val){
						$.each(val.name,function(i,vall){
							if(val.name[i].indexOf(vals)!=-1){
								str+="<li>"+val.name[i]+"</li>";
								return false
							}
						})
					})
					$("#list").html(str)
				}else{
					$("#list").empty()
				}
		})
	}
})(jQuery)