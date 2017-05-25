
$(function(){
	$('#main a').on('click',function(){
		if($('#main a').eq(0).text() == '立即注册'){
			$('#main').css('display','none');
			$('#reg').css('display','block');
			$('#t-con span').text('注册');
		}
	})
	$('#reg a').on('click',function(){	
		if($('#reg a').eq(0).text() == '立即登录'){
			$('#main').css('display','block');
			$('#reg').css('display','none');
			$('#t-con span').text('登录');
		}
	})
	

	
})





















