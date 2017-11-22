$(function(){
	$('.box').hide();
	var next=$('.next'),
		prev=$('.prev'),
		over=$('.over');
	//点击开始
	$('#starBtn').on('click',function(){
		$(this).parent().hide().next().show();
	})
	//点击上一题
	prev.on('click',function(){
		$(this).parent().hide().prev().show();
	})
	//点击P添加背景颜色
	$('.box p').on('click',function(){
		$(this).addClass('bg').siblings().removeClass('bg');
		$(this).parents(".box").children('.next').show();
	})

	
	next.on('click',function(){
		$(this).parent().hide().next().show();
	})

	arr=['JavaScript库','桌布','俄罗斯','38万公里'];

	over.on('click',function(){
		$(this).parent().hide().next().show();
		t=0;
		for(var i=0;i<arr.length;i++){
			if($('.bg').eq(i).text()==arr[i]){
				t+=25;
				$('#lastbox').find('b').eq(i).addClass('green').find('em').text('√');
				$('#lastbox').find('h3').text("您本月考试成绩是"+t+"分");
			}else{
				$('#lastbox').find('b').eq(i).addClass('red').find('em').text('×');
				$('#lastbox').find('h3').text("您本月考试成绩是"+t+"分");
			}
			
		}
	});

	$(".curb b").hover(function(e){
		var  ind=$(this).index();
		var  msg=$(".box").eq(ind).children("div").html();
		var  _div=$("<div class='movemsg'>"+msg+"</div>").appendTo("body");
		_div.css({"left":e.pageX,"top":e.pageY})
	},function(){
		$(".movemsg").remove();
	});


})