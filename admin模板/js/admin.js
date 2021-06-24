function autoSize(){
	var h = $(window).height() - 130; 
	var w = $(window).width() - 150;
	$('.main').height(h);
	$('.right').width(w);
}
function tabClick(){
	$('.leftList').click(function(){
		$(this).addClass('active').siblings('a').removeClass('active')
	})
}
$(function(){
	autoSize();
	$(window).resize(function() {
		autoSize();
	});
	tabClick();
})