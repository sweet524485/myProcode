// 轮播图的JS
$(function(){
	var c = 0;
	$('.q-agency-f1-tab_left').click(function(){
		c--;
		c = (c==-1)?3:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.q-agency-move-main_list').eq(c).fadeIn(200).siblings('.q-agency-move-main_list').hide();
		// 让c号添加q-agency-f1-tab_li_cur这个class，移出它兄弟节点的q-agency-f1-tab_li_cur class
		$('.q-agency-f1-tab_li').eq(c).addClass('q-agency-f1-tab_li_cur').siblings('.q-agency-f1-tab_li').removeClass('q-agency-f1-tab_li_cur');
	})
	$('.q-agency-f1-tab_right').click(function(){
		c++;
		c = (c==4)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.q-agency-move-main_list').eq(c).fadeIn(200).siblings('.q-agency-move-main_list').hide();
		// 让c号添加q-agency-f1-tab_li_cur这个class，移出它兄弟节点的q-agency-f1-tab_li_cur class
		$('.q-agency-f1-tab_li').eq(c).addClass('q-agency-f1-tab_li_cur').siblings('.q-agency-f1-tab_li').removeClass('q-agency-f1-tab_li_cur');
	})
	// 给li加鼠标移入事件
	$('.q-agency-f1-tab_li').click(function() {
		c = $(this).index();
		// 让c号图片显示，兄弟图片隐藏
		$('.q-agency-move-main_list').eq(c).fadeIn(200).siblings('.q-agency-move-main_list').hide();
		// 让c号添加q-agency-f1-tab_li_cur这个class，移出它兄弟节点的q-agency-f1-tab_li_cur class
		$('.q-agency-f1-tab_li').eq(c).addClass('q-agency-f1-tab_li_cur').siblings('.q-agency-f1-tab_li').removeClass('q-agency-f1-tab_li_cur');
	});
})
//机构服务agency添加按钮
$(function(){
    $('.q-agency-move-add').live('click', function() {
    	$(this).removeClass('q-agency-move-add_cur');
        var createHtml = '<div class="q-agency-move-label_list"><div class="q-agency-move-label"><div class="q-agency-move-input_box"><input type="text" class="q-agency-move-input q-agency-move-input1"/><div class="q-agency-move-notice1"></div></div><div class="q-agency-line"></div><div class="q-agency-move-input_box"><input type="text" class="q-agency-move-input q-agency-move-input2"/><div class="q-agency-move-notice2"></div></div><a href="javascript:void(0);" class="q-agency-move-add q-agency-move-add_cur"><!-- 添加按钮 --></a<br style="clear:both;"/></div></div>';
        $(this).parents('.q-agency-move-container').append(createHtml);
       	
    }) 
})






























