/*
****单行文本框的得到与失去焦点的边框变化方法
****author：仇郯郯
****用途：用于单行文本框得到与市区焦点边框颜色的变化
****一个参数，即调用的标签id、class或者标签名称
*/
function InputChangeColor(TagName){
	$(TagName).live('focus', function() {
        $(this).css({ 'border': '1px solid #A0C2FD', 'box-shadow': '0px 0px 2px #A0C2FD', '-moz-box-shadow': '0px 0px 2px #A0C2FD', '-webkit-box-shadow': '0px 0px 2px #A0C2FD', '-ms-box-shadow': '0px 0px 2px #A0C2FD' });
    })
    $(TagName).live('blur', function() {
        $(this).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
    })
}
/*
****多行文本框的得到与失去焦点的边框变化方法
****author：仇郯郯
****用途：用于多行文本框得到与市区焦点边框颜色的变化
****一个参数，即调用的标签id、class或者标签名称
*/
function TextareaChangeColor(TagName){
	$(TagName).live('focus', function() {
        $(this).css({ 'border': '1px solid #A0C2FD'});
    })
    $(TagName).live('blur', function() {
        $(this).css({ 'border': '1px solid #C8C8C8'});
    })
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
****删去某一组元素的底边线
****author：仇郯郯
****用途：用于删去某一组元素的底边线
****三个参数
****一个参数，即调用的标签id、class或者标签名称
*/
function Del_last_border(TagName){
    $(TagName).last().css('border','0');
}
/*
****按钮鼠标移入移出的淡入淡出效果
****author：仇郯郯
****用途：按钮鼠标移入移出的淡入淡出给用户一个明显区别
****一个参数，即调用的标签id、class或者标签名称
*/
function BtnChangeBg(TagName){
	$(TagName).mouseenter(function (event) {
		$(this).css({ 'filter': 'alpha(opacity:90)', 'opacity': '0.9', 'cursor': 'pointer' });
	});
	$(TagName).mouseleave(function (event) {
		$(this).css({ 'filter': 'alpha(opacity:100)', 'opacity': '1' });
	});
}
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
	    $(TagName).css({ 'border': '1px solid #A0C2FD', 'box-shadow': '0px 0px 2px #A0C2FD', '-moz-box-shadow': '0px 0px 2px #A0C2FD', '-webkit-box-shadow': '0px 0px 2px #A0C2FD', '-ms-box-shadow': '0px 0px 2px #A0C2FD' });
	});
	$(TagName).bind("blur", function () {
	    $(NoticeName).html("");
	    $(TagName).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
	});
}
/*
****文本框的验证实例
****author：仇郯郯
****用途：用于各种文本框的验证
****几种常见验证的正则法则
****邮政编码：/^[0-9]{6}$/
****QQ号码：[1-9][0-9]{4,14}
****手机和座机：/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
****手机号码：/^1\d{10}$|^(0\d{2,3}-?|\(0\d{2,3}\))?[1-9]\d{4,7}(-\d{1,8})?$/
****网址：/^((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/
或者：/(?:http:\/\/)?([\w.]+[\w\/]*\.[\w.]+[\w\/]*\??[\w=\&\+\%]*)/
****邮箱：/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
****数字和.(点)：/^[0-9]{0}([0-9]|[.])+$/
****大于6位的任意字符：/^[\w\W]{6,}$/
****正整数和0：/^([1-9]\d*|[0]{1,1})$/
****IP地址验证正则/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
*****模糊URL地址正则：/(?:http:\/\/)?([\w.]+[\w\/]*\.[\w.]+[\w\/]*\??[\w=\&\+\%]*)/
*****大于8位的字母或数字/^[a-zA-Z0-9]{8,200}$/
*****大于6位的字母和数字组合/[a-zA-Z0-9]{6,}/
*****16进制颜色值的正则 /^#[0-9a-fA-F]{3,6}$/    --> #ffffff
*/
$(function () {
	//文本框提示的验证实例方法调用
	NoticeTest('.input1','.notice1','');
	NoticeTest('.input2','.notice2','<span style="color:#999;">请填写邮箱邮箱</span>');
    var isTest1Ok = false;
    var isTest2Ok = false;
    /*
	****只验证不为空的方法
	****author：仇郯郯
	****用途：文本框简单验证，只要用户输入不为空即可通过
	****三个参数（要验证的文本框，提示错误框，提示词）
	****InputName：要验证的文本框
	****NoticeTxt：提示错误框
	****NoticeContent：提示词
	*/
    function Test1(InputName,NoticeTxt,NoticeContent) {
        var txt_value = $(InputName).val();
        if (txt_value == "") {
            $(NoticeTxt).html(NoticeContent);
            $(InputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isTest1Ok = false;
        } else {
            $(NoticeTxt).html("");
            isTest1Ok = true;
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
    function Test2(InputName, ErrorBox, NoticeTxt1, NoticeTxt2, Rule) {
        var txt_value = $(InputName).val();
        if (txt_value == "") {
            $(ErrorBox).html(NoticeTxt1);
            $(InputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isTest2Ok = false;
        } else if (!(Rule.test(txt_value))) {
            $(ErrorBox).html(NoticeTxt2);
            $(InputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isTest2Ok = false;
        } else {
            $(ErrorBox).html("");
            $(InputName).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isTest2Ok = true;
        }
    }
    /*
    ****特殊验证之确认密码的方法
    ****author：仇郯郯
    ****用途：文本框确认密码验证
    ****五个参数（要验证的文本框，提示错误框，提示词）
    ****InputName1：确认密码框
    ****InputName2：上一级的密码框
    ****ErrorBox：提示错误框
    ****NoticeTxt1：不能为空的提示词
    ****NoticeTxt2：密码不一致的提示词
    */
    function ConfirmPassword(InputName1, InputName2, ErrorBox, NoticeTxt1, NoticeTxt2) {
        var txt_value1 = $(InputName1).val();
        var txt_value2 = $(InputName2).val();
        if (txt_value1 == "") {
            $(ErrorBox).html(NoticeTxt1);
            $(InputName1).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isConfirmPasswordOk = false;
        } else if (txt_value1 != txt_value2) {
            $(ErrorBox).html(NoticeTxt2);
            $(InputName1).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
            isConfirmPasswordOk = false;
        } else {
            $(ErrorBox).html("");
            $(InputName1).css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #FFE7E7 inset', '-moz-box-shadow': '0px 0px 0px #FFE7E7 inset', '-webkit-box-shadow': '0px 0px 0px #FFE7E7 inset' });
            isConfirmPasswordOk = true;
        }
    }
    //失败不让提交
    $('.testButton').live('click', function(event) {
        Test1('.input1','.notice1','姓名不能为空！');
        Test2('.input2', '.notice2', "电话不能为空", "电话输入格式不正确", /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
        ConfirmPassword('.zhixiEditPassAlert-listInput2', '.zhixiEditPassAlert-listInput1', '.zhixiEditPassAlert-listNotice2', '确认密码不能为空', '两次密码输入不一致，请重新输入');
        if (isTest1Ok && isTest2Ok) {
            alert("恭喜你验证成功！");
            return true;
        }
    })
})
/*
    ****文本框的得到与失去焦点文字效果
    ****author：仇郯郯
    ****用途：文本框的得到与失去焦点文字效果设置
    ****一个参数
    ****TagName：要调用的input名称
*/
function InputSetDefaultValue (TagName){
    $(TagName).live('focus', function(event) {
        if ($(this).val()==this.defaultValue){  
            $(this).val("");    
        }
    });
    $(TagName).live('blur', function(event) {
        if ($(this).val()==""){
            $(this).val(this.defaultValue);
        }
    });
}
/*
    ****表格的全选功能方法
    ****author：仇郯郯
    ****用途：用于多选框的多选
    ****一个参数
    ****TagName：要调用的多选框名称
*/
function SelectAll(TagName){
    $(TagName).live('click', function() {
        if(this.checked){ 
            $("input[name=checkName]").attr('checked', true);
        }else{ 
            $("input[name=checkName]").attr('checked', false);
        }   
    });
}
/*
    ****去除全选的方法
    ****author：仇郯郯
    ****用途：用于多选框的多选
    ****两个参数
    ****TagName1：要普通多选框名称"input[name=checkName]"
    ****TagName2：要全选多选框名称".checkbox"
*/
function DelSelectAll(TagName1,TagName2){
    $(TagName1).click(function () {
        if ($(this).attr("checked") == false) {
            $(TagName2).attr("checked", false);
        } else {
            var ischeck = true;
            $(TagName1).each(function (i, item) {
                if ($(item).attr("checked") == false) {
                    ischeck = false;
                }
            });
            if (ischeck) {
                $(TagName2).attr("checked", true);
            } else {
                $(TagName2).attr("checked", false);
            }
        }
    });
}
/*
    ****文本框只能输入数字，并屏蔽输入法和粘贴  
    ****author：仇郯郯
    ****用途：用于限制输入非数字之外的内容
    ****无参数，直接点上方法名
    ****example：$("input").numeral();
*/
$.fn.numeral = function () {
    $(this).css("ime-mode", "disabled");
    this.bind("keypress", function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);  //兼容火狐 IE      
        if (!$.browser.msie && (e.keyCode == 0x8))  //火狐下不能使用退格键     
        {
            return;
        }
            return code >= 48 && code <= 57;
    });
    this.bind("blur", function () {
        if (this.value.lastIndexOf(".") == (this.value.length - 1)) {
            this.value = this.value.substr(0, this.value.length - 1);
        } else if (isNaN(this.value)) {
            this.value = "";
        }
    });
    this.bind("paste", function () {
        var s = clipboardData.getData('text');
        if (!/\D/.test(s));
        value = s.replace(/^0*/, '');
        return false;
    });
    this.bind("dragenter", function () {
        return false;
    });
    this.bind("keyup", function () {
        if (/(^0+)/.test(this.value)) {
            this.value = this.value.replace(/^0*/, '1');
        }
    });
    this.bind("keyup", function () {
        if (/(^[ ]+)/.test(this.value)) {
            this.value = this.value.replace(/^0*/, '1');
        }
    });
};
/*
    ****ajax调数据方法封装
    ****author：仇郯郯
    ****用途：异步无刷新调用数据
    ****十个参数（视情况而定）
    ****url（不可省略）：请求地址，可以精确到请求地址的具体方法
    ****dataType（不可省略）：返回值的数据类型，常见json与xml
    ****async（可省略）：请求是否异步，默认为异步，值为true
    ****data（可省略）：参数值，注意格式
    ****type（一般不要省略）：请求方式，POST或者GET
    ****beforeSend（可省略）：数据未加载出来前，一般加一个load加载中图片
    ****success（一般不要省略）：数据请求成功时执行的内容
    ****complete（可省略）：数据请求成功后执行的内容
    ****error（可省略）：数据请求失败后执行的提示内容
*/
function LoadDate() {
    $.ajax({
        url: "http://www.hzhuti.com",    //请求的url地址
        dataType: "json",   //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: [ 
                { name: "type", value: $('.zhixiMyself').attr("state") },
                { name: "uid", value: $(obj).attr('uid') }
              ],
        type: "POST",   //请求方式
        beforeSend: function() {
            //请求前的处理
        },
        success: function(data) {
            //请求成功时处理
            //console.log(data);
            $.each(msg,function(key,value){
                
            }) 
        },
        complete: function() {
            //请求完成的处理
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Error:" + errorThrown);
        }
    });
}
//首页ajax使用
function getBookCategory() {
    var dadaHtml = '';
    var childHtml = '';
    $.ajax({
        type: "post",
        dataType: "json",   //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        url: '../WebServices/HomePageWebService.asmx/GetClass',
        data: [{ name: "pageSize", value: 13}],
        success: function (data) {
            dadaHtml = '';
            if (data.length > 0) {
                $(data).each(function (i, item) {
                    childHtml = '';
                    //子集模板
                    $(item.SubClass).each(function (j, jtem) {
                        childHtml += '<span class="gf-main-hidden_li">' +
                                        '<a href="list/Default.aspx?class=' + jtem.ClassCode + '" target="_blank" class="gf-main-hidden_liTxt">' +
                                            jtem.ClassName +
                                        '</a>' +
                                    '</span>';
                    })
                    //父级模板
                    dadaHtml += '<div class="gf-main-left_list">' +
                                    '<div class="gf-main-left_li">' +
                                        '<a href="list/Default.aspx?class=' + item.ClassCode + '" target="_blank" class="gf-main-left_liTitle" title="' + item.ClassName + '">' +
                                            item.ClassName +
                                        '</a>' +
                                        '<span class="gf-main-left_Icon">></span>' +
                                    '</div>' +
                                    '<div class="gf-main-hidden_content">' +
                                        childHtml +
                                    '</div>' +
                                '</div>'
                })
                //图书分类添加字符串
                $('.gf-main-left_content').html(dadaHtml);
                //图书分类的鼠标移入效果方法调用
                navHover();
            }
            console.log(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}
// 分页的ajax使用
function GetList(pageStart) {
    var dataHtml = "";
    //当前页数
    this.pageStart = pageStart;
    $.ajax({
        type: "Post",
        url: "../../../WebServices/NoticeWebservice.asmx/GetAllNotice",
        data: [
                { name: "start", value: pageStart },
                { name: "pageSize", value: pageSize}],
        success: function (data) {
            //console.log(data);
            if (data.Total <= 0) {
                dataHtml = '<tr style="height:5px;">' +
                                   '<td colspan="5" style="text-align:center;"><span>暂无数据</span></td>' +
                               '</tr>';
            } else {
                dataHtml = "";
                $(data.DataList).each(function (i, item) {
                    var index = parseInt((pageStart - 1) * pageSize) + i + 1;
                    dataHtml += '<tr>' +
                                    '<td>' +
                                        index +
                                    '</td>' +
                                    '<td>' +
                                        '<div style="width:305px;" class="ellipsis" title="' + item.Title + '">' +
                                            item.Title +
                                        '</div>' +
                                    '</td>' +
                                    '<td>' +
                                        '<div style="width:390px;" class="ellipsis" title="' + item.DataContent + '">' +
                                            item.DataContent +
                                        '</div>' +
                                    '</td>' +
                                    '<td>' +
                                        item.PublishTime +
                                    '</td>' +
                                    '<td>' +
                                        '<input type="button" name="edit" value="" onclick="EditDiv(' + item.ID + ');" class="mails-DepartManage-edit" title="编辑"/>' +
                                        '<input type="button" name="del" value="" onclick="DelDiv(' + item.ID + ');" class="mails-DepartManage-del" title="删除"/>' +
                                    '</td>' +
                                '</tr>';
                });
            }
            $("#taskList").html(dataHtml);
            //隔行变色方法调用
            TableChangeColor(".mails-DepartManage-table tbody tr:odd td", "#F8FBFA");
            $('#totalPage').html(data.Total);
            $('#currentPage').html(pageStart);
            //分页的调用
            $(".pagination").html($.PageFunc(data.Total, pageSize, pageStart, "GetList"));
        },
        beforeSend: function () {
            dataHtml = '<tr style="height:50px;">' +
                                        '<td colspan="5"><div class="loading"><img src="../Styles/Images/img/loading.gif"/><span>加载中，请稍候 ...</span></div></td>' +
                                      '</tr>';
            //绑定数据
            $("#taskList").html(dataHtml);
        },
        error: function () { }
    });
}
//ajax实例->跨域请求
// ajax实例->书籍推荐数据方法
function GetBookList() {
    $.ajax({
        type: "Post",
        dataType: "jsonp",   //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        jsonp: 'callback',
        url: "http://192.168.1.10:8090/webservices/Externalwebservice.asmx/GetResource",
        data: [{ name: "guid", value: 'dcaccc45-2a9c-494f-85f3-1f2e59174da1' },
                { name: "count", value: 10}],
        success: function (data) {
            if (data.Code == 0) {
                var htmlTemp = '';
                $(data.Data).each(function (i, item) {
                    htmlTemp += '<li>' +
                                    '<a href="' + item.Url + '" target="_blank">' +
                                        '<img src="' + item.ImageUrl + '">' +
                                        '<div class="title" title="' + item.RecTitle + '">' +
                                            item.RecTitle +
                                        '</div>' +
                                    '</a>' +
                                '</li>';
                })
                //console.log(htmlTemp);
                $('#jg-move3 .img').html(htmlTemp);
                moveImg('#jg-move3', 3000);
            } else {
                return false;
            }
        },
        error: function () { }
    });
}
//ajax实例->删除方法
function DeleteProject(id) {
    if (confirm("确定要删除此项目吗？")) {
        //删本地
        $.ajax({
            type: "Post",
            url: "../../WebServices/ClientUnitWebService.asmx/GetAllTask",
            data: [{ name: "id", value: id}],
            success: function (data) {
                if (data != "") {
                    alert(data);
                } else {
                    //绑定列表
                    GetList();
                }
            },
            error: function () { }
        });
    }
}
/*
    ****对Date的扩展，将 Date 转化为指定格式的String的方法
    ****用途：时间格式化
    ****说明：
    ****1.月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
    ****2.年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
    ****例子：
    ****(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
    ****(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
    ****调用方法：
    ****var time1 = new Date().format("yyyy-MM-dd HH:mm:ss");       
    ****var time2 = new Date().format("yyyy-MM-dd"); 
    ****new Date(item.CloseTime).Format("yyyy-MM-dd hh:mm:ss") + 
    ****'<div class="zhixiMyself-reviewListCon_bottom">' +
    ****    new Date(item.CloseTime).Format("yyyy-MM-dd hh:mm:ss") +
    ****'</div>'
*/
Date.prototype.Format = function(fmt)   {
    var o = {   
        "M+" : this.getMonth()+1,                 //月份   
        "d+" : this.getDate(),                    //日   
        "h+" : this.getHours(),                   //小时   
        "m+" : this.getMinutes(),                 //分   
        "s+" : this.getSeconds(),                 //秒   
        "q+" : Math.floor((this.getMonth()+3)/3), //季度   
        "S"  : this.getMilliseconds()             //毫秒   
    };   
if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
    for(var k in o)   
        if(new RegExp("("+ k +")").test(fmt))   
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
    return fmt;   
} 
/*
    ****截取url地址参数的方法
    ****author：仇郯郯
    ****用途：用于地址栏传参时的关键词截取
    ****一个参数
    ****name：要截取的关键词，以问号分割
    ****方法调用：$.getUrlParam("id")
*/
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = decodeURIComponent(window.location.search.substr(1)).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery); 
$(function(){
	//单行文本框的得到与失去焦点的边框变化方法调用	
	//InputChangeColor('.test');
	//多行文本框的得到与失去焦点的边框变化方法调用	
	//TextareaChangeColor('.test');
	//按钮鼠标移入移出的淡入淡出效果方法调用
	//BtnChangeBg('.test');
    $(function () {
        $(".CopyLink").click(function () {
            var hr=window.location.href;
            if(hr.indexOf("JournalPage")>0||hr.indexOf("SearchPage")>0||hr.indexOf("searchpage")>0||hr.indexOf("journalpage")>0||hr.indexOf("Account")>0)
            {
                $(".CopyLink").attr("href","../Login.aspx");
            }else{
                $(".CopyLink").attr("href","Login.aspx");
            }
        });
    })
})
//窗口重置的时候执行的事件
$(window).resize(function(){
    // 多选检索宽度外部Div方法调用
    //conWidth();
})
/**参数说明：
 * 根据长度截取先使用字符串，超长部分追加…
 * str 对象字符串
 * len 目标字节长度
 * 返回值： 处理结果字符串
 */
function cutString(str, len) {
    //length属性读出来的汉字长度为1
    if(str.length*2 <= len) {
        return str;
    }
    var strlen = 0;
    var s = "";
    for(var i = 0;i < str.length; i++) {
        s = s + str.charAt(i);
        if (str.charCodeAt(i) > 128) {
            strlen = strlen + 2;
            if(strlen >= len){
                return s.substring(0,s.length-1) + "...";
            }
        } else {
            strlen = strlen + 1;
            if(strlen >= len){
                return s.substring(0,s.length-2) + "...";
            }
        }
    }
    return s;
}
/**参数说明：
 * 倒计时方法
 * dataNum 2616,9,1,0,0,0
 * tagTian 天的元素名
 * tagXiaoShi 小时的元素名
 * tagFenZhong 分钟的元素名
 * tagMiao 秒的元素名
 * 无返回值
 */
function daojishi(dataNum,tagTian,tagXiaoShi,tagFenZhong,tagMiao){
    var now_time=new Date();//创建当前时间
    var shiyi=new Date(dataNum);//创建十月一时间
    var diff=shiyi.getTime()-now_time.getTime();//计算时间差
    var title=document.getElementById('title');
    var spans=document.getElementsByTagName('span');

    var tian=parseInt(diff/(24*60*60*1000));//计算还剩多少天
    diff=diff%(24*60*60*1000);//获得还剩多少天后，计算还剩多少毫秒
    var xiaoshi=parseInt(diff/(60*60*1000));//计算还剩多少小时
    diff=diff%(60*60*1000);//获得还剩多少小时后，计算还剩多少毫秒
    var fenzhong=parseInt(diff/(60*1000));//计算还剩多少分钟
    diff=diff%(60*1000);//获得还剩多少分钟后，计算还剩多少毫秒
    var miao=parseInt(diff/1000);//计算毫秒

    if (xiaoshi < 10) {
        xiaoshi = '0' + xiaoshi;
    };
    if (fenzhong < 10) {
        fenzhong = '0' + fenzhong;
    };
    if (miao < 10) {
        miao = '0' + miao;
    };
    $(tagTian).text(tian);
    $(tagXiaoShi).text(xiaoshi);
    $(tagFenZhong).text(fenzhong);
    $(tagMiao).text(miao);
}
/**参数说明：
 * 多选框全选和取消全选方法
 * obj "this"->当前点击的那个
 * tagList 其他的多选列表
 * 无返回值
 */
function SelectAll(obj,tagList) {
    var checked = $(obj).attr("checked");
    if (checked == "checked") {
        $(tagList).attr("checked", "true");
    } else {
        $(tagList).removeAttr("checked");
    }
}
/**参数说明：
 * 判断是否取消单个全选的方法
 * 说明：此方法要声明一个全局变量 var status = true;
 * SelectList 多选框列表
 * SelectAll 全选框
 * 无返回值
 */
var status = true;
function DelSelectAll(SelectList,SelectAll) {
    status = true;
    $(SelectList).each(function () {
        var checked = $(this).attr("checked");
        if (checked != "checked") {
            status = false;
        }
    });
    if (status == "false") {
        $(SelectAll).removeAttr("checked");
    } else {
        $(SelectAll).attr("checked", "true");
    }   
}
/**参数说明：
 * 产生0，n随机数
 * 参数 n,即产生（0，n）的随机数
 */
function rand (n){
    return (Math.floor(Math.random ()*n + 1));
}
/**参数说明：
 * 函数说明：产生n ~ m个不重复随机数，返回值为数组
 * num 要产生多少个随机数
 * from 产生随机数的最小值
 * to 产生随机数的最大值
 */
function createRandom(num ,from ,to ){
    var arr=[];
    for(var i=from;i<=to;i++){
        arr.push(i);
    }
    arr.sort(function(){
        return 0.5-Math.random();
    });
    arr.length=num;
    return arr;
}
/**参数说明：
 * 函数说明：截取地址地址栏的关键词的值
 * name 关键词
 * 调用：$.getUrlParam("id");
 * 适用于地址栏传参
 */
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = decodeURIComponent(window.location.search.substr(1)).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);
/**参数说明：
 * 函数功能：将xml格式数据转换为json
 * xml 数据
 */
function xmlToJson(xml) {
    // Create the return object
    var obj = {};
    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }
    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};
/**参数说明：（无参数）
 * 函数功能：文本框得到焦点，让光标停留在值最后
 * 函数调用：$(element).focusEnd();
 */
$.fn.setCursorPosition = function(position){
    if(this.lengh == 0) return this;
    return $(this).setSelection(position, position);
}

$.fn.setSelection = function(selectionStart, selectionEnd) {
    if(this.lengh == 0) return this;
    input = this[0];

    if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    } else if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }

    return this;
}
$.fn.focusEnd = function(){
    this.setCursorPosition(this.val().length);
}
/**参数说明：（无参数）
* 函数功能：获取当前日期
* 函数返回值：为日期字符串（2015-10-09）;
*/
function getCurrentTime() {
    var d = new Date();
    function addzero(v) {
        if (v < 10) return '0' + v; return v.toString();
    }
    var s = d.getFullYear().toString() + '-' + addzero(d.getMonth() + 1 )+ '-' + addzero(d.getDate());
    return s;
}
/**参数说明：（无参数）
* 函数功能：获取去年今日日期
* 函数返回值：为日期字符串（2015-10-09）;
*/
function getPrevTime() {
    var d = new Date();
    function addzero(v) {
        if (v < 10) return '0' + v; return v.toString();
    }
    var s = d.getFullYear() - 1 + '-' + addzero(d.getMonth() + 1) + '-' + addzero(d.getDate());
    return s;
}
/**参数说明：（一个参数）
* 函数功能：将日期字符串转化为时间戳
* 函数参数：dateStr时间字符串
* 函数返回值：时间戳;
*/
function get_unix_time(dateStr)
{
    var newstr = dateStr.replace(/-/g,'/'); 
    var date =  new Date(newstr); 
    var time_str = date.getTime().toString();
    return time_str.substr(0, 10);
}
/**参数说明：（一个参数）
 * 函数功能：按下回车键检索
 * 函数返回值：无返回值
 */
function keyupSearch(className){
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            $(className).trigger("click");
        }
    });
}
/**参数说明：（一个参数）
 * dateStr：日期字符串（2016-11-15 00:22:11）
 * 函数功能：按下回车键检索
 * 函数返回值：无返回值
 */
