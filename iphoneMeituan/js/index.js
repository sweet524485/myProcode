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
	setTimeout(function(){
		window.location.href="home.html";
	},2000);
	$.MyCommon.PageLoading({ sleep: 3000 });
	//响应式布局方法调用
	autoSize(2000);
})
$(window).resize(function(){
   //响应式布局方法调用
   autoSize(2000);
});