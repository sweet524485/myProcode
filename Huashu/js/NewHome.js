// 按钮效果
$(function () {
    $('.btn').mouseenter(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:80)', 'opacity': '0.8', 'cursor': 'pointer' });
    });
    $('.btn').mouseleave(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:100)', 'opacity': '1' });
    });
});
//tab切换方法
function RWidth(tag){
	var lWidth = $(tag).width()+10;
	$(tag).css('width',lWidth+'px');
}
function FirstStatus(tag1,tag2,tag3){
	var fWidth = $(tag1).first().width()+10;
	var fLeft = fWidth/2-5; 
	var lWidth = $(tag1).last().width();
	$(tag2).first().css('width',fWidth+'px');
	$(tag2).first().css('left','-5px');
	$(tag3).css('left',fLeft+'px');
}
function TabMove1(tag1,tag2,tag3,tag4,tag5){
	$(tag1).live('mouseover', function() {
		var TabNav = $(tag1);
		var sWidth = $(this).width()+10;
		var sLeft = sWidth/2-5; 
		$(tag2).css('width',sWidth+'px');
		$(tag3).css('left',sLeft+'px');
		for(i=0;i<TabNav.length;i++)
		{
			TabNav[i].style.left=TabNav[i].offsetLeft+'px';
		}
		for(i=0;i<TabNav.length;i++)
		{
			TabNav[i].style.position='absolute';
			TabNav[i].style.margin='0';
		}
		left = $(this).css('left');
		var s1 = parseInt(left.replace("px", ""));
		var left = (s1-5)+'px';
		$(this).addClass(tag4).siblings('a').removeClass(tag4);
		var qtt = $(this).index()-1;
		$(tag5).eq(qtt).show().siblings(tag5).hide();
		$(tag2).stop().animate({'left':left},100);
	});
}
function TabMove2(tag1,tag2,tag3,tag4,tag5){
	$(tag1).live('mouseover', function() {
		var TabNav = $(tag1);
		var sWidth = $(this).width()+10;
		var sLeft = sWidth/2-5; 
		$(tag2).css('width',sWidth+'px');
		$(tag3).css('left',sLeft+'px');
		for(i=0;i<TabNav.length;i++)
		{
			TabNav[i].style.left=TabNav[i].offsetLeft+'px';
		}
		for(i=0;i<TabNav.length;i++)
		{
			TabNav[i].style.position='absolute';
			TabNav[i].style.margin='0';
		}
		left = $(this).css('left');
		var s1 = parseInt(left.replace("px", ""));
		var left = (s1-5)+'px';
		$(this).addClass(tag4).siblings('a').removeClass(tag4);
		var qtt = $(this).index();
		$(tag5).eq(qtt).show().siblings(tag5).hide();
		$(tag2).stop().animate({'left':left},100);
	});
}
//判断红星个数的方法
function star(num){
	var starNum = num*13;
	$('.q-Home-f1-tab-book-star').css({'width':''+starNum+''+'px'});
}
$(function(){
	star(3);
});
//一楼导航条的点击效果
$(function(){
	$('.q-NewHome-nav').live('click', function(event) {
		$(this).addClass('q-NewHome-nav_cur').siblings('a').removeClass('q-NewHome-nav_cur');
	});
})
$(function(){
	//一楼导航条的点击效果
	$('.q-NewHome-f1-nav').live('click', function(event) {
		//获得当前的序号
		var q = $(this).index();
		$('.q-NewHome-f1-sort-content').eq(q).show().siblings('div').hide();
		$(this).addClass('q-NewHome-f1-nav_cur').siblings('a').removeClass('q-NewHome-f1-nav_cur')
	});
	// 学科分类点击效果
	$('.q-NewHome-f1-nav1').live('click', function(event) {
		$('.q-NewHome-f1-left').stop().animate({'height':'446px'}, 300);
		$('.prev').stop().animate({'top':'70px'}, 300);
		$('.next').stop().animate({'top':'70px'}, 300);
		$('.q-NewHome-newsBox').stop().animate({'height':'330px'}, 300);
		$('.q-NewHome-f1-container').stop().animate({'height':'470px'}, 300);
		$('.q-Home-f1-tab-box').stop().animate({'height':'160px'},300);
	});
	// 中图分类点击效果
	$('.q-NewHome-f1-nav2').live('click', function(event) {
		$('.q-NewHome-f1-left').stop().animate({'height':'640px'}, 300);
		$('.prev').stop().animate({'top':'155px'}, 300);
		$('.next').stop().animate({'top':'155px'}, 300);
		$('.q-NewHome-newsBox').stop().animate({'height':'515px'}, 300);
		$('.q-NewHome-f1-container').stop().animate({'height':'660px'}, 300);
		$('.q-Home-f1-tab-box').stop().animate({'height':'350px'},300);
	});
})
//去除任意处空格的方法
String.prototype.NoSpace = function() { 
	return this.replace(/\s+/g, ""); 
}
//导航条删除边框方法
function delNavBorder(tag1,tag2){
	$(tag1).each(function() {
		$(this).find(tag2).last().css('border','0');
	});
}
// 轮播图的JS
function LoadEdtirPicData() {
    var f1Num = $('.q-Home-move_list').length;
    var c = 0;
    var autoRun = function () {
        c++; //变量自增
        c = (c == f1Num) ? 0 : c;
        // 让c号图片显示，兄弟图片隐藏
        $('.q-Home-move_list').eq(c).fadeIn(200).siblings('.q-Home-move_list').hide();
        // 让c号添加q-Home-move_li_cur这个class，移出它兄弟节点的q-Home-move_li_cur class
        $('.q-Home-move_li').eq(c).addClass('q-Home-move_li_cur').siblings('.q-Home-move_li').removeClass('q-Home-move_li_cur');
    }
    var timer = setInterval(autoRun, 5000); //设立定时器
    $('.q-Home-move_left').live('click', function (event) {
        c--;
        c = (c == -1) ? (f1Num - 1) : c;
        // 让c号图片显示，兄弟图片隐藏
        $('.q-Home-move_list').eq(c).fadeIn(200).siblings('.q-Home-move_list').hide();
        // 让c号添加q-Home-move_li_cur这个class，移出它兄弟节点的q-Home-move_li_cur class
        $('.q-Home-move_li').eq(c).addClass('q-Home-move_li_cur').siblings('.q-Home-move_li').removeClass('q-Home-move_li_cur');
    });
    $('.q-Home-move_right').live('click', function (event) {
        c++;
        c = (c == f1Num) ? 0 : c;
        // 让c号图片显示，兄弟图片隐藏
        $('.q-Home-move_list').eq(c).fadeIn(200).siblings('.q-Home-move_list').hide();
        // 让c号添加q-Home-move_li_cur这个class，移出它兄弟节点的q-Home-move_li_cur class
        $('.q-Home-move_li').eq(c).addClass('q-Home-move_li_cur').siblings('.q-Home-move_li').removeClass('q-Home-move_li_cur');
    });
    $('.q-Home-move_li').live('mouseover', function (event) {
        // 清理定时器
        clearInterval(timer);
        // 获得当前鼠标移入的li的序号
        c = $(this).index();
        // 让c号图片显示，兄弟图片隐藏
        $('.q-Home-move_list').eq(c).fadeIn(200).siblings('.q-Home-move_list').hide();
        // 让c号添加q-Home-move_li_cur这个class，移出它兄弟节点的q-Home-move_li_cur class
        $('.q-Home-move_li').eq(c).addClass('q-Home-move_li_cur').siblings('.q-Home-move_li').removeClass('q-Home-move_li_cur');
    });
    // 给li加鼠标移出效果
    $('.q-Home-move_li').live('mouseout', function () {
        timer = setInterval(autoRun, 5000); //设立定时器
    });
    $('.q-Home-move_left').live('mouseover', function () {
        clearInterval(timer);
    });
    $('.q-Home-move_left').live('mouseout', function () {
        timer = setInterval(autoRun, 5000); //设立定时器
    });
    $('.q-Home-move_right').live('mouseover', function () {
        clearInterval(timer);
    });
    $('.q-Home-move_right').live('mouseout', function (event) {
        timer = setInterval(autoRun, 5000); //设立定时器
    });
    $('.q-Home-move_list').live('mouseover', function (event) {
        clearInterval(timer);
    });
    $('.q-Home-move_list').live('mouseout', function (event) {
        timer = setInterval(autoRun, 5000); //设立定时器
    });
}
// 一楼下部轮播图
	/**
	* parallelRoll 左右无缝滚动
	* boxName : 最外层盒子类名
	* tagName : 滚动标签元素
	* time : 滚动间隔时间
	* direction : 滚动方向  right-->向右    left-->向左
	* visual : 可视数
	* prev : 上一张
	* next : 下一张
	* author : MR chen  370489175@qq.com
	* Date: 15-03-19
	* */
