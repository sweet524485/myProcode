//show all截取字符串的方法
function ContentAuto(){
	var strAll = $('.fl-journalDetail-contextWrap').html();
	if(strAll.length > 860){
		var str = cutstr(strAll, 860);
		$('.fl-journalDetail-contextWrap').html(str);
	}else{
		$('.fl-journalDetail-showAll').hide();
	}
	$('.fl-journalDetail-showAll').click(function(){
		if($(this).hasClass('active')){
			var str = cutstr(strAll, 860);
			$(this).removeClass('active').text('show all');
			$('.fl-journalDetail-contextWrap').html(str);
		}else{
			$(this).addClass('active').text('pack up');
			$('.fl-journalDetail-contextWrap').html(strAll);
		}
	})
}
//Volumes的点击效果
function VolumesClickUi(){
	//外部div的点击效果
	$('.fl-VolumesLeft-listTitleBox').click(function(){
		var flag = $(this).parent().hasClass('active');
		var h= $(this).parents('.fl-Volumes-yearContent').height();
		if(flag){
			h = h - 46;
			var _this = $(this).parent().find('.fl-VolumesLeft-listContent');
			$(this).parent().removeClass('active');
			_this.stop().animate({'height':'0px'},300,function(){
				_this.removeClass('active');
			});
			$(this).parents('.fl-Volumes-yearContent').stop().animate({'height' : h+'px'},300);
		}else{
			h = h + 46;
			var _this = $(this).parent().find('.fl-VolumesLeft-listContent');
			$(this).parent().addClass('active');
			_this.stop().animate({'height':'46px'},300,function(){
				_this.addClass('active');
			});
			$(this).parents('.fl-Volumes-yearContent').stop().animate({'height' : h+'px'},300);
		}
	});
	//内部月份的点击效果
	$('.fl-VolumesLeft-listLi').click(function(){
		$('.fl-VolumesLeft-listLi').removeClass('active');
		$(this).addClass('active').siblings('a').removeClass('active');
	});
	//年的点击效果
	$('.fl-Volumes-yearTitle').click(function(){
		$(this).parent().addClass('active').siblings('div').removeClass('active');
		var h = $(this).next().height() + 38;
		$(this).parent().stop().animate({'height' : h+'px'}, 200).siblings('div').height(34);
	})
}
$(function(){
	//show all截取字符串的方法
	ContentAuto();
	//Volumes的点击效果
    VolumesClickUi();
});
