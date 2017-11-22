$(function(){
	$(".btn").on("click",function(){
			$(".layer").stop().animate({"left":0},1000,function(){
				$(".tit-x img").fadeOut(600);
				$(".btn").fadeOut(600);
			});
	})

	$(".close").on("click",function(){
		$(".layer").stop().animate({"left":-200},600,function(){
			$(".tit-x img").fadeIn(600);
			$(".btn").fadeIn(600);
			$(".sma-layer").stop().animate({"left":-100},600);
		});
	})

	$(".type").on("click","li",function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		$(".layer").width(500);
		$(".sma-layer").stop().animate({"left":200},600);
		var ind=$(this).index();
		$(".pics div").eq(ind).addClass("cur").siblings().removeClass("cur");

	})

	$("#toggle-btn").on("click",function(){
		var btn=$(this).find("span");
		if(btn.hasClass("lx")){
			btn.removeClass().addClass("allow lIcon lx");
			$(".sma-layer").stop().animate({"left":-213},600);
			$(".layer").width(213);
			//btn.removeClass("lx").addClass("rx")
		}
	})

	var h=$(".pics dl").height();
	$(".up-btn").on("click",function(){
		if($(".cur dl").is(":animated"))return false;
		$(".cur dl").first().stop().animate({"margin-top":-h},function(){
			$(this).appendTo(".cur").css({"margin-top":0},600);
		});
	})


	$(".down-btn").on("click",function(){
		if($(".cur dl").is(":animated"))return false;
		$(".cur dl:last").prependTo(".cur").css({"margin-top":-h},600);
		$(".cur dl:first").stop().animate({"margin-top":0})
	})

























})