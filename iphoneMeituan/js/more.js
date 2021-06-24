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
//点击登录弹出层出现的方法
function LoginShow(){
	$('.alert').show();
	$('.q-alert_centerBox').stop().animate({"width":"3.4rem","height":"0.6rem","margin-left":"-1.7rem","margin-top":"-0.4rem"}, 300);
}
//点击关闭按钮关闭的方法
function Alertclose(){
	$('.q-alert_centerBox').stop().animate({"width":"0px","height":"0px","margin-left":"0px","margin-top":"0px"}, 300);
	$('.alert').hide();
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
	//wifi开关设置
	$(".more-list-btn").click(function() {
		generatedCount++;
		if(generatedCount%2 == 0){
			var className = $(this).attr("class");
			if(className == "more-list-btn"){
				$(this).addClass('active');
				$(this).find(".more-on").show();
				$(this).find(".more-off").hide();
			}else{
				$(this).removeClass('active');
				$(this).find(".more-on").hide();
				$(this).find(".more-off").show();
			}
		}	
	});
})
$(window).resize(function(){
   //响应式布局方法调用
   autoSize(2000);
});