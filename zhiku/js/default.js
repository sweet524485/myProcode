var baseurl = '';

// 弹出模式窗口
function OpenDialog(url, title, width, height) {

    var horizontalPadding = 0;
    var verticalPadding = 35;
    $('<iframe id="externalSite" name="externalSiteName"  frameborder=0 width="100%" height="100%"  style="margin:0; padding:0;"  src="' + url + '" />').dialog({
        title: title,
        autoOpen: true,
        bgiframe: true,
        width: width,
        height: height,
        modal: true

    }).width(width - horizontalPadding).height(height - verticalPadding);
}

function ChangePara(id) {
    alert("保存成功!");
    window.parent.ChanID(id);

}

function OnlyCloseDialog() {
    $('.ui-dialog-titlebar-close').trigger('click');
}

function CloseDialogNotRef() {
    $('.ui-dialog-titlebar-close').trigger('click');
}

function CloseDialog() {

    $('.ui-dialog-titlebar-close').trigger('click');
    //刷新
    location.reload();
}

function GotoNewPageAndAlert(url) {
    alert("保存成功!");
    window.parent.location = url;

}

function GotoNewPage(url) {
    window.parent.location = url;
}

///自动调高度
function SetAutoHeight(all, detail) {
    $("#" + detail).height("auto");
    $("#" + all + " .makeroalbody").css("height", $("#" + detail).height());

}

///打开详细页
function showdetail1(link) {
    window.parent.parent.showdetail(link);
    return false;
}
///打开详细页
function showdetai2(link) {
    window.parent.parent.showdetai2(link);
    return false;
}

///设置开关
function SetOnOrOff(isOn) {
    if (isOn) {
        $('.gather-switch-btn').find("span").css("margin-left", "35px");
        $('.gather-switch-btn').removeClass("offall");
        $('.gather-switch-btn span').addClass("on");
    } else {
        $('.gather-switch-btn').find("span").css("margin-left", "10px");
        $('.gather-switch-btn').addClass("offall");
        $('.gather-switch-btn span').removeClass("on");
    }
}


String.prototype.padLeft = function (len, c) {
    var s = this, c = c || '0';
    while (s.length < len) s = c + s;
    return s;
}
String.prototype.trim = function () {
    var str = this,
  str = str.replace(/^\s\s*/, ''),
  ws = /\s/,
  i = str.length;
    while (ws.test(str.charAt(--i)));
    return str.slice(0, i + 1);
}

String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};
function setSecond(txt) {
    $("#secondLinkPage").text(txt);
    $("#detailLinkPage").text("");
    $("#lastLinkPage").text("");
    setShowDetail();
}
function setSecondTxt(txt, url, name) {
    $("#secondLinkPage").attr("href", (url == "" ? "#" : (baseurl + url)));
    $("#secondLinkPage").text(txt);
    $("#detailLinkPage").text(name);
    $("#lastLinkPage").text("");
    $("#detailLinkPage").attr("href", "#");
    setShowDetail();
}

function setDetailPage(txt) {
    $("#detailLinkPage").text(txt);
    setShowDetail();
}

function setLastPage(txt, detaillink, last) {
    $("#detailLinkPage").text(txt);
    $("#detailLinkPage").attr("href", baseurl + detaillink);
    $("#lastLinkPage").text(last);
    setShowDetail();
}

function setShowDetail() {

    if ($("#secondLinkPage").text() == "") {
        $("#secondLinkPage").hide();
        $("#secondLinkLb").hide();
        $("#detailLinkPage").hide();
        $("#detailLinkLb").hide();
        $("#lastLinkPage").hide();
        $("#lastLinkLb").hide();
    } else {
        $("#secondLinkPage").show();
        $("#secondLinkLb").show();
        if ($("#detailLinkPage").text() == "") {
            $("#detailLinkPage").hide();
            $("#detailLinkLb").hide();
            $("#lastLinkPage").hide();
            $("#lastLinkLb").hide();
        } else {
            $("#detailLinkPage").show();
            $("#detailLinkLb").show();
            if ($("#lastLinkPage").text() == "") {
                $("#lastLinkPage").hide();
                $("#lastLinkLb").hide();
            } else {
                $("#lastLinkLb").show();
                $("#lastLinkPage").show();
            }
        }
    }
}


