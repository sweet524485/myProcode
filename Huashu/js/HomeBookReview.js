// 书评广场左侧去除最后一个节点下划线的方法
function delBorder(tag){
	$(tag).last().css('border','0');
}
// 去除空格的方法
String.prototype.trim = function () {
    var str = this,
  str = str.replace(/^\s\s*/, ''),
  ws = /\s/,
  i = str.length;
    while (ws.test(str.charAt(--i)));
    return str.slice(0, i + 1);
}
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
 *ev-->触发的事件
 *num-->小滑块要移动的距离
 *seconds-->小滑块要移动过去要耗费的时间
 **date:2015-09-09 星期三
**************/
function tabMove(tag1,tag2,tag3,className,ev,num,seconds){
	$(tag1).live(ev, function(event) {
		// 让每个导航高亮显示
		$(this).addClass(className).siblings(tag1).removeClass(className);
		//获得当前元素的下标值
		var qtt = $(this).index();
		//让当前对应的container内容显示，兄弟节点内容隐藏
		$(tag2).eq(qtt).show().siblings(tag2).hide();
		//获得小滑块应该移动的距离
		var left = num*qtt;
		//让小滑块在半秒钟内移动到对应位置
		$(tag3).stop().animate({'left':left+'px'},seconds);
	});
}
//判断评论内容的高度的方法
function loadJudge(){
	$('.q-HomeBookReview-txt').each(function() {
		var conLength = $(this).text().length;
		var content =  $(this).text();
		$(this).attr('otypeCon1',content);
		if(conLength >= 307){
			$(this).next().show();
			 var text = $(this).text().substring(0, 295) + "...";
			 $(this).attr('otypeCon2',text);
       		 $(this).text(text);
		}else{
			$(this).next().hide();
		}
	});
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
//判断评论内容的高度的方法调用
$(function(){
	loadJudge();
})
//判断红星个数的方法
function star(num,tag){
	var starNum = num*13;
	$(tag).css({'width':''+starNum+''+'px'});
}
//调用星星的方法
$(function(){
	star(4,'.q-Home-f1-tab-book-star');
})
//调用带小滑块的Tab切换方法
$(function(){
	tabMove('.q-HomeBookReview-tabNav','.q-HomeBookReview-right-con','.q-HomeBookReview-tabMove','q-HomeBookReview-tabNav_cur','click',80,500);
})
//调用内容为空隐藏的方法
$(function(){
	emptyHide('.q-HomeBookReview-right-mainCon');
	emptyHide('.q-HomeBookReview-tab_box');
})
//调用去除下划线的方法
$(function(){
	delBorder('.q-HomeBookReview-lefe-list');
})
//点赞方法调用
$(function(){
	support();
})
//点击评论展开和收起的方法
$(function(){
	$('.q-HomeBookReview-all').live('click', function() {
		var txt = $(this).find('.q-HomeBookReview-allTxt').text().trim();
		if(txt == "显示全部"){
			$(this).find('.q-HomeBookReview-allTxt').text('评论收起');
			$(this).find('.q-HomeBookReview-allUpDown').css('background','url(./images/q-up.png)');
			var conLength = $(this).prev().attr('otypeCon1');
			$(this).prev().text(conLength);
		}else{
			$(this).find('.q-HomeBookReview-allTxt').text('显示全部');
			$(this).find('.q-HomeBookReview-allUpDown').css('background','url(./images/q-down.png)');
			var conLength = $(this).prev().attr('otypeCon2');
			$(this).prev().text(conLength);
		}	

	});
})





