$(function(){
	$('.list_box li').hover(function() {
		$(this).find('.down').stop().slideDown({duration:500,easing:'easeOutBounce'});
	}, function() {
		$(this).find('.down').stop().slideUp({duration:500,easing:'easeOutBounce'});
	});
})