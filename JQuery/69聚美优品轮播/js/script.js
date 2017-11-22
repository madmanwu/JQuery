$(function(){
	
	//	初始化变量
		var list=$('#box ul li'),index=0,timer;
			auto();   tab(0);//先调用一次切换，传参0；显示首张图
	
	//	自动轮播，参数为1 代表递增。参数为-1 代表递减
	function auto (){clearInterval(timer);timer=setInterval(function(){tab(1)},5000)}
	
	//	移入的时候：停止定时器  按钮显示出来		
	$('#box').hover(function(){clearInterval(timer);$('.btn').css('opacity','0.8')},
		/*  移出：调用定时器，按钮透明 */function(){auto();$('.btn').css('opacity','0.3')});
		
	//	上一张
	$('#left').on('click',function(){tab(-1)});
		
	//	下一张
	$('#right').on('click',function(){tab(1)});
		
	//	先把index初始为零，传参为点击的图片的下标。
	$('#box ol li').on('click',function(){index=0;tab($(this).index())});
		
		
		function tab(n){
					index+=n;
		//	小图片都初始化left值
				list.find('img:nth-child(1)').hide().css('left','-100px');
				list.find('img:nth-child(2)').hide().css('left','-760px');
			
//	如果下标大于  length index=0；否则index小于0；如果小于index=length-1
		index>= list.length? index=0 : index<0 ? index=list.length-1:false;
		
		//	隐藏所有图片，当前li淡入，第一张图淡入完成后，第二张图在淡入
			list.hide().eq(index).fadeIn().find('img').eq(0).fadeIn().animate({'left':0},400,function(){
				$(this).next().show().animate({'left':0},500)
			})
		
		//	焦点
			$('ol li').removeClass('on').eq(index).addClass('on')
		}
			
		
})