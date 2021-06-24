//鼠标延迟加载
(function ($) {
    $.fn.hoverDelay = function (options) {
        var defaults = {
            hoverDuring: 200,
            outDuring: 200,
            hoverEvent: function () {
                $.noop();
            },
            outEvent: function () {
                $.noop();
            }
        };
        var sets = $.extend(defaults, options || {});
        var hoverTimer, outTimer;
        return $(this).each(function () {
            $(this).hover(function () {
                clearTimeout(outTimer);
                hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
            }, function () {
                clearTimeout(hoverTimer);
                outTimer = setTimeout(sets.outEvent, sets.outDuring);
            });
        });
    }
})(jQuery);
//轮播图函数
function MoveImg(time) {
	//自动判断屏幕宽度
	MoveImgWidthAuto();
	//判断的滚动的高度
	var h = $('.fl-move-content .move li a img').height();
	//初始化化计数器
	var i = 0;
	//获取轮播图的个数
	var totalNum = $('.fl-move-content .move li').length;
	//遍历出小点点
	for (var j = 0; j < totalNum; j++) {
        $('.fl-move-content .doc').append('<li></li>');
    }
	//第一个小点点选中
	$('.fl-move-content .doc li').first().addClass('cur');
	function autoRunLeft() {
		//判断的滚动的高度
		var h = $('.fl-move-content .move li a img').height();
		i --;
        if (i == -1) {
            i = totalNum - 1;
            $('.fl-move-content .move li').eq(0).stop(false, true).animate({'top': h+'px'},300,function(){
            	$(this).css('top','-'+h+'px');
            });
            $('.fl-move-content .move li').eq(i).stop(false, true).animate({'top': '0px'},300);
        }else{
        	$('.fl-move-content .move li').eq(i).stop(false, true).animate({'top': '0px'},300);
        	$('.fl-move-content .move li').eq(i+1).stop(false, true).animate({'top': h+'px'},300,function(){
        		$(this).css('top','-'+h+'px');
        	}).siblings('li').css('top','-'+h+'px');
        }
        $('.fl-move-content .doc li').eq(i).addClass('cur').siblings('li').removeClass('cur');
    }
	function autoRunRight(){
		//判断的滚动的高度
		var h = $('.fl-move-content .move li a img').height();
		i++;
        if (i == totalNum) {
        	i = 0;
        }
        $('.fl-move-content .move li').eq(i).stop(false, true).animate({'top': '0px'},300);
        $('.fl-move-content .move li').eq(i-1).stop(false, true).animate({'top': h+'px'},300,function(){
        	$(this).css('top','-'+h+'px');
        }).siblings('li').css('top','-'+h+'px');
        $('.fl-move-content .doc li').eq(i).addClass('cur').siblings('li').removeClass('cur');
	}
	timer = setInterval(autoRunRight, time);
    //左侧点击效果
	$('.fl-move-content .left').click(function(){
		autoRunLeft();
	});
	//右侧点击效果
	$('.fl-move-content .right').click(function(){
		autoRunRight();
	});
	//点的鼠标移出效果
	$(".fl-move-content .doc li").each(function () {
        var that = $(this);
        that.hoverDelay({
            hoverEvent: function () {
                var indexNum = that.index();
                if(indexNum != i){
		        	$('.fl-move-content .move li').eq(indexNum).stop(false, true).animate({'top': '0px'},300);
			        $('.fl-move-content .move li').eq(i).stop(false, true).animate({'top': h+'px'},300,function(){
			        	$(this).css('top','-'+h+'px');
			        }).siblings('li').css('top','-'+h+'px');	
		        }
		        i = indexNum;
		        that.addClass('cur').siblings('li').removeClass('cur');
		        $('.fl-move-content .move li').eq(i).addClass('active').siblings('li').removeClass('active');
            }
        });
    });
    $('.fl-move-content').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(autoRunRight, time);
    });
}
//自动判断屏幕宽度
function MoveImgWidthAuto(){
	w = $(window).width();
	if(w <= 1500){
		var leftNum = (1500 - w)/2;
		//轮播图的高度
		$('.fl-move-content').height(500);
		$('.fl-move-content .move li a>img').css({'width':'1500px','height':'500px'});
		$('.fl-move-content .move li').css('top','-500px');
		$('.fl-move-content .move li').first().css('top','0');
		$('.fl-move-content .move li a img').css('left','-'+leftNum+'px');
		$('.fl-move-content .left').css('left','5%');
		$('.fl-move-content .left').css('right','5%');
	}else{
		//轮播图的高度
		$('.fl-move-content').height(w/3);
		$('.fl-move-content .move li a>img').css({'width':'1500px','height':w/3+'px'});
		$('.fl-move-content .move li').css('top','-'+w/3+'px');
		$('.fl-move-content .move li').first().css('top','0');
		$('.fl-move-content .left').css('left','135px');
		$('.fl-move-content .left').css('right','135px');
		$('.fl-move-content .move li a img').css('width',w+'px');
	}
	//判断publications背景图的宽度
	if(w <= 1728){
		var leftNum = (1728 - w)/2;
		$('.fl-publications-bg').width('1728').css('left','-'+leftNum+'px');
	}else{
		$('.fl-publications-bg').width(w);
	}
}
//press一楼的鼠标移入效果
function PressHoverUi(){
	$('.fl-press-list').hover(function(){
		$(this).find('.fl-press-listImg').stop().animate({'opacity':'0.5','filter':'alpha(opacity:50)'},100);
		$(this).find('.fl-press-listTag').stop().animate({'opacity':'0.5','filter':'alpha(opacity:50)'},100);
	},function(){
		$(this).find('.fl-press-listImg').stop().animate({'opacity':'1','filter':'alpha(opacity:100)'},100);
		$(this).find('.fl-press-listTag').stop().animate({'opacity':'1','filter':'alpha(opacity:100)'},100);
	});
}
//鼠标点击切换效果公共函数
function CommonClickUi(navClass, contentClass){
	$(navClass).click(function(){
		var index = $(this).index();
		$(this).addClass('active').siblings('a').removeClass('active');
		$(contentClass).eq(index).fadeIn(400).siblings('div').hide();
		$(contentClass).eq(index).addClass('active').siblings('div').removeClass('active');
	})
}
//Experts计算每个圆点的位置
/*
* 求圆周上等分点的坐标
* ox,oy为圆心坐标
* r为半径
* count为等分个数
*/
function GetPoint(r, ox, oy, count){
	var point = []; //结果
    var radians = (Math.PI / 180) * Math.round(360 / count), //弧度
        i = 0;
    for(; i < count; i++){
        var x = ox + r * Math.sin(radians * i) - 6,
            y = oy + r * Math.cos(radians * i) - 6;
        point.unshift({x:x,y:y}); //为保持数据顺时针
    }
    return point;
}
function CiclePosition(){
	//获取元素的长度
	var count = $('.fl-Experts-doc').length;
	//第一个元素选中状态
	$('.fl-Experts-webList').first().addClass('active')
	$(GetPoint(174, 174, 174, count)).each(function(i,item){
		var t = 15;
		var l = '-'+$('.fl-Experts-webList').eq(i).width()/2;
		if(item.y < 174){
			t = - 25
		}
		$('.fl-Experts-webList').eq(i).css({'left':l+'px', 'top': t+'px'});
		$('.fl-Experts-doc').eq(i).css({'left':item.x+'px', 'top':item.y+'px'});
	});
}
//Experts鼠标移入效果
function ExpertsHover() {
    $(".fl-Experts-doc").each(function () {
        var that = $(this);
        that.hoverDelay({
            hoverEvent: function () {
                var i = that.index();
                that.find('a').addClass('active').parent().siblings('div').find('a').removeClass('active');
                $('.fl-Experts-wrap').eq(i).stop().fadeIn(400).siblings('div').hide();
                $('.fl-Experts-wrap').eq(i).addClass('active').siblings('div').removeClass('active');
            }
        });
    });
}
//地图的鼠标移入效果
function MapHoverUi(){
	//各个国家图标的鼠标移入效果
	$('.fl-Think-list').mouseenter(function(){
		$(this).addClass('active').siblings('div').removeClass('active');
	});
	//国家下的各个库的鼠标移入效果
	$('.fl-Think-listNavBox a').mouseenter(function(){
		var i = $(this).index();
		$(this).addClass('active').siblings('a').removeClass('active');
		$('.fl-Think-listWrap').removeClass('active');
		$(this).parents('.fl-Think-list').find('.fl-Think-listWrap').eq(i).addClass('active');
	});
	$('.fl-Think-listDoc').mouseenter(function(){
		$('.fl-Think-listWrap').removeClass('active');
		$('.fl-Think-listNavBox a').removeClass('active')
	})
}
//向上跳跃的效果
function UpaddActive(tagName,className){
	var win_h=$(window).height()*0.8;
	var t=$(tagName).offset().top;
	var top=$(window).scrollTop();
	//document.title = top;
	if( top>t-win_h){
		$(tagName).addClass(className);	
	}
}
//检索的方法
$(function(){
	MoveImg(3000);
	//press一楼的鼠标移入效果
	PressHoverUi();
	//Publications鼠标点击切换效果
	CommonClickUi('.fl-publications-nav', '.fl-publications-conList');
	//Press的点击效果
	CommonClickUi('.fl-press-tagNav', '.fl-press-content');
	//Experts计算每个圆点的位置
	CiclePosition();
	//Experts鼠标移入效果
	ExpertsHover();
	//地图的鼠标移入效果
	MapHoverUi();
	//导航条的鼠标移入效果
	NavHoverUi();
	//滚动条滚动时触发
	$(window).scroll(function(){
		//press标签的上升效果
		UpaddActive('.fl-press-titleBox','up');
		UpaddActive('.fl-press-tagNav','up');
		UpaddActive('.fl-press-list','up');
		UpaddActive('.fl-Experts-content','up');
	})
});
$(window).resize(function(){
	MoveImgWidthAuto();
})
