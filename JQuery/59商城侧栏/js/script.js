$(document).ready(function(){


	$(".btn").on("click",function(){
		$(".layer").stop().animate({"left":0},600,function(){
			$(".tit-x img").fadeOut(600);
			$(".btn").fadeOut(600);
			$(".layer").width(200);
		});
	});

	$(".close").on("click",function(){
		$(".layer").stop().animate({"left":-200},600,function(){
			$(".tit-x img").fadeIn(600);
			$(".btn").fadeIn(600);
			$(".layer").width(200);
		});

	});


	$(".type").delegate("li","click",function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		$(".layer").width(500);
		$(".sma-layer").stop().animate({"left":200},600);
		var ind=$(this).index();
		$(".pics div").eq(ind).addClass("cur").siblings().removeClass("cur");
	});

	$(".toggle-btn").on("click",function(){
		var  btn=$(this).children("span");

		if(btn.hasClass("lx")){
			btn.removeClass().addClass("allow rIcon rx");
			$(".smar").stop().animate({"left":-287},600,function(){
				$(".layer").width(213);
			});
		}else{
			btn.removeClass().addClass("allow lIcon lx");
			$(".smar").stop().animate({"left":13},600);
			$(".layer").width(500);
		}
	});

	var  h=$(".pic-list dl").outerHeight();
	var  lineH=100;

	$(".up-btn").on("click",function(){
		$(".cur dl:first").stop().animate({"margin-top":-h},function(){
			$(this).appendTo(".cur").css("margin-top",0);
		});

		if($("#notice").position().top<=0){
			$("#notice").stop().animate({"top":400})
		}else{
			$("#notice").stop().animate({"top":"-="+lineH});
		}
		
	});

	$(".down-btn").on("click",function(){
		$(".cur dl:last").prependTo(".cur").css("margin-top",-h);
		$(".cur dl:first").stop().animate({"margin-top":0});
		if($("#notice").position().top==400){
			$("#notice").stop().animate({"top":0})
		}else{
			$("#notice").stop().animate({"top":"+="+lineH});
		}
	});

	

















































































































	 /*$(".btn").on("click",function(){
	 	$(".layer").stop().animate({"left":0},600,function(){
	 		$(".btn").fadeOut(600);
	 		$(".tit-x img").fadeOut(600);
	 		$(this).width(200);
	 	})
	 });

	 $(".close").on("click",function(){
	 	$(".layer").stop().animate({"left":-200},600,function(){
	 		$(".btn").fadeIn(600);
	 		$(".tit-x img").fadeIn(600);
	 		$(this).width(200);
	 	});
	 });

	 $(".type").on("click","li",function(){
	 	$(".layer").width(500);
	 	$(this).addClass("hover").siblings().removeClass("hover");
	 	$(".sma-layer").stop().animate({"left":200},600)
	 	var index=$(this).index();
	 	$(".pics div").eq(index).addClass("cur").siblings().removeClass("cur");
	 });

	 $("#toggle-btn").on("click",function(){
	 	var  spbtn=$(this).children("span");
	 	if(spbtn.hasClass("lx")){
	 	  spbtn.removeClass().addClass("allow rIcon rx");
	 	  $(".smar").stop().animate({"left":-287},function(){
	 	  	$(".layer").width(213);
	 	  })
	 	}else{
	 		spbtn.removeClass().addClass("allow lIcon lx");
	 		$(".smar").stop().animate({"left":13});
	 		$(".layer").width(500);
	 	}
	 });

	 var  h=$(".pics dl").outerHeight();
	 var  linh=100;
	 $(".up-btn").on("click",function(){
	 	$(".cur dl:first").stop().animate({"margin-top":-h},600,function(){
	 		$(this).appendTo(".cur").css("margin-top",0);
	 	});
	 	if($("#notice").is(":animated"))return false;
	 	if($("#notice").position().top==0){
	 		$("#notice").stop().animate({"top":400});
	 	}else{
	 		$("#notice").stop().animate({"top":"-="+linh});
	 	}
	 });
	 $(".down-btn").on("click",function(){
	 	$(".cur>dl:last").prependTo(".cur").css("margin-top",-h);
	 	$(".cur>dl:first").stop().animate({"margin-top":0},600);
	 	if($("#notice").is(":animated"))return false;
	 	if($("#notice").position().top==400){
	 		$("#notice").stop().animate({"top":0});
	 	}else{
	 		$("#notice").stop().animate({"top":"+="+linh});
	 	}
	 });*/
})