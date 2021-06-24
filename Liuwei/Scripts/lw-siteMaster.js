//获取登录信息的ajax方法
function getUserInfo() {
    $.ajax({
        type: "post",
        dataType: "json",   //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        url: baseurl+'/WebServices/HomePageWebService.asmx/GetCurrentUserName',
        data: [],
        success: function (data) {
            if (data) {
                $('#userName').html('&nbsp;' + data + '，');
                $('#loginoff').show();
                $('#login').hide();
                $('#background').show();
            } else {
                $('#userName').html('&nbsp;游客');
                $('#loginoff').hide();
                $('#login').show();
                $('#background').hide();
            }
            //console.log(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}
//走马灯效果
function scroll() {
    var title = document.title;
    if (title.length > 8) {
        var firstch = title.charAt(0);
        var leftstr = title.substring(1, title.length);
        document.title = leftstr + firstch;
    }
}
//加入收藏夹
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
/*
****文本框只能输入数字，并屏蔽输入法和粘贴  
****author：仇郯郯
****用途：用于限制输入非数字之外的内容
****无参数，直接点上方法名
****example：$("input").numerall();
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
            this.value = "1";
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
};
//回车分页赋值的方法
function pageLoadData() {
    if (event.keyCode == 13) {
        var nowPage = parseInt($('#pageNum').val());
        var lastPage = parseInt($('#moveTotle').text());
        if (nowPage > lastPage) {
            alert('最多可以翻到第' + lastPage + '页');
        } else {
            pageStart = $('#pageNum').val();
            GetList(pageStart);
        }
    }
}
//搜索框得到焦点去掉默认值
function SearchInputChangeVal(inputName) {
    var defaultVal = $(inputName).val();
    $(inputName).attr('flag', false);
    $(inputName).focus(function () {
        if ($(this).val() == defaultVal) {
            $(this).val("").css('color', '#666');
        }
        $(inputName).attr('flag', true);
    })
    $(inputName).blur(function () {
        if ($(this).val() == "") {
            $(this).val(defaultVal).css('color', '#999');
            $(inputName).attr('flag', false);
        } else {
            $(inputName).attr('flag', true);
        }
    });
    //值发生改变事件
    $(inputName).change(function () {
        var valTxt = $(this).val();
        if (valTxt == "") {
            //让状态值发生改变
            $(this).attr('flag', false);
        } else {
            //让状态值发生改变
            $(this).attr('flag', true);
        }
    });
    //值发生改变事件
    $(inputName).keyup(function () {
        var valTxt = $(this).val();
        if (valTxt == "") {
            //让状态值发生改变
            $(this).attr('flag', false);
        } else {
            //让状态值发生改变
            $(this).attr('flag', true);
        }
    });
    //值发生改变事件
    $(inputName).keydown(function () {
        var valTxt = $(this).val();
        if (valTxt == "") {
            //让状态值发生改变
            $(this).attr('flag', false);
        } else {
            //让状态值发生改变
            $(this).attr('flag', true);
        }
    });
}
$(function () {
    //获取登录信息的用户
    //getUserInfo();
    //title走马灯效果
    setInterval("scroll()", 500);
    //分页点击Go的跳转
    $('.pageGo').click(function () {
        var nowPage = parseInt($('#pageNum').val());
        var lastPage = parseInt($('#moveTotle').text());
        if (nowPage > lastPage) {
            alert('最多可以翻到第' + lastPage + '页');
        } else {
            pageStart = $('#pageNum').val();
            GetList(pageStart);
        }
    });
})