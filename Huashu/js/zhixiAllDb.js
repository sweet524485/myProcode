$(function(){
	//文章单选框的点击选中效果
	$('#article').live('click', function(event) {
		var status1 = $(this).attr('checked');
		var status2 = $('#magazine').attr('checked');
		if(status1 == "checked"){
			$(this).next().addClass('zhixi-allDb-selectIcon_cur');
			$('#magazine').next().removeClass('zhixi-allDb-selectIcon_cur');
		}
	});
	//期刊单选框的点击选中效果
	$('#magazine').live('click', function(event) {
		var status1 = $(this).attr('checked');
		var status2 = $('#article').attr('checked');
		if(status1 == "checked"){
			$(this).next().addClass('zhixi-allDb-selectIcon_cur');
			$('#article').next().removeClass('zhixi-allDb-selectIcon_cur');
		}
	});
	//字母导航的点击与取消样式效果
	$('.zhixi-allDb-letterAll').live('click', function(event) {
		$(this).addClass('zhixi-allDb-letterAll_cur');
		$('.zhixi-allDb-letterRight').find('.zhixi-allDb-letter').removeClass('zhixi-allDb-letter_cur');
	});
	$('.zhixi-allDb-letter').live('click', function(event) {
		$(this).addClass('zhixi-allDb-letter_cur').siblings('a').removeClass('zhixi-allDb-letter_cur');
		$('.zhixi-allDb-letterAll').removeClass('zhixi-allDb-letterAll_cur');
	});
	//刊名的鼠标移出移出效果
	$('.zhixi-mainMiddle-list').live('mouseenter', function(event) {
		$(this).find('.zhixi-mainMiddle-listNum').addClass('changeColor');
		$(this).find('.zhixi-mainMiddle-listTxt').addClass('changeColor');
	});
	$('.zhixi-mainMiddle-list').live('mouseleave', function(event) {
		$(this).find('.zhixi-mainMiddle-listNum').removeClass('changeColor');
		$(this).find('.zhixi-mainMiddle-listTxt').removeClass('changeColor');
	});
	//数据来源列表鼠标移入和移出效果
	$('.zhixi-mainRight-listText').live('mouseenter', function(event) {
		$(this).find('.zhixi-mainRight-listTxt').addClass('changeColor');
	});
	$('.zhixi-mainRight-listText').live('mouseleave', function(event) {
		$(this).find('.zhixi-mainRight-listTxt').removeClass('changeColor');
	});
})