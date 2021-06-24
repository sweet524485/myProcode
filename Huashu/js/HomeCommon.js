// 去除空格的方法
String.prototype.trim = function () {
    var str = this,
  str = str.replace(/^\s\s*/, ''),
  ws = /\s/,
  i = str.length;
    while (ws.test(str.charAt(--i)));
    return str.slice(0, i + 1);
}
//文本框的得到与失去焦点的边框颜色
$(function () {
    $(".q-Home-header-search-input").live('focus', function() {
        $(this).css({ 'border': '2px solid #00BBD9', 'box-shadow': '0px 0px 2px #00BBD9', '-moz-box-shadow': '0px 0px 2px #00BBD9', '-webkit-box-shadow': '0px 0px 2px #00BBD9', '-ms-box-shadow': '0px 0px 2px #00BBD9' });
    })
    $(".q-Home-header-search-input").live('blur', function() {
        $(this).css({ 'border': '2px solid #E2E4E8', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
    })
})
// 按钮效果
$(function () {
    $('.btn').mouseenter(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:80)', 'opacity': '0.8', 'cursor': 'pointer' });
    });
    $('.btn').mouseleave(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:100)', 'opacity': '1' });
    });
});
// 导航条点击效果
$(function () {
    $('.q-Home-header-nav span').live('click', function(event) {
    	$(this).addClass('q-Home-header-nav-cur').parent().siblings('a').find('span').removeClass('q-Home-header-nav-cur');
    });
});
//当点击跳转链接后，回到页面顶部位置  
$(function(){
	$('.q-Home-footer-back-top').live('click', function(event) {
		$('body,html').animate({scrollTop:0},1000);  
	});
})









