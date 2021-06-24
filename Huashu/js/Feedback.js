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
$(function () {
    $("textarea").live('focus', function() {
        $(this).css({ 'border': '1px solid #A0C2FD', 'box-shadow': '0px 0px 2px #A0C2FD', '-moz-box-shadow': '0px 0px 2px #A0C2FD', '-webkit-box-shadow': '0px 0px 2px #A0C2FD', '-ms-box-shadow': '0px 0px 2px #A0C2FD' });
    })
    $("textarea").live('blur', function() {
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
// ===============意见及反馈 表单验证========================
        $(function () {
            var isIdearOk = false;
            $(".q-CompanyProfile-textarea").bind("blur", function () {
                $(".q-CompanyProfile-notice").html("");
                $(".q-CompanyProfile-textarea").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
            });
            $(".q-CompanyProfile-textarea").bind("focus", function () {
                $(".q-CompanyProfile-notice").html("<font class='q-notice-text'>请您填写意见及反馈</font>");
                $(".q-CompanyProfile-textarea").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
            });
            function idear() {
                var txt_value = $('.q-CompanyProfile-textarea').val();
                if (txt_value == "") {
                    $(".q-CompanyProfile-notice").html("<font color='red'>意见及反馈不能为空</font>");
                    $(".q-CompanyProfile-textarea").css({ 'border': '1px solid red' });
                    isIdearOk = false;
                } else {
                    $(".q-CompanyProfile-notice").html("");
                    $(".q-CompanyProfile-textarea").css({ 'border': '1px solid #C8C8C8' });
                    isIdearOk = true;
                }
            }
            //失败不让提交
            $('.q-CompanyProfile-btn').click(function () {
                idear();
                if (isIdearOk) {
                    alert("提交成功");
                    return true;
                } else {
                    return false;
                }
            })
        })
