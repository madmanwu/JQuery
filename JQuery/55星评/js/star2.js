;(function($){
	$.fn.star=function(opt){
		// 设置参数
		var set=$.extend({
			casen:true,
			w:22,
			h:21,
			m:10,
			total:5,
			parent_el:'.parent',
			score_el:'.score',
			think_el:'.think',
			type:[
				'非常不满意',
				'很不满意',
				'不满意',
				'比较不满意',
				'一般',
				'比较满意',
				'满意',
				'很满意',
				'非常满意',
				'超级好'
			],
			img1:'images/starky.png',
			img2:'images/starsy.png'
		},opt);
		// 获取变量
		var self=$(this),
			parent=self.find(set.parent_el),
			score=self.find(set.score_el),
			think=self.find(set.think_el),
			preA=set.total/set.m,
			cont;
		if(set.casen){
			set.w=set.w/2;
		}else{
			set.m=set.m/2;
		};
		// 绑定事件
		init();
		function init(){
			for(var i=0;i<set.m;i++){
				var a=$('<a></a>').appendTo(parent);
				a.css({
					'position':'absolute',
					'left':0,
					'width':set.w*(i+1),
					'height':set.h,
					'z-index':set.m-i
				});
				parent.css({
					'position':'relative',
					'width':set.m*set.w,
					'height':set.h,
					'background':'url('+set.img1+')'
				})
			}
		}
		// 绑定事件
		parent.find('a').each(function(i,val){
			var self=$(this);
			self.on('click',function(){
				if(cont>=0) return false;
				cont=i;
			});
			self.hover(function(){
				if(cont>=0) return false;
				show(self,i)
			},function(){
				// console.log(cont);
				if(cont>=0){
					show(parent.find('a').eq(cont),cont)
				}else{
					self.removeClass('a');
					score.text('');
					think.text('');
				}
			});
		})
		// 动画函数
		function show(el,i){
			var n=parseInt(i)+1,
				scor=preA*n,
				content=set.type[i];
			score.text(scor);
			think.text(content);
			el.addClass('a');
		}
















































	};
})($)