function get_unix_time(dateStr) {
    var newstr = dateStr.replace(/-/g, '/');
    var date = new Date(newstr);
    var time_str = date.getTime().toString();
    return time_str.substr(0, 10);
}
/**参数说明：（无参数）
 * 函数功能：网站标题的走马灯效果
 * 函数返回值：无返回值
 */
function scroll() {
    var title = document.title;
    var firstch = title.charAt(0);
    var leftstr = title.substring(1, title.length);
    document.title = leftstr + firstch;
}
/**参数说明：（两个参数）
 * 函数功能：点击收藏本站
 * 参数一：文字
 * 参数二：跳转地址
 * 函数调用：$('#fav').addFavorite('收藏本站', location.href);
 * 函数返回值：无返回值
 */
jQuery.fn.addFavorite = function (l, h) {
    return this.click(function () {
        var t = jQuery(this);
        if (jQuery.browser.msie) {
            window.external.addFavorite(h, l);
        } else if (jQuery.browser.mozilla || jQuery.browser.opera) {
            t.attr("rel", "sidebar");
            t.attr("title", l);
            t.attr("href", h);
        } else {
            alert("请使用Ctrl+D将本页加入收藏夹！");
        }
    });
};
/**参数说明：（无参数）
 * 函数功能：去除字符串的左右空格
 * 函数调用：string.trim();
 * 函数返回值：去除空格后的字符串
 */ 
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, '');
};
/**参数说明：（无参数）
 * 函数功能：去除数组中的重复元素
 * 函数调用：arr.unique;
 * 函数返回值：去除重复元素后的数组
 */ 
Array.prototype.unique = function () {
    this.sort(); //先排序
    var res = [this[0]];
    for (var i = 1; i < this.length; i++) {
        if (this[i] !== res[res.length - 1]) {
            res.push(this[i]);
        }
    }
    return res;
}







