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
	$('.fl-newsSearch-searchInput').each(function(i,item){
		var defaultVal = $(item).val();
		arrVal.push(defaultVal);
		$(item).attr('num',i);
		//默认给它一个状态值
		$(item).attr('flag',false);
	});
	//得到焦点事件
	$('.fl-newsSearch-searchInput').focus(function(){
		var i = $(this).attr('num');
		if($(this).val() == arrVal[i]){
			$(this).val("");	
		}
	});
	//失去焦点事件
	$('.fl-newsSearch-searchInput').blur(function(){
		var i = $(this).attr('num');
		if($(this).val() == ""){
			$(this).val(arrVal[i]);
		}
	});
	//值发生改变事件
	$('.fl-newsSearch-searchInput').change(function(){
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
//下拉框的点击效果赋值
function SelectAssignVal(){
    //下拉点击赋值的方法
    $('.select-hideList').click(function () {
        var valTxt = $(this).attr('val');
        var showTxt = $(this).text();
        $(this).parents('.select-container').find('.select-name').text(showTxt);
        $(this).parents('.select-container').find('.select-name').attr('val', valTxt);
        $(this).addClass('active').siblings('a').removeClass('active');
        $(this).parent().parent().removeClass('active');
        //调用宽度自适应的方法
        SelectWidthAuto();
    });
}
//时间筛选的点击效果
function DateClickUi(){
	$('.fl-newsList-DateYear').click(function(){
		$(this).parent().addClass('active').siblings('div').removeClass('active');
		var h = $(this).next().height() + 30;
		$(this).parent().stop().animate({'height' : h + 'px'},200).siblings('div').height(30);
	});
	//月份的点击效果
	$('.fl-newsList-DateLi').click(function(){
		$('.fl-newsList-DateLi').removeClass('active');
		$(this).addClass('active');
	});
}
function DateHtmlModel(startYear, endYear){
	var dateHtml = '';
	for(var i = startYear; i >= endYear; i --){
		dateHtml += '<div class="fl-newsList-DateList">'+
						'<div class="fl-newsList-DateYear">'+
							i +
						'</div>'+
						'<div class="fl-newsList-DateHide">'+
							'<a href="javascript:void(0);" class="fl-newsList-DateLi">'+
								'December'+
							'</a>'+
							'<a href="javascript:void(0);" class="fl-newsList-DateLi">'+
								'November'+ 
							'</a>'+
							'<a href="javascript:void(0);" class="fl-newsList-DateLi">'+
								'October'+ 
							'</a>'+
							'<a href="javascript:void(0);" class="fl-newsList-DateLi">'+
								'September'+ 
							'</a>'+
							'<a href="javascript:void(0);" class="fl-newsList-DateLi">'+
								'August'+
							'</a>'+
							'<a href="javascript:void(0);" class="fl-newsList-DateLi">'+
								'July'+ 
							'</a>'+
							'<a href="javascript:void(0);" class="fl-newsList-DateLi">'+
								'June'+ 
							'</a>'+
							'<a href="javascript:void(0);" class="fl-newsList-DateLi">'+
								'May'+ 
							'</a>'+
							'<a href="javascript:void(0);" class="fl-newsList-DateLi">'+
								'April'+
							'</a>'+
							'<a href="javascript:void(0);" class="fl-newsList-DateLi">'+
								'March'+ 
							'</a>'+
							'<a href="javascript:void(0);" class="fl-newsList-DateLi">'+
								'February'+ 
							'</a>'+
							'<a href="javascript:void(0);" class="fl-newsList-DateLi">'+
								'January'+
							'</a>'+
						'</div>'+
					'</div>';
	}
	return dateHtml;
}
//加载出年份的自定义插件
function LoadDateHtml(){
	var myDate = new Date();
	//获取当前年
	var year = myDate.getFullYear();
	//获取当前月
	var month = myDate.getMonth() + 1;
	//去年是哪一年
	var nextYear = year - 1;
	//前十年的最后一年
	var lastYear = year - 10;
	//年份字符串变量
	var dateHtml = '';
	//月份遍历字符串变量
	var monthHtml = '';
	//英文月份
	var EnglishMonth = '';
	//拼接当前年的字符串
	for(var i = month; i >= 1; i --){
		if( i == 12){
			EnglishMonth = 'December';
		} else if ( i == 11) {
			EnglishMonth = 'November';
		} else if ( i == 10) {
			EnglishMonth = 'October';
		} else if ( i == 9) {
			EnglishMonth = 'September';
		} else if ( i == 8) {
			EnglishMonth = 'August';
		} else if ( i == 7) {
			EnglishMonth = 'July';
		} else if ( i == 6) {
			EnglishMonth = 'June';
		} else if ( i == 5) {
			EnglishMonth = 'May';
		} else if ( i == 4) {
			EnglishMonth = 'April';
		} else if ( i == 3) {
			EnglishMonth = 'March';
		} else if ( i == 2) {
			EnglishMonth = 'February';
		} else if ( i == 1) {
			EnglishMonth = 'January';
		}
		monthHtml += '<a href="javascript:void(0);" class="fl-newsList-DateLi">'+
						EnglishMonth +
					 '</a>';			
	}
	//当前年份的字符串拼接
	dateHtml += '<div class="fl-newsList-DateList active" style="height:auto;">'+
					'<div class="fl-newsList-DateYear">'+
						year+
					'</div>'+
					'<div class="fl-newsList-DateHide">'+
						monthHtml +
					'</div>'+
				'</div>';
				
	dateHtml += DateHtmlModel(nextYear, lastYear);
	//追加字符串
	$('#dateHtml').html(dateHtml);
	//时间筛选的点击效果
	DateClickUi();
	//more加载年年份的点击效果
	$('#dateMore').click(function(){
		var dateHtml = '';
		nextYear = lastYear - 1;
		lastYear = lastYear - 11;
		if(lastYear <= 0){
			lastYear = 0;
			$('#dateMoreHtml').hide();
		}
		dateHtml += DateHtmlModel(nextYear, lastYear);
		//追加字符串
		$('#dateHtml').append(dateHtml);
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
	//下拉框的点击效果赋值
	SelectAssignVal();
	//年份的插件的调用
	LoadDateHtml();
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
