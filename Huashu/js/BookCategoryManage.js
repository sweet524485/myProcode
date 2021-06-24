// 去除空格的方法
String.prototype.trim = function () {
    var str = this,
    str = str.replace(/^\s\s*/, ''),
    ws = /\s/,
    i = str.length;
    while (ws.test(str.charAt(--i)));
	return str.slice(0, i + 1);
}
function emptyHide(){
	var nullTxt = $('tbody').text().trim().length;
	if (nullTxt == 0) {
		$('.q-BookRecommend-null').show();
		$('.q-BookRecommend-table').hide();
		$('.q-BookRecommend-pageContainer').hide();
	};
}
//导航条点击滑动效果
$(function(){
	$('.q-BookCategoryManage-lnavBox').live('click', function(event) {
		$('.q-BookCategoryManage-lnavIcon').addClass('q-BookCategoryManage-lnavIcon_cur');
		$('.q-BookCategoryManage-rnavIcon').removeClass('q-BookCategoryManage-rnavIcon_cur');
		$('.q-BookCategoryManage-nav1').addClass('q-BookCategoryManage-nav_cur');
		$('.q-BookCategoryManage-nav2').removeClass('q-BookCategoryManage-nav_cur');
		$('.q-BookCategoryManage-navMove').animate({'left':'31px'}, 300);
		$('.q-BookCategoryManage-mainList1').show();
		$('.q-BookCategoryManage-mainList2').hide();
	});
	$('.q-BookCategoryManage-rnavBox').live('click', function(event) {
		$('.q-BookCategoryManage-rnavIcon').addClass('q-BookCategoryManage-rnavIcon_cur');
		$('.q-BookCategoryManage-lnavIcon').removeClass('q-BookCategoryManage-lnavIcon_cur');
		$('.q-BookCategoryManage-nav2').addClass('q-BookCategoryManage-nav_cur');
		$('.q-BookCategoryManage-nav1').removeClass('q-BookCategoryManage-nav_cur');
		$('.q-BookCategoryManage-navMove').animate({'left':'206px'}, 300);
		$('.q-BookCategoryManage-mainList2').show();
		$('.q-BookCategoryManage-mainList1').hide();
	});
})
//导航条鼠标移入和移除效果
$(function(){
	$('.q-BookCategoryManage-category').live('mouseover', function(event) {
		$(this).addClass('q-BookCategoryManage-category_cur').siblings('a').removeClass('q-BookCategoryManage-category_cur');
		$(this).find('.q-BookCategoryManage-categoryLeft').show();
		$(this).find('.q-BookCategoryManage-categoryRight').show();
	});
	$('.q-BookCategoryManage-category').live('mouseout', function(event) {
		$(this).removeClass('q-BookCategoryManage-category_cur');
		$(this).find('.q-BookCategoryManage-categoryLeft').hide();
		$(this).find('.q-BookCategoryManage-categoryRight').hide();
	});
})
//导航条左箭头的点击效果
$(function () {
	$('.q-BookCategoryManage-categoryLeft').live('click', function(event) {
		var qmj = $(this).parent().index();
		if (qmj != 0) {
			var forHead = $(this).parent().prev().find('span').text();
			var navTxt = $(this).parent().find('span').text();
			$(this).parent().prev().find('span').text(navTxt);
			$(this).parent().find('span').text(forHead);
		};
	});
	$('.q-BookCategoryManage-categoryRight').live('click', function(event) {
		var itemlen = $(this).parents('.q-BookCategoryManage-main-contant').find('a').length;
		var qmj = $(this).parent().index()+1;
		if (itemlen != qmj) {
			var nextTxt = $(this).parent().next().find('span').text();
			var navTxt = $(this).parent().find('span').text();
			$(this).parent().next().find('span').text(navTxt);
			$(this).parent().find('span').text(nextTxt);
		};
		
	});
})
//点上下位置交换
$(function(){
	//点上交换下面位置交换
	$('.q-BookCategoryManage-categoryTxt').live('click', function(event) {
		var upTxt = $(this).text();
		lowHtml = "<a href='javascript:void(0);' class='q-BookCategoryManage-addNav'><i class='q-BookCategoryManage-add'><!-- 加号小图标 --></i><span class='q-BookCategoryManage-addText'>"+upTxt+"</span></a>";
		$(this).parents('.q-BookCategoryManage-main').next().find('.q-BookCategoryManage-main-contant').prepend(lowHtml);
		$(this).parent().remove();
	});
	//点下交换上面位置交换
	$('.q-BookCategoryManage-addNav').live('click', function(event) {
		var lowTxt = $(this).find('span').text();
		upHtml = "<a href='javascript:void;' class='q-BookCategoryManage-category'><i class='q-BookCategoryManage-categoryLeft' title='向前''><!-- 向左运动小箭头 --></i><span class='q-BookCategoryManage-categoryTxt'>"+lowTxt+"</span><i class='q-BookCategoryManage-categoryRight' title='退后'><!-- 向右运动小箭头 --></i></a>";
		$(this).parents('.q-BookCategoryManage-Bottonmain').prev().find('.q-BookCategoryManage-main-contant').prepend(upHtml);
		$(this).remove();
	});
})
// ===================重磅推荐js=========================
$(function (){
	// 默认状态的JS
	function autoStatus() {
		$('.tbody-tr').each(function() {
			var qmj = $(this).index()+1;
			var iteamLen = $(this).parent().find('tr').length;
			if (qmj == 1) {
				$(this).find('.td-up').hide();
			};
			if(iteamLen == qmj){
				$(this).find('.td-down').hide();
			}
		});
	}
	// 默认状态的JS 调用
	autoStatus();
	//去除空JS方法调用
	emptyHide();
	//点击向下箭头效果
	$('.td-down').live('click', function(event) {
		autoStatus();
		nextBookName = $(this).parents('.tbody-tr').next().find('.td2 div').text();
		nextBookAuthor = $(this).parents('.tbody-tr').next().find('.td3 div').text();
		nextBookPublisher = $(this).parents('.tbody-tr').next().find('.td4 div').text();
		nextBookReferer = $(this).parents('.tbody-tr').next().find('.td5 div').text();
		nextBookTime = $(this).parents('.tbody-tr').next().find('.td6').text(); 
		nowBookName = $(this).parents('.tbody-tr').find('.td2 div').text();
		nowBookAuthor = $(this).parents('.tbody-tr').find('.td3 div').text();
		nowBookPublisher = $(this).parents('.tbody-tr').find('.td4 div').text();
		nowBookReferer = $(this).parents('.tbody-tr').find('.td5 div').text();
		nowBookTime = $(this).parents('.tbody-tr').find('.td6').text();

		$(this).parents('.tbody-tr').next().find('.td2 div').text(nowBookName);
		$(this).parents('.tbody-tr').next().find('.td2 div').attr('title',nowBookName);
		$(this).parents('.tbody-tr').next().find('.td3 div').text(nowBookAuthor);
		$(this).parents('.tbody-tr').next().find('.td3 div').attr('title',nowBookAuthor);
		$(this).parents('.tbody-tr').next().find('.td4 div').text(nowBookPublisher);
		$(this).parents('.tbody-tr').next().find('.td4 div').attr('title',nowBookPublisher);
		$(this).parents('.tbody-tr').next().find('.td5 div').text(nowBookReferer);
		$(this).parents('.tbody-tr').next().find('.td5 div').attr('title',nowBookReferer);
		$(this).parents('.tbody-tr').next().find('.td6').text(nowBookTime);

		$(this).parents('.tbody-tr').find('.td2 div').text(nextBookName);
		$(this).parents('.tbody-tr').find('.td2 div').attr('title',nextBookName);
		$(this).parents('.tbody-tr').find('.td3 div').text(nextBookAuthor);
		$(this).parents('.tbody-tr').find('.td3 div').attr('title',nextBookAuthor);
		$(this).parents('.tbody-tr').find('.td4 div').text(nextBookPublisher);
		$(this).parents('.tbody-tr').find('.td4 div').attr('title',nextBookPublisher);
		$(this).parents('.tbody-tr').find('.td5 div').text(nextBookReferer);
		$(this).parents('.tbody-tr').find('.td5 div').attr('title',nextBookReferer);
		$(this).parents('.tbody-tr').find('.td6').text(nextBookTime);
				
	});
	//点击向上箭头效果
	$('.td-up').live('click', function(event) {
		autoStatus();
		prevBookName = $(this).parents('.tbody-tr').prev().find('.td2 div').text();
		prevBookAuthor = $(this).parents('.tbody-tr').prev().find('.td3 div').text();
		prevBookPublisher = $(this).parents('.tbody-tr').prev().find('.td4 div').text();
		prevBookReferer = $(this).parents('.tbody-tr').prev().find('.td5 div').text();
		prevBookTime = $(this).parents('.tbody-tr').prev().find('.td6').text(); 

		nowBookName = $(this).parents('.tbody-tr').find('.td2 div').text();
		nowBookAuthor = $(this).parents('.tbody-tr').find('.td3 div').text();
		nowBookPublisher = $(this).parents('.tbody-tr').find('.td4 div').text();
		nowBookReferer = $(this).parents('.tbody-tr').find('.td5 div').text();
		nowBookTime = $(this).parents('.tbody-tr').find('.td6').text();

		$(this).parents('.tbody-tr').prev().find('.td2 div').text(nowBookName);
		$(this).parents('.tbody-tr').prev().find('.td2 div').attr('title',nowBookName);
		$(this).parents('.tbody-tr').prev().find('.td3 div').text(nowBookAuthor);
		$(this).parents('.tbody-tr').prev().find('.td3 div').attr('title',nowBookAuthor);
		$(this).parents('.tbody-tr').prev().find('.td4 div').text(nowBookPublisher);
		$(this).parents('.tbody-tr').prev().find('.td4 div').attr('title',nowBookPublisher);
		$(this).parents('.tbody-tr').prev().find('.td5 div').text(nowBookReferer);
		$(this).parents('.tbody-tr').prev().find('.td5 div').attr('title',nowBookReferer);
		$(this).parents('.tbody-tr').prev().find('.td6').text(nowBookTime);

		$(this).parents('.tbody-tr').find('.td2 div').text(prevBookName);
		$(this).parents('.tbody-tr').find('.td2 div').attr('title',prevBookName);
		$(this).parents('.tbody-tr').find('.td3 div').text(prevBookAuthor);
		$(this).parents('.tbody-tr').find('.td3 div').attr('title',prevBookAuthor);
		$(this).parents('.tbody-tr').find('.td4 div').text(prevBookPublisher);
		$(this).parents('.tbody-tr').find('.td4 div').attr('title',prevBookPublisher);
		$(this).parents('.tbody-tr').find('.td5 div').text(prevBookReferer);
		$(this).parents('.tbody-tr').find('.td5 div').attr('title',prevBookReferer);
		$(this).parents('.tbody-tr').find('.td6').text(prevBookTime);
				
	});
	
	// 点击错号删除功能
	$('.td-del').live('click', function(event) {
		var qmj = $(this).parent().parent().index()+1;
		var iteamLen = $(this).parents('tbody').find('tr').length;
		if (qmj == 1) {
			$(this).parent().parent().next().find('.td-up').hide();
		};
		if(iteamLen == qmj){
			$(this).parent().parent().prev().find('.td-down').hide();
		}
		$(this).parent().parent().remove();
		emptyHide();
	});
	
})
















