//后台窗口自适应
function autoSize(){
	var h = $(window).height() - 40;
	var w = $(window).width() - 130;
	var iframeH = $(window).height() - 110;
	$('.admin-main-container').height(h);
	$('.admin-main-right').width(w);
	$('.admin-main-iframeContent').height(iframeH);
}
//导航切换效果
function tabClick(){
	$('.admin-main-menu').click(function(){
		var txt = $(this).find('.admin-main-menuTxt').text();
		$(this).addClass('active').siblings('a').removeClass('active');
		$('#admin-main-location').html(txt); 
	})
}
$(function(){
	//自动加载时调用
	autoSize();
	//窗口变化时触发
	$(window).resize(function(){
		//自动加载时调用
		autoSize();
	})
	//导航点击切换效果
	tabClick();
})
