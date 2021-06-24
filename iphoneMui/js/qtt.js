
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
// 初始化参数
var startY = 0;
var endY = 0;
var timer = null;
var h = 0;
var clientH = 0;
var totalH = 0;
var headerH = 0;
var footerH = 0;
var maxH = 0;
function autoInt(){
	h = parseInt($('.qtt-reload-down').height());
	clientH = $(window).height();
	totalH = $('#mui-scroll').height();
	headerH = $('#header').height();
	footerH = $('#footer').height();
	maxH = -parseInt(totalH - clientH + (headerH + footerH));
}
//获取滚动的y轴的值
function getTransform(el) {
 	var results = $(el).css('transform');
 	var strArr = [];
 	var strLast = null;
 	strArr=results.split(",");
 	for (var i = 0; i < strArr.length; i++) {
 		strLast = strArr[i];
 	};
 	strLast = parseInt(strLast);
 	return strLast;
}
$(function(){
	//响应式布局方法调用
	autoSize(2000);
	// 初始化参数
	autoInt();
	//开始退拽时
	$("#mui-scroll").on("dragstart",function(){
		startY = getTransform('#mui-scroll');
		$('.qtt-reload-down').hide().html('');
		$('.qtt-reload-up').hide().html('');
		$('#mui-scroll').css('margin-top','0px');
	});
	//拖拽中
	$("#mui-scroll").on("drag",function(){
		var y = getTransform('#mui-scroll');
		if(y > 5){
			$(".qtt-reload-down").show().html('仇郯郯提醒您：下拉刷新');
		}
		if(y >= h){
			$(".qtt-reload-down").show().html('仇郯郯提醒您：松手释放加载更多');
		}
	});
	// 退拽结束
	$("#mui-scroll").on("dragend",function(){
		clearInterval(timer);
		endY = getTransform('#mui-scroll');
		if(endY > 0){
			$('.qtt-reload-down').show().html('仇郯郯提醒您：正在刷新中。。。');
			$('#mui-scroll').css('margin-top',h+'px');
			timer = setInterval(function(){
				$('#mui-scroll').css('margin-top','0px');
				$('.qtt-reload-down').hide().html('');
				endY = 0;
			},2000);
		}
		if(endY < maxH-h){
			$('.qtt-reload-up').show().html('仇郯郯提醒您：正在加载更多。。。');
			$('#mui-scroll').css('margin-top',-h+'px');
			timer = setInterval(function(){
				$('#mui-scroll').css('margin-top','0px');
				$('.qtt-reload-up').hide().html('');
				endY = 0;
			},1000);
		}
	});
})
$(window).resize(function(){
   //响应式布局方法调用
   autoSize(2000);
   autoInt();
});