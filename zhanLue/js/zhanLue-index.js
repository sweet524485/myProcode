function moveImg(id,time){
	// 设置初始值
	var i = 0;
	// 设定定时器
	var timer = null;
	// 获取单个轮播的宽度
	var w = $(id+' .move li').width();
	// 复制四倍要轮播的东西
	var clone = $(id+' .move li').clone();
	$(id+' .move').append(clone);
	var clone = $(id+' .move li').clone();
	$(id+' .move').append(clone);
	// 获取两倍的轮播列表个数
	var num = $(id+' .move li').size();
	for (var j = 0; j < num/4; j++) {
		$(id+' .doc').append('<li></li>');
	}
	// 让轮播内部的盒子足够大
	$(id+' .move').css('width',num*w+'px');
	$(id+' .doc li').first().addClass('cur');
	// 自动轮播函数
	function autoRun(){
		i ++;
		if(i == num/4){
			$(id+' .doc li').eq(0).addClass('cur').siblings('li').removeClass('cur');
		}
		if (i == num/4+1) {
			$(id+' .move').css({'left':'0px'});
			i = 1;
		}
		$(id+' .move').stop().animate({'left':'-'+w*i+'px'},300);
		$(id+' .doc li').eq(i).addClass('cur').siblings('li').removeClass('cur');
	}
	timer = setInterval(autoRun,time);
	$(id+' .left').on('click',function(){
		autoRun();
	});
	$(id+' .right').on('click',function(){
		i --;
		if (i == -1) {
			$(id+' .move').css({'left':'-'+w*(num/4)+'px'});
			i = num/4-1;
		}
		$(id+' .move').stop().animate({'left':'-'+w*i+'px'},300);
		$(id+' .doc li').eq(i).addClass('cur').siblings('li').removeClass('cur');
	});
	$(id+' .doc li').hover(function(){
		var indexNum = $(this).index();
		i = indexNum;
		$(this).addClass('cur').siblings('li').removeClass('cur');
		$(id+' .move').stop().animate({'left':'-'+w*i+'px'},300);
	})
	$(id).hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoRun,time);
	});
}
$(function(){
	moveImg("#zl-news-box",5000);
	//tab切换鼠标移入效果
	$('.zl-main-navList').mouseenter(function(){
		//获取当前索引
		var index = $(this).index();
		//让刚移入的那个加选中样式
		$(this).addClass('active').siblings('.zl-main-navList').removeClass('active');
		//让对应的div显示出来
		$(this).parents('.zl-main-list').find('.zl-main-conRightList').eq(index).show().siblings('div').hide();
	});
})
