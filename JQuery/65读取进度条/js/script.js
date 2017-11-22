var img=document.getElementById('imgs'),
	imgs=img.getElementsByTagName('img'),
	p=$('.box').children('p'),
	span=p.children('span'),
	label=p.children('label'),
	b=$('.box').children('b'),
	num=0,
	W=p.width();


for(var i=0,len=imgs.length;i<len;i++){
	
	imgs[i].onload=function(){
		num++;
		span.css('left',num*W/len)
		label.width(num*W/len+'px')
		b.html(num+'%')
	}
	
}


