// 去除空格的方法
String.prototype.trim = function () {
    var str = this,
  str = str.replace(/^\s\s*/, ''),
  ws = /\s/,
  i = str.length;
    while (ws.test(str.charAt(--i)));
    return str.slice(0, i + 1);
}
//文本框的得到与失去焦点的边框颜色
$(function () {
    $(".q-Home-header-search-input").live('focus', function() {
        $(this).css({ 'border': '2px solid #00BBD9', 'box-shadow': '0px 0px 2px #00BBD9', '-moz-box-shadow': '0px 0px 2px #00BBD9', '-webkit-box-shadow': '0px 0px 2px #00BBD9', '-ms-box-shadow': '0px 0px 2px #00BBD9' });
    })
    $(".q-Home-header-search-input").live('blur', function() {
        $(this).css({ 'border': '2px solid #E2E4E8', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
    })
})
// 按钮效果
$(function () {
    $('.btn').mouseenter(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:80)', 'opacity': '0.8', 'cursor': 'pointer' });
    });
    $('.btn').mouseleave(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:100)', 'opacity': '1' });
    });
});
// 导航条点击效果
$(function () {
    $('.q-Home-header-nav span').live('click', function(event) {
    	$(this).addClass('q-Home-header-nav-cur').parent().siblings('a').find('span').removeClass('q-Home-header-nav-cur');
    });
});
//一楼分类左右切换效果
$(function(){
	$('.q-Home-f1-left-sort').live('click', function(event) {
		//获得当前的序号
		var q = $(this).index();
		//让c号con显示，他的兄弟节点隐藏
		$('.q-Home-f1-left-sort-list').eq(q).show().siblings('.q-Home-f1-left-sort-list').hide();
		$(this).addClass('q-Home-f1-left-sort-cur').siblings('.q-Home-f1-left-sort-cur').removeClass('q-Home-f1-left-sort-cur');
	});
})
//首页左侧的鼠标移入移出效果
$(function () {
  $('.q-Home-f1-left-sort-list1 .q-Home-f1-left-sort-li').live('mouseover', function(event) {
  	var text = $(this).find('.q-Home-f1-left-sort-hide').text();
  	var divLength = text.trim().length;
  	if (divLength == 0) {
        $(this).find('.q-Home-f1-left-sort-hide').hide();
    } else {
	  	var showBoxHeight = $(this).height();
	  	var hideBoxHeight = $(this).find('.q-Home-f1-left-sort-hide').height();
	  	var hideBoxTop = -(hideBoxHeight-showBoxHeight)/2;
	  	var eq = $('.q-Home-f1-left-sort-list1 .q-Home-f1-left-sort-li').index(this);
	  	if (eq <= 3) {
	  		if (hideBoxTop < -97) {
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top','-42px');
		  	}else{
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top',hideBoxTop+'px');
		  	}
		}else if(eq > 3 && eq <= 6){
			if (hideBoxTop < -97) {
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top','-151px');
		  	}else{
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top',hideBoxTop+'px');
		  	}
		}else if(eq > 6 && eq <= 21){
			if (hideBoxTop < -97) {
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top','-170px');
		  	}else{
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top',hideBoxTop+'px');
		  	}
		}else if(eq = 22){
			if (hideBoxTop < -200) {
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top','200px');
		  	}else{
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top',hideBoxTop+'px');
		  	}
		}	
	  	$(this).find('.q-Home-f1-left-sort-hide-list').last().css('border','0');
	  	$(this).find('.q-Home-f1-left-sort-icon').show();
	  	$(this).find('.q-Home-f1-left-sort-hide').show();
	  	$(this).find('.q-Home-f1-left-sort-text').css('color','#00AED1').parents('.q-Home-f1-left-sort-li').siblings('.q-Home-f1-left-sort-li').find('.q-Home-f1-left-sort-text').css('color','#5A585E');
	}
  });
  $('.q-Home-f1-left-sort-li').live('mouseout', function(event) {
  	$(this).find('.q-Home-f1-left-sort-icon').hide();
  	$(this).find('.q-Home-f1-left-sort-hide').hide();
  	$(this).find('.q-Home-f1-left-sort-text').css('color','#5A585E');
  });
})
$(function () {
  $('.q-Home-f1-left-sort-list2 .q-Home-f1-left-sort-li').live('mouseover', function(event) {
  	var text = $(this).find('.q-Home-f1-left-sort-hide').text();
  	var divLength = text.trim().length;
  	if (divLength == 0) {
        $(this).find('.q-Home-f1-left-sort-hide').hide();
    } else {
	  	var showBoxHeight = $(this).height();
	  	var hideBoxHeight = $(this).find('.q-Home-f1-left-sort-hide').height();
	  	var hideBoxTop = -(hideBoxHeight-showBoxHeight)/2;
	  	var eq = $('.q-Home-f1-left-sort-list2 .q-Home-f1-left-sort-li').index(this);
	  	if (eq <= 3) {
	  		if (hideBoxTop < -97) {
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top','-42px');
		  	}else{
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top',hideBoxTop+'px');
		  	}
		}else if(eq > 3 && eq <= 6){
			if (hideBoxTop < -97) {
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top','-151px');
		  	}else{
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top',hideBoxTop+'px');
		  	}
		}else if(eq > 6 && eq <= 21){
			if (hideBoxTop < -97) {
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top','-170px');
		  	}else{
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top',hideBoxTop+'px');
		  	}
		}else if(eq = 22){
			if (hideBoxTop < -200) {
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top','200px');
		  	}else{
		  		$(this).find('.q-Home-f1-left-sort-hide').css('top',hideBoxTop+'px');
		  	}
		}	
	  	$(this).find('.q-Home-f1-left-sort-hide-list').last().css('border','0');
	  	$(this).find('.q-Home-f1-left-sort-icon').show();
	  	$(this).find('.q-Home-f1-left-sort-hide').show();
	  	$(this).find('.q-Home-f1-left-sort-text').css('color','#00AED1').parents('.q-Home-f1-left-sort-li').siblings('.q-Home-f1-left-sort-li').find('.q-Home-f1-left-sort-text').css('color','#5A585E');
	}
  });
  $('.q-Home-f1-left-sort-li').live('mouseout', function(event) {
  	$(this).find('.q-Home-f1-left-sort-icon').hide();
  	$(this).find('.q-Home-f1-left-sort-hide').hide();
  	$(this).find('.q-Home-f1-left-sort-text').css('color','#5A585E');
  });
})
// 轮播图的JS
$(function(){
	var f1Num = $('.q-Home-move_list').length;
	var c = 0;
	var autoRun = function(){
		c++;//变量自增
		c = (c==f1Num)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.q-Home-move_list').eq(c).fadeIn(200).siblings('.q-Home-move_list').hide();
		// 让c号添加q-Home-move_li_cur这个class，移出它兄弟节点的q-Home-move_li_cur class
		$('.q-Home-move_li').eq(c).addClass('q-Home-move_li_cur').siblings('.q-Home-move_li').removeClass('q-Home-move_li_cur');
	}
	var timer = setInterval(autoRun,5000);//设立定时器
	$('.q-Home-move_left').click(function(){
		c--;
		c = (c==-1)?(f1Num-1):c;
		// 让c号图片显示，兄弟图片隐藏
		$('.q-Home-move_list').eq(c).fadeIn(200).siblings('.q-Home-move_list').hide();
		// 让c号添加q-Home-move_li_cur这个class，移出它兄弟节点的q-Home-move_li_cur class
		$('.q-Home-move_li').eq(c).addClass('q-Home-move_li_cur').siblings('.q-Home-move_li').removeClass('q-Home-move_li_cur');
	})
	$('.q-Home-move_right').click(function(){
		c++;
		c = (c == f1Num)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.q-Home-move_list').eq(c).fadeIn(200).siblings('.q-Home-move_list').hide();
		// 让c号添加q-Home-move_li_cur这个class，移出它兄弟节点的q-Home-move_li_cur class
		$('.q-Home-move_li').eq(c).addClass('q-Home-move_li_cur').siblings('.q-Home-move_li').removeClass('q-Home-move_li_cur');
	})
	// 给li加鼠标移入事件
	$('.q-Home-move_li').mouseover(function() {
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
	$('.q-Home-move_li').mouseout(function() {
		timer = setInterval(autoRun,5000);//设立定时器
	});
	$('.q-Home-move_left').mouseover(function() {
		clearInterval(timer);
	});
	$('.q-Home-move_left').mouseout(function() {
		timer = setInterval(autoRun,5000);//设立定时器
	});
	$('.q-Home-move_right').mouseover(function() {
		clearInterval(timer);
	});
	$('.q-Home-move_right').mouseout(function() {
		timer = setInterval(autoRun,5000);//设立定时器
	});
	$('.q-Home-move_list').mouseover(function() {
		clearInterval(timer);
	});
	$('.q-Home-move_list').mouseout(function() {
		timer = setInterval(autoRun,5000);//设立定时器
	});
})
			// <!-- 一楼tab轮播图 -->
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
			$(function(){
				$.fn.parallelRoll = function(options){
					var opts = $.extend({}, $.fn.parallelRoll.defaults, options);
					var _this = this;					
					var l = _this.find(opts.tagName).length;
					var autoRollTimer;
					var flag = true; // 防止用户快速多次点击上下按钮
					var arr = new Array();
					/**
					 * 如果当  (可视个数+滚动个数 >滚动元素个数)  时  为不出现空白停顿   将滚动元素再赋值一次
					 * 同时赋值以后的滚动元素个数是之前的两倍  2 * l.
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
			
			
			$(document).ready(function(){
				$("#rolll").parallelRoll({
					amount : 1
				});				
			});
		})
	
//判断红星个数的方法
function star(num){
	var starNum = num*13;
	$('.q-Home-f1-tab-book-star').css({'width':''+starNum+''+'px'});
}
$(function(){
	star(3);
})
//tab轮播图 鼠标移入和移出效果
$(function(){
	$('#roll dd').live('mouseover', function() {
		$(this).css('border','1px solid #00AED1');
		$(this).find('.q-Home-f1-tab-book-face img').css({'opacity':'0.80','filter':'alpha(opacity=80)'});
	});
	$('#roll dd').live('mouseout', function() {
		$(this).css('border','1px solid #E7E7E7');
		$(this).find('.q-Home-f1-tab-book-face img').css({'opacity':'1','filter':'alpha(opacity=100)'});
	});
})
//二楼分类左右切换效果
$(function(){
	$('.q-Home-f2-left-sort').live('click', function(event) {
		//获得当前的序号
		var q = $(this).index();
		//让c号con显示，他的兄弟节点隐藏
		$('.q-Home-f2-left-sort-list').eq(q).show().siblings('.q-Home-f2-left-sort-list').hide();
		$(this).addClass('q-Home-f2-left-sort-cur').siblings('.q-Home-f2-left-sort-cur').removeClass('q-Home-f2-left-sort-cur');
	});
})
// 二楼左侧鼠标移入效果
$(function(){
	$('.q-Home-f2-left-sort-li').live('mouseover', function(event) {
		$(this).find('.q-Home-f2-left-sort-li-num').addClass('q-Home-f2-left-sort-li-num-cur').parents('.q-Home-f2-left-sort-li').siblings('.q-Home-f2-left-sort-li').find('.q-Home-f2-left-sort-li-num').removeClass('q-Home-f2-left-sort-li-num-cur');
		$(this).find('.q-Home-f2-left-sort-li-img').addClass('q-Home-f2-left-sort-li-img-cur').parents('.q-Home-f2-left-sort-li').siblings('.q-Home-f2-left-sort-li').find('.q-Home-f2-left-sort-li-img').removeClass('q-Home-f2-left-sort-li-img-cur');
		$(this).find('.q-Home-f2-left-sort-detail').addClass('q-Home-f2-left-sort-detail-cur').parents('.q-Home-f2-left-sort-li').siblings('.q-Home-f2-left-sort-li').find('.q-Home-f2-left-sort-detail').removeClass('q-Home-f2-left-sort-detail-cur');
		$(this).find('.q-Home-f2-left-sort-title').addClass('q-Home-f2-left-sort-title-cur').parents('.q-Home-f2-left-sort-li').siblings('.q-Home-f2-left-sort-li').find('.q-Home-f2-left-sort-title').removeClass('q-Home-f2-left-sort-title-cur');
	});

})
//一楼轮播区的鼠标移入效果
$(function(){
    $(function(){
        $('#roll dd').mouseenter(function(e){
            //获得移入方向
            var direction=hd_direction($(this),e);
            //改变盖子的位置
            switch(direction){
                case 'left':$(this).find('.q-Home-f2-book-list-hide-box').css({'left':'-118px','top':'84px'});
                break;
                case 'top':$(this).find('.q-Home-f2-book-list-hide-box').css({'left':'0','top':'-75px'});
                break;
                case 'right':$(this).find('.q-Home-f2-book-list-hide-box').css({'left':'118px','top':'84px'});
                break;
                case 'bottom':$(this).find('.q-Home-f2-book-list-hide-box').css({'left':'0','top':'163px'})
            }
            //让盖子运动
            $(this).find('.q-Home-f2-book-list-hide-box').stop().animate({'left':0,'top':'86px'},300);
        }).mouseleave(function(e){
            //获得移出方向
            var direction=hd_direction($(this),e);
            //改变盖子的位置
             switch(direction){
                case 'left':$(this).find('.q-Home-f2-book-list-hide-box').stop().animate({'left':'-118px','top':'84px'},200);
                break;
                case 'top':$(this).find('.q-Home-f2-book-list-hide-box').stop().animate({'left':'0','top':'-75px'},100);
                break;
                case 'right':$(this).find('.q-Home-f2-book-list-hide-box').stop().animate({'left':'118px','top':'84px'},200);
                break;
                case 'bottom':$(this).find('.q-Home-f2-book-list-hide-box').stop().animate({'left':'0','top':'163px'},200);
                break;
            }
        })
    })
})
//热门图书鼠标的移入效果
$(function(){
    $(function(){
        $('.q-Home-f2-book-list').mouseenter(function(e){
            //获得移入方向
            var direction=hd_direction($(this),e);
            //改变盖子的位置
            switch(direction){
                case 'left':$(this).find('.q-Home-f2-book-list-hide-box').css({'left':'-118px','top':'84px'});
                break;
                case 'top':$(this).find('.q-Home-f2-book-list-hide-box').css({'left':'0','top':'-75px'});
                break;
                case 'right':$(this).find('.q-Home-f2-book-list-hide-box').css({'left':'118px','top':'84px'});
                break;
                case 'bottom':$(this).find('.q-Home-f2-book-list-hide-box').css({'left':'0','top':'163px'})
            }
            //让盖子运动
            $(this).find('.q-Home-f2-book-list-hide-box').stop().animate({'left':0,'top':'86px'},300);
        }).mouseleave(function(e){
            //获得移出方向
            var direction=hd_direction($(this),e);
            //改变盖子的位置
             switch(direction){
                case 'left':$(this).find('.q-Home-f2-book-list-hide-box').stop().animate({'left':'-118px','top':'84px'},200);
                break;
                case 'top':$(this).find('.q-Home-f2-book-list-hide-box').stop().animate({'left':'0','top':'-75px'},100);
                break;
                case 'right':$(this).find('.q-Home-f2-book-list-hide-box').stop().animate({'left':'118px','top':'84px'},200);
                break;
                case 'bottom':$(this).find('.q-Home-f2-book-list-hide-box').stop().animate({'left':'0','top':'163px'},200);
                break;
            }
        })
    })
})
//二楼热门图书 鼠标移入和移出效果
$(function(){
	$('.q-Home-f2-book-list').live('mouseover', function() {
		$(this).css('border','1px solid #00AED1');
		$(this).find('.q-Home-f2-list-book-face img').css({'opacity':'0.80','filter':'alpha(opacity=80)'});
	});
	$('.q-Home-f2-book-list').live('mouseout', function() {
		$(this).css('border','1px solid #E7E7E7');
		$(this).find('.q-Home-f2-list-book-face img').css({'opacity':'1','filter':'alpha(opacity=100)'});
	});
})
// 三楼tab切换 轮播图的JS
$(function(){
	var f3Num = $('.q-Home-f3-move_list').length;
	$('.q-Home-f3-move_inside').css('width',f3Num*1020+'px');
	//左边Tab
	var a=0
	var autoMove = function(){
		a++;
		a = (a==f3Num)?0:a;
		if(a==f3Num){
			a=0
		}
		var left=a*-1020
		$('.q-Home-f3-move_inside').css({'left':left+'px'})
		$('.q-Home-f3-li').eq(a).addClass('q-Home-f3-li-cur').siblings('.q-Home-f3-li').removeClass('q-Home-f3-li-cur');
	}
	var timer = setInterval(autoMove,5000);//设立定时器
	$('.q-Home-f3-move-left').click(function(){
		a--;
		a = (a==-1)?(f3Num-1):a;
		if(a==-1){
			a=(f3Num-1);
		}
		var left=a*-1020
		$('.q-Home-f3-move_inside').css({'left':left+'px'})
		$('.q-Home-f3-li').eq(a).addClass('q-Home-f3-li-cur').siblings('.q-Home-f3-li').removeClass('q-Home-f3-li-cur');
	})
	// 右侧边Tab
	$('.q-Home-f3-move-right').click(function(){
		a++;
		a = (a==f3Num)?0:a;
		if(a==f3Num){
			a=1
		}
		var left=a*-1020
		$('.q-Home-f3-move_inside').css({'left':left+'px'})
		$('.q-Home-f3-li').eq(a).addClass('q-Home-f3-li-cur').siblings('.q-Home-f3-li').removeClass('q-Home-f3-li-cur');
	})
	// 给li加鼠标移入事件
	$('.q-Home-f3-li').mouseover(function() {
		clearInterval(timer);
		var c=$(this).index();//获得鼠标移入的li的序号
		//计算大div的left值
		var left=c*-1020;
		//让div运动到对应的位置
		$('.q-Home-f3-move_inside').stop().animate({'left':left+'px'},200);
		//让c号li加上class，并且移出兄弟li身上的class
		$('.q-Home-f3-li').eq(c).addClass('q-Home-f3-li-cur').siblings('.q-Home-f3-li').removeClass('q-Home-f3-li-cur');
	});

	// 给li加鼠标移出效果
	$('.q-Home-f3-li').mouseout(function() {
		timer = setInterval(autoMove,5000);//设立定时器
	});
	$('.q-Home-f3-move-left').mouseover(function() {
		clearInterval(timer);
	});
	$('.q-Home-f3-move-left').mouseout(function() {
		timer = setInterval(autoMove,5000);//设立定时器
	});
	$('.q-Home-f3-move-right').mouseover(function() {
		clearInterval(timer);
	});
	$('.q-Home-f3-move-right').mouseout(function() {
		timer = setInterval(autoMove,5000);//设立定时器
	});
	$('.q-Home-f3-move_list').mouseover(function() {
		clearInterval(timer);
	});
	$('.q-Home-f3-move_list').mouseout(function() {
		timer = setInterval(autoMove,5000);//设立定时器
	});

})
//三楼鼠标移入效果
$(function(){
	$('.q-Home-f3-move_li').live('mouseover', function() {
		$(this).css('border','1px solid #00AED1');
		$(this).find('.q-Home-f3-move_face img').css({'opacity':'0.80','filter':'alpha(opacity=80)'});
	});
	$('.q-Home-f3-move_li').live('mouseout', function() {
		$(this).css('border','1px solid #E7E7E7');
		$(this).find('.q-Home-f3-move_face img').css({'opacity':'1','filter':'alpha(opacity=100)'});
	});
})
//五楼出版社LOGO鼠标移入效果
$(function(){
	$('.q-Home-f5-img').live('mouseover', function() {
		$(this).css('border','1px solid #00AED1');
		$(this).find('img').css({'opacity':'0.80','filter':'alpha(opacity=80)'});
	});
	$('.q-Home-f5-img').live('mouseout', function() {
		$(this).css('border','1px solid #E7E7E7');
		$(this).find('img').css({'opacity':'1','filter':'alpha(opacity=100)'});
	});
})
//当点击跳转链接后，回到页面顶部位置  
$(function(){
	$('.q-Home-footer-back-top').live('click', function(event) {
		$('body,html').animate({scrollTop:0},1000);  
	});
})
// =====================首页新增JS===================================
//tab轮播图 鼠标移入和移出效果
$(function(){
	$('#rolll dd a').live('mouseover', function() {
		$(this).css('border','1px solid #00AED1');
		$(this).find('.q-Home-f1-tab-book-face img').css({'opacity':'0.80','filter':'alpha(opacity=80)'});
	});
	$('#rolll dd a').live('mouseout', function() {
		$(this).css('border','1px solid #E7E7E7');
		$(this).find('.q-Home-f1-tab-book-face img').css({'opacity':'1','filter':'alpha(opacity=100)'});
	});
})
// 红心点击收藏
$(function(){
	$('.q-HomeLeaderboard-save').live('click', function(event) {
		var title = $(this).attr('title');
		if(title == "收藏"){
			$(this).attr('title', '已收藏');
			$(this).css('background','url(./images/collect-xheart.png) no-repeat');
		}else{
			$(this).attr('title', '收藏');
			$(this).css('background','url(./images/collect-wheart.png) no-repeat');
		}
	});
})
// 2楼带小滑块的 Tab切换
$(function(){
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
	function TabMove(tag1,tag2,tag3,tag4,tag5){
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
			var q = $(this).index();
			$(tag5).eq(q).show().siblings(tag5).hide();
			$(tag2).stop().animate({'left':left},100);
		});
	}
	// 2楼带小滑块的
	RWidth('.q-Home-f2-right-nav-box');
	FirstStatus('.q-Home-f2-right-nav','.q-Home-f2-move','.q-Home-f2-moveIcon');
	TabMove('.q-Home-f2-right-nav','.q-Home-f2-move','.q-Home-f2-moveIcon','q-Home-f2-right-nav_cur','.q-Home-f2-book-container');
	// 4楼带小滑块的
	RWidth('.q-Home-f4-right-nav-box');
	FirstStatus('.q-Home-f4-right-nav','.q-Home-f4-move','.q-Home-f4-moveIcon');
	TabMove('.q-Home-f4-right-nav','.q-Home-f4-move','.q-Home-f4-moveIcon','q-Home-f4-right-nav_cur','.q-Home-f4-content-box');
	// 5楼带小滑块的
	RWidth('.q-Home-f5-right-nav-box');
	FirstStatus('.q-Home-f5-right-nav','.q-Home-f5-move','.q-Home-f5-moveIcon');
	TabMove('.q-Home-f5-right-nav','.q-Home-f5-move','.q-Home-f5-moveIcon','q-Home-f5-right-nav_cur','.q-Home-f5-book-container');
})
//四楼点击伸缩div
$(function(){
	$('.q-Home-f4-content-flex').toggle(function() {
		$(this).attr({'src': './images/banyuanjianxtou-up.png','title':'收起'});
		$(this).prev().find('.q-Home-f4-content-box').stop().animate({ 'height': '490px'}, 500);
	}, function() {
		$(this).attr({'src':'./images/banyuanjianxtou.png','title':'展开'});
		$(this).prev().find('.q-Home-f4-content-box').stop().animate({ 'height': '240px'}, 500);
	});
})
	
























