//以ipone6屏宽414为基准，尺寸px除以100换算成rem
//->响应式布局格式
function autoSize(maxWidth){
	var mWidth = $(window).width();
	var totleWidth = mWidth*100;
	if (mWidth <= maxWidth) {
		var fontSize = totleWidth/414;
		$("html").css("font-size",fontSize+"px");
		$("body").css("font-size",fontSize+"px");
	};
}
//页面初始化
$(function(){
	//自适应方法调用
   	autoSize(2000);
});
$(window).resize(function(){
	//自适应方法调用
   	autoSize(2000);
});