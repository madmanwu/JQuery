;(function($){
	$.fn.star=function(opt){
		// 设置参数
		var set=$.extend({
			casen:true,//整颗星
			w:32,//长度
			h:21,
			m:10,//数量
			score_el:'.score',
			parent_el:'.parent',
			think_el:'.think',
			img1:'images/stark2.png',
			img2:'images/stars2.png',
			think:[
				"与卖家描述的严重不符，非常不满意",
				"差得太离谱，很不满意",
				"不满意",
				"质量有轻微差别，不太满意",
				"一般",
				"质量一般",
				"没有卖家描述的那么好",
				"满意",
				"质量不错",
				"与卖家描述的基本一致，挺满意的",
				"非常满意",
				"质量非常好，与卖家描述的完全一致，非常满意"
			]
		},opt);
		if(set.casen){
			set.w=set.w/2
		}else{
			set.m=set.m/2
		}
		// 获取变量
		var self=$(this),
			parent=self.find(set.parent_el),
			number=self.find(set.score_el),
			think=self.find(set.think_el),
			preA=5/set.m,
			confrm;
		// 设置页面
		init();
		function init(){
			for(var i=0;i<set.m;i++){
				var a=$('<a></a>').appendTo(parent);
				a.css({
					'width':set.w*(i+1),
					'position':'absolute',
					'left':0,
					'z-index':set.m-i,
					'height':set.h

				});
				parent.css({
					'position':'relative',
					'background':'url('+set.img1+')',
					'width':set.w*set.m,
					'height':set.h
				});
			};
		};
		parent.find('a').each(function(i,val){
			var self=$(this);
			self.on('click',function(){
				if(confrm>=0) return false;
				confrm=i;
			})
			self.hover(function(){
				if(confrm>=0) return false;
				show(i,self)
			},function(){
				if(confrm>=0){
					show(confrm,parent.find('a').eq(confrm));
				}else{
					parent.find('a').removeClass('a');
					number.text('');
					think.text('');
				}
			})
		})
		function show(i,l){
			var n=parseInt(i)+1,
				content=set.think[n],
				score=preA*n;
			number.text(score);
			think.text(content);
			l.addClass('a');
		}

	}
})($)




