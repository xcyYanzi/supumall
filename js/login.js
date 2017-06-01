/*登录与注册页面的切换*/
$(function(){
	$('#main a').on('click',function(){
		if($('#main a').eq(0).text() == '立即注册'){
			$('#main').animate({"left":80},1000).hide();
			$('#reg').css('display','block').animate({"left":0},1000);
			$('#t-con span').text('注册');
		}
	})
	$('#reg a').on('click',function(){	
		if($('#reg a').eq(0).text() == '立即登录'){
			$('#main').css('display','block').animate({"left":0},1000);
			$('#reg').animate({"left":80},1000).hide();
			$('#t-con span').text('登录');
		}
	})
	
	/*登录验证*/

	$aInput1 = $("#logForm").find("input:not(:last)");
				$("#btn1").on("click",function(){
					//console.log($aInput1.eq(0).val());
					if($aInput1.eq(0).val().length == 0){
						alert("用户名不能为空");
						return;
					}
				$.post("http://127.0.0.1/supu/php/login.php",{"username":$aInput1.eq(0).val(),"password":$aInput1.eq(1).val()},function(data){		
				console.log(data);
				if(data == 1){
						alert("登录成功");
						location.href="index.html";
					}else{
						alert("此用户名或密码不正确");
					}
				})	
		})
	/*注册验证*/
	$aInput2 = $("#regForm").find("input:not(:last)");
				$("#btn2").on("click",function(){	
					if($aInput2.eq(0).val().length == 0){
						alert("用户名不能为空");
						return;
					}
				$.post("http://127.0.0.1/supu/php/reg.php",{"username":$aInput2.eq(0).val(),"password":$aInput2.eq(1).val()},function(data){
					if(data == 1){
						alert("注册成功");
						location.href="index.html";
					}else{
						alert("此用户名已存在，请更换");
					}
				})	
	})	
})





