$.fn.parallelRoll = function(options){
	var opts = $.extend({}, $.fn.parallelRoll.defaults, options);
	var _this = this;					
	var l = _this.find(opts.tagName).length;
	var autoRollTimer;
	var flag = true; // 防止用户快速多次点击上下按钮
	var arr = new Array();
	/**
	* 如果当  (可视个数+滚动个数 >滚动元素个数)  时  为不出现空白停顿   将滚动元素再赋值一次
	* 同时赋值以后的滚动元素个数是之前的两倍  
	* */
	if(opts.amount + opts.visual > l){
		_this[0].innerHTML += _this[0].innerHTML;
		l = 2 * l;
	}else{
		l = l;
	}					
	var w = $(opts.tagName).outerWidth(true); //计算元素的宽度  包括补白+边框
	_this.css({width: (l * w) + 'px'}); // 设置滚动层盒子的宽度
	return this.each(function(){
		_this.closest('.'+opts.boxName).hover(function(){							
				clearInterval(autoRollTimer);
			},function(){							
				switch (opts.direction){
					case 'left':
						autoRollTimer = setInterval(function(){
										left();
						},opts.time);
					break;
					case 'right':
						autoRollTimer = setInterval(function(){
										right();
						},opts.time);
					break;
					default : 
						alert('参数错误！');
					break;
				}							
				}).trigger('mouseleave');
				$('.'+opts.prev).on('click',function(){
							flag ? left() : "";
				});
				$('.'+opts.next).on('click',function(){
							flag ? right() : "";
				});
				$('.'+opts.prev).on('mouseover',function(){
							clearInterval(autoRollTimer);

				});
				$('.'+opts.prev).on('mouseout',function(){
					autoRollTimer = setInterval(function(){
										left();
									},opts.time);
				});
				$('.'+opts.next).on('mouseover',function(){
					clearInterval(autoRollTimer);
				});
				$('.'+opts.next).on('mouseout',function(){
					autoRollTimer = setInterval(function(){
										left();
									},opts.time);
				});
			});					
			function left(){
				flag = false;
				_this.animate({marginLeft : -(w*opts.amount)},1000,function(){
					_this.find(opts.tagName).slice(0,opts.amount).appendTo(_this);
					_this.css({marginLeft:0});
					flag = true;
				});
			};
			function right(){
				flag = false;
				arr = _this.find(opts.tagName).slice(-opts.amount);										
				for(var i = 0; i<opts.amount; i++){
					$(arr[i]).css({marginLeft : -w*(i+1)}).prependTo(_this);
				}										
				_this.animate({marginLeft : w*opts.amount},1000,function(){
					_this.find(opts.tagName).removeAttr('style');
					_this.css({marginLeft:0});
					flag = true;
				});
			};
		};
