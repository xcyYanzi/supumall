$(function() {
	//接口数据
	var data = ["../img/banner/banner01.jpg", "../img/banner/banner02.jpg", "../img/banner/banner03.jpg","../img/banner/banner04.jpg"];
	//定义一个轮播类
	function Banner(obj, data) {
		//获取轮播对象
		this.wrap = typeof obj === "string" ? $("#" + obj) : obj;
		this.imgList = this.wrap.find(".picBox");
		this.picNum = this.wrap.find(".picNum");
		this.data = data;
		//初始化
		this.init();
	}
	Banner.prototype.init = function() {
		//初始化方法里 创建轮播图结构,由于不确定接口数据大小，故动态创建结构
		var _this = this;
		//创建轮播主体
		$.each(this.data, function(index) {
			_this.imgList.append("<li><a href=''></a></li>"); //tupian
			_this.picNum.append("<li></li>"); //jiaobiao
		})
		this.picNum.find("li:first").addClass("active");

		this.imgList.find("a").each(function() {
			var index = $(this).parent().index();
			//调用路径信息
			$(this).css("background-image", "url(" + data[index] + ")");
		});
		this.index = 0;
		//开启定时器
		this.timer = setInterval(function() {
			_this.move(_this);
		}, 3000);
		//调用相应方法

		this.stopInterval(); //鼠标移入暂停，移出开启
		this.changeByNum(); //鼠标移入角标，切换图片
		this.changeByNext(); //鼠标点击左侧按钮，切换图片
		this.changeByPrev(); //鼠标点击右侧按钮，切换图片
	};
	Banner.prototype.move = function(_this) {
		_this.index++;
		//最后一张，跳转到第一张
		if(_this.index == _this.imgList.find("li").length) {
			_this.index = 0;
		}
		//第一张，跳转到最后一张
		if(_this.index <= -1) {
			_this.index = _this.imgList.find("li").length - 1;
		}
		_this.imgList.find("li").eq(_this.index).stop().fadeIn(500).siblings().stop().fadeOut(500);
		_this.picNum.find("li").eq(_this.index).addClass("active").siblings().removeClass("active");

	}
	Banner.prototype.changeByNum = function() {
		var _this = this;
		this.picNum.find("li").mouseover(function() {
			_this.index = $(this).index() - 1;
			_this.move(_this);
		})
	}
	Banner.prototype.changeByNext = function() {
		var _this = this;
		this.wrap.find(".next").on("click", function() {
			_this.move(_this);
		})
	}
	Banner.prototype.changeByPrev = function() {
		var _this = this;
		this.wrap.find(".prev").on("click", function() {
			_this.index = _this.index - 2;
			_this.move(_this);
		})
	}

	Banner.prototype.stopInterval = function() {
		var _this = this;
		this.wrap.on("mouseenter", function() {
			clearInterval(_this.timer);
		})
		this.wrap.on("mouseleave", function() {
			_this.timer = setInterval(function() {
				_this.move(_this);
			}, 3000);

		})

	}

	new Banner("banner", data);

})