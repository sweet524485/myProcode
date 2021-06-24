//原生开发js author:仇郯郯
$(function(){
	var num = 0;
	var i = 1;
	var timer = null;
	//->轮播图左侧初次设置效果
	$(".hd_con").hide();
	$(".hd_con").first().show();
	//->轮播图左侧的初次设置
	//获取轮播的个数
	var cloneList = $(".bd ul li").clone();
	$(".bd ul").append(cloneList);
	num = $(".bd ul li").size()/2;
	var left = $(".slider .bd li").width();
	$(".bd ul").css("width",2*num*left+"px");
	$(".bd ul").css("left","-"+left+"px");
	//->初始化完成，下面来写核心代码
	// 自动轮播图
	function autoRun(){
		left = $(".slider .bd li").width();
		i++;
		if(i == num+1){
			$(".bd ul").css("left","0px");
			i = 1;
		}
		$(".bd ul").stop().animate({"left":"-"+left*i+"px"},300);
		$(".hd_con").eq(i-1).fadeIn().siblings('.hd_con').hide();
	}
	//左侧按钮点击效果
	$(".slider .next .arrow").click(function(){
		autoRun();
	});
	//右侧按钮点击效果
	$(".slider .prev .arrow").click(function(){
		left = $(".slider .bd li").width();
		i--;
		if(i == 0){
			$(".bd ul").css("left","-"+left*(num+1)+"px");
			i = num;
		}
		$(".bd ul").stop().animate({"left":"-"+left*i+"px"},300);
		$(".hd_con").eq(i-1).fadeIn().siblings('.hd_con').hide();
	});
	//自动轮播调用
	timer = setInterval(autoRun,3000);
	$(".slider").hover(function(){
		clearInterval(timer);
		$(this).find(".arrow").stop(true,true).fadeIn(300)
	},function(){
		timer = setInterval(autoRun,3000);
		$(this).find(".arrow").fadeOut(300)
	});
})