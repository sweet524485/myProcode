// JavaScript Document
function showDropList(eBtn, destDom, dataSrcDom)
{
	var src = $(dataSrcDom);
	var dest = $(destDom);
	var data = src.children();
	var btn = $(eBtn);
	
	var dW = parseInt(dest.parent('.inputBox').css('width'));
	var dH = parseInt(dest.parent('.inputBox').css('height'));
	src.css('width', (dW+2));//设置ul的宽度
	data.each(function(e){
		$(this).css('width', dW);//设置li的宽度
	});
	//var pos = dest.position();//定位目标
	var pos = dest.parent('.inputBox').position();
	if(parseInt(src.attr('left')) != (pos.left - 1))
	{
		src.css({ left: (pos.left), top: (pos.top + dH + 2)});//定位列表
	}
	
	if(btn.hasClass('btnUp'))
	{
		src.slideUp("fast");//隐藏下拉列表
		btn.removeClass('btnUp');
	}else
	{
		btn.addClass('btnUp');
		src.slideDown("fast");//显示下拉列表
	}
	data.each(function(e){
		if($(this).text() == dest.val())
		{
			$(this).css({background:"none", background:"#1e90ff", color:"#fff"});
			//$(this).css('background-color','#FFB');//判断当前的值，并设置样式
		}
	});
	
	data.click(function(e) {
		data.removeAttr('style');
		dest.val($(e.target).text());//选择值
		dest.css('color','#3a3a3a');
    });
	
	src.mouseleave(function() {
        src.slideUp("fast");//隐藏下拉列表
		btn.removeClass('btnUp');
    });
};
//改变输入框中文字颜色
function changeKeywordColor(selector, defaultValue)
{
	var dest = $(selector);
	dest.focus(function(e) {
		$(e.target).css('color', '#3a3a3a');
        if($(e.target).val() === defaultValue)
		{
			$(e.target).val('');
		}
    });
	
	dest.blur(function(e) {
        if($(e.target).val() === '')
		{
			$(e.target).val(defaultValue);
			$(e.target).css('color', '#aaaaaa');
		}
    });
};
function switchBoxBody(){
	$('.boxHead li').click(function(e){
		var name = e.target.tagName.toLowerCase();		
		var env = (name==="li")?($(e.target)):($(e.target).parent('li'));
		var parent = env.parent('.boxHead');
		var children = parent.children('li');//父元素的所有子元素，包含当前li
		var more = env.siblings('.more').children('a');
		var str = env.children('a').attr('href');
		var len = children.length;
		var infoBox = parent.siblings('.boxBody');
		
		if(parent.find('.blue').length > 0)//主色调为蓝色
		{
			if(env.hasClass('blue') || env.hasClass('more'))//当点击蓝色标签或more时执行
			{
				window.location.href = str;
			}else
			{
				env.siblings('.blue').removeAttr('class');
				env.addClass('blue');
				children.eq(0).addClass('bl');//为列表第一项加左边框

				if(more.length > 0)//存在more
				{
					for(var i=0; i<len; i++)
					{
						if((children.eq(i).is(env)) && (i!= len-1))
						{
							infoBox.hide();
							infoBox.eq(i).show();
						}
					}
					more.attr('href', str);//改变more的链接地址
				}else if(more.length === 0)//不存在more
				{
					for(var i=0; i<len; i++)
					{
						if(children.eq(i).is(env))
						{
							infoBox.hide();
							infoBox.eq(i).show();
						}
					}
				}//切换显示列表
			} 
		}else if(parent.find('.orange').length > 0)//主色调为橙色
		{
			if(env.hasClass('orange') || env.hasClass('more'))
			{
				window.location.href = str;
			}else
			{
				env.siblings('.orange').removeAttr('class');
				env.addClass('orange');
				children.eq(0).addClass('bl');//为列表第一项加左边框

				if(more.length > 0)
				{
					for(var i=0; i<len; i++)
					{
						if((children.eq(i).is(env)) && (i!= len-1))
						{
							infoBox.hide();
							infoBox.eq(i).show();
						}
					}
					more.attr('href', str);//改变more的链接地址
				}else if(more.length === 0)
				{
					for(var i=0; i<len; i++)
					{
						if(children.eq(i).is(env))
						{
							infoBox.hide();
							infoBox.eq(i).show();
						}
					}
				}//切换显示列表
			} 
		} 
    });
}
function switchSearchLabel(){//切换搜索标签
	$('.labelBox li').click(function(e) {
        $(this).siblings().removeAttr('class');
		$(this).addClass('blueBg');
    });
}
function showClassTree(){//显示标准分类导航
	$('.classNav').click(function(e) {
        if($(this).hasClass('classNavBg') === false)
		{
			$(this).addClass('classNavBg');
			alert('这里需要一个树状导航插件');
		}else
		{
			$(this).removeClass('classNavBg');
			alert('此时关闭插件');
		}
    });
}
function setPageNavBtns(){//设置分页导航按钮样式
	var pageNavBtns = $('.pageNavBox a');
	pageNavBtns.click(function(e) {
        var env = $(e.target);
		
		if(!(env.is(pageNavBtns.eq(0)) || env.is(pageNavBtns.eq((pageNavBtns.length) -1))))
		{
			pageNavBtns.removeClass('current');
			env.addClass('current');
		}        
    });
}
/*
 * 以下是新版首页js
 * author：仇郯郯
 * 个人主页：www.qiutantan.com
 * 
 */
