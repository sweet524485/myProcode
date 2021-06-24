// JavaScript Document
//userCenter：下拉框文字匹配
function matchText(){	
	$('#fieldList li').click(function(e) {
		var text = $(e.target).text();
        $('.displayName').eq(0).text(text);
		var InfoList = $('.listCss li');
		var Blog =  $('.listCss li.Blog');
		var Images =  $('.listCss li.Images');
		var FriendsCircle =  $('.listCss li.FriendsCircle');
		var Forum =  $('.listCss li.Forum');
		
		switch(text){
			case "全部":
				InfoList.show();
				break;
			case "博文":
				InfoList.hide();
				Blog.show();
				break;
			case "图片":
				InfoList.hide();
				Images.show();
				break;
			case "圈子":
				InfoList.hide();
				FriendsCircle.show();
				break;
			case "论坛":
				InfoList.hide();
				Forum.show();
				break;
		}
    });
}
function showMenuItem(e, selector){
	var env = $(e);
	var flag = env.children('em');
	var childBox = $(selector);
	
	if(flag.hasClass('emBgUp') === false)
	{
		flag.attr('class','emBgUp');
		childBox.show();
	}else{
		flag.removeAttr('class');
		childBox.hide();
	}
}
//blogDir:博文归档展开列表
function showFliesList(){
	$('.filesList li').click(function(e) {
		var eName = e.target.tagName.toLowerCase();
		var env = null;
		
		if(eName != 'li')
		{
			env = $(e.target).parent('li');
		}else
		{
			env = $(e.target)
		}
		var month = env.children('.monthList');
		var btnEm = env.children('em').eq(0)
		
		if(btnEm.hasClass('emBgUp') === false)
		{
			month.show();
			btnEm.attr('class','emBgUp');
		}else{
			month.hide();
			btnEm.removeAttr('class');
		}
    });
}
//blogDir:博文置顶
function beTopOrNot(e){	
	var btn = $(e);
	
	if(btn.text() === '[置顶首页]')
	{
		btn.text('[取消置顶]');
	}
	else if(btn.text() === '[取消置顶]')
	{
		btn.text('[置顶首页]')
	}
}
//blogDir:全部博文显示更多菜单
function showMoreBox(e, boxSelector){	
	var btn = $(e);
	var box = $(boxSelector);
	
	var pos = btn.position();
	box.css({ left: (pos.left - 25), top: (pos.top + 23)});//定位列表
	box.show();
	
	box.mouseleave(function() {
        box.slideUp("fast");
    });
	
	box.click(function(e) {
        box.slideUp("fast");
    });
};
//blogDir:博文管理列表切换
function blogManag(){
	$('.bowenList li').click(function(e){
		var dest = null;
		var eName = e.target.tagName.toLowerCase();
		
		if(eName != 'li')
		{
			dest = $(e.target).parent('li');
		}else
		{
			dest = $(e.target)
		}
		
        if(dest.hasClass('current') === false)
		{
			$('.bowenList li').removeAttr('class');
			dest.addClass('current');
		}
    });	
};
function myRadioBox(){
	$('.radioBox .myradio').click(function(e) {
        var env = $(e.target);
		var radios = env.parent('.radioBox').children('.myradio');
		if(env.hasClass('sel') === false)
		{
			radios.attr('class', 'myradio unsel');
			env.removeClass('unsel');
			env.addClass('sel');
		}
    });
}
function myCheckBox(){
	$('.option').click(function(e) {        
        if($(this).hasClass('check'))
		{
			$(this).removeClass('check').addClass('uncheck');
		}else{
			$(this).removeClass('uncheck').addClass('check');
		}
    });
}