/*
****文本框提示的验证实例
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
	    $(TagName).css({ 'border': '1px solid #6AAFE5', 'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)', '-moz-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)', '-webkit-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)', '-ms-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)' });
	});
	$(TagName).bind("blur", function () {
	    $(NoticeName).html("");
	    $(TagName).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
	});
}
/*
****只验证不为空的方法
****author：仇郯郯
****用途：文本框简单验证，只要用户输入不为空即可通过
****三个参数（要验证的文本框，提示错误框，提示词）
****InputName：要验证的文本框
****NoticeTxt：提示错误框
****NoticeContent：提示词
*/
function NotEmpty(InputName,NoticeTxt,NoticeContent) {
    var txt_value = $(InputName).val();
    if (txt_value == "") {
        $(NoticeTxt).html(NoticeContent);
        $(InputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
		$(InputName).parent().addClass('error');
    } else {
        $(NoticeTxt).html("");
        $(InputName).parent().removeClass('error');
    }
}
/*
****特殊验证的方法
****author：仇郯郯
****用途：文本框特殊验证
****五个参数（要验证的文本框，提示错误框，提示词）
****InputName：要验证的文本框
****ErrorBox：提示错误框
****NoticeTxt1：不能为空的提示词
****NoticeTxt2：验证错误的提示词
****Rule：验证规则
*/
function SpecialTest(InputName, ErrorBox, NoticeTxt1, NoticeTxt2, Rule) {
    var txt_value = $(InputName).val();
    if (txt_value == "") {
        $(ErrorBox).html(NoticeTxt1);
        $(InputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
        $(InputName).parent().addClass('error');
    } else if (!(Rule.test(txt_value))) {
        $(ErrorBox).html(NoticeTxt2);
        $(InputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
        $(InputName).parent().addClass('error');
    } else {
        $(ErrorBox).html("");
        $(InputName).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
        $(InputName).parent().removeClass('error');
    }
}
//前台验证
function TestVerfy(){
	NotEmpty('.login-listInput1','.login-listError1','姓名不能为空');
	SpecialTest('.login-listInput2', '.login-listError2', '密码不能为空', '密码格式不正确', /^[\w\W]{6,}$/);
	NotEmpty('.login-listInput3','.login-listError3','验证码不能为空');
	if($('.error').length <= 0){
		alert('验证通过');
	}else{
		alert('验证不通过');
	}
}
//验证码产生随机数
function change_code(obj){
	$("#code").attr("src",URL+Math.random());
	return false;
}
$(function(){
	//文本框提示的验证
	NoticeTest('.login-listInput1','.login-listError1','<span style="color:#666;">请填写您的姓名</span>');
	NoticeTest('.login-listInput2','.login-listError2','<span style="color:#666;">密码不少于5的字符</span>');
	NoticeTest('.login-listInput3','.login-listError3','<span style="color:#666;">请填写验证码</span>');
})



