//搜索导航的点击效果
function SearchNavClickUi(){
	$('.wuhu-search-nav').click(function(){
		$(this).addClass('active').siblings('a').removeClass('active');
	});
}
//搜索框得到焦点去除默认值
function Placeholder(){
	var defaultVal = $('.wuhu-search-input').val();
	$('.wuhu-search-input').focus(function () {
        if ($(this).val() == defaultVal) {
            $(this).val("");
        }
    })
    $('.wuhu-search-input').blur(function () {
        if ($(this).val() == "") {
            $(this).val(defaultVal);
        } 
    });
}
//轮播图的方法，数据加载完成后调用
function MoveImg(id,time){
	// 设置初始值
	var i = 0;
	// 设定定时器
	var timer = null;
	// 获取单个轮播的宽度
	var w = $(id+' .wuhu-move-content .wuhu-move-li').width();
	// 复制四倍要轮播的东西
	var clone = $(id+' .wuhu-move-content .wuhu-move-li').clone();
	$(id+' .wuhu-move-content').append(clone);
	var clone = $(id+' .wuhu-move-content .wuhu-move-li').clone();
	$(id+' .wuhu-move-content').append(clone);
	//给每个li循环的数据添加left和top值
	$(id+' .wuhu-move-content .wuhu-move-li').each(function(i,item){
		var left = $(this).position().left;
		var top = $(this).position().top;
		$(this).css({'left':left+'px','top':top+'px'});
	});
	//给每个循环出来的li添加定位属性
	$(id+' .wuhu-move-content .wuhu-move-li').each(function(i,item){
		$(this).css('position','absolute');
	});
	// 获取两倍的轮播列表个数
	var num = $(id+' .wuhu-move-content .wuhu-move-li').size();
	for (var j = 0; j < num/4; j++) {
		$(id+' .wuhu-move-docPosition').append('<a href="javascript:void(0);" class="wuhu-move-doc"></a>');
	}
	// 让轮播内部的盒子足够大
	$(id+' .wuhu-move-content').css('width',num*w+'px');
	$(id+' .wuhu-move-docPosition .wuhu-move-doc').first().addClass('active');
	// 自动轮播函数
	function autoRun(){
		i ++;
		if(i == num/4){
			$(id+' .wuhu-move-docPosition .wuhu-move-doc').eq(0).addClass('active').siblings('a').removeClass('active');
		}
		if (i == num/4+1) {
			$(id+' .wuhu-move-content').css({'left':'0px'});
			i = 1;
		}
		$(id+' .wuhu-move-content').stop().animate({'left':'-'+w*i+'px'},300);
		$(id+' .wuhu-move-docPosition .wuhu-move-doc').eq(i).addClass('active').siblings('a').removeClass('active');
	}
	timer = setInterval(autoRun,time);
	$(id+' .btn_r').on('click',function(){
		autoRun();
	});
	$(id+' .btn_l').on('click',function(){
		i --;
		if (i == -1) {
			$(id+' .wuhu-move-content').css({'left':'-'+w*(num/4)+'px'});
			i = num/4-1;
		}
		$(id+' .wuhu-move-content').stop().animate({'left':'-'+w*i+'px'},300);
		$(id+' .wuhu-move-docPosition .wuhu-move-doc').eq(i).addClass('active').siblings('a').removeClass('active');
	});
	$(id+' .wuhu-move-docPosition .wuhu-move-doc').hover(function(){
		var indexNum = $(this).index();
		i = indexNum;
		$(this).addClass('active').siblings('a').removeClass('active');
		$(id+' .wuhu-move-content').stop().animate({'left':'-'+w*i+'px'},300);
	})
	$(id).hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoRun,time);
	});
}
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
//Tab切换效果
function tabNavHover() {
    $(".wuhu-tab-nav").each(function () {
        var that = $(this);
        that.hoverDelay({
            hoverEvent: function () {
                var i = that.index();
                that.addClass('active').siblings('a').removeClass('active');
                that.parents('.wuhu-tab-content').find('.wuhu-tab-conList').eq(i).stop().fadeIn(400).siblings('div').hide();
                that.parents('.wuhu-tab-content').find('.wuhu-tab-conList').eq(i).addClass('active').siblings('div').removeClass('active');
            }
        });
    });
}
//页面加载完成后调用
$(function(){
	//搜索导航的点击效果
	SearchNavClickUi();
	//搜索框得到焦点去除默认值
	Placeholder();
	//轮播区方法调用
	MoveImg('#moveWrap',4000);
	//Tab切换效果
	tabNavHover();
})






