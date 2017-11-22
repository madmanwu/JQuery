$(function(){
	
		var num=0;
		$('.turn').each(function(i,n){
			$(n).children('div').each(function(o,p){
				$(p).css('transform','rotateX('+-o*90+'deg) translateZ(150px)')
			})
			$(n).css('transition-delay',i*0.3+'s').children('div').css('background-position',-i*116+'px');
		})
		setInterval(function(){
			num++;
			$('#box .turn').css({'transform':'rotateX('+num*90+'deg)'});
		},3000)	
	

	
	/*$('.turn').each(function(i,n){
		$(n).children('div').each(function(o,p){
			$(p).css('background-position',-o*114+'px')
		})
	})*/
	
	
})