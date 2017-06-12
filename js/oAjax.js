/*
 
 *--- params----*
 * url:路径，必填项
 * type：请求类型 ，get,post,必填项
 * data：请求数据，object，必填项,可传空对象{}
 * fnSuc：回调函数(成功返回数据),必填项
 * fnFail：回调函数(返回数据失败),非必填项
 * 
 * */
function Ajax(url,type,data,fnSuc,fnFail){
	var xhr = null;
	if(XMLHttpRequest){
		xhr = new XMLHttpRequest()
	}else{
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	type = type.toUpperCase();
	//data {"name":"john","age":20}=> "name=john&age=20&"
	var str = "";
	if(data){
		for(var attr in data){
			str += attr + "=" + data[attr] +"&";
		}
		str = str.replace(/&$/,"");
	}
	if(type=="GET"){
		xhr.open("GET",url+"?"+str,true);
		xhr.send();
	}else{
		xhr.open("POST",url,true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		xhr.send(str);
	}
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				fnSuc(xhr.responseText);
			}else{
				if(fnFail){
					fnFail(xhr.status);
				}
				
			}
		}
	}
	
}

function callback(data){
	
}
//Ajax("test.php","get",{"name":"john","age":20});