//父ID  ID 角度 宽度
function makeroalj(modulid, contentid, r, width, bgcolor) {
    this.setr = r;
    var yj = document.getElementById(modulid);
    yj.style.position = "relative";
    yj.style.width = width ? width + "px" : "100%";
    //yj.style.overflow = "hidden";
    var contentbox = document.getElementById(contentid);
    contentbox.style.position = "absolute";

    for (y = this.setr; y >= 1; y--) {
        var l = document.createElement("div");
        setstyle(l, y);
        yj.appendChild(l);
    }

    var box = document.createElement("div");
    box.style.backgroundColor = bgcolor;
    box.setAttribute("class", "makeroalbody");
    yj.appendChild(box);

    for (y = 1; y <= this.setr; y++) {
        var l = document.createElement("div");
        setstyle(l, y);
        yj.appendChild(l);
    }
    box.style.height = ($("#" + contentid).height() - this.setr * 2)
+ "px";
    //设置样式  
    function setstyle(obj, y) {
        l.innerHTML = " ";
        l.style.height = "1px";
        l.style.overflow = "hidden";
        l.style.backgroundColor = bgcolor;
        l.style.margin = "0 " + (this.setr - Math.floor(Math.sqrt
(this.setr * this.setr - y * y))) + "px";
    }
}


//父ID  ID 角度 宽度
function makeroaljTop(modulid, contentid, r, width, bgcolor) {
    this.setr = r;
    var yj = document.getElementById(modulid);
    yj.style.position = "relative";
    yj.style.width = width ? width + "px" : "100%";
    yj.style.overflow = "hidden";
    var contentbox = document.getElementById(contentid);
    contentbox.style.position = "absolute";

    for (y = this.setr; y >= 1; y--) {
        var l = document.createElement("div");
        setstyle(l, y);
        yj.appendChild(l);
    }

    var box = document.createElement("div");
    box.setAttribute("class", "makeroalbody");
    box.style.backgroundColor = bgcolor;
    yj.appendChild(box);

    box.style.height = ($("#" + contentid).height() - this.setr * 1)
+ "px";
    //设置样式  
    function setstyle(obj, y) {
        l.innerHTML = " ";
        l.style.height = "1px";
        l.style.overflow = "hidden";
        l.style.backgroundColor = bgcolor;
        l.style.margin = "0 " + (this.setr - Math.floor(Math.sqrt
(this.setr * this.setr - y * y))) + "px";
    }
}


//父ID  ID 角度 宽度
function makeroaljBottom(modulid, contentid, r, width, bgcolor) {
    this.setr = r;
    var yj = document.getElementById(modulid);
    yj.style.position = "relative";
    yj.style.width = width ? width + "px" : "100%";
    yj.style.overflow = "hidden";
    var contentbox = document.getElementById(contentid);
    contentbox.style.position = "absolute";


    var box = document.createElement("div");
    box.style.backgroundColor = bgcolor;
    box.setAttribute("class", "makeroalbody");
    yj.appendChild(box);

    for (y = 1; y <= this.setr; y++) {
        var l = document.createElement("div");
        setstyle(l, y);
        yj.appendChild(l);
    }
    box.style.height = ($("#" + contentid).height() - this.setr * 1)
+ "px";
    //设置样式  
    function setstyle(obj, y) {
        l.innerHTML = " ";
        l.style.height = "1px";
        l.style.overflow = "hidden";
        l.style.backgroundColor = bgcolor;
        l.style.margin = "0 " + (this.setr - Math.floor(Math.sqrt
(this.setr * this.setr - y * y))) + "px";
    }
}

