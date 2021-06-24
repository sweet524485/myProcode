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
// ===============添加备注弹出层 表单验证========================
$(function () {
    var isCustomeInfoOk = false;
    $(".q-orgCopyAlert-textarea").bind("blur", function () {
        $(".q-orgCopyAlert-notice_box").html("");
        $(".q-orgCopyAlert-textarea").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-orgCopyAlert-textarea").bind("focus", function () {
        $(".q-orgCopyAlert-notice_box").html("<font class='q-notice-text'>请您填写机构备注信息</font>");
        $(".q-orgCopyAlert-textarea").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    function customeInfo() {
        var txt_value = $('.q-orgCopyAlert-textarea').val();
        if (txt_value == "" && txt_value.length < 1) {
            $(".q-orgCopyAlert-notice_box").html("<font color='red'>客户备注信息不能为空</font>");
            $(".q-orgCopyAlert-textarea").css({ 'border': '1px solid #D88E8F' });
            isCustomeInfoOk = false;
        } else {
            $(".q-orgCopyAlert-notice_box").html("");
            $(".q-orgCopyAlert-textarea").css({ 'border': '1px solid #C8C8C8' });
            isCustomeInfoOk = true;
        }
    }
    //失败不让提交
    $('.q-orgCopyAlert-btn').click(function () {
        customeInfo();
        if (isCustomeInfoOk) {
            return true;
        } else {
            return false;
        }
    })
})
// ====================发送邮件的验证=============================
$(function () {
    var isEmailTagNameOneOk = false;
    //邮件标题一验证
    $(".q-orgManageAlert-input1").bind("blur", function () {
        $(".q-orgManageAlert-notice").hide();
        $(".q-orgManageAlert-input1").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-orgManageAlert-input1").bind("focus", function () {
        $(".q-orgManageAlert-notice").show();
        $(".q-orgManageAlert-notice").html("<font class='q-notice-text'>联系人为非空任意字符！</font>");
        $(".q-orgManageAlert-input1").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    function emailTagNameOne() {
        var txt_value = $('.q-orgManageAlert-input1').val();
        if (txt_value == "" && txt_value.length < 1) {
            $(".q-orgManageAlert-notice").show();
            $(".q-orgManageAlert-notice").html("<font color='red'>联系人不能为空</font>");
            $(".q-orgManageAlert-input1").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isEmailTagNameOneOk = false;
        } else {
            $(".q-orgManageAlert-notice").hide();
            $(".q-orgManageAlert-input1").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #fff', '-moz-box-shadow': '0px 0px 0px #fff', '-webkit-box-shadow': '0px 0px 0px #fff' });
            isEmailTagNameOneOk = true;
        }
    }
    $('.q-orgManageAlert-send_btn').click(function () {
        emailTagNameOne();
        if (isEmailTagNameOneOk) {
            return true;
        } else {
            return false;
        }
    })
})
// 机构管理弹出层验证
$(function () {
    var isOrgManageOk = false;
    $(".q-orgManageAlert-f2_input").bind("blur", function () {
        $(".q-orgManageAlert-notice_box").html("");
        $(".q-orgManageAlert-f2_input").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-orgManageAlert-f2_input").bind("focus", function () {
        $(".q-orgManageAlert-notice_box").show();
        $(".q-orgManageAlert-notice_box").html("有效标签为1~20个任意字符");
        $(".q-orgManageAlert-f2_input").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    function orgManage() {
        var txt_value = $('.q-orgManageAlert-f2_input').val();
        if (txt_value == "") {
            $(".q-orgManageAlert-notice_box").html("<font color='red'>标签信息不可为空</font>");
            $(".q-orgManageAlert-f2_input").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isOrgManageOk = false;
        } else {
            $(".q-orgManageAlert-notice_box").html("");
            $(".q-orgManageAlert-f2_input").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
            isOrgManageOk = true;
        }
    }
    //机构管理弹出层验证失败不让提交
    $('.q-orgManageAlert-save').click(function () {
        orgManage();
        if (isOrgManageOk) {
            return true;
        } else {
            return false;
        }
    })
})
//===================== 设置参考策略弹出层-左侧点击效果==================
$(function(){
    $('.q-setStrategyAlert-container_list').live('click', function() {
       $(this).addClass('q-setStrategyAlert-container_list_cur').siblings('.q-setStrategyAlert-container_list').removeClass('q-setStrategyAlert-container_list_cur');
       $(this).find('.q-setStrategyAlert-container_img').addClass('q-setStrategyAlert-container_img_cur').parent().siblings('.q-setStrategyAlert-container_list').find('.q-setStrategyAlert-container_img').removeClass('q-setStrategyAlert-container_img_cur');
    });
});
//=================添加策略的提交添加效果=======================
$(function(){
    $('.q-setStrategyAlert-search_submit').live('click', function() {
        var getInputVal = $('.q-setStrategyAlert-search_input').val();
        if (getInputVal == '') {
            return false;
        }else{
           $(this).parent().next().find('.q-setStrategyAlert-container_list').removeClass('q-setStrategyAlert-container_list_cur');
           $(this).parent().next().find('.q-setStrategyAlert-container_img').removeClass('q-setStrategyAlert-container_img_cur');
            var addHtml = '<a href="javascript:void(0);" class="q-setStrategyAlert-container_list q-setStrategyAlert-container_list_cur" title="'+getInputVal+'"><div class="q-setStrategyAlert-container_li">'+getInputVal+'</div><i class="q-setStrategyAlert-container_img q-setStrategyAlert-container_img_cur" /></i></a>';
            $('.q-setStrategyAlert-container').prepend(addHtml);
            $('.q-setStrategyAlert-search_input').val("");
        }
    });
});
//回车添加数据
$(document).keyup(function(event){
  if(event.keyCode ==13){
    $('.q-setStrategyAlert-search_input').each(function() {
        var getInputVal = $(this).val();
        if (getInputVal == '') {
            return false;
        }else{
            $('.q-setStrategyAlert-container_list').removeClass('q-setStrategyAlert-container_list_cur');
            $('.q-setStrategyAlert-container_img').removeClass('q-setStrategyAlert-container_img_cur');
            var addHtml = '<a href="javascript:void(0);" class="q-setStrategyAlert-container_list q-setStrategyAlert-container_list_cur" title="'+getInputVal+'"><div class="q-setStrategyAlert-container_li">'+getInputVal+'</div><i class="q-setStrategyAlert-container_img q-setStrategyAlert-container_img_cur" /></i></a>';
            $('.q-setStrategyAlert-container').prepend(addHtml);
            $('.q-setStrategyAlert-search_input').val("");
        }
        
    }); 
  }
}); 
//设置参考策略点击上部小图标的Tab切换效果
$(function(){
    $('.q-setStrategyAlert-right_title_box').click(function() {
        var c = $(this).index();//获得当前移入的li的序号
        //让c号con显示，他的兄弟节点隐藏
        $('.q-setStrategyAlert-right_main_list').eq(c).show().siblings('.q-setStrategyAlert-right_main_list').hide();
        $(this).find('.q-setStrategyAlert-right_title').addClass('q-setStrategyAlert-right_title_cur').parent().siblings('..q-setStrategyAlert-right_title_box').find('.q-setStrategyAlert-right_title').removeClass('q-setStrategyAlert-right_title_cur');
    });
    $('.q-setStrategyAlert-right_title_box1').click(function() {
        $(this).find('.q-setStrategyAlert-right_title_img1').addClass('q-setStrategyAlert-right_title_img1_cur');
        $('.q-setStrategyAlert-right_title_img2').removeClass('q-setStrategyAlert-right_title_img2_cur');
         $('.q-setStrategyAlert-right_title_img3').removeClass('q-setStrategyAlert-right_title_img3_cur');
         $('.q-setStrategyAlert-right_title_top_icon').stop().animate({'left':'69px'}, 100);
    });
    $('.q-setStrategyAlert-right_title_box2').click(function() {
        $(this).find('.q-setStrategyAlert-right_title_img2').addClass('q-setStrategyAlert-right_title_img2_cur');
        $('.q-setStrategyAlert-right_title_img1').removeClass('q-setStrategyAlert-right_title_img1_cur');
         $('.q-setStrategyAlert-right_title_img3').removeClass('q-setStrategyAlert-right_title_img3_cur');
         $('.q-setStrategyAlert-right_title_top_icon').stop().animate({'left':'224px'}, 100);
    });
    $('.q-setStrategyAlert-right_title_box3').click(function() {
        $(this).find('.q-setStrategyAlert-right_title_img3').addClass('q-setStrategyAlert-right_title_img3_cur');
        $('.q-setStrategyAlert-right_title_img1').removeClass('q-setStrategyAlert-right_title_img1_cur');
         $('.q-setStrategyAlert-right_title_img2').removeClass('q-setStrategyAlert-right_title_img2_cur');
         $('.q-setStrategyAlert-right_title_top_icon').stop().animate({'left':'379px'}, 100);
    });
})
//设置参考策略点击下部小图标的Tab切换效果\
var c ;
$(function(){
    $('.q-setStrategyAlert-bottom_title').click(function() {
        c = $(this).index();//获得当前移入的li的序号
        //让c号con显示，他的兄弟节点隐藏
        $(this).parents('.q-setStrategyAlert-bottom_left').siblings('.q-setStrategyAlert-bottom_right').find('.q-setStrategyAlert-bottom_label_list').eq(c).show().siblings('.q-setStrategyAlert-bottom_label_list').hide();
        $(this).addClass('q-setStrategyAlert-bottom_title_cur').siblings('.q-setStrategyAlert-bottom_title').removeClass('q-setStrategyAlert-bottom_title_cur');
    });
})
//设置参考策略点击下部标签上下互换位置
$(function(){
    $('.q-CommomAlert-del').live('click', function() {
        var indexText1=$(this).parent().find('.q-CommomAlert-label_name').text();
        var innerHtml1 = '<a href="javascript:void(0);" class="q-setStrategyAlert-bottom_label_li"><span class="q-listAdd">+</span><span class="q-listTxt">'+indexText1+'</span></a>';
        var con = $(this).parents('.q-setStrategyAlert-right_labels').children('.q-CommomAlert-label1').length;
        
        if(con == 1){
           $(this).parents('.q-setStrategyAlert-right_label_box').hide();
        }else{
            $(this).parents('.q-setStrategyAlert-right_label_box').show();
            $('#content').prepend(innerHtml1); 
        }
        $(this).parents('.q-setStrategyAlert-right_label_box').siblings('.q-setStrategyAlert-bottom_container').find('.q-setStrategyAlert-bottom_label_list').each(function() {
            if( $(this).css('display')=='none' ){
                return;
            }
        });
        $(this).parent().remove();
    })
    $('.q-setStrategyAlert-bottom_label_li').live('click', function() {
        $(this).parents('.q-setStrategyAlert-bottom_container').siblings('.q-setStrategyAlert-right_label_box').show();
        var indexText2=$(this).find('.q-listTxt').text();
        var innerHtml2 = '<div class="q-CommomAlert-label1"><span class="q-CommomAlert-label_name">'+indexText2+'</span><span class="q-CommomAlert-del">×</span></div><br/>';
        $(this).parents('.q-setStrategyAlert-bottom_container').siblings('.q-setStrategyAlert-right_label_box').find('.q-setStrategyAlert-right_labels').prepend(innerHtml2); 
        $(this).remove();
    })
})
// 机构服务agency
$(function(){
    $('.q-agency-btn_save').live('click', function() {
        $('.q-agency-move-input1').each(function() {
            var txt_value1 = $(this).val();
            $(this).bind("focus", function () {
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice1").hide();
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice1").html("");
            });
            $(this).bind("blur", function () {
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice1").hide();
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice1").html("");
            });
            if (txt_value1 == "") {
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice1").hide();
             } else if (!(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(txt_value1))) {
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice1").show();
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice1").html("输入格式不正确，请重新输入");
                $(this).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            }else{
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice1").hide();
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice1").hide();
            }
        });
         $('.q-agency-move-input2').each(function() {
            var txt_value2 = $(this).val();
            $(this).bind("focus", function () {
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice2").hide();
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice2").html("");
            });
            $(this).bind("blur", function () {
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice2").hide();
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice2").html("");
            });
            if (txt_value2 == "") {
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice2").hide();
             } else if (!(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(txt_value2))) {
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice2").show();
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice2").html("输入格式不正确，请重新输入");
                $(this).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            }else{
                $(this).parents('.q-agency-move-label_list').find(".q-agency-move-notice2").hide();
            }
        });

    })
})
// ===================采购平台验证=========================
$(function () {
    var isProcurementOk = false;
    var isPrice1Ok = false;
    var isPrice2Ok = false;
    var isPrice3Ok = false;
    var isLibrarianOk = false;
    var isTeacherOk = false;
    var isInterviewerOk = false;
    var isStudentOk = false;
    //图书采购阀值
    $(".q-verify-input1").bind("blur", function () {
        $(".q-verify-notice1").html("<font color='red'>*</font>");
        $(".q-verify-input1").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-verify-input1").bind("focus", function () {
        $(".q-verify-notice1").html("<font class='q-notice-text'>图书采购阀值为非负正整数</font>");
        $(".q-verify-input1").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    function procurement() {
        var txt_value = $('.q-verify-input1').val();
        if (txt_value == "") {
            $(".q-verify-notice1").show();
            $(".q-verify-notice1").html("<font color='red'>图书采购阀值不能为空</font>");
            $(".q-verify-input1").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isProcurementOk = false;
        } else if (!(/^(0|([1-9]\d*))$/.test(txt_value))) {
            $(".q-verify-notice1").html("<font color='red'>图书采购阀值格式不正确，请重新输入</font>");
            $(".q-verify-input1").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isProcurementOk = false;
        } else {
            $(".q-verify-notice1").html("<font color='red'>*</font>");
            $(".q-verify-input1").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isProcurementOk = true;
        }
    }
    //图书采购价格
    $(".q-verify-input2").bind("blur", function () {
        $(".q-verify-notice23").html("");
        $(".q-verify-input2").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-verify-input2").bind("focus", function () {
        $(".q-verify-notice23").html("");
        $(".q-verify-input2").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-verify-input3").bind("blur", function () {
        $(".q-verify-notice23").html("");
        $(".q-verify-input3").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-verify-input3").bind("focus", function () {
        $(".q-verify-notice23").html("");
        $(".q-verify-input3").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    function price1() {
        var txt_value = $('.q-verify-input2').val();
        if (txt_value == "") {
            $(".q-verify-input2").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isPrice1Ok = true;
        } else if (!(/^\d+(\.\d+)?$/.test(txt_value))) {
            $(".q-verify-notice23").html("<font color='red'>采购价格格式不正确，请重新输入</font>");
            $(".q-verify-input2").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isPrice1Ok = false;
        } else {
            $(".q-verify-input2").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isPrice1Ok = true;
        }
    }
    function price2() {
        var txt_value = $('.q-verify-input3').val();
        if (txt_value == "") {
            $(".q-verify-input3").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isPrice2Ok = true;
        } else if (!(/^\d+(\.\d+)?$/.test(txt_value))) {
            $(".q-verify-notice23").html("<font color='red'>采购价格格式不正确，请重新输入</font>");
            $(".q-verify-input3").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isPrice2Ok = false;
        } else {
            $(".q-verify-input3").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isPrice2Ok = true;
        }
    }
    function price3() {
        if($('.q-verify-input2').val()=='' && $('.q-verify-input3').val()==''){
             return false;
        }else{
            var txt_value1 = parseInt($('.q-verify-input2').val());
            var txt_value2 = parseInt($('.q-verify-input3').val());
            if (txt_value1 > txt_value2) {
                $(".q-verify-notice23").html("<font color='red'>后一个价格必须大于等于前一个价格</font>");
                $(".q-verify-input2").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
                $(".q-verify-input3").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
                isPrice3Ok = false;
            } else {
                 $(".q-verify-notice23").html("");
                $(".q-verify-input2").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
                $(".q-verify-input3").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
                isPrice3Ok = true;
            }
        }
    }
    //馆员权重值
    $(".q-verify-input4").bind("blur", function () {
        $(".q-verify-notice4").html("<font color='red'>*</font>");
        $(".q-verify-input4").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-verify-input4").bind("focus", function () {
        $(".q-verify-notice4").html("<font class='q-notice-text'>馆员权重值为非负正整数</font>");
        $(".q-verify-input4").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    function librarian() {
        var txt_value = $('.q-verify-input4').val();
        if (txt_value == "") {
            $(".q-verify-notice4").show();
            $(".q-verify-notice4").html("<font color='red'>馆员权重值不能为空</font>");
            $(".q-verify-input4").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isLibrarianOk = false;
        } else if (!(/^(0|([1-9]\d*))$/.test(txt_value))) {
            $(".q-verify-notice4").html("<font color='red'>馆员权重值格式不正确，请重新输入</font>");
            $(".q-verify-input4").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isLibrarianOk = false;
        } else {
            $(".q-verify-notice4").html("<font color='red'>*</font>");
            $(".q-verify-input4").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isLibrarianOk = true;
        }
    }
    //老师权重值
    $(".q-verify-input5").bind("blur", function () {
        $(".q-verify-notice5").html("<font color='red'>*</font>");
        $(".q-verify-input5").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-verify-input5").bind("focus", function () {
        $(".q-verify-notice5").html("<font class='q-notice-text'>老师权重值为非负正整数</font>");
        $(".q-verify-input5").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    function teacher() {
        var txt_value = $('.q-verify-input5').val();
        if (txt_value == "") {
            $(".q-verify-notice5").show();
            $(".q-verify-notice5").html("<font color='red'>老师权重值不能为空</font>");
            $(".q-verify-input5").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isTeacherOk = false;
        } else if (!(/^(0|([1-9]\d*))$/.test(txt_value))) {
            $(".q-verify-notice5").html("<font color='red'>老师权重值格式不正确，请重新输入</font>");
            $(".q-verify-input5").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isTeacherOk = false;
        } else {
            $(".q-verify-notice5").html("<font color='red'>*</font>");
            $(".q-verify-input5").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isTeacherOk = true;
        }
    }
    //采访主管权重值
    $(".q-verify-input6").bind("blur", function () {
        $(".q-verify-notice6").html("<font color='red'>*</font>");
        $(".q-verify-input6").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-verify-input6").bind("focus", function () {
        $(".q-verify-notice6").html("<font class='q-notice-text'>采访主管权重值为非负正整数</font>");
        $(".q-verify-input6").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    function interviewer() {
        var txt_value = $('.q-verify-input6').val();
        if (txt_value == "") {
            $(".q-verify-notice6").show();
            $(".q-verify-notice6").html("<font color='red'>采访主管权重值不能为空</font>");
            $(".q-verify-input6").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isInterviewerOk = false;
        } else if (!(/^(0|([1-9]\d*))$/.test(txt_value))) {
            $(".q-verify-notice6").html("<font color='red'>采访主管权重值格式不正确，请重新输入</font>");
            $(".q-verify-input6").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isInterviewerOk = false;
        } else {
            $(".q-verify-notice6").html("<font color='red'>*</font>");
            $(".q-verify-input6").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isInterviewerOk = true;
        }
    }
    //学生权重值
    $(".q-verify-input7").bind("blur", function () {
        $(".q-verify-notice7").html("<font color='red'>*</font>");
        $(".q-verify-input7").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-verify-input7").bind("focus", function () {
        $(".q-verify-notice7").html("<font class='q-notice-text'>学生权重值为非负正整数</font>");
        $(".q-verify-input7").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    function student() {
        var txt_value = $('.q-verify-input7').val();
        if (txt_value == "") {
            $(".q-verify-notice7").show();
            $(".q-verify-notice7").html("<font color='red'>学生权重值不能为空</font>");
            $(".q-verify-input7").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isStudentOk = false;
        } else if (!(/^(0|([1-9]\d*))$/.test(txt_value))) {
            $(".q-verify-notice7").html("<font color='red'>学生权重值格式不正确，请重新输入</font>");
            $(".q-verify-input7").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isStudentOk = false;
        } else {
            $(".q-verify-notice7").html("<font color='red'>*</font>");
            $(".q-verify-input7").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isStudentOk = true;
        }
    }
    //教授权重值
    $(".q-verify-input8").bind("blur", function () {
        $(".q-verify-notice8").html("<font color='red'>*</font>");
        $(".q-verify-input8").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    $(".q-verify-input8").bind("focus", function () {
        $(".q-verify-notice8").html("<font class='q-notice-text'>教授权重值为非负正整数</font>");
        $(".q-verify-input8").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #EDECE9 inset', '-moz-box-shadow': '0px 0px 0px #EDECE9 inset', '-webkit-box-shadow': '0px 0px 0px #EDECE9 inset' });
    });
    function professor() {
        var txt_value = $('.q-verify-input8').val();
        if (txt_value == "") {
            $(".q-verify-notice8").show();
            $(".q-verify-notice8").html("<font color='red'>教授权重值不能为空</font>");
            $(".q-verify-input8").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isProfessorOk = false;
        } else if (!(/^(0|([1-9]\d*))$/.test(txt_value))) {
            $(".q-verify-notice8").html("<font color='red'>教授权重值格式不正确，请重新输入</font>");
            $(".q-verify-input8").css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isProfessorOk = false;
        } else {
            $(".q-verify-notice8").html("<font color='red'>*</font>");
            $(".q-verify-input8").css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isProfessorOk = true;
        }
    }
    //验证失败不让提交
    $('.q-verify-save').click(function () {
        procurement();
        librarian();
        teacher();
        interviewer();
        professor();
        student();
        price1(); 
        price2();
        if( isPrice1Ok && isPrice2Ok ) {
            $(".q-verify-notice23").html("");  
            price3();
        }else{
            return false;
        }
        if (isProcurementOk && isPrice2Ok && isPrice1Ok && isPrice3Ok && isLibrarianOk && isTeacherOk && isInterviewerOk && isStudentOk && isProfessorOk) {
            return true;
        } else {
            return false;
        }
    })

})
// 点击左侧叉号删除
$(function(){
    $('.q-setStrategyAlert-container_img').live('click', function(event) {
       var divClassName = $(this).parent().attr('class');
       if (divClassName == "q-setStrategyAlert-container_list q-setStrategyAlert-container_list_cur"){
            var divClassName1 = $(this).parents('.q-setStrategyAlert-container').find('.q-setStrategyAlert-container_list').first().attr('class');
            if (divClassName1 == "q-setStrategyAlert-container_list q-setStrategyAlert-container_list_cur") {
                $(this).parent().next().addClass('q-setStrategyAlert-container_list_cur');
                $(this).parent().next().find('.q-setStrategyAlert-container_img').addClass('.q-setStrategyAlert-container_img_cur');
                $(this).parent().remove();
            }else{
                $(this).parents('.q-setStrategyAlert-container').find('.q-setStrategyAlert-container_list').first().addClass('q-setStrategyAlert-container_list_cur');
                $(this).parents('.q-setStrategyAlert-container').find('.q-setStrategyAlert-container_list').first().find('.q-setStrategyAlert-container_img').addClass('.q-setStrategyAlert-container_img_cur');
                $(this).parent().remove();
            }

       }else{
            $(this).parent().remove();
       } 

    });
})
//补充：设置参考策略弹出层 添加
function divLenght() {
    var divLength1 = $('#chooseCategoryHtml .q-CommomAlert-label1').size();
    if (divLength1 == 0) {
        $('#chooseCategoryHtml').hide();
    }else{
        $('#chooseCategoryHtml').show();
    }
    var divLength2 = $('#ChoosePubDiv .q-CommomAlert-label1').size();
    if (divLength2 == 0) {
        $('#ChoosePubDiv').hide();
    }else{
        $('#ChoosePubDiv').show();
    }
}
function isEmpty(tagName){
    var con = $(tagName).find('.q-CommomAlert-label1').length;
    if(con == 0){
        $(tagName).hide();
    }else{
        $(tagName).show();
    }
}
$(function(){
    divLenght();
    isEmpty('.q-setStrategyAlert-right_label_box1');
    isEmpty('.q-setStrategyAlert-right_label_box2');
})



















































