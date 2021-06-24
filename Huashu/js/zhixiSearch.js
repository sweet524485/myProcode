//自适应高度的方法
function autoHeight(tagName){
	hg = $(window).height() - 93;
	$(tagName).css('height',hg+'px');
}
//点击一个选中状态
function clickSelect(tagName,className){
	$(tagName).live('click', function(event) {
		$(this).addClass(className).siblings(tagName).removeClass(className);
	});
}
//加载完成调用
$(function(){
	//自适应高度的方法调用
	autoHeight('.zhixi-search-contanier');
	//点击一个选中状态方法调用
	clickSelect('.zhixi-search-nav','zhixi-search-nav_cur');
});
// 按钮效果
$(function () {
    $('.btn').mouseenter(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:90)', 'opacity': '0.9', 'cursor': 'pointer' });
    });
    $('.btn').mouseleave(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:100)', 'opacity': '1' });
    });
});
//窗口重置时执行
$(window).resize(function(){
	//自适应高度的方法调用
	autoHeight('.zhixi-search-contanier');
})