//父ID  ID 角度 宽度
function makeroaljHigh(modulid, contentid, r, width, topcolor, bodycolor, bottomcolor) {
    this.setr = r;
    var yj = document.getElementById(modulid);
    yj.style.position = "relative";
    yj.style.width = width ? width + "px" : "100%";
    //yj.style.overflow = "hidden";
    var contentbox = document.getElementById(contentid);
    contentbox.style.position = "absolute";

    for (y = this.setr; y >= 1; y--) {
        var l = document.createElement("div");
        setstyle(l, y, topcolor);
        yj.appendChild(l);
    }

    var box = document.createElement("div");
    box.style.backgroundColor = bodycolor;
    box.setAttribute("class", "makeroalbody");
    yj.appendChild(box);

    for (y = 1; y <= this.setr; y++) {
        var l = document.createElement("div");
        setstyle(l, y, bottomcolor);
        yj.appendChild(l);
    }
    box.style.height = ($("#" + contentid).height() - this.setr * 2)
+ "px";
    //设置样式  
    function setstyle(obj, y, color1) {
        l.innerHTML = " ";
        l.style.height = "1px";
        l.style.overflow = "hidden";
        l.style.backgroundColor = color1;
        l.style.margin = "0 " + (this.setr - Math.floor(Math.sqrt
(this.setr * this.setr - y * y))) + "px";
    }
}
//////////

//父ID  ID 角度 宽度
function makeroaljNew(modulid, contentid, r, width, bgcolor) {
    this.setr = r;
    var yj = document.getElementById(modulid);
    yj.style.position = "relative";
    yj.style.width = width ? width + "px" : "100%";
    //yj.style.overflow = "hidden";
    var contentbox = document.getElementById(contentid);
    contentbox.style.position = "absolute";

    for (y = this.setr; y >= 1; y--) {
        var l = document.createElement("div");
        setstyle(l, y);
        yj.appendChild(l);
    }

    var box = document.createElement("div");
    box.style.backgroundColor = bgcolor;
    box.setAttribute("class", "makeroalbody");
    yj.appendChild(box);

    for (y = 1; y <= this.setr; y++) {
        var l = document.createElement("div");
        setstyle(l, y);
        yj.appendChild(l);
    }
    box.style.height = ($("#" + contentid).height())
+ "px";
    //设置样式  
    function setstyle(obj, y) {
        l.innerHTML = " ";
        l.style.height = "1px";
        l.style.overflow = "hidden";
        l.style.backgroundColor = bgcolor;
        l.style.margin = "0 " + (this.setr - Math.floor(Math.sqrt
(this.setr * this.setr - y * y))) + "px";
    }
}

function cutstr(str, len) {
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_len = str.length;
    for (var i = 0; i < str_len; i++) {
        a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) {
            //中文字符的长度经编码之后大于4  
            str_length++;
        }
        str_cut = str_cut.concat(a);
        if (str_length >= len) {
            str_cut = str_cut.concat(" ...");
            return str_cut;
        }
    }
    //如果给定字符串小于指定长度，则返回源字符串；  
    if (str_length < len) {
        return str;
    }
}  

//父ID  ID 角度 宽度
function makeroaljNewImg(modulid, contentid, r, width, bgImg) {
    this.setr = r;
    var yj = document.getElementById(modulid);
    yj.style.position = "relative";
    yj.style.width = width ? width + "px" : "100%";
    //yj.style.overflow = "hidden";
    var contentbox = document.getElementById(contentid);
    contentbox.style.position = "absolute";

    for (y = this.setr; y >= 1; y--) {
        var l = document.createElement("div");
        setstyle(l, y);
        yj.appendChild(l);
    }

    var box = document.createElement("div");
    box.style.background = bgImg;
    box.setAttribute("class", "makeroalbody");
    yj.appendChild(box);

    for (y = 1; y <= this.setr; y++) {
        var l = document.createElement("div");
        setstyle(l, y);
        yj.appendChild(l);
    }
    box.style.height = ($("#" + contentid).height())
+ "px";
    //设置样式  
    function setstyle(obj, y) {
        l.innerHTML = " ";
        l.style.height = "1px";
        l.style.overflow = "hidden";
        l.style.background = bgImg;
        l.style.margin = "0 " + (this.setr - Math.floor(Math.sqrt
(this.setr * this.setr - y * y))) + "px";
    }
}

