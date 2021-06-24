/*===================社馆直通车-详情页==========================*/
//图书简介Tab切换
$(function(){
	$('.q-HomeDetail-right-section1-nav').live('click', function(event) {
		var c = $(this).index();//获得当前移入的li的序号
		$(this).addClass('q-HomeDetail-right-section1-nav_cur').siblings('.q-HomeDetail-right-section1-nav').removeClass('q-HomeDetail-right-section1-nav_cur')
		$('.q-HomeDetail-right-section1-navList').eq(c).show().siblings('.q-HomeDetail-right-section1-navList').hide();
	});
	$('.q-HomeDetail-right-section1-nav1').live('click', function(event) {
		$('.q-HomeDetail-right-section1-Move').stop().animate({'left':'30px'}, 100);
	});
	$('.q-HomeDetail-right-section1-nav2').live('click', function(event) {
		$('.q-HomeDetail-right-section1-Move').stop().animate({'left':'130px'}, 100);
	});
	$('.q-HomeDetail-right-section1-nav3').live('click', function(event) {
		$('.q-HomeDetail-right-section1-Move').stop().animate({'left':'217px'}, 100);
	});
	$('.q-HomeDetail-right-section1-nav4').live('click', function(event) {
		$('.q-HomeDetail-right-section1-Move').stop().animate({'left':'287px'}, 100);
	});
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
//标题截取字数
$(function(){
	function limit(tag,num){
		var titleLength = $(tag).text().length;
		if (titleLength > num) {
			$(tag).attr("title",$(this).text());
			var text=$(tag).text().substring(0,num)+"...";
			$(tag).text(text);
		};
	}
	limit('.q-HomeDetail-right-section1-booktxt',53);
})
//评论为空时的验证
$(function(){
    function textareaFocus() {
    	$('.q-HomeDetail-right-section2-textarea').css({ 'border': '1px solid #A0C2FD', 'box-shadow': '0px 0px 2px #A0C2FD', '-moz-box-shadow': '0px 0px 2px #A0C2FD', '-webkit-box-shadow': '0px 0px 2px #A0C2FD', '-ms-box-shadow': '0px 0px 2px #A0C2FD' });
        $('.q-HomeDetail-right-notice').hide();
    }
    function textareaBlur() {
    	$('.q-HomeDetail-right-section2-textarea').css({ 'border': '1px solid #C8C8C8', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
    }
	function  verify(){
		// 去除空格的方法
		String.prototype.trim = function () {
		    var str = this,
		  str = str.replace(/^\s\s*/, ''),
		  ws = /\s/,
		  i = str.length;
		    while (ws.test(str.charAt(--i)));
		    return str.slice(0, i + 1);
		}
		var inputVal = $('.q-HomeDetail-right-section2-textarea').val();
		var value = inputVal.trim();
		if (value == "") {
			$('.q-HomeDetail-right-notice').show();
			$('.q-HomeDetail-right-notice').html('评论内容不能为空，请输入内容');
			$('.q-HomeDetail-right-section2-textarea').css({ 'border': '1px solid #D88E8F'});
			return false;
		}else{
			return true;
		}
	}
	$(".q-HomeDetail-right-section2-textarea").live('focus', function() {
        textareaFocus();
    });
    $(".q-HomeDetail-right-section2-textarea").live('blur', function() {
        textareaBlur();
    });
    $('.q-HomeDetail-right-section2-btn').live('click', function(event) {
		verify();
	});
})
// =======================详细页新增JS================================
//内容为空隐藏的方法
function emptyHide(tag){
	var text = $(tag).text();
	var conLength = text.trim().length;
	if(conLength == 0){
		$(tag).hide();
	}else{
		$(tag).show();
	}
}
//带小滑块的Tab切换方法
/**************
 **author:仇郯郯
 *tag1-->导航条class名
 *tag2-->要显示和隐藏的container
 *tag3-->小滑块的class名
 *className-->高亮状态的class属性
 *doubleNum-->小滑块要移动倍数
 *num-->小滑块要移动的距离
 *ev-->触发的事件
 **date:2015-09-09 星期三
**************/
function TabMove(tag1,tag2,tag3,className,doubleNum,num,ev){
	$(tag1).live(ev, function(event) {
		//让点击的导航高亮显示
		$(this).addClass(className).siblings(tag1).removeClass(className);
		//获得当前点击index值
		var qmj = $(this).index();
		//让导航对应下方的container显示
		$(tag2).eq(qmj).show().siblings(tag2).hide();
		//获得小箭头要移动的left值
		var left = qmj*doubleNum+num;
		//将获得小滑块的left值赋值给小滑块
		$(tag3).animate({'left':left+'px'}, 300);
	});
}
//最后一个节点下划线的方法
function delBorder(tag){
	$(tag).last().css('border','0');
}
// 点赞数方法
function support() {
	$('.q-HomeBookReview-bookThumb').live('click', function() {
		var textNum = $(this).find('.q-HomeBookReview-bookThumbNum span').text();
		var num = parseInt(textNum);
		num ++;
		$(this).find('.q-HomeBookReview-bookThumbNum span').text(num);
	});
}
//调用的方法
$(function(){
	//调用内容为空隐藏的方法
	emptyHide('.q-HomeDetail-commentContent');
	//emptyHide('.q-HomeDetail-commentList1');
	//emptyHide('.q-HomeDetail-commentList2');
	//最后一个节点下划线的方法
	delBorder('.commentList1');
	delBorder('.commentList2');
	delBorder('.q-HomeDetail-conmmonLeft-list');
	//最新最热Tab切换调用
	TabMove('.q-HomeDetail-nav','.q-HomeDetail-commentList','.q-HomeDetail-navIcon','q-HomeDetail-nav_cur',80,31,'click');
	//点赞方法的调用
	support();
})


