//插件默认选项
$.fn.parallelRoll.defaults = {
	boxName : 'box',
	tagName : 'dd',
	time : 5000,  // 
	direction : 'left', // 滚动方向
	visual : 7 , //可视数
	prev : 'next',
	next : 'prev',
	amount : 1   // 滚动数  默认是1
};
function tabMove(){
	$("#rolll").parallelRoll({
		amount : 1
	});	
}
//一楼左侧导航条左侧鼠标移入效果 
function secondNav(tagName) {
	$('.q-NewHome-f1-sort-list').live('mouseover', function(event) {
		$(this).find('.q-NewHome-f1-sort').addClass('q-NewHome-f1-sort_cur').parents('.q-NewHome-f1-sort-list').siblings('.q-NewHome-f1-sort-list').find('.q-NewHome-f1-sort').removeClass('q-NewHome-f1-sort_cur');
		$(this).find('.q-NewHome-f1-sortHide-box').show();
		
		$(this).find('.q-NewHome-f1-sort-box').css({'border-top':'1px solid #fff','border-bottom':'1px solid #fff','border-right':'1px solid #FCD434'});
		$(this).find('.q-NewHome-f1-sort-li').css({'margin-top':'-1px'});
		$(this).find('.q-NewHome-f1-sortIcon').css({'margin-top':'5px'});
		//去除隐藏导航二级菜单的下边框的方法调用
		$(this).find('.q-NewHome-f1-sortHide-list').last().css({'border':'0'});
		var hideHeight = $(this).find('.q-NewHome-f1-sortHide-box').height()/2-10;
		$('.q-NewHome-f1-sortHide-box').css({'top':-hideHeight+'px'});
		var eq = $().index(this);
		if (eq <= 3) {
	  		if (hideHeight > 51) {
		  		$('.q-NewHome-f1-sortHide-box').css({'top':'-51px'});
		  	}else{
		  		$('.q-NewHome-f1-sortHide-box').css({'top':-hideHeight+'px'});
		  	}
		}else if(eq > 3 && eq <= 6){
			if (hideHeight > 100) {
		  		$('.q-NewHome-f1-sortHide-box').css({'top':'-100px'});
		  	}else{
		  		$('.q-NewHome-f1-sortHide-box').css({'top':-hideHeight+'px'});
		  	}
		}else if(eq > 6 && eq <= 22){
			if (hideHeight > 150) {
		  		$('.q-NewHome-f1-sortHide-box').css({'top':'-150px'});
		  	}else{
		  		$('.q-NewHome-f1-sortHide-box').css({'top':-hideHeight+'px'});
		  	}
		}
	});
	$('.q-NewHome-f1-sort-list').live('mouseout', function(event) {
		$(this).find('.q-NewHome-f1-sortHide-box').hide();
		$(this).find('.q-NewHome-f1-sort-box').css({'border-top':'0px solid #fff','border-bottom':'0px solid #fff','border-right':'0px solid #FCD434'});
		$(this).find('.q-NewHome-f1-sort-li').css({'margin-top':'0px'});
		$(this).find('.q-NewHome-f1-sortIcon').css({'margin-top':'6px'});
		$(this).find('.q-NewHome-f1-sort').removeClass('q-NewHome-f1-sort_cur').parents('.q-NewHome-f1-sort-list').siblings('.q-NewHome-f1-sort-list').find('.q-NewHome-f1-sort').removeClass('q-NewHome-f1-sort_cur');
	});
 }
