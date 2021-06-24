//搜索框得到焦点去掉默认值
function SearchInputChangeVal(){
	var defaultVal = $('.fl-lsn-searchInput').val();
	$('.fl-lsn-searchInput').attr('flag',false);
	$('.fl-lsn-searchInput').focus(function(){
		if($(this).val() == defaultVal){
			$(this).val("").css('color','#666');	
		}
	})
	$('.fl-lsn-searchInput').blur(function(){
		if($(this).val() == ""){
			$(this).val(defaultVal).css('color','#E9B669');
		}
	});
	//值发生改变事件
	$('.fl-lsn-searchInput').change(function(){
		var valTxt = $(this).val();
		if(valTxt == ""){
			//让状态值发生改变
			$(this).attr('flag',false);
		}else{
			//让状态值发生改变
			$(this).attr('flag',true);
		}
	});
}
//导航条的鼠标移入效果
function NavHoverUi(){
	var timer = null;
	$('.secondNav').hover(function(){
		clearInterval(timer);
		var i = $(this).index();
		$(this).addClass('active').siblings('a').removeClass('active');
		$('.fl-lsn-secondNavBox').eq(i).addClass('active').siblings('div').removeClass('active');
		$('.fl-lsn-navBg').css('border-top','1px solid #E5E5E5').stop().animate({'height':'44px'},200);
	},function(){
		var i = $(this).index();
		var _this = $(this);
		$('.fl-lsn-secondNavBox').removeClass('active');
		$('.fl-lsn-secondNavBox').eq(i).addClass('active').siblings('div').removeClass('active');
		timer = setTimeout(function(){
			$('.fl-lsn-navBg').css('border','0').stop().animate({'height':'0px'},200);
			_this.removeClass('active');
		},300);
	});
	$('.fl-lsn-navBg').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setTimeout(function(){
			$('.fl-lsn-navBg').css('border','0').stop().animate({'height':'0px'},200);
			$('.secondNav').removeClass('active');
		},300);
	});
}
//检索的方法
$(function(){
	//搜索框得到焦点去掉默认值
	SearchInputChangeVal();
	//导航条的鼠标移入效果
	NavHoverUi();
});