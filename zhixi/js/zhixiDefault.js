$(function(){
	//导航条的点击效果
	$('.zhixi-top-nav').live('click', function(event) {
		$(this).addClass('zhixi-top-nav_cur').siblings('a').removeClass('zhixi-top-nav_cur');
	});
	//小导航条的点击效果
	$('.zhixi-second-nav').live('click', function(event) {
		$(this).addClass('zhixi-second-nav_cur').siblings('a').removeClass('zhixi-second-nav_cur');
	});
	//电子期刊数据库鼠标移入移出效果
	$('.zhixi-Ejournal-list').live('mouseenter', function(event) {
		$(this).find('.zhixi-Ejournal-listTitle').addClass('zhixi-Ejournal-listTitle_cur');
	});
	$('.zhixi-Ejournal-list').live('mouseleave', function(event) {
		$(this).find('.zhixi-Ejournal-listTitle').removeClass('zhixi-Ejournal-listTitle_cur');
	});
	//科技报告数据库鼠标移入移出效果
	$('.zhixi-scientReport-list').live('mouseenter', function(event) {
		$(this).addClass('zhixi-scientReport-list_cur');
		$(this).find('.zhixi-scientReport-listTitle').addClass('zhixi-scientReport-listTitle_cur');
	});
	$('.zhixi-scientReport-list').live('mouseleave', function(event) {
		$(this).removeClass('zhixi-scientReport-list_cur');
		$(this).find('.zhixi-scientReport-listTitle').removeClass('zhixi-scientReport-listTitle_cur');
	});
	//会议文献数据库鼠标移入移出效果
	$('.zhixi-proceedings-list').live('mouseenter', function(event) {
		$(this).find('.zhixi-proceedings-listTitle').addClass('zhixi-proceedings-listTitle_cur');
	});
	$('.zhixi-proceedings-list').live('mouseleave', function(event) {
		$(this).find('.zhixi-proceedings-listTitle').removeClass('zhixi-proceedings-listTitle_cur');
	});
	//文摘数据库鼠标移入移出效果
	$('.zhixi-Article-list').live('mouseenter', function(event) {
		$(this).find('.zhixi-Article-listTitle').addClass('zhixi-Article-listTitle_cur');
	});
	$('.zhixi-Article-list').live('mouseleave', function(event) {
		$(this).find('.zhixi-Article-listTitle').removeClass('zhixi-Article-listTitle_cur');
	});
	//事实数据库、学位论文数据库鼠标移入移出效果
	$('.zhixi-degree-list').live('mouseenter', function(event) {
		$(this).find('.zhixi-degree-listTitle').addClass('zhixi-degree-listTitle_cur');
	});
	$('.zhixi-degree-list').live('mouseleave', function(event) {
		$(this).find('.zhixi-degree-listTitle').removeClass('zhixi-degree-listTitle_cur');
	});
})
//导航条的滚动出现效果
$(window).bind('scroll',function(){
	if ($(document).scrollTop() >150) {
		$('.zhixi-second-navContainer').show();
	}else{ 
		$('.zhixi-second-navContainer').hide();
	} 
});
//主导航条控制二级导航条
$(function(){
	$('.zhixi-top-nav1').live('click', function(event) {
		$('.zhixi-second-nav1').addClass('zhixi-second-nav_cur').siblings('.zhixi-second-nav').removeClass('zhixi-second-nav_cur');
	});
	$('.zhixi-top-nav2').live('click', function(event) {
		$('.zhixi-second-nav2').addClass('zhixi-second-nav_cur').siblings('.zhixi-second-nav').removeClass('zhixi-second-nav_cur');
	});
	$('.zhixi-top-nav3').live('click', function(event) {
		$('.zhixi-second-nav3').addClass('zhixi-second-nav_cur').siblings('.zhixi-second-nav').removeClass('zhixi-second-nav_cur');
	});
	$('.zhixi-top-nav4').live('click', function(event) {
		$('.zhixi-second-nav4').addClass('zhixi-second-nav_cur').siblings('.zhixi-second-nav').removeClass('zhixi-second-nav_cur');
	});
	$('.zhixi-top-nav5').live('click', function(event) {
		$('.zhixi-second-nav5').addClass('zhixi-second-nav_cur').siblings('.zhixi-second-nav').removeClass('zhixi-second-nav_cur');
	});
	$('.zhixi-top-nav6').live('click', function(event) {
		$('.zhixi-second-nav6').addClass('zhixi-second-nav_cur').siblings('.zhixi-second-nav').removeClass('zhixi-second-nav_cur');
	});
})
