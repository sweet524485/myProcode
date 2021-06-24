function ChangeInputColor(tagName,valTxt){
	var DefaultValue = $(tagName).val();
	if (DefaultValue == valTxt) {
		$(tagName).css('color','#A7A7A8');
	}else{
		$(tagName).css('color','#646464');
	}
}
//文本框的得到与失去焦点的边框颜色
$(function () {
    $("input[type='text']").live('focus', function() {
        $(this).css({ 'border': '1px solid #A0C2FD', 'box-shadow': '0px 0px 2px #A0C2FD', '-moz-box-shadow': '0px 0px 2px #A0C2FD', '-webkit-box-shadow': '0px 0px 2px #A0C2FD', '-ms-box-shadow': '0px 0px 2px #A0C2FD' });
    })
    $("input[type='text']").live('blur', function() {
        $(this).css({ 'border': '1px solid #E7EAEC', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
    })
    //按钮的鼠标移入移出效果
    $('.btn').mouseenter(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:80)', 'opacity': '0.8', 'cursor': 'pointer' });
    });
    $('.btn').mouseleave(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:100)', 'opacity': '1' });
    });
    //文本框得到与失去焦点的默认值
    $(".zhixi-select-listInput").live('focus', function(event) {
		if ($(this).val()==this.defaultValue){	
			$(this).val("");
			//文本框默认值的颜色设置调用
			ChangeInputColor(".zhixi-select-listInput1","篇名：");	
			ChangeInputColor(".zhixi-select-listInput2","作者：");
			ChangeInputColor(".zhixi-select-listInput3","关键词：");
			ChangeInputColor(".zhixi-select-listInput4","文摘：");
		}
	});
	$(".zhixi-select-listInput").live('blur', function(event) {
		if ($(this).val()==""){
			$(this).val(this.defaultValue);
			//文本框默认值的颜色设置调用
			ChangeInputColor(".zhixi-select-listInput1","篇名：");	
			ChangeInputColor(".zhixi-select-listInput2","作者：");
			ChangeInputColor(".zhixi-select-listInput3","关键词：");
			ChangeInputColor(".zhixi-select-listInput4","文摘：");
		}
	});
	// 排序的点击选择效果
	$('.zhixi-select-ifList').live('click', function(event) {
		var className = $(this).find('.zhixi-select-ifListTxt').attr('class')
		if (className == 'zhixi-select-ifListTxt') {
			$(this).find('.zhixi-select-ifListTxt').addClass('zhixi-select-ifListTxt_cur');
			$(this).siblings('.zhixi-select-ifList').find('.zhixi-select-ifListTxt').removeClass('zhixi-select-ifListTxt_cur');
		}else{
			$(this).find('.zhixi-select-ifListTxt').removeClass('zhixi-select-ifListTxt_cur');
		}
	});
	//电子期刊数据库鼠标移入移出效果
	$('.zhixi-select-boxList').live('mouseenter', function(event) {
		$(this).find('.zhixi-select-boxNum').addClass('zhixi-select-boxList_color');
		$(this).find('.zhixi-select-boxCon').addClass('zhixi-select-boxList_color');
	});
	$('.zhixi-select-boxList').live('mouseleave', function(event) {
		$(this).find('.zhixi-select-boxNum').removeClass('zhixi-select-boxList_color');
		$(this).find('.zhixi-select-boxCon').removeClass('zhixi-select-boxList_color');
	});
	//相关词点击效果
	$('.zhixi-select-RbootList').live('click', function(event) {
		var className = $(this).attr('class');
		if (className == "zhixi-select-RbootList") {
			$(this).addClass('zhixi-select-RbootList_cur');
		}else{
			$(this).removeClass('zhixi-select-RbootList_cur');
		}
	});
	//文本框默认值的颜色设置调用
	ChangeInputColor(".zhixi-select-listInput1","篇名：");
	ChangeInputColor(".zhixi-select-listInput2","作者：");
	ChangeInputColor(".zhixi-select-listInput3","关键词：");
	ChangeInputColor(".zhixi-select-listInput4","文摘：");
})

