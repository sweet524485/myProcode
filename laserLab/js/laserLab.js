//删除最后一行的下划线
function delBorder(tagName){
	$(tagName).last().css("border","0");
}
function autoShow(){
	$('.jg-subject-datailCon').each(function(i,item){
		var h = $('.jg-subject-datailCon').eq(i).height();
		if(h >= 228){
			$('.jg-subject-datailCon').eq(i).css('height','228px');
			$('.jg-subject-datailCon').eq(i).next().show();
		}else{
			$('.jg-subject-datailCon').eq(i).next().hide();
		}
	})
}
function moveImg(id,time){
	// 设置初始值
	var i = 0;
	// 设定定时器
	var timer = null;
	// 获取单个轮播的宽度
	var w = $(id+' .img li').width();
	// 复制四倍要轮播的东西
	var clone = $(id+' .img li').clone();
	$(id+' .img').append(clone);
	var clone = $(id+' .img li').clone();
	$(id+' .img').append(clone);
	//给每个li循环的数据添加left和top值
	$(id+' .img li').each(function(i,item){
		var left = $(this).position().left;
		var top = $(this).position().top;
		$(this).css({'left':left+'px','top':top+'px'});
	});
	//给每个循环出来的li添加定位属性
	$(id+' .img li').each(function(i,item){
		$(this).css('position','absolute');
	});
	// 获取两倍的轮播列表个数
	var num = $(id+' .img li').size();
	for (var j = 0; j < num/4; j++) {
		$(id+' .num').append('<li></li>');
	}
	// 让轮播内部的盒子足够大
	$(id+' .img').css('width',num*w+'px');
	$(id+' .num li').first().addClass('on');
	// 自动轮播函数
	function autoRun(){
		i ++;
		if(i == num/4){
			$(id+' .num li').eq(0).addClass('on').siblings('li').removeClass('on');
		}
		if (i == num/4+1) {
			$(id+' .img').css({'left':'0px'});
			i = 1;
		}
		$(id+' .img').stop().animate({'left':'-'+w*i+'px'},300);
		$(id+' .num li').eq(i).addClass('on').siblings('li').removeClass('on');
	}
	timer = setInterval(autoRun,time);
	$(id+' .btn_r').on('click',function(){
		autoRun();
	});
	$(id+' .btn_l').on('click',function(){
		i --;
		if (i == -1) {
			$(id+' .img').css({'left':'-'+w*(num/4)+'px'});
			i = num/4-1;
		}
		$(id+' .img').stop().animate({'left':'-'+w*i+'px'},300);
		$(id+' .num li').eq(i).addClass('on').siblings('li').removeClass('on');
	});
	$(id+' .num li').hover(function(){
		var indexNum = $(this).index();
		i = indexNum;
		$(this).addClass('on').siblings('li').removeClass('on');
		$(id+' .img').stop().animate({'left':'-'+w*i+'px'},300);
	})
	$(id).hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoRun,time);
	});
}
$(function(){
	var zIndex = 0;
	//学科专题区设置初次加载的状态
	$(".jg-subject-tab").first().addClass("active")
	$(".jg-subject-con").first().show();
	//导航区删除下划线方法调用 电子期刊下划线
	delBorder(".jg-headNav-down a");
	delBorder(".jg-journal-list");
	//二级导航的鼠标移出效果
	$('.jg-headNav-content li').hover(function() {
		$(this).find('.jg-headNav-down').stop().animate({"height":"95px","padding-top":"5px","padding-bottom":"5px"},300);
	}, function() {
		$(this).find('.jg-headNav-down').stop().animate({"height":"0px","padding-top":"0px","padding-bottom":"0px"},300);
	});
	//最上部的轮播区
	moveImg('#jg-move1',4000);
	//成果展现轮播区
	moveImg('#jg-move2',3000);
	//书籍推荐轮播区
	moveImg('#jg-move3',3000);
	//书籍推荐轮播区鼠标移入和移出效果
	//学科专业区点击效果
	$(".jg-show-leftBootIcon").on("click",function(){
		var className = $(this).attr("class");
		if(className == "jg-show-leftBootIcon"){
			$(this).addClass("active");
			$(".jg-show-innerBox").css("height","auto");
		}else{
			$(this).removeClass("active");
			$(".jg-show-innerBox").css("height","310px");
		}
	});
	//产品介绍
	$(".jg-show-leftBoot1").on("click",function(){
		var className = $(this).attr("class");
		if(className == "jg-show-leftBoot1"){
			$(this).addClass("active");
			$(this).parent().find(".jg-subject-datailCon").css("height","auto");
		}else{
			$(this).removeClass("active");
			$(this).parent().find(".jg-subject-datailCon").css("height","228px");
		}
	});
	autoShow();
	//学科专题区的tab切换效果
	$(".jg-subject-tab").on("click",function(){
		$(this).addClass("active").siblings("a").removeClass("active");
		var i = $(this).index();
		$(".jg-subject-con").eq(i).show().siblings("div").hide();
	});
	$(".jg-subject-tab1").on("click",function(){
		$(".jg-subject-tab2 span").css({"border-right":"1px solid #C2C2C2"});
	});
	$(".jg-subject-tab2").on("click",function(){
		$(this).css("border-radius","5px");
		$(".jg-subject-tab1 span").css({"border":"0"});
		$(".jg-subject-tab2 span").css({"border":"0"});
	});
	$(".jg-subject-tab3").on("click",function(){
		$(this).css("border-radius","5px");
		$(".jg-subject-tab2 span").css({"border":"0"});
		$(".jg-subject-tab1 span").css({"border-right":"1px solid #C2C2C2"});
	});
	//返回顶部
	$('#backTop').click(function(){
		$('html,body').stop().animate({'scrollTop':'0px'},1000);
	});
	//取得的成果的点击展开效果
	$('.jg-subject-leftBoot').click(function(){
		var className = $(this).attr("class");
		if(className == "jg-subject-leftBoot"){
			$(this).addClass("active");
			$(this).parent().find(".jg-subject-successContent").css("height","auto");
		}else{
			$(this).removeClass("active");
			$(this).parent().find(".jg-subject-successContent").css("height","93px");
		}
	})
})