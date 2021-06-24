//图片轮播图
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
		i --;
		if (i == -1) {
			$(id+' .move').css({'left':'-'+w*(num/4)+'px'});
			i = num/4-1;
		}
		$(id+' .move').stop().animate({'left':'-'+w*i+'px'},300);
		$(id+' .doc li').eq(i).addClass('cur').siblings('li').removeClass('cur');
	}
	timer = setInterval(autoRun,time);
	$(id+' .gf-moveLeft').live('click',function(){
		autoRun();
	});
	$(id+' .gf-moveRight').live('click',function(){
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
//图书分类的鼠标移入效果
function navHover(){
	$('.gf-main-left_list').hover(function(){
		$(this).addClass('active');
		$(this).prev().find('.gf-main-left_li').css('border-bottom','1px solid #F8F8F2');
		$(this).find('.gf-main-left_li').css('border-bottom','1px solid #B8BAB9');
	},function(){
		$(this).removeClass('active');
		$(this).prev().find('.gf-main-left_li').css('border-bottom','1px solid #E6E6E6');
		$(this).find('.gf-main-left_li').css('border-bottom','1px solid #E6E6E6');
	})
}
//学科分类鼠标移入Tab切换
function subjectTab(){
	$('.gf-bottomBook-nav').hover(function(){
		var index = $(this).index();
		$(this).addClass('active').siblings('.gf-bottomBook-nav').removeClass('active');
		$(this).parents('.gf-bottomBook-cotainer').find('.gf-bottomBook-box').eq(index).addClass('active').siblings('.gf-bottomBook-box').removeClass('active');
	})
}
$(function(){
	//图书分类的鼠标移入效果方法调用
	navHover();
	//学科分类鼠标移入Tab切换调用
	subjectTab()
	//轮播图调用
	moveImg("#gf-movebox",4000);
})
