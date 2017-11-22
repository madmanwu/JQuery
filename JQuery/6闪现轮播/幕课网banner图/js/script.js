var prev = document.getElementById('prev'),
	next = document.getElementById('next'),
	dots = document.getElementById('dots').getElementsByTagName('span'),
	main = document.getElementById('main'),
	sub_menu = document.getElementById('sub-menu'),
	menu_content = document.getElementById('menu-content'),
	menu_item = getClass('menu-item'),
	inner_box = getClass('inner-box'),
	banner_slide = getClass1('banner-slide'),
	button = getClass1('button');

for(var i=0;i<menu_item.length;i++){
	menu_item[i].index = i;
	menu_item[i].onmouseover = function(){
		sub_menu.style.display = "block";
		for(var j=0;j<inner_box.length;j++){
			inner_box[j].style.display = "none";
		}
		inner_box[this.index].style.display = "block";
	}
	menu_item[i].onmouseout = function(){
		sub_menu.style.display = "none";
		for(var j=0;j<inner_box.length;j++){
			inner_box[j].style.display = "none";
		}
	}
}
for(var i=0;i<inner_box.length;i++){
	inner_box[i].index = i;
	inner_box[i].onmouseover = function(){
		sub_menu.style.display = "block";
		for(var j=0;j<inner_box.length;j++){
			inner_box[j].style.display = "none";
		}
		inner_box[this.index].style.display = "block";
	}
	inner_box[i].onmouseout = function(){
		sub_menu.style.display = "none";
		for(var j=0;j<inner_box.length;j++){
			inner_box[j].style.display = "none";
		}
	}
}

function getClass1(cName){
	var dom = document.getElementsByTagName('*'),
		arr = [],
		reg = RegExp("\\b"+cName+"\\b");
	for(var i=0;i<dom.length;i++){
		if(reg.test(dom[i].className)){
			arr.push(dom[i]);
		}
	}
	return arr;
}

function getClass(cName){
	var dom = document.getElementsByTagName('*'),
		arr = [];
	for(var i=0;i<dom.length;i++){
		if(dom[i].className == cName){
			arr.push(dom[i]);
		}
	}
	return arr;
}

var count = 0,
	timer = null,
	timer2 = null;
if(!timer){
	timer = setInterval(fn,2000);
}
main.onmouseover = function(){
		clearInterval(timer);
		clearInterval(timer2);
		animate(main,{"opacity":100})
	}
main.onmouseout = function(){
	timer = null;
	timer2 = setInterval(fn,2000);
	animate(main,{"opacity":100});
}
function fn(){
	count++;
	if(count>banner_slide.length-1){
		count = 0;
	}
	lbt();
	animate(main,{"opacity":50},function(){
		animate(main,{"opacity":100});
	});
}
for(var i=0;i<dots.length;i++){
	dots[i].index = i;
	dots[i].onclick = function(){
		count = this.index;
		lbt();
	}
}
function lbt(){
	for(var i=0;i<banner_slide.length;i++){
		banner_slide[i].className = `banner-slide slide${i+1}`;
		dots[i].className = "";
	}
	banner_slide[count].className = `banner-slide slide${count+1} slide-active`;
	dots[count].className = "active";
}
for(var i=0;i<button.length;i++){

	button[i].onmouseover = function(){
		this.style.cssText = `display:block;opacity:0.5`;

	}
	button[i].onmouseout = function(){
		this.style.cssText = ``;

	}
}
next.onclick = function(){
	count++;
	if(count>dots.length-1){
		count = 0;
	}
	lbt();
}
prev.onclick = function(){
	count--;
	if(count<0){
		count = dots.length-1;
	}
	lbt();
}