// 图书馆分组点击添加追加节点
$(function(){
    $('.q-GroupMange-addLabe_search_add1').live('click', function() {
        var getInputVal = $(this).parent().find('.q-GroupMange-addLabe_search_input').val();
        if (getInputVal == '') {
            return false;
        }else{
        	$(this).parent().siblings('.q-GroupMange-addLabe_main').find('.q-GroupMange-addLabe_list').removeClass('q-GroupMange-addLabe_list_cur');
        	$(this).parent().siblings('.q-GroupMange-addLabe_main').find('.q-GroupMange_del').removeClass('q-GroupMange_del_cur');
            var addHtml = '<div class="q-GroupMange-addLabe_list q-GroupMange-addLabe_list_cur" otype="0" tag="'+getInputVal+'"><div class="q-GroupMange-addLabe_name" title="'+getInputVal+'">'+getInputVal+'</div><div class="q-GroupMange_del q-GroupMange_del_cur" otype="0" tag="'+getInputVal+'"></div></div>';
    		$(this).parent().siblings('.q-GroupMange-addLabe_main').prepend(addHtml);
            $(this).parent().find('.q-GroupMange-addLabe_search_input').val("");
        }
    });
});
// 类目分组添加追加节点
$(function(){
    $('.q-GroupMange-addLabe_search_add2').live('click', function() {
        var getInputVal = $(this).parent().find('.q-GroupMange-addLabe_search_input').val();
        if (getInputVal == '') {
            return false;
        }else{
          $(this).parent().siblings('.q-GroupMange-addLabe_main').find('.q-GroupMange-addLabe_list').removeClass('q-GroupMange-addLabe_list_cur');
          $(this).parent().siblings('.q-GroupMange-addLabe_main').find('.q-GroupMange_del').removeClass('q-GroupMange_del_cur');
            var addHtml = '<div class="q-GroupMange-addLabe_list q-GroupMange-addLabe_list_cur" otype="1" tag="'+getInputVal+'"><div class="q-GroupMange-addLabe_name" title="'+getInputVal+'">'+getInputVal+'</div><div class="q-GroupMange_del q-GroupMange_del_cur" otype="1" tag="'+getInputVal+'"></div></div>';
        $(this).parent().siblings('.q-GroupMange-addLabe_main').prepend(addHtml);
            $(this).parent().find('.q-GroupMange-addLabe_search_input').val("");
        }
    });
});
//出版社分组添加追加节点
$(function(){
    $('.q-GroupMange-addLabe_search_add3').live('click', function() {
        var getInputVal = $(this).parent().find('.q-GroupMange-addLabe_search_input').val();
        if (getInputVal == '') {
            return false;
        }else{
          $(this).parent().siblings('.q-GroupMange-addLabe_main').find('.q-GroupMange-addLabe_list').removeClass('q-GroupMange-addLabe_list_cur');
          $(this).parent().siblings('.q-GroupMange-addLabe_main').find('.q-GroupMange_del').removeClass('q-GroupMange_del_cur');
            var addHtml = '<div class="q-GroupMange-addLabe_list q-GroupMange-addLabe_list_cur" otype="2" tag="'+getInputVal+'"><div class="q-GroupMange-addLabe_name" title="'+getInputVal+'">'+getInputVal+'</div><div class="q-GroupMange_del q-GroupMange_del_cur" otype="2" tag="'+getInputVal+'"></div></div>';
        $(this).parent().siblings('.q-GroupMange-addLabe_main').prepend(addHtml);
            $(this).parent().find('.q-GroupMange-addLabe_search_input').val("");
        }
    });
});
//回车提交表单1
$(document).keyup(function(event){
  if(event.keyCode ==13){
  	$('.q-GroupMange-addLabe_search_input1').each(function() {
  		var getInputVal = $(this).val();
        if (getInputVal == '') {
            return false;
        }else{
        	$(this).parent().siblings('.q-GroupMange-addLabe_main').find('.q-GroupMange-addLabe_list').removeClass('q-GroupMange-addLabe_list_cur');
        	$(this).parent().siblings('.q-GroupMange-addLabe_main').find('.q-GroupMange_del').removeClass('q-GroupMange_del_cur');
            var addHtml = '<div class="q-GroupMange-addLabe_list q-GroupMange-addLabe_list_cur" otype="0" tag="'+getInputVal+'"><div class="q-GroupMange-addLabe_name" title="'+getInputVal+'">'+getInputVal+'</div><div class="q-GroupMange_del q-GroupMange_del_cur" otype="0" tag="'+getInputVal+'"></div></div>';
    		$(this).parent().siblings('.q-GroupMange-addLabe_main').prepend(addHtml);
            $(this).parent().find('.q-GroupMange-addLabe_search_input1').val("");
        }
  		
  	}); 
  }
}); 
//回车提交表单2
$(document).keyup(function(event){
  if(event.keyCode ==13){
  	$('.q-GroupMange-addLabe_search_input2').each(function() {
  		var getInputVal = $(this).val();
        if (getInputVal == '') {
            return false;
        }else{
        	$(this).parent().siblings('.q-GroupMange-addLabe_main').find('.q-GroupMange-addLabe_list').removeClass('q-GroupMange-addLabe_list_cur');
        	$(this).parent().siblings('.q-GroupMange-addLabe_main').find('.q-GroupMange_del').removeClass('q-GroupMange_del_cur');
            var addHtml = '<div class="q-GroupMange-addLabe_list q-GroupMange-addLabe_list_cur" otype="1" tag="'+getInputVal+'"><div class="q-GroupMange-addLabe_name" title="'+getInputVal+'">'+getInputVal+'</div><div class="q-GroupMange_del q-GroupMange_del_cur" otype="1" tag="'+getInputVal+'"></div></div>';
    		$(this).parent().siblings('.q-GroupMange-addLabe_main').prepend(addHtml);
            $(this).parent().find('.q-GroupMange-addLabe_search_input2').val("");
        }
  		
  	}); 
  }
});
//回车提交表单3
$(document).keyup(function(event){
  if(event.keyCode ==13){
  	$('.q-GroupMange-addLabe_search_input3').each(function() {
  		var getInputVal = $(this).val();
        if (getInputVal == '') {
            return false;
        }else{
        	$(this).parent().siblings('.q-GroupMange-addLabe_main').find('.q-GroupMange-addLabe_list').removeClass('q-GroupMange-addLabe_list_cur');
        	$(this).parent().siblings('.q-GroupMange-addLabe_main').find('.q-GroupMange_del').removeClass('q-GroupMange_del_cur');
            var addHtml = '<div class="q-GroupMange-addLabe_list q-GroupMange-addLabe_list_cur" otype="2" tag="'+getInputVal+'"><div class="q-GroupMange-addLabe_name" title="'+getInputVal+'">'+getInputVal+'</div><div class="q-GroupMange_del q-GroupMange_del_cur" otype="2" tag="'+getInputVal+'"></div></div>';
    		$(this).parent().siblings('.q-GroupMange-addLabe_main').prepend(addHtml);
            $(this).parent().find('.q-GroupMange-addLabe_search_input3').val("");
        }
  		
  	}); 
  }
});
// 点击标签是选中状态
$(function(){
	$('.q-GroupMange-addLabe_list').live('click', function() {
		$(this).addClass('q-GroupMange-addLabe_list_cur').siblings('.q-GroupMange-addLabe_list').removeClass('q-GroupMange-addLabe_list_cur');
		$(this).find('.q-GroupMange_del').addClass('q-GroupMange_del_cur').parent().siblings('.q-GroupMange-addLabe_list').find('.q-GroupMange_del').removeClass('q-GroupMange_del_cur');
	})
})
//点击×号删除
$(function(){
	$('.q-GroupMange_del').live('click', function() {
		if (confirm('您确定要删除本分类吗？')) {
        var divClassName = $(this).parent().attr('class');
        if (divClassName == "q-GroupMange-addLabe_list q-GroupMange-addLabe_list_cur") {
          var divClassName1 = $(this).parents('.q-GroupMange-addLabe_main').find('.q-GroupMange-addLabe_list').first().attr('class')
          if (divClassName1 == "q-GroupMange-addLabe_list q-GroupMange-addLabe_list_cur") {
              $(this).parents('.q-GroupMange-addLabe_main').find('.q-GroupMange-addLabe_list').first().next().addClass('q-GroupMange-addLabe_list_cur');
              $(this).parents('.q-GroupMange-addLabe_main').find('.q-GroupMange-addLabe_list').first().next().find('.q-GroupMange_del').addClass('q-GroupMange_del_cur');
               $(this).parent().remove();
          }else{
              $(this).parents('.q-GroupMange-addLabe_main').find('.q-GroupMange-addLabe_list').first().addClass('q-GroupMange-addLabe_list_cur');
              $(this).parents('.q-GroupMange-addLabe_main').find('.q-GroupMange-addLabe_list').first().find('.q-GroupMange_del').addClass('q-GroupMange_del_cur');
              $(this).parent().remove();
          }
        }else{
          $(this).parent().remove();
        } 
    }else{
      return;
    }

	})
})
//搜索框上部标签，点击下去1
$(function(){
    $('.q-GroupMange-upper_content1').live('click', function() {
    	$(this).parents('.q-GroupMange-content').find('.q-GroupMange-lower_box').show();
        var indexText=$(this).find('.q-GroupMange-upper_list_text').text();
        var innerHtml = '<div class="q-GroupMange-lower_list" title="'+indexText+'" otype="0"><div class="q-GroupMange-lower_content q-GroupMange-lower_content1"><div class="q-GroupMange-lower_list_icon"><!-- 加号小图标 --></div><div class="q-GroupMange-lower_list_text">'+indexText+'</div></div</div>';
        $(this).parents('.q-GroupMange-content_list').find('.q-GroupMange-lower_innerBox').prepend(innerHtml);
        var con = $(this).parents('.q-GroupMange-upper_innerBox').children('.q-GroupMange-upper_list').length;
        if (con == 1) {
        	$(this).parents('.q-GroupMange-upper_innerBox').prepend('<div class="q-GroupMange-upper_null">该分组下暂无数据，请选择图书馆。</div>')
        }
        $(this).parent().remove(); 
    }) 
})
//搜索框上部标签，点击下去2
$(function(){
    $('.q-GroupMange-upper_content2').live('click', function() {
      $(this).parents('.q-GroupMange-content').find('.q-GroupMange-lower_box').show();
        var indexText=$(this).find('.q-GroupMange-upper_list_text').text();
        var innerHtml = '<div class="q-GroupMange-lower_list" title="'+indexText+'" otype="1"><div class="q-GroupMange-lower_content q-GroupMange-lower_content2"><div class="q-GroupMange-lower_list_icon"><!-- 加号小图标 --></div><div class="q-GroupMange-lower_list_text">'+indexText+'</div></div</div>';
        $(this).parents('.q-GroupMange-content_list').find('.q-GroupMange-lower_innerBox').prepend(innerHtml);
        var con = $(this).parents('.q-GroupMange-upper_innerBox').children('.q-GroupMange-upper_list').length;
        if (con == 1) {
          $(this).parents('.q-GroupMange-upper_innerBox').prepend('<div class="q-GroupMange-upper_null">该分组下暂无数据，请选择图书馆。</div>')
        }
        $(this).parent().remove(); 
    }) 
})
//搜索框上部标签，点击下去3
$(function(){
    $('.q-GroupMange-upper_content3').live('click', function() {
      $(this).parents('.q-GroupMange-content').find('.q-GroupMange-lower_box').show();
        var indexText=$(this).find('.q-GroupMange-upper_list_text').text();
        var innerHtml = '<div class="q-GroupMange-lower_list" title="'+indexText+'" otype="2"><div class="q-GroupMange-lower_content q-GroupMange-lower_content3"><div class="q-GroupMange-lower_list_icon"><!-- 加号小图标 --></div><div class="q-GroupMange-lower_list_text">'+indexText+'</div></div</div>';
        $(this).parents('.q-GroupMange-content_list').find('.q-GroupMange-lower_innerBox').prepend(innerHtml);
        var con = $(this).parents('.q-GroupMange-upper_innerBox').children('.q-GroupMange-upper_list').length;
        if (con == 1) {
          $(this).parents('.q-GroupMange-upper_innerBox').prepend('<div class="q-GroupMange-upper_null">该分组下暂无数据，请选择图书馆。</div>')
        }
        $(this).parent().remove(); 
    }) 
})
//搜索框下部标签，点击上去1
$(function(){
    $('.q-GroupMange-lower_content1').live('click', function() {
    	$(this).parents('.q-GroupMange-content').find('.q-GroupMange-upper_null').hide();
        var indexText=$(this).find('.q-GroupMange-lower_list_text').text();
        var innerHtml = '<div class="q-GroupMange-upper_list" title="'+indexText+'" otype="0"><div class="q-GroupMange-upper_content q-GroupMange-upper_content1"><div class="q-GroupMange-upper_list_icon"><!-- 对号小图标 --></div><div class="q-GroupMange-upper_list_text">'+indexText+'</div></div></div>';
        $(this).parents('.q-GroupMange-content_list').find('.q-GroupMange-upper_innerBox').prepend(innerHtml);
        var con = $(this).parents('.q-GroupMange-lower_innerBox').children('.q-GroupMange-lower_list').length;
        if (con == 1) {
        	$(this).parents('.q-GroupMange-lower_box').hide();
        }
        $(this).parent().remove(); 
    }) 
})
//搜索框下部标签，点击上去2
$(function(){
    $('.q-GroupMange-lower_content2').live('click', function() {
      $(this).parents('.q-GroupMange-content').find('.q-GroupMange-upper_null').hide();
        var indexText=$(this).find('.q-GroupMange-lower_list_text').text();
        var innerHtml = '<div class="q-GroupMange-upper_list" title="'+indexText+'" otype="1"><div class="q-GroupMange-upper_content q-GroupMange-upper_content2"><div class="q-GroupMange-upper_list_icon"><!-- 对号小图标 --></div><div class="q-GroupMange-upper_list_text">'+indexText+'</div></div></div>';
        $(this).parents('.q-GroupMange-content_list').find('.q-GroupMange-upper_innerBox').prepend(innerHtml);
        var con = $(this).parents('.q-GroupMange-lower_innerBox').children('.q-GroupMange-lower_list').length;
        if (con == 1) {
          $(this).parents('.q-GroupMange-lower_box').hide();
        }
        $(this).parent().remove(); 
    }) 
})
//搜索框下部标签，点击上去3
$(function(){
    $('.q-GroupMange-lower_content3').live('click', function() {
      $(this).parents('.q-GroupMange-content').find('.q-GroupMange-upper_null').hide();
        var indexText=$(this).find('.q-GroupMange-lower_list_text').text();
        var innerHtml = '<div class="q-GroupMange-upper_list" title="'+indexText+'" otype="2"><div class="q-GroupMange-upper_content q-GroupMange-upper_content3"><div class="q-GroupMange-upper_list_icon"><!-- 对号小图标 --></div><div class="q-GroupMange-upper_list_text">'+indexText+'</div></div></div>';
        $(this).parents('.q-GroupMange-content_list').find('.q-GroupMange-upper_innerBox').prepend(innerHtml);
        var con = $(this).parents('.q-GroupMange-lower_innerBox').children('.q-GroupMange-lower_list').length;
        if (con == 1) {
          $(this).parents('.q-GroupMange-lower_box').hide();
        }
        $(this).parent().remove(); 
    }) 
})
//点击标题展开下拉框
$(function(){
	$('.q-GroupMange-title').live('click', function() {
		$(this).next().addClass('q-GroupMange-content_cur').parent().siblings('.q-GroupMange-content_list').find('.q-GroupMange-content').removeClass('q-GroupMange-content_cur');
	})
})




























