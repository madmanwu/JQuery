(function($){

	$.fn.lunbo=function(opt){
		//默认
		var deft={
			autoplay:true,							//是否自动播放
			count:1,								//每次滚动的个数
			btn:['.left','.right'],					//按钮
			type:'click',							//事件类型
			target:'.list',							//滚动目标
			speed:1000								//定时器间隔时间
		}

		//传入的值替换默认的值
		var set=$.extend({},deft,opt)

		//一张图片的宽度
		var W=$(set.target).children('li').outerWidth(true)

		//指向绑定的元素
		var that=$(this);

		//自动轮播
		function autop(){
			timer=setInterval(function(){
				$(set.target).stop().animate({marginLeft:-set.count*W},300,function(){
					$(this).children('li').slice(0,set.count).appendTo($(this))
					$(this).css('marginLeft',0)
				})
			},set.speed)
		}

		//如果set.autoplay为true时，定时器开启
		if(set.autoplay){
			var timer=null;
			autop();
			that.hover(function(){
				clearInterval(timer)
			},function(){
				autop();
			})
		}

		//点击右按钮
		$(set.btn[1]).on(set.type,function(){
			if($(set.target).is(':animated'))return false;
			$(set.target).stop().animate({marginLeft:-set.count*W},300,function(){
				$(this).children('li').slice(0,set.count).appendTo($(this))
				$(this).css('marginLeft',0)
			})
		})

		//点击左按钮
		$(set.btn[0]).on(set.type,function(){
			$(set.target).children('li').slice(-set.count).prependTo($(set.target))
			$(set.target).css('marginLeft',-set.count*W)
			$(set.target).stop().animate({marginLeft:0},300)
		})


	}

























}(jQuery))