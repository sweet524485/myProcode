// 顶部 top网站企业招牌 上移
$(function(){
	$('#top a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},300)
	})

	$('#top a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})
})
///////////////////////轮播图/////////////////////////////////////////

$(function(){
	var c = 0;
	var autoRun = function(){
		c++;//变量自增
		c = (c==8)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('#jd a').eq(c).fadeIn(200).siblings('a').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('#jd ul li').eq(c).addClass('cur').siblings('li').removeClass('cur');
	}
	var timer = setInterval(autoRun,3000);//设立定时器
	// 给li加鼠标移入事件
	$('#jd ul li').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
		// 获得当前鼠标移入的li的序号
		c = $(this).index();
		// 让c号图片显示，兄弟图片隐藏
		$('#jd a ').eq(c).fadeIn(200).siblings('a').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('#jd ul li').eq(c).addClass('cur').siblings('li').removeClass('cur');
	});

	// 给li加鼠标移出效果
	$('#jd ul li').mouseout(function() {
		timer = setInterval(autoRun,3000);//设立定时器
	});
})

$(function(){
	$('#jd a').mouseenter(function(){
		$(this).find('img').stop().stop().animate({'top':'10px'},300)
	})

	$('#jd a').mouseleave(function(){
		$(this).find('img').stop().stop().animate({'top':'0px'},300)
	})
})

$(function(){
	$('#main .main_left .list a').mouseenter(function(){
		$('#main .main_left .list a').stop().animate({'top':'-10px'},300)
	})

	$('#main .main_left .list a').mouseleave(function(){
		$('#main .main_left .list a').stop().animate({'top':'0px'},300)
	})
})

$(function(){
	$('#main .main_left .list1 a').mouseenter(function(){
		$('#main .main_left .list1 a').stop().animate({'top':'-10px'},300)
	})

	$('#main .main_left .list1 a').mouseleave(function(){
		$('#main .main_left .list1 a').stop().animate({'top':'0px'},300)
	})
})
$(function(){
	$('#main .main_left .list2 a').mouseenter(function(){
		$('#main .main_left .list2 a').stop().animate({'top':'-10px'},300)
	})

	$('#main .main_left .list2 a').mouseleave(function(){
		$('#main .main_left .list2 a').stop().animate({'top':'0px'},300)
	})
})
/////////////////////中部图片动态效果//////////////////////////////
$(function(){
	$('#main .main_mid .main_mid_list1 a').mouseenter(function(){
		$('#main .main_mid .main_mid_list1 a').stop().animate({'top':'-10px'},300)
	})

	$('#main .main_mid .main_mid_list1 a').mouseleave(function(){
		$('#main .main_mid .main_mid_list1 a').stop().animate({'top':'0px'},300)
	})
})

$(function(){
	$('#main .main_mid .main_mid_list2 a').mouseenter(function(){
		$('#main .main_mid .main_mid_list2 a').stop().animate({'top':'-10px'},300)
	})

	$('#main .main_mid .main_mid_list2 a').mouseleave(function(){
		$('#main .main_mid .main_mid_list2 a').stop().animate({'top':'0px'},300)
	})
})


$(function(){
	$('#main .main_mid .bg1 .bg1').mouseenter(function(){
		$('#main .main_mid .bg1 .bg1').stop().animate({'top':'5px'},300)
	})

	$('#main .main_mid .bg1 .bg1').mouseleave(function(){
		$('#main .main_mid .bg1 .bg1').stop().animate({'top':'15px'},300)
	})
})

$(function(){
	$('#main .main_mid .bg2 .bg2 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},300)
	})

	$('#main .main_mid .bg2 .bg2 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

$(function(){
	$('#main .main_right .main_right_list a').mouseenter(function(){
		$('#main .main_right .main_right_list a').stop().animate({'top':'-10px'},300)
	})

	$('#main .main_right .main_right_list a').mouseleave(function(){
		$('#main .main_right .main_right_list a').stop().animate({'top':'0px'},300)
	})
})

$(function(){
	$('#bottom .bottom').mouseenter(function(){
		$('#bottom .bottom').stop().animate({'top':'7px'},300)
	})

	$('#bottom .bottom').mouseleave(function(){
		$('#bottom .bottom').stop().animate({'top':'17px'},300)
	})
})