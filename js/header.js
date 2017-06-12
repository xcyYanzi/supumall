$(function(){
	$(".navList li").on("mouseenter",function(){
		var index = $(this).index();
		$.get("../json/allProduct.json",function(data){
			var data = data;
			var html = template("pro",data[index]);
			$(".area1").html(html);
		})
	})
	
})
