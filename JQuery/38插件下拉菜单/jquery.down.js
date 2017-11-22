;(function($){
	$.fn.start=function(ppt){
		var pop={
			arr:["张三","李四","王五","赵四","慕容石","天天"]
		}
		var set=$.extend({},pop,ppt)
		$("#tip").on("keyup",function(){
			var vall=$(this).val(),
				str="";
			if($.trim(vall)!=""){
				$.each(set.arr,function(i,vals){
					if(set.arr[i].indexOf(vall)!=-1){
						str+="<li>"+set.arr[i]+"</li>";
						return false
					}
				})
				$("#list").html(str)
			}else{
				$("#list").empty()
			}
			
		})
	}
})(jQuery)