/*
****按钮鼠标移入移出的淡入淡出效果
****author：仇郯郯
****用途：按钮鼠标移入移出的淡入淡出给用户一个明显区别
****一个参数，即调用的标签id、class或者标签名称
*/
function BtnChangeBg(TagName){
	$(TagName).mouseenter(function (event) {
		$(this).css({ 'filter': 'alpha(opacity:80)', 'opacity': '0.8', 'cursor': 'pointer' });
	});
	$(TagName).mouseleave(function (event) {
		$(this).css({ 'filter': 'alpha(opacity:100)', 'opacity': '1' });
	});
}
/*
****Tab切换（普通型）
****author：仇郯郯
****用途：用于简单的Tab切换效果
****三个参数
****TagName1：导航元素名
****TagName2：变化元素名
****className：添加的属性名
*/
function Tab_common(TagName1,TagName2,className){
    $(TagName1).live('click', function(event) {
        var qmj = $(this).index();
        $(this).addClass(className).siblings(TagName1).removeClass(className);
        $(TagName2).eq(qmj).show().siblings(TagName2).hide();
    });
}
/*
****密码输入正确自动撑开并且操作按钮自动显示
****author：仇郯郯
****用途：密码输入正确自动撑开并且操作按钮自动显示
*/
function Div_bigger(){
    $('.zhixiMyself-reviewListCon').css('margin-right','0px');
    $('.zhixiMyself-reviewListCon6').show();
}
/****文本框提示的验证实例
****author：仇郯郯
****用途：用于文本框的提示词
****三个参数
****TagName：文本框的名字
****NoticeName：错误提示框的名字
****NoticeTxt：提示的文字说明
*/
function NoticeTest(TagName,NoticeName,NoticeTxt){
	$(TagName).bind("focus", function () {
	    $(NoticeName).html(NoticeTxt);
	    $(NoticeName).hide();
	    $(TagName).css({ 'border': '1px solid #A0C2FD', 'box-shadow': '0px 0px 2px #A0C2FD', '-moz-box-shadow': '0px 0px 2px #A0C2FD', '-webkit-box-shadow': '0px 0px 2px #A0C2FD', '-ms-box-shadow': '0px 0px 2px #A0C2FD' });
	});
	$(TagName).bind("blur", function () {
	    $(NoticeName).html("");
	     $(NoticeName).hide();
	    $(TagName).css({ 'border': '1px solid #E6E6E6', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
	});
}
$(function () {
	//文本框提示的验证实例方法调用
	NoticeTest('.zhixiMyself-input','.zhixiMyself-inputNotice','');
    var isPasswordOk = false;
    /*
	****只验证不为空的方法
	****author：仇郯郯
	****用途：文本框简单验证，只要用户输入不为空即可通过
	****三个参数（要验证的文本框，提示错误框，提示词）
	****InputName：要验证的文本框
	****NoticeTxt：提示错误框
	****NoticeContent：提示词
	*/
    function Password(InputName,NoticeTxt,NoticeContent) {
        var txt_value = $(InputName).val();
        if (txt_value == "!@#$%^&") {
            $(NoticeTxt).html("");
            $(NoticeTxt).hide();
            isPasswordOk = true;
        } else {
        	$(NoticeTxt).show();
        	$(NoticeTxt).html(NoticeContent);
            $(InputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isPasswordOk = false; 
        }
    }
    //失败不让提交
    $('.zhixiMyself-inputBtn').click(function () {
        Password('.zhixiMyself-input','.zhixiMyself-inputNotice','密码输入错误，请重新输入');
        if (isPasswordOk) {
            $('.zhixiMyself-inputBox').hide();
            $('.zhixiMyself-check').remove();
            Div_bigger();
            alert('密码输入正确了');
            return true;
        }
    })
})
$(function(){
	// 按钮鼠标移入移出的淡入淡出效果调用
	BtnChangeBg('.btn');
	// 我的知兮账户Tab切换效果方法调用
	Tab_common('.zhixiMyself-nav','.zhixiMyself-con','zhixiMyself-nav_cur');
	// 审核与需求Tab切换效果方法调用
	Tab_common('.zhixiMyself-conNav','.zhixiMyself-mainCon','zhixiMyself-conNav_cur');
	//我要审核的点击效果
	$('.zhixiMyself-check').live('click', function(event) {
		$('.zhixiMyself-inputBox').show();
		event.stopPropagation();
	});
	$('.zhixiMyself-inputBox').live('click', function(event) {
		event.stopPropagation();
	});
	$(document).click(function() {
        $('.zhixiMyself-inputBox').hide();
    });
    //待处理与已处理点击效果
    $('.zhixiMyself-checkDeal').live('click', function(event) {
    	$(this).addClass('zhixiMyself-checkDeal_cur').siblings('a').removeClass('zhixiMyself-checkDeal_cur');
    });
    //查看详情鼠标移入效果
    $('.zhixiMyself-reviewListDetailCoN').live('mouseenter', function(event) {
    	$(this).find('.zhixiMyself-reviewHideCon').show();
    });
    $('.zhixiMyself-reviewListDetailCoN').live('mouseleave', function(event) {
    	$(this).find('.zhixiMyself-reviewHideCon').hide();
    });
})
















