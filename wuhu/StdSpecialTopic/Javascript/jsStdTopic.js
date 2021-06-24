// JavaScript Document
function showDropList(eBtn, destDom, dataSrcDom)
{
	var src = $(dataSrcDom);
	var dest = $(destDom);
	var data = src.children();
	var btn = $(eBtn);
	
	var dW = parseInt(dest.parent('.inputBox').css('width'));
	var dH = parseInt(dest.parent('.inputBox').css('height'));
	src.css('width', (dW+2));//设置ul的宽度
	data.each(function(e){
		$(this).css('width', dW);//设置li的宽度
	});
	//var pos = dest.position();//定位目标
	var pos = dest.parent('.inputBox').position();
	if(parseInt(src.attr('left')) != (pos.left - 1))
	{
		src.css({ left: (pos.left), top: (pos.top + dH + 2)});//定位列表
	}
	
	if(btn.hasClass('btnUp'))
	{
		src.slideUp("fast");//隐藏下拉列表
		btn.removeClass('btnUp');
	}else
	{
		btn.addClass('btnUp');
		src.slideDown("fast");//显示下拉列表
	}
	data.each(function(e){
		if($(this).text() == dest.val())
		{
			$(this).css({background:"none", background:"#1e90ff", color:"#fff"});
			//$(this).css('background-color','#FFB');//判断当前的值，并设置样式
		}
	});
	
	data.click(function(e) {
		data.removeAttr('style');
		dest.val($(e.target).text());//选择值
		dest.css('color','#3a3a3a');
    });
	
	src.mouseleave(function() {
        src.slideUp("fast");//隐藏下拉列表
		btn.removeClass('btnUp');
    });
};

/*function showDropList(eBtn, destDom, dataSrcDom)
{
	var src = $(dataSrcDom);
	var dest = $(destDom);
	var data = src.children();
	var btn = $(eBtn);
	
	var dW = parseInt(dest.css('width'));
	var dH = parseInt(dest.css('height'));
	src.css('width', dW);
	data.each(function(e){
		$(this).css('width', (dW-2));//设置li的宽度
	});
	var pos = dest.position();//定位目标
	if(parseInt(src.attr('left')) != (pos.left - 1))
	{
		src.css({ left: (pos.left - 1), top: (pos.top + dH)});//定位列表
	}
	
	if(btn.hasClass('btnUp'))
	{
		src.slideUp("fast");//隐藏下拉列表
		btn.removeClass('btnUp');
	}else
	{
		btn.addClass('btnUp');
		src.slideDown("fast");//显示下拉列表
	}
	data.each(function(e){
		if($(this).text() == dest.val())
		{
			$(this).css({background:"none", background:"#1e90ff", color:"#fff"});
			//$(this).css('background-color','#FFB');//判断当前的值，并设置样式
		}
	});
	
	data.click(function(e) {
		data.removeAttr('style');
		dest.val($(e.target).text());//选择值
    });
	
	src.mouseleave(function() {
        src.slideUp("fast");//隐藏下拉列表
		btn.removeClass('btnUp');
    });
};*/
function matchHeight()
{
	var height1 = parseFloat($('.sysTreeBox').css('height'));
	var height2 = parseFloat($('.detailInfoBox').css('height'));
	
	height1 >= height2 ? $('.detailInfoBox').css('height',(height1+2)) : $('.sysTreeBox').css('height',(height2-2));
};
function keyWordsChange(selector, defaultValue)
{
	var dest = $(selector);
	dest.focus(function(e) {
		$(e.target).css('color', '#3a3a3a');
        if($(e.target).val() === defaultValue)
		{
			$(e.target).val('');
		}
    });
	
	dest.blur(function(e) {
        if($(e.target).val() === '')
		{
			$(e.target).val(defaultValue);
			$(e.target).css('color', '#aaaaaa');
		}
    });
};
function switchCss(selector, css)
{
	var o = $(selector)
	o.click(function(e) {
        if($(e.target).hasClass(css) === false)
		{
			o.removeAttr('class');
			$(e.target).addClass(css);
		}
    });
}