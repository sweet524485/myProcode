// 轮播图的JS
$(function(){
	var c = 0;
	var autoRun = function(){
		c++;//变量自增
		c = (c==4)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.qtt-move_list').eq(c).fadeIn(200).siblings('.qtt-move_list').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('.qtt-move_li').eq(c).addClass('cur').siblings('.qtt-move_li').removeClass('cur');
	}
	var timer = setInterval(autoRun,3000);//设立定时器
	$('.qtt-move_left').click(function(){
		c--;
		c = (c==-1)?3:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.qtt-move_list').eq(c).fadeIn(200).siblings('.qtt-move_list').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('.qtt-move_li').eq(c).addClass('cur').siblings('.qtt-move_li').removeClass('cur');
	})
	$('.qtt-move_right').click(function(){
		c++;
		c = (c==4)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.qtt-move_list').eq(c).fadeIn(200).siblings('.qtt-move_list').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('.qtt-move_li').eq(c).addClass('cur').siblings('.qtt-move_li').removeClass('cur');
	})
	// 给li加鼠标移入事件
	$('.qtt-move_li').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
		// 获得当前鼠标移入的li的序号
		c = $(this).index();
		// 让c号图片显示，兄弟图片隐藏
		$('.qtt-move_list').eq(c).fadeIn(200).siblings('.qtt-move_list').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('.qtt-move_li').eq(c).addClass('cur').siblings('.qtt-move_li').removeClass('cur');
	});

	// 给li加鼠标移出效果
	$('.qtt-move_li').mouseout(function() {
		timer = setInterval(autoRun,3000);//设立定时器
	});
	$('.qtt-move_left').mouseover(function() {
		clearInterval(timer);
	});
	$('.qtt-move_left').mouseout(function() {
		timer = setInterval(autoRun,3000);//设立定时器
	});
	$('.qtt-move_right').mouseover(function() {
		clearInterval(timer);
	});
	$('.qtt-move_right').mouseout(function() {
		timer = setInterval(autoRun,3000);//设立定时器
	});
	$('.qtt-move_list').mouseover(function() {
		clearInterval(timer);
	});
	$('.qtt-move_list').mouseout(function() {
		timer = setInterval(autoRun,3000);//设立定时器
	});

})

$(function(){
	$('.qtt-move_left').mouseover(function() {
	 	$(this).find('.qtt-move_img2').show().siblings('img').hide();
	});
	$('.qtt-move_left').mouseout(function() {
		$(this).find('.qtt-move_img1').show().siblings('img').hide();
	});
	$('.qtt-move_right').mouseover(function() {
	 	$(this).find('.qtt-move_img2').show().siblings('img').hide();
	});
	$('.qtt-move_right').mouseout(function() {
		$(this).find('.qtt-move_img1').show().siblings('img').hide();
	});
})
