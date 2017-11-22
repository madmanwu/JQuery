$(function(){
	//点击数字 点 时
	$(".num1").on("click",function(){
		var cur = $(this).val();
		var bval = $("#bottom").text()
		if($("#bottom").text()=="0"){
			if(cur == "."){
				$("#bottom").append(cur);
			}else{
				$("#bottom").text(cur);
			}
		}else if(cur=="."){
			if(bval.indexOf(".")!=-1){
				return false;
			}else{
				$("#bottom").append(cur);
			}
		}else{
			$("#bottom").append(cur);
		}
	});
	//点击运算符时
	$(".upNum").on("click",function(){
		var num = $("#bottom").text();
		var cur = $(this).val();
		if($(".num").text().length>0 && $(".countSize").text().length>0 && num.length>0){
			var a1 = $(".num").text();
			var res = sum[$(".countSize").text()](a1,num);
			$(".num").text(res);
			$(".countSize").text(cur);
			$("#bottom").text("");
		}else{
			if(!$(".countSize").text().length>0){
				var creat = "<span class='num'>"+num+"</span><span class='countSize'>"+cur+"</span>"
				$("#top_1").html(creat);
				$("#bottom").text("");
			}
		}
		
	});
	$(".equal").on("click",function(){
		var a1 = $(".num").text();
		var a2 = $("#bottom").text();
		var icon = $(".countSize").text();
		$("#bottom").text(sum[icon](a1,a2));
		$("#top_1").text("");
	});
	$(".empty").on("click",function(){
		$("#top_1").text("");
		$("#bottom").text("0");
	})
	var sum = {
		"+":function(a,b){return a*1 + b*1;},
		"-":function(a,b){return a-b;},
		"*":function(a,b){return a*b;},
		"/":function(a,b){return a/b;}
	}
})