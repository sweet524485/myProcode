//一页显示10条
var pageSize = 10;
//开始页
var pageStart = 1;
//判断下拉框的宽度
function SelectWidthAuto(){
	var w = $('.select-container').width();
	w = 330- w;
	$('.shortInput').width(w);
}
/*
****文本框提示的验证实例
****author：仇郯郯
****用途：文本框得到与失去焦点的变色
****一个参数
****TagName：文本框的名字
*/
function InputChangeColor(TagName) {
    $(TagName).bind("focus", function () {
        $(this).css({ 'border': '1px solid #6AAFE5', 'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)', '-moz-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)', '-webkit-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)', '-ms-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)' });
    });
    $(TagName).bind("blur", function () {
        $(this).css({ 'border': '1px solid #CFCFCF', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
    });
    $('#pageNum').focus(function(){
    	$(this).css({ 'border': '1px solid #6AAFE5', 'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)', '-moz-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)', '-webkit-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)', '-ms-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)' });
    });
    $('#pageNum').blur(function(){
    	$(this).css({ 'border': '1px solid #6F9CD5', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
    });
}
//搜索条件框得到焦点去掉默认值
function SelectInputChangeVal(){
	var arrVal = [];
    $('.fl-org-searchInput').each(function (i, item) {
        var defaultVal = $(item).val();
        arrVal.push(defaultVal);
        $(item).attr('num', i);
        //默认给它一个状态值
        $(item).attr('flag', false);
    });
    //得到焦点事件
    $('.fl-org-searchInput').focus(function () {
        var i = $(this).attr('num');
        if ($(this).val() == arrVal[i]) {
            $(this).val("");
            //让状态值发生改变
            $(this).attr('flag', 'true');
        }
    });
    //失去焦点事件
    $('.fl-org-searchInput').blur(function () {
        var i = $(this).attr('num');
        if ($(this).val() == "") {
            $(this).val(arrVal[i]);
            //让状态值发生改变
            $(this).attr('flag', 'false');
        }
    });
    //值发生改变事件
    $('.fl-org-searchInput').change(function () {
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
    $('.fl-org-searchInput').keyup(function () {
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
    $('.fl-org-searchInput').keydown(function () {
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
//排序的点击效果
function OrderBy(obj){
	$(obj).addClass('active').siblings('a').removeClass('active');
}
//source和country的Tab切换
function TabClickUi(){
	$('.fl-blog-conRightNav').click(function(){
		var i = $(this).index();
		$(this).addClass('active').siblings('a').removeClass('active');
		$('.fl-blog-conRightList').eq(i).fadeIn(200).siblings('div').fadeOut(10);
		$('.fl-blog-conRightList').eq(i).addClass('active').siblings('div').removeClass('active');
	})
}
//列表删除的点击效果
function ListDelUi(){
	$('.fl-blog-conDel').click(function(){
		$(this).parent().fadeOut(200);
	});
}
//删除最后一个元素的下划线的方法
function DelLastBorder(tagName){
	$(tagName).last().css('border', 0);
}
function GetList(pageStart) {
    //当前页数
    this.pageStart = pageStart;
    $(".pagination").html($.PageFunc(100, pageSize, pageStart, "GetList"));
}
//回车分页赋值的方法
function pageLoadData() {
    if (event.keyCode == 13) {
        pageStart = $('#pageNum').val();
        GetList(pageStart);
    }
}
//页面加载完成后调用
$(function(){
	//跳转单选框只允许输入数字
    $(".goNum").numeral();
	//取数据的方法
	GetList(1);
	//搜索条件框得到焦点去掉默认值
	SelectInputChangeVal();
	//source和country的Tab切换
	TabClickUi();
	//列表删除的点击效果
	ListDelUi();
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
});