//父ID  ID 角度 宽度
function makeroaljHighNew(modulid, contentid, r, width, topcolor, bodycolor, bottomcolor) {
    this.setr = r;
    var yj = document.getElementById(modulid);
    yj.style.position = "relative";
    yj.style.width = width ? width + "px" : "100%";
    //yj.style.overflow = "hidden";
    var contentbox = document.getElementById(contentid);
    contentbox.style.position = "absolute";

    for (y = this.setr; y >= 1; y--) {
        var l = document.createElement("div");
        setstyle(l, y, topcolor);
        yj.appendChild(l);
    }

    var box = document.createElement("div");
    box.style.backgroundColor = bodycolor;
    box.setAttribute("class", "makeroalbody");
    yj.appendChild(box);

    for (y = 1; y <= this.setr; y++) {
        var l = document.createElement("div");
        setstyle(l, y, bottomcolor);
        yj.appendChild(l);
    }
    box.style.height = ($("#" + contentid).height())
+ "px";
    //设置样式  
    function setstyle(obj, y, color1) {
        l.innerHTML = " ";
        l.style.height = "1px";
        l.style.overflow = "hidden";
        l.style.backgroundColor = color1;
        l.style.margin = "0 " + (this.setr - Math.floor(Math.sqrt
(this.setr * this.setr - y * y))) + "px";
    }
}

function isURL(str) {
    return !!str.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g);
}

(function ($) {
    var PageFunc = function PageFunc() { }
    $.PageFunc = function (Total, PageSize, curPageNum, FunUrl) {
        if (PageSize == "" || PageSize == null || PageSize == undefined) {
            PageSize = 10;
        }
        if (curPageNum == "" || curPageNum == null || curPageNum == undefined) {
            curPageNum = 1;
        }
        //计算总页数 
        Total = parseInt(Total); //总记录数 
        PageSize = parseInt(PageSize); //每页显示数 
        curPageNum = parseInt(curPageNum); //当前页 

        //总页数 
        var AllPage = Math.floor(Total / PageSize);
        if (Total % PageSize != 0) {
            AllPage++;
        }
        if (curPageNum > Total) {
            curPageNum = AllPage;
        }
        var navHtml = "<div class=\"pager-list\">";

        if (curPageNum <= 0)
            curPageNum = 1;
        if (AllPage > 0) {
            
            var currint = 2;
            var cuindexnumber = 0;
            if (curPageNum < 3) {
                currint = curPageNum - 1;
            }
            if (curPageNum + 2 > AllPage) {
                currint = 4 - (AllPage - curPageNum);
            }
            for (var i = 0; i <= 4; i++) {
                //一共最多显示10个页码，前面5个，后面5个 
                var numclass = "";
                var n = curPageNum + i - currint;
                if (n < 10) {
                    numclass += "page-list-numbershort";
                } else if (n < 100) {
                } else if (n < 1000) {
                    numclass += "page-list-numberbig";
                } else if (n < 10000) {
                    numclass += "page-list-numberlong";
                } else {
                    numclass += "page-list-numberbest";
                }
                if ((curPageNum + i - currint) >= 1 && (curPageNum + i - currint + cuindexnumber) <= AllPage)
                    if (currint == i) {
                        //当前页处理
                        navHtml += "<span class=\"current " + numclass + "\">" + curPageNum + "</span>  ";
                    }
                    else {
                        //一般页处理 
                        navHtml += "<a class=\"pager-list-number " + numclass + "\" href=\"javascript:" + FunUrl + "('" + (parseInt(n)) + "')\">" + n + "</a>  ";
                    }
            }
            if (curPageNum != 1) {
                //处理首页连接 
                navHtml += "<span><a class=\"firstpage\" href=\"javascript:" + FunUrl + "('1')\" >首页</a></span>  ";
            } else {
                navHtml += "<span class=\"firstpage\">首页</span>  ";
            }
            if (curPageNum > 1) {
                //处理上一页的连接 
                navHtml += "<span><a class=\"prevpage\" href=\"javascript:" + FunUrl + "('" + (curPageNum - 1) + "')\" >下一页</a></span>  ";
            }
            else {
                navHtml += "<span  class=\"prevpage\" >下一页</span>  ";
            }

            if (curPageNum < AllPage) {
                //处理下一页的链接 
                navHtml += "<span><a class=\"nextpage\" href=\"javascript:" + FunUrl + "('" + (parseInt(curPageNum) + 1) + "')\">下一页</a></span>  ";
            }
            else {
                navHtml += "<span class=\"nextpage\" >下一页</span>  ";
            }

            if (curPageNum != AllPage) {
                navHtml += "<span><a class=\"lastpage\" href=\"javascript:" + FunUrl + "('" + AllPage + "')\" >末页</a></span>  ";
            } else {
                navHtml += "<span class=\"lastpage\">末页</span>  ";
            }

        }

        //  navHtml += "<span>[" + curPageNum + "/" + AllPage + "]</span> </div> ";

        return navHtml;

    };

})(jQuery);

(function ($) {
    $.ArrayPop = function (value, datalist) {
        value = value.toString();
        var index = $.inArray(value, datalist);
        if (index != -1) {
            datalist.splice(index, 1);
        }
    }
})(jQuery);

(function ($) {
    $.ArrayPush = function (value, datalist) {
        value = value.toString();
        var index = $.inArray(value, datalist);
        if (index == -1) {
            datalist.push(value);
        }
    }
})(jQuery);

(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = decodeURIComponent(window.location.search.substr(1)).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);




String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};
function tableChange(tagName) {
    $(tagName).live('mouseenter', function (event) {
        $(this).addClass('changeTableBg');
    });
    $(tagName).live('mouseleave', function (event) {
        $(this).removeClass('changeTableBg');
    });
}
function textChange(tagName) {
    $(tagName).live('mouseenter', function (event) {
        $(this).addClass('changeTextColor');
    });
    $(tagName).live('mouseleave', function (event) {
        $(this).removeClass('changeTextColor');
    });
}
$(function () {
    //表格变背景色方法调用
    tableChange('.q-SwapBookRevise-table tbody tr');
    tableChange('.q-SwapChannelManage-table tbody tr');
    tableChange('.q-addSubjectResource-table tbody tr');
    tableChange('.q-SwapInstitutionManage-table tbody tr');
    tableChange('.q-SwapInstitutionManage-table tbody tr');
    tableChange('.q-contacter-table tbody tr');
    tableChange('.area-table-list .area-table-tbody tr');
    //文字变色方法调用
    textChange('.q-SwapBookRevise-table tbody .td2 a');
    textChange('.q-SwapBookRevise-table tbody .td6 a');
    textChange('.q-SwapChannelManage-table .body-tr .body-td2 a');
    textChange('.q-SwapChannelManage-table .body-tr .body-td5 a');
    textChange('.q-SwapChannelManage-table .body-tr .body-td3 a');
    textChange('.q-SwapChannelManage-table .body-tr .body-td6 a');
    textChange('.q-SwapChannelManage-table .body-tr .body-td8 a');
    textChange('.q-addSubjectResource-table tbody .tab-td2 a');
    textChange('.q-BookPurchase-All_con a');
    textChange('.q-SwapInstitutionManage-table a');
    textChange('#TableContent .q-orgManage-table-tr-title');
    //文本框的回车保存事件
    $('input[type=text]').keydown(function (event) {
        if (event.keyCode == 13) {
            $('.EnterSaveClick').trigger("click");
        }
    })
    //文本框的回车保存事件
    $('input[type=password]').keydown(function (event) {
        if (event.keyCode == 13) {
            $('.EnterSaveClick').trigger("click");
        }
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
//获取URL地址后id的方法
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = decodeURIComponent(window.location.search.substr(1)).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);
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
//自定义下拉框的点击效果
function selectUi() {
    //下拉框点击效果
    $('.select-content').click(function (event) {
        $(this).parent().addClass('active');
        event.stopPropagation();
    });
    //任意点击去除高亮
    $(document).click(function (event) {
        $('.select-container').removeClass('active');
        event.stopPropagation();
    });
}
$(function(){
	//自定义下拉框的点击效果
	selectUi();
});