$(function(){
	//分类删除边框方法调用
	delNavBorder('.q-NewHome-f1-sort-li','.q-NewHome-f1-sort');
	delNavBorder('.q-NewHome-f3-sort-li','.q-NewHome-f3-sort');
	//首页轮播图调用
	LoadEdtirPicData();
	//tab切换轮播方法调用
	tabMove();
	// 一楼导航条效果调用
	secondNav('.q-NewHome-f1-sort-content1 .q-NewHome-f1-sort-list');
	secondNav('.q-NewHome-f1-sort-content2 .q-NewHome-f1-sort-list');
	// 二楼带小滑块的TAB方法调用
	RWidth('.q-Home-f2-right-nav-box');
	FirstStatus('.q-Home-f2-right-nav','.q-Home-f2-move','.q-Home-f2-moveIcon');
	TabMove1('.q-Home-f2-right-nav','.q-Home-f2-move','.q-Home-f2-moveIcon','q-Home-f2-right-nav_cur','.q-Home-f2-book-container');
	// 三楼带小滑块的TAB方法调用
	RWidth('.q-Home-f3-right-nav-box');
	FirstStatus('.q-Home-f3-right-nav','.q-Home-f3-move','.q-Home-f3-moveIcon');
	TabMove2('.q-Home-f3-right-nav','.q-Home-f3-move','.q-Home-f3-moveIcon','q-Home-f3-right-nav_cur','.q-Home-f3-book-container');
})

			
			
			
							






























