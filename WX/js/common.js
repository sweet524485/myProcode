var myScroll;
//初始化调用的iscoll函数
function loaded () {
	myScroll = new IScroll('#wrapper', {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		//是否永远显示滚动条
		fadeScrollbars: true,
		//自定义导航条样式
		scrollbars: 'custom',
		//关掉弹力动画效果
		bounce:false
	});
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
	capture: false,
	passive: false
} : false);
//以ipone6屏宽414为基准，尺寸px除以100换算成rem
//->响应式布局格式
function autoSize(maxWidth){
	var mWidth = $(window).width();
	var totleWidth = mWidth*100;
	if (mWidth <= maxWidth) {
		var fontSize = totleWidth/414;
		$("html").css("font-size",fontSize+"px");
	};
	$('#main').show();
}
//页面加载完成调用
$(function(){
	autoSize(2000);
	// 首页轮播
    // 首页轮播
    var swiper = new Swiper('.swiper1', {
        pagination: '.swiper-pagination1',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true
    });
    //爱生活下轮播图
    var swiper2 = new Swiper('.swiper2', {
        pagination: '.swiper-pagination2',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        loop: true
    });
})
//网页发生变化时调用
$(window).resize(function(){
   autoSize(2000);
});
