$(function () {

	$.evaluate({
		n:10,		//	整个就是 5  半个就是 10
		comment:[
			'垃圾中的极品-极品垃圾',
			'垃圾',
			'倒贴钱都不要',
			'白给都不要',
			'白给就要'
		]
	})

});




;
(function ($) {

	function Evaluate(opt) {
		this.init(opt)
	}
	Evaluate.prototype = {

		constructor: Evaluate,

		init: function (opt) {

			this.config = $.extend({
				n:5,
				number:false,
				comment:['很不满意','不满意','一般','满意','很满意']
			}, opt)
			
			this.el={
				box:$('.box'),
				move:$('.box .star'),
				grade:$('.grade'),
				evaluate:$('.evaluate')
			}
			
			var _this=this;
			
			this.el.move.on('mousemove',function(e){
				
				var x=e.pageX,
					left=$(this).offset().left,	
					step=$(this).width()/_this.config.n,	//	一步走 多少像素
					num=Math.ceil((x-left)/step);
					
					_this.el.move.children().css('width',num*step)
				
					if(_this.config.n==10){
						_this.el.grade.children('b').html(num/2)
					}else{
						_this.el.grade.children('b').html(num)
					}
					
				
					_this.el.evaluate.text(_this.config.comment[num-1])
				
			}).on('click',function(){$(this).off()})

		}


	}







	$.evaluate = function (opt) {
		return new Evaluate(opt)
	}


})($)
