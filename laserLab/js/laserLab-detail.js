//删除最后一行的下划线
function delBorder(tagName){
	$(tagName).last().find('.jg-detail-ComListBox').css("border","0");
}
//显示更多是否显示
function autoShow(){
	$('.jg-detail-CommonD').each(function(i,item){
		var h = $('.jg-detail-CommonD').eq(i).find('.jg-detail-ComListBox').height();
		if(h >= 233){
			$('.jg-detail-CommonD').eq(i).find('.jg-detail-CommonMore').show();
			$('.jg-detail-CommonD').eq(i).find('.jg-detail-ComListBox').css('height','233px');
		}else{
			$('.jg-detail-CommonD').eq(i).find('.jg-detail-CommonMore').hide();
		}
	});
}
$(function(){
	//显示更多方法是否显示
	//autoShow();
	//右侧最后一个删除边线
	delBorder('.jg-detail-CommonD')
	//显示更多点击效果
	$('.jg-detail-CommonMore').click(function(){
		var className = $(this).attr('class');
		if(className == 'jg-detail-CommonMore'){
			$(this).addClass('active');
			$(this).parent().next().css('height','auto');
			var h = $(this).parent().next().height();
			if(h == 240){
				$(this).find('span').text('已是全部内容');
				$(this).find('i').hide();
			}else{
				$(this).find('span').text('收起更多');
				$(this).find('i').show().addClass('cur');
			}
		}else{
			$(this).removeClass('active');
			$(this).parent().next().css('height','233px');
			var h = $(this).parent().next().height();
			$(this).find('span').text('显示更多');
		    $(this).find('i').show().removeClass('cur');
		}
	})
})