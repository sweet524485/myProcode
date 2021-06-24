//一页显示10条
var pageSize = 10;
//开始页
var pageStart = 1;
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
        $(this).css({ 'border': '1px solid #fff', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
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
	$('.fl-searcher-input').each(function(i,item){
		var defaultVal = $(item).val();
		arrVal.push(defaultVal);
		$(item).attr('num',i);
		//默认给它一个状态值
		$(item).attr('flag',false);
	});
	//得到焦点事件
	$('.fl-searcher-input').focus(function(){
		var i = $(this).attr('num');
		if($(this).val() == arrVal[i]){
			$(this).val("");	
		}
	});
	//失去焦点事件
	$('.fl-searcher-input').blur(function(){
		var i = $(this).attr('num');
		if($(this).val() == ""){
			$(this).val(arrVal[i]);
		}
	});
	//值发生改变事件
	$('.fl-searcher-input').change(function(){
		var valTxt = $(this).val();
		if(valTxt == ""){
			//让状态值发生改变
			$(this).attr('flag',false);
		}else{
			//让状态值发生改变
			$(this).attr('flag',true);
		}
	});
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
//向前向后翻页的点击效果
function pageLeftOrRight() {
    //向前翻页
    $('.fl-journalList-orderByPageLess').click(function () {
        var nowPage = parseInt($('#Count').text());
        if (nowPage == 1) {
            alert('当前已经是第一页了！');
        } else {
            pageStart--;
            //重新绑定数据
            GetList(pageStart);
        }
    });
    //向后翻页
    $('.fl-journalList-orderByPageMore').click(function () {
        var nowPage = parseInt($('.fl-journalList-orderByPageCurrent').text());
        var lastPage = parseInt($('#pageTotalNum').text());
        //alert(nowPage);
        //alert(lastPage);
        if (nowPage == lastPage) {
            alert('当前已经是最后一页了！');
        } else if (nowPage > lastPage) {
            alert('最多可以翻到第' + lastPage + '页');
        } else {
            pageStart++;
            //重新绑定数据
            GetList(pageStart);
        }
    })
}
//二级导航的点击效果
function SecondNavClick(){
	$('.fl-searcher-nav').click(function(){
		var i = $(this).index();
		$('.fl-searcher-conList').eq(i).show().siblings('div').hide();
		var h = $('.fl-searcher-conTxt').eq(i).height() + 26;
		$(this).addClass('active').siblings('a').removeClass('active');
		h = (h == 26) ? 0 : h ;
		$('.fl-searcher-secondNavBox').stop().animate({'height': h+'px'},300);
	});
	$('.fl-searcher-secondNav').click(function(){
		$('.fl-searcher-secondNav').removeClass('active');
		$(this).addClass('active');
	});
}
//页面加载完成后调用
$(function(){
	//跳转单选框只允许输入数字
    $(".goNum").numeral();
    //搜索条件框得到焦点去掉默认值
	SelectInputChangeVal();
	//取数据的方法
	GetList(1);
	//二级导航的点击效果
	SecondNavClick();
	//文本框的得到焦点效果
	//InputChangeColor('.fl-searcher-input');
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
