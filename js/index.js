
/*---main2---*/
$(function(){
	$.get("../json/main02.json",function(data){
		var data = data;
		var html = template("tabs",data);
		//console.log(data);
		document.getElementsByClassName("goodsArea")[0].innerHTML=html;		
		
	var timer1 = setInterval(function(){
		var dd = new Date();
		var tim = new Date("2017-6-30 00:00:00");
		var cha = tim - dd;
		var str = timeSpike(tim);
		$(".djs ")[0].innerHTML = str;
		$(".djs ")[1].innerHTML = str;
		$(".djs ")[3].innerHTML = str;
		$(".djs ")[5].innerHTML = str;
		$(".djs ")[7].innerHTML = str;
		if(cha<1000){
			clearInterval(timer1);
		}
	},1000);

	var timer2 = setInterval(function(){
		var dd = new Date();
		var tim = new Date("2017-6-30 00:00:00");
		var cha = tim - dd;	
		var str = timeSpike(tim);
		$(".djs ")[2].innerHTML = str;
		$(".djs ")[4].innerHTML = str;
		$(".djs ")[6].innerHTML = str;
		if(cha<1000){
			clearInterval(timer2);
		}
	},1000);
	
	
	
	
		})	
		//floor1
		$.get("../json/floor1.json",function(data){
		var data = data;
		var html = template("floor1",data);
		$(".floor1 .f1-3")[0].innerHTML=html;	
		})	
		
		//floor2
		$.get("../json/floor1.json",function(data){
		var data = data;	
		var html = template("floor2",data);
		$(".floor2 .f1-3")[0].innerHTML=html;	
		})	

		//floor3
	$.get("../json/floor1.json",function(data){
		var data = data;
		var html = template("floor3",data);
		$(".floor3 .f1-3")[0].innerHTML=html;	
		
		})	

		//floor4
		$.get("../json/floor1.json",function(data){
		var data = data;	
		var html = template("floor4",data);
		$(".floor4 .f1-3")[0].innerHTML=html;	
		})	

		//floor5
	$.get("../json/floor1.json",function(data){
		var data = data;
		var html = template("floor5",data);
		$(".floor5 .f1-3")[0].innerHTML=html;		
		})	
		
		
		$(".timeGroup .time ul li").click(function(){
			$(this).find(".t_point").css("background","yellow");
			
			var i = $(this).index();
			$.get("../json/main01.json",function(data){
				var html = template("goods",data[i]);
				console.log($(".goodsList1")[0]);
				$(".goodsList1")[0].innerHTML=html;	
			})
		})
		
		
	})





/*---倒时计---*/
	var timer1 = setInterval(timeSpike,1000);
	function timeSpike(endTime){
		var oDate1=new Date();
		var oDate2=new Date(endTime);
		var cha=oDate2-oDate1;
		var tt=Math.floor((cha/(1000*60*60*24)));
		var hh=Math.floor((cha-tt*1000*60*60*24)/(1000*60*60));
		var mm=Math.floor((cha%(1000*60*60))/(1000*60));
		var ss=Math.floor((cha-tt*1000*60*60*24-hh*1000*60*60-mm*1000*60)/1000);	
		tt=tt<10?"0"+tt:tt;
		hh=hh<10?"0"+hh:hh;
		mm=mm<10?"0"+mm:mm;
		ss=ss<10?"0"+ss:ss;
			var str="还有："+tt+"天"+hh+"时"+mm+"分"+ss+"秒";
			return str;
}


/*----------floor1轮播图--------------*/
var index = 0;
var flag = true;
timer = setInterval(move, 3000);
function move() {
	index++;
	$(".floor1 .list5 li").eq(index - 1).css({ "position": "absolute" }).animate({ "left": -165 }, 1000, function() {
		$(this).css("left", 165);
	});
	if(index == $(".floor1 .list5 li").length) {
		index = 0;
	}
	$(".floor1 .list5 li").eq(index).css({ "position": "absolute", "left": 165 }).animate({ "left": 0 }, 1000);
	/*----------floor2轮播图--------------*/
	$(".floor2 .list5 li").eq(index - 1).css({ "position": "absolute" }).animate({ "left": -165 }, 1000, function() {
		$(this).css("left", 165);
	});
	if(index == $(".floor2 .list5 li").length) {
		index = 0;
	}
	$(".floor2 .list5 li").eq(index).css({ "position": "absolute", "left": 165 }).animate({ "left": 0 }, 1000);
	
	/*----------floor3轮播图--------------*/
	$(".floor3 .list5 li").eq(index - 1).css({ "position": "absolute" }).animate({ "left": -165 }, 1000, function() {
		$(this).css("left", 165);
	});
	if(index == $(".floor3 .list5 li").length) {
		index = 0;
	}
	$(".floor3 .list5 li").eq(index).css({ "position": "absolute", "left": 165 }).animate({ "left": 0 }, 1000);
	
	/*----------floor4轮播图--------------*/
	$(".floor4 .list5 li").eq(index - 1).css({ "position": "absolute" }).animate({ "left": -165 }, 1000, function() {
		$(this).css("left", 165);
	});
	if(index == $(".floor4 .list5 li").length) {
		index = 0;
	}
	$(".floor4 .list5 li").eq(index).css({ "position": "absolute", "left": 165 }).animate({ "left": 0 }, 1000);

	/*----------floor5轮播图--------------*/
	$(".floor5 .list5 li").eq(index - 1).css({ "position": "absolute" }).animate({ "left": -165 }, 1000, function() {
		$(this).css("left", 165);
	});
	if(index == $(".floor5 .list5 li").length) {
		index = 0;
	}
	$(".floor5 .list5 li").eq(index).css({ "position": "absolute", "left": 165 }).animate({ "left": 0 }, 1000);

}









