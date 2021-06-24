//文本框的得到与失去焦点的边框颜色
$(function () {
    $("input[type='text']").live('focus', function() {
        $(this).css({ 'border': '1px solid #A0C2FD', 'box-shadow': '0px 0px 2px #A0C2FD', '-moz-box-shadow': '0px 0px 2px #A0C2FD', '-webkit-box-shadow': '0px 0px 2px #A0C2FD', '-ms-box-shadow': '0px 0px 2px #A0C2FD' });
    })
    $("input[type='text']").live('blur', function() {
        $(this).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
    })
})
$(function () {
    $("input[type='password']").live('focus', function() {
        $(this).css({ 'border': '1px solid #A0C2FD', 'box-shadow': '0px 0px 2px #A0C2FD', '-moz-box-shadow': '0px 0px 2px #A0C2FD', '-webkit-box-shadow': '0px 0px 2px #A0C2FD', '-ms-box-shadow': '0px 0px 2px #A0C2FD' });
    })
    $("input[type='password']").live('blur', function() {
        $(this).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
    })
})
// 按钮效果
$(function () {
    $('.btn').mouseenter(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:80)', 'opacity': '0.8', 'cursor': 'pointer' });
    });
    $('.btn').mouseleave(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:100)', 'opacity': '1' });
    });
});
// =====================用户表单验证=============================
// 提示信息的box不隐藏，验证非空的得到和失去焦点方法
function GetLostFocus(inputName,errorBox,noticeTxt){
    $(inputName).bind('blur', function () {
        $(errorBox).html('');
        $(this).css({ 'border': '1px solid #CFCBC6', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(inputName).bind('focus', function () {
        $(errorBox).html(noticeTxt);
        $(this).css({ 'border': '1px solid #CFCBC6', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
}
// 提示信息的box不隐藏，点击验证
function clickTest(){
    var judgeVar = false;
    var judgeVar1 = false;
    var judgeComment = false;
    var judgeConfirm = false;
    var judgeEmpty = false;
    var judgeEmpty1 = false;
    var judgeEmpty2 = false;
    $('.q-UserControl-saveBtn').live('click', function(event) {
        //提示信息的box不隐藏，验证非空的方法
        function editUserAccount(inputName,errorBox,noticeTxt) {
            var txt_value = $(inputName).val();
            alert(txt_value);
            if (txt_value == "") {
                $(errorBox).html(noticeTxt);
                $(inputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
                judgeVar = false;
            } else {
                $(inputName).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
                judgeVar = true;
            }
        }
        function editUserAccount1(inputName,errorBox,noticeTxt) {
            var txt_value = $(inputName).val();
            alert(txt_value);
            if (txt_value == "") {
                $(errorBox).html(noticeTxt);
                $(inputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
                judgeVar1 = false;
            } else {
                $(inputName).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
                judgeVar1 = true;
            }
        }
        function editUserComment(inputName,errorBox,noticeTxt1,noticeTxt2,rule) {
            var txt_value = $(inputName).val();
            if (txt_value == "") {
                $(errorBox).html(noticeTxt1);
                $(inputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
                judgeComment = false;
            } else if (!(rule.test(txt_value))) {
                $(errorBox).html(noticeTxt2);
                $(inputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
                judgeComment = false;
            } else {
                $(errorBox).html("");
                $(inputName).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
                judgeComment = true;
            }
        }
         function confirmPassword(tagName1,tagName2,errorBox,noticeTxt1,noticeTxt2) {
            var txt_value = $(tagName1).val();
            var txt_value1 = $(tagName2).val();
            if (txt_value == txt_value1 && txt_value.length > 0) {
                $(errorBox).html("");
                $(tagName2).css({ 'border': '1px solid #CFCBC6', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
                judgeConfirm = true;
            } else if (txt_value == "") {
                $(errorBox).html(noticeTxt1);
                $(tagName2).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
                judgeConfirm = false;
            } else {
                $(errorBox).html(noticeTxt2);
                $(tagName2).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
                judgeConfirm = false;
            }
        }
        // 输入为空给予通过方法
        function editUserEmpty(inputName,errorBox,noticeTxt,rule) {
            var txt_value = $(inputName).val();
            if (txt_value == "") {
               $(errorBox).html("");
               $(inputName).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
                judgeEmpty = true;
            } else if (!(rule.test(txt_value))) {
                $(errorBox).html(noticeTxt);
                $(inputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
                judgeEmpty = false;
                } else {
                $(errorBox).html("");
                $(inputName).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
                judgeEmpty = true;
            }
        }
        function editUserEmpty1(inputName,errorBox,noticeTxt,rule) {
            var txt_value = $(inputName).val();
            if (txt_value == "") {
               $(errorBox).html("");
               $(inputName).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
                judgeEmpty1 = true;
            } else if (!(rule.test(txt_value))) {
                $(errorBox).html(noticeTxt);
                $(inputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
                judgeEmpty1 = false;
                } else {
                $(errorBox).html("");
                $(inputName).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
                judgeEmpty1 = true;
            }
        }
        function editUserEmpty2(inputName,errorBox,noticeTxt,rule) {
            var txt_value = $(inputName).val();
            if (txt_value == "") {
               $(errorBox).html("");
               $(inputName).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
                judgeEmpty2 = true;
            } else if (!(rule.test(txt_value))) {
                $(errorBox).html(noticeTxt);
                $(inputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
                judgeEmpty2 = false;
                } else {
                $(errorBox).html("");
                $(inputName).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
                judgeEmpty2 = true;
            }
        }
        editUserAccount('.q-UserControl-input1','.q-UserControl-notice1',"<font color='red'>用户账号不能为空</font>");
        editUserAccount1('.q-UserControl-input4','.q-UserControl-notice4',"<font color='red'>用户姓名不能为空</font>");
        editUserComment('.q-UserControl-input2','.q-UserControl-notice2',"<font color='red'>用户密码不能为空</font>","<font color='red'>用户密码格式不正确</font>",/^.{6,12}$/);
        confirmPassword('.q-UserControl-input2','.q-UserControl-input3','.q-UserControl-notice3',"<font color='red'>确认密码不能为空</font>","<font color='red'>两次密码输入不一致!</font>");

        editUserEmpty('.q-UserControl-input5','.q-UserControl-notice5',"<font color='red'>输入格式不正确，请重新输入</font>",/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
        editUserEmpty1('.q-UserControl-input6','.q-UserControl-notice6',"<font color='red'>输入格式不正确，请重新输入</font>",/^\d{1,20}$/);
        editUserEmpty2('.q-UserControl-input7','.q-UserControl-notice7',"<font color='red'>输入格式不正确，请重新输入</font>",/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/); 
         if (judgeVar && judgeVar1 && judgeComment && judgeConfirm && judgeEmpty && judgeEmpty1 && judgeEmpty2) {
            return true;
         } else {
            return false; 
         }
    });
}
$(function(){
    // 提示信息的box不隐藏，验证非空的方法调用
    GetLostFocus('.q-UserControl-input1','.q-UserControl-notice1','用户账号为非空任意字符');
    GetLostFocus('.q-UserControl-input4','.q-UserControl-notice4','用户姓名为非空任意字符');
    // 提示信息的box不隐藏，验证方法调用
    GetLostFocus('.q-UserControl-input2','.q-UserControl-notice2','用户密码由6-16个字符组成！');
    GetLostFocus('.q-UserControl-input5','.q-UserControl-notice5','');
    GetLostFocus('.q-UserControl-input6','.q-UserControl-notice6','');
    GetLostFocus('.q-UserControl-input7','.q-UserControl-notice7','');
    // 提示信息的box不隐藏，验证确认密码方法调用
    GetLostFocus('.q-UserControl-input3','.q-UserControl-notice3','请再次输入密码');
    // 提示信息的box不隐藏，点击验证
    clickTest();
})






































