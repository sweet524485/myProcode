//简介的tab切换
function jianjieTab(){
	$('.gf-jianjieDetail-con').first().addClass('active');
	$('.gf-jianjieDetail-nav').click(function(){
		var index = $(this).index();
		var left = $(this).attr('left');
		$(this).addClass('active').siblings('a').removeClass('active');
		$('.gf-jianjieDetail-navIcon').animate({'left':left+'px'},100)
		$(this).parents('.gf-jianjieDetail-container').find('.gf-jianjieDetail-con').eq(index).addClass('active').siblings('div').removeClass('active');
	})
}
//显示全部展开效果
function moreClick(){
	$('.gf-jianjieDetail-bottomClick').click(function(){
		$(this).parent().prev().css('height','auto');
		var className = $(this).find('.gf-jianjieDetail-bottomIcon').attr('class');
		var h = $(this).parent().prev().height();
		if(className == 'gf-jianjieDetail-bottomIcon'){
			if(h  <= 90){
				$(this).parent().prev().css('height','90px');
				$(this).find('.gf-jianjieDetail-bottomIcon').hide();
				$(this).find('.gf-jianjieDetail-bottomTxt').html('已是全部内容');
			}else{
				$(this).parent().prev().css('height','auto');
				$(this).find('.gf-jianjieDetail-bottomIcon').show().addClass('cur');
				$(this).find('.gf-jianjieDetail-bottomTxt').html('全部收起');
			}
		}else{
			$(this).parent().prev().css('height','90px');
			$(this).find('.gf-jianjieDetail-bottomIcon').show().removeClass('cur');
			$(this).find('.gf-jianjieDetail-bottomTxt').html('显示全部');
		}
	})
}
$(function(){
	//简介的tab切换
	jianjieTab();
	//显示全部展开效果
	moreClick();
})
