//页面加载完成执行
	$(function() {
		//页面图片延迟加载
	   	$("img").lazyload({ 
	        placeholder : "images/loading.gif",
	        effect: "fadeIn"
	    });  
	});

	//声明滚屏变量
	var myScroll,
		generatedCount = 0;
	//初次加载
	function loaded() {
		myScroll = new iScroll('wrapper', {
			scrollbarClass: 'myScrollbar',
			useTransition: true,
			momentum:true,
			bounce:false,
			onScrollEnd: function () {
				$(window).trigger('scroll');
				scrollY(this);
			}
		});
		setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 200);
	}

	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);

//判断滚动高度使导航条显示与隐藏
function scrollY(obj){
	var scrollTopNum = parseInt(obj.y);
	if(scrollTopNum < -200){
		$("#backTop").show();
	}else{
		$("#backTop").hide();
	}
}
//以ipone6屏宽414为基准，尺寸px除以100换算成rem
//->响应式布局格式
function autoSize(maxWidth){
	var mWidth = $(window).width();
	var totleWidth = mWidth*100;
	if (mWidth <= maxWidth) {
		var fontSize = totleWidth/414;
		$("html").css("font-size",fontSize+"px");
	};
}
//底部footer区点击选中状态
/**点击添加选中状态
*obj->this
*className->class名字
*active->选中状态的class
**/
function AddActive(obj,className,active){
	$(obj).addClass(active).siblings(className).removeClass(active);
}
//随机数函数
function rand (n){
    return (Math.floor(Math.random ()*n + 1));
}
//随机数据产生
function updatedb(className){
	$(className).find(".m-nearby-list").each(function(index, el) {
		var per = rand (100);
		var num = rand (30);
		$(".m-nearby-listBox").eq(index).css('width',per+'%');
		$(".m-nearby-listDistance").eq(index).html(per+"km");
		$(".m-nearby-listLeft").eq(index).attr("data-original","./images/nearby/"+num+".jpg");
	});
}
$(function(){
	//回到顶部
	$("#backTop").click(function(){
		$(this).hide();
		$("#scroller").css("transform","translate3d(0px, 0px, 0px)");
	});
	//响应式布局方法调用
	autoSize(2000);
	//底部footer区点击选中状态
	$(".footList").click(function() {
		AddActive(this,".footList","active");
	});
	//Tab切换效果
	$('.m-nav').click(function() {
		var index = $(this).index();
		$(this).addClass('active').siblings('a').removeClass('active');
		$('.m-nearby-con').eq(index).show().addClass('active').siblings('.m-nearby-con').hide().removeClass('active');
		$(window).trigger('scroll');
		loaded();
	});
	//单选框的点击效果
	$(".m-selectList").first().addClass('active');
	$(".m-selectList").live('click', function() {
		$(this).addClass("active").siblings("a").removeClass("active");
	});
	//评分随机设置
	updatedb("#enjoyFood");
})
$(window).resize(function(){
   //响应式布局方法调用
   autoSize(2000);
});