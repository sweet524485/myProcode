// 多选框的伸缩与展开
$(function(){
	$('.q-BookPurchase-sort_title').live('click', function(event) {
		var divStatus = $(this).next().css('display');
		if(divStatus == 'none'){
			$(this).next().addClass('q-BookPurchase-sort_box_cur').parent().siblings('.q-BookPurchase-left_list').find('.q-BookPurchase-sort_box').removeClass('q-BookPurchase-sort_box_cur');
			$(this).find('.q-BookPurchase_book-icon').addClass('q-BookPurchase_book-icon_cur').parents('.q-BookPurchase-left_list').siblings('div').find('.q-BookPurchase_book-icon').removeClass('q-BookPurchase_book-icon_cur');
		}
	});
})
//多选框点击文字选中与取消
$(function(){
	$('.q-BookPurchase-sort_li_text').live('click', function(event) {
		var checkedStatus = $(this).prev('input').attr('checked');
		if (checkedStatus == 'checked') {
			$(this).prev('input').attr('checked',false);
			$(this).css('color','#657187');
		}else{
			$(this).prev('input').attr('checked',true);
			$(this).css('color','#FF0000');
		}
	});
	$('.q-BookPurchase-sort_li_checkbox').live('click', function(event) {
		var checkedStatus = $(this).attr('checked');
		if (checkedStatus == 'checked') {
			$(this).next().css('color','#FF0000');
		}else{
			$(this).next().css('color','#657187');
		}
	});
})
// 上下排名的点击事件
$(function(){
	$('.q-BookPurchase-Sales').live('click', function(event) {
		$(this).addClass('q-BookPurchase-Sales_cur').siblings('.q-BookPurchase-Sales').removeClass('q-BookPurchase-Sales_cur');
	});
	$('.q-BookPurchase-Sales1').live('click', function(event) {
		$(this).attr('otype','1');
		$(this).find('.q-BookPurchase-set_lower').addClass('q-BookPurchase-set_lower_cur');
		$(this).siblings('.q-BookPurchase-Sales2').find('.q-BookPurchase-set_upper').removeClass('q-BookPurchase-set_upper_cur');
		$(this).siblings('.q-BookPurchase-Sales3').find('.q-BookPurchase-set_upper').removeClass('q-BookPurchase-set_upper_cur');
		$(this).siblings('.q-BookPurchase-Sales4').find('.q-BookPurchase-set_lower').removeClass('q-BookPurchase-set_lower_cur');
		$(this).siblings('.q-BookPurchase-Sales5').find('.q-BookPurchase-set_lower').removeClass('q-BookPurchase-set_lower_cur');
	});
	$('.q-BookPurchase-Sales2').live('click', function(event) {
		$(this).attr('otype','2');
		$(this).find('.q-BookPurchase-set_upper').addClass('q-BookPurchase-set_upper_cur');
		$(this).siblings('.q-BookPurchase-Sales1').find('.q-BookPurchase-set_lower').removeClass('q-BookPurchase-set_lower_cur');
		$(this).siblings('.q-BookPurchase-Sales3').find('.q-BookPurchase-set_upper').removeClass('q-BookPurchase-set_upper_cur');
		$(this).siblings('.q-BookPurchase-Sales4').find('.q-BookPurchase-set_lower').removeClass('q-BookPurchase-set_lower_cur');
		$(this).siblings('.q-BookPurchase-Sales5').find('.q-BookPurchase-set_lower').removeClass('q-BookPurchase-set_lower_cur');
	});
	$('.q-BookPurchase-Sales3').live('click', function(event) {
		$(this).attr('otype','3');
		$(this).find('.q-BookPurchase-set_upper').addClass('q-BookPurchase-set_upper_cur');
		$(this).siblings('.q-BookPurchase-Sales1').find('.q-BookPurchase-set_lower').removeClass('q-BookPurchase-set_lower_cur');
		$(this).siblings('.q-BookPurchase-Sales2').find('.q-BookPurchase-set_upper').removeClass('q-BookPurchase-set_upper_cur');
		$(this).siblings('.q-BookPurchase-Sales4').find('.q-BookPurchase-set_lower').removeClass('q-BookPurchase-set_lower_cur');
		$(this).siblings('.q-BookPurchase-Sales5').find('.q-BookPurchase-set_lower').removeClass('q-BookPurchase-set_lower_cur');
	});
	$('.q-BookPurchase-Sales4').live('click', function(event) {
		$(this).attr('otype','4');
		$(this).find('.q-BookPurchase-set_lower').addClass('q-BookPurchase-set_lower_cur');
		$(this).siblings('.q-BookPurchase-Sales1').find('.q-BookPurchase-set_lower').removeClass('q-BookPurchase-set_lower_cur');
		$(this).siblings('.q-BookPurchase-Sales2').find('.q-BookPurchase-set_upper').removeClass('q-BookPurchase-set_upper_cur');
		$(this).siblings('.q-BookPurchase-Sales3').find('.q-BookPurchase-set_upper').removeClass('q-BookPurchase-set_upper_cur');
		$(this).siblings('.q-BookPurchase-Sales5').find('.q-BookPurchase-set_lower').removeClass('q-BookPurchase-set_lower_cur');
	});
	$('.q-BookPurchase-Sales5').live('click', function(event) {
		$(this).attr('otype','5');
		$(this).find('.q-BookPurchase-set_lower').addClass('q-BookPurchase-set_lower_cur');
		$(this).siblings('.q-BookPurchase-Sales1').find('.q-BookPurchase-set_lower').removeClass('q-BookPurchase-set_lower_cur');
		$(this).siblings('.q-BookPurchase-Sales2').find('.q-BookPurchase-set_upper').removeClass('q-BookPurchase-set_upper_cur');
		$(this).siblings('.q-BookPurchase-Sales3').find('.q-BookPurchase-set_upper').removeClass('q-BookPurchase-set_upper_cur');
		$(this).siblings('.q-BookPurchase-Sales4').find('.q-BookPurchase-set_lower').removeClass('q-BookPurchase-set_lower_cur');
	});
})
// 网格和列表切换样式
$(function(){
	$('.q-BookPurchase-link-right-cob').live('click', function(event) {
		$(this).addClass('q-BookPurchase-link-right-cob_cur').siblings('.q-BookPurchase-link-right-cob').removeClass('q-BookPurchase-link-right-cob_cur');
	});
	$('.q-BookPurchase-link-right-lis').live('click', function(event) {
		$('.q-BookPurchase-book_con-lis').show();
		$('.q-BookPurchase-book_con-web').hide();
	});
	$('.q-BookPurchase-link-right-web').live('click', function(event) {
		$('.q-BookPurchase-book_con-lis').hide();
		$('.q-BookPurchase-book_con-web').show();
	});
})
//搜索框的搜索提交
$(function(){
	$('.q-BookPurchase-bottom-search_submit').live('click', function() {
		var intputValue = $(this).parent().find('.q-BookPurchase-bottom-search_text').val();
		if (intputValue == '') {
			return false;
		}else{
			$(this).parents('.q-BookPurchase-newBook_container').find('.q-BookPurchase-link_search_text').show();
			var searchText = '<a href="#" class="q-BookPurchase-link">'+intputValue+'</a>';
			$(this).parents('.q-BookPurchase-newBook_container').find('.q-BookPurchase-link_search_box').prepend(searchText);
			$(this).parent().find('.q-BookPurchase-bottom-search_text').val('');
		}
	});
})
//回车提交表单
$(document).keyup(function(event){
  if(event.keyCode ==13){
  	var name=$('.q-BookPurchase-bottom-search_text').val();
	if(name == ''){
		return false;
	}else{
		$('.q-BookPurchase-link_search_text').show();
		var searchText = '<a href="#" class="q-BookPurchase-link">'+name+'</a>';
		$('.q-BookPurchase-link_search_box').prepend(searchText);
		$('.q-BookPurchase-bottom-search_text').val('');
	}
  }
}); 
// 小问号图标的鼠标移入效果
$(function(){
	$('.q-BookPurchase-book_list_detail_ask').live('mouseover', function(event) {
		$(this).next().show();
	});
	$('.q-BookPurchase-book_list_detail_ask').live('mouseout', function(event) {
		var divHide = $(this).next();
		timer = setTimeout(function(){
			divHide.hide();
		},300)
	});
	$('.q-BookPurchase-book_list_detail_con').live('mouseover', function(event) {
		clearTimeout(timer);
		$(this).show();
	});
	$('.q-BookPurchase-book_list_detail_con').live('mouseout', function(event) {
		var divHide = $(this);
		clearTimeout(timer);
		timer=setTimeout(function(){
			divHide.hide();
		},300)
	});
})
$(function(){
	$('.q-BookPurchase-book_list_detail_sk').live('mouseover', function(event) {
		$(this).find('.q-BookPurchase-book_list_detail_on').show();
	});
	$('.q-BookPurchase-book_list_detail_sk').live('mouseout', function(event) {
		var divHide = $(this).find('.q-BookPurchase-book_list_detail_on');
		timer = setTimeout(function(){
			divHide.hide();
		},300)
	});
	$('.q-BookPurchase-book_list_detail_on').live('mouseover', function(event) {
		clearTimeout(timer);
		$(this).show();
	});
})
//判断红星个数的方法
function star(num){
	var starNum = num*13;
	$('.q-BookPurchase-star').css({'width':''+starNum+''+'px'});
}
$(function(){
	star(5);
})
//网格时鼠标移入效果
$(function(){
	$('.q-BookPurchase-book-web-list').live('mouseover', function(event) {
		$(this).css({'border':'1px solid #CECECE'});
		$(this).find('.q-BookPurchase-webDetail_box').show();
	});
	$('.q-BookPurchase-book-web-list').live('mouseout', function(event) {
		$(this).css({'border':'1px solid #fff'});
		$(this).find('.q-BookPurchase-webDetail_box').hide();
	});
})












