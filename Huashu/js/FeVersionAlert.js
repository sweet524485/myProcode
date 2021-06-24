		// 按钮效果
		$(function () {
		    $('.btn').mouseenter(function (event) {
		        $(this).css({ 'filter': 'alpha(opacity:80)', 'opacity': '0.8', 'cursor': 'pointer' });
		    });
		    $('.btn').mouseleave(function (event) {
		        $(this).css({ 'filter': 'alpha(opacity:100)', 'opacity': '1' });
		    });
		});
		//文本框的得到与失去焦点的边框颜色
		$(function () {
		    $("input[type='text']").live('focus', function() {
		        $(this).css({ 'border': '1px solid #A0C2FD', 'box-shadow': '0px 0px 2px #A0C2FD', '-moz-box-shadow': '0px 0px 2px #A0C2FD', '-webkit-box-shadow': '0px 0px 2px #A0C2FD', '-ms-box-shadow': '0px 0px 2px #A0C2FD' });
		    })
		    $("input[type='text']").live('blur', function() {
		        $(this).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
		    });
		})


// ===================采购平台验证=========================
$(function () {
    var isBanbenhaoOk = false;
    var isLoadLationOk = false;
    var isMiaoshuOk = false;
    //图书采购阀值
    $(".q-SwapUserMangeAlert-nInput1").bind("blur", function () {
        $(".q-SwapUserMangeAlert-nNotice1").html("");
        $(".q-SwapUserMangeAlert-nInput1").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-SwapUserMangeAlert-nInput1").bind("focus", function () {
        $(".q-SwapUserMangeAlert-nNotice1").html("");
        $(".q-SwapUserMangeAlert-nInput1").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-SwapUserMangeAlert-nInput2").bind("blur", function () {
        $(".q-SwapUserMangeAlert-nNotice2").html("");
        $(".q-SwapUserMangeAlert-nInput2").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-SwapUserMangeAlert-nInput2").bind("focus", function () {
        $(".q-SwapUserMangeAlert-nNotice2").html("");
        $(".q-SwapUserMangeAlert-nInput2").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    function banbenhao() {
        var txt_value = $('.q-SwapUserMangeAlert-nInput1').val();
        if (txt_value == "") {
            $(".q-SwapUserMangeAlert-nNotice1").html("版本号不能为空");
            $(".q-SwapUserMangeAlert-nInput1").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isBanbenhaoOk = false;
        } else {
            $(".q-SwapUserMangeAlert-nNotice1").html("");
            $(".q-SwapUserMangeAlert-nInput1").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isBanbenhaoOk = true;
        }
    }
    function loadLation() {
        var txt_value = $('.q-SwapUserMangeAlert-nInput2').val();
        if (txt_value == "") {
            $(".q-SwapUserMangeAlert-nNotice2").html("下载地址不能为空");
            $(".q-SwapUserMangeAlert-nInput2").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isLoadLationOk = false;
        } else if (!(/^((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/.test(txt_value))) {
            $(".q-SwapUserMangeAlert-nNotice2").html("下载地址格式不正确，请重新输入");
            $(".q-SwapUserMangeAlert-nInput2").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isLoadLationOk = false;
        } else {
            $(".q-SwapUserMangeAlert-nNotice2").html("<font color='red'>*</font>");
            $(".q-SwapUserMangeAlert-nInput2").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isLoadLationOk = true;
        }
    }
    function miaoshu() {
        var txt_value = $('#EditorTextBox').val();
        if (txt_value == "") {
            $(".q-SwapUserMangeAlert-nNotice3").html("描述内容不能为空");
            isMiaoshuOk = false;
        } else {
            $(".q-SwapUserMangeAlert-nNotice3").html("");
            isMiaoshuOk = true;
        }
    }
    //验证失败不让提交
    $('.q-SwapUserMangeAlert-btn').click(function () {
        banbenhao();
        loadLation();
        miaoshu();
        if (isBanbenhaoOk && isLoadLationOk && isMiaoshuOk) {
            return true;
        } else {
            return false;
        }
    })

})




























