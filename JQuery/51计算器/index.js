$(function(){
	//点击数字和点 事件
	$('.num1').on('click',function(){
		var val = $(this).val();
		// console.log(val)
		var txt1 = $('#bottom').text();
		if(txt1=='0'){
			if(val=='.'){
				$('#bottom').append(val)
			}else{
				$('#bottom').text(val)
				}
			}else if(val=='.'){
				if(txt1.indexOf('.')!=-1){
					return false;
				}else{
					$('#bottom').append(val)
				}	
			}else{
				$('#bottom').append(val)
			}
	})
		//点击运算符事件
	$('.upNum').on('click',function(){
		var val = $(this).val(),
			num1 = $('#bottom').text();
		$('.num').append(num1);
		$('.countSize').append(val);
		$('#bottom').text('');
	})
	//等号事件
	$('.equal').on('click',function(){
		var nu1 = parseFloat($('.num').text()),
			fuhao = $('.countSize').text(),
			nu2 = parseFloat($('#bottom').text()),
		    cont = eval(nu1 + fuhao + nu2)
		    // console.log(cont)
		    $('#bottom').text(cont);
		    $('#top_1').html('<span class="num"></span><span class="countSize"></span>')
	})









	

})