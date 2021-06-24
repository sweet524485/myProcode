// 多选鼠标移入效果
$(function(){
	$('.q-orgManage-if_right_more').hover(function() {
		$(this).css({'color':'#F21703','border':'1px solid #F21703'});
		$(this).find('span').css({'color':'#F21703'});
	}, function() {
		$(this).css({'color':'#000','border':'1px solid #DEDEDE'});
		$(this).find('span').css({'color':'#A6A6A6'});
	});
})
//下拉，更多点击和鼠标移入移出效果
$(function(){
	$('.q-orgManage-if_right_btnBox').click(function() {
		var divHeight = $(this).parent('div').siblings('.q-orgManage-if_list').height();
		if(divHeight == 28){
			$(this).find('.q-orgManage-if_right_jiantou1').hide();
			$(this).find('.q-orgManage-if_right_jiantou2').show();
			$(this).parent('div').siblings('.q-orgManage-if_list').css({'height':'auto'});
			$(this).parent('div').siblings('.q-orgManage-if_list').find('.q-orgManage-if_list_checkbox').hide();
			$(this).parent('div').siblings('.q-orgManage-if_list').find('.q-orgManage-if_btn_box').hide();
		}else{
			$(this).find('.q-orgManage-if_right_jiantou2').hide();
			$(this).find('.q-orgManage-if_right_jiantou1').show();
			$(this).parent('div').siblings('.q-orgManage-if_list').css({'height':'28px'});
			$(this).parent('div').siblings('.q-orgManage-if_list').find('.q-orgManage-if_list_checkbox').hide();
			$(this).parent('div').siblings('.q-orgManage-if_list').find('.q-orgManage-if_btn_box').hide();
		}

	});

})
$(function(){
	$('.q-orgManage-if_right_btnBox').toggle(function() {
		$(this).find('.q-orgManage-if_right_jiantou1').hide();
		$(this).find('.q-orgManage-if_right_jiantou2').show();
	}, function() {
		$(this).find('.q-orgManage-if_right_jiantou2').hide();
		$(this).find('.q-orgManage-if_right_jiantou1').show();
	});
	
})
//多选框点金效果
$(function(){
	$('.q-orgManage-if_right_more').click(function() {
		var divState = $(this).parent('div').siblings('.q-orgManage-if_list').find('.q-orgManage-if_list_checkbox').css('display');
		if(divState == 'none'){
			$(this).parent('div').siblings('.q-orgManage-if_list').css({'height':'auto'});
   			$(this).parent('div').siblings('.q-orgManage-if_list').find('.q-orgManage-if_list_checkbox').show();
   			$(this).parent('div').siblings('.q-orgManage-if_list').find('.q-orgManage-if_list_checkbox').show();
   			$(this).parent('div').siblings('.q-orgManage-if_list').find('.q-orgManage-if_btn_box').show();
   			$(this).siblings('.q-orgManage-if_right_btnBox').find('.q-orgManage-if_right_jiantou1').hide();
   			$(this).siblings('.q-orgManage-if_right_btnBox').find('.q-orgManage-if_right_jiantou2').show();
		}else{
			$(this).parent('div').siblings('.q-orgManage-if_list').css({'height':'28px'});
   			$(this).parent('div').siblings('.q-orgManage-if_list').find('.q-orgManage-if_list_checkbox').hide();
   			$(this).parent('div').siblings('.q-orgManage-if_list').find('.q-orgManage-if_btn_box').hide();
   			$(this).siblings('.q-orgManage-if_right_btnBox').find('.q-orgManage-if_right_jiantou2').hide();
   			$(this).siblings('.q-orgManage-if_right_btnBox').find('.q-orgManage-if_right_jiantou1').show();
		}
	});
	
})
// 设为核心出版社的点击操作
/*$(function(){
	$('.q-orgManage-set_core').toggle(function() {
		$(this).find('img').attr({'src':'./images/collect-wheart.png'})
	}, function() {
		$(this).find('img').attr({'src':'./images/collect-xheart.png'})
	});
})*/
//表格的隔行换色效果
$(document).ready(function() {
	$('tr').addClass('q-odd');
	$('tr:even').addClass('q-even'); //奇偶变色，添加样式
}); 
//表格的全选功能
$(function(){
	$(".q-orgManage-table_checkbox").click( 
	    function(){ 
		  	if(this.checked){ 
		        $("input[name='checkname']").attr('checked', true);
		    }else{ 
		        $("input[name='checkname']").attr('checked', false);
		    } 
	    } 
    );
});
//关注心的点击事件切换图片
$(function(){
	$('.q-orgManage-operation_img1').toggle(function() {
		$(this).attr({'src':'./images/collect-wheart.png'})
	}, function() {
		$(this).attr({'src':'./images/collect-xheart.png'})
	});
})
//地区筛选多条件追加
$(function(){
	$('.q-orgManage-if_list_area1').live('click', function() {
		//判断多选框的状态
		var divState = $(this).parent().find('.q-orgManage-if_list_checkbox').css('display');
		if (divState == 'none') {
			$('.q-orgManage-top_box1').show();
			var indexTextName=$(this).parents('.q-orgManage-if1').find('.q-orgManage-if_name').text();
			var indexTextContent=$(this).text();
			var innerHtml1 = '<span class="q-orgManage-top_tag" type="area"><span>【'+indexTextName+'：</span><span class="q-orgManage-top_li">'+indexTextContent+'</span><span>】</span><img src="./images/q-orgManage-top_cha.png" title="删除" class="q-orgManage-top_cha q-orgManage-top_cha1" /></span>';
			$(this).parents('.q-orgManage-if_container').siblings('.q-orgManage-top_box1').find('.q-orgManage-top_tag1').find('.q-orgManage-top_tag').remove();
			$(this).parents('.q-orgManage-if_container').siblings('.q-orgManage-top_box1').find('.q-orgManage-top_tag1').html(innerHtml1);

			$(this).parents('.q-orgManage-if_list_li1').find('.q-orgManage-if_list_checkbox').attr('checked', true).parents('.q-orgManage-if_list_li1').siblings('.q-orgManage-if_list_li1').find('.q-orgManage-if_list_checkbox').attr('checked', false);
		}else{
			if($(this).parents('.q-orgManage-if_list_li1').find('.q-orgManage-if_list_checkbox').attr("checked")=="checked"){
			$(this).parents('.q-orgManage-if_list_li1').find('.q-orgManage-if_list_checkbox').attr('checked', false);
			}else{
				$(this).parents('.q-orgManage-if_list_li1').find('.q-orgManage-if_list_checkbox').attr('checked', true);
			}
		   
		}

	})
})
//标签筛选多条件追加
$(function(){
	$('.q-orgManage-if_list_area2').live('click', function() {
		//判断多选框的状态
		var divState = $(this).parent().find('.q-orgManage-if_list_checkbox').css('display');
		if (divState == 'none') {
			$('.q-orgManage-top_box1').show();
			var indexTextName=$(this).parents('.q-orgManage-if2').find('.q-orgManage-if_name').text();
			var indexTextContent=$(this).text();
			var innerHtml1 = '<span class="q-orgManage-top_tag" type="tag"><span>【'+indexTextName+'：</span><span class="q-orgManage-top_li">'+indexTextContent+'</span><span>】</span><img src="./images/q-orgManage-top_cha.png" title="删除" class="q-orgManage-top_cha q-orgManage-top_cha2" /></span>';
			$(this).parents('.q-orgManage-if_container').siblings('.q-orgManage-top_box1').find('.q-orgManage-top_tag2').find('.q-orgManage-top_tag').remove();
			$(this).parents('.q-orgManage-if_container').siblings('.q-orgManage-top_box1').find('.q-orgManage-top_tag2').html(innerHtml1);

			$(this).parents('.q-orgManage-if_list_li2').find('.q-orgManage-if_list_checkbox').attr('checked', true).parents('.q-orgManage-if_list_li2').siblings('.q-orgManage-if_list_li2').find('.q-orgManage-if_list_checkbox').attr('checked', false);
		}else{
			if($(this).parents('.q-orgManage-if_list_li2').find('.q-orgManage-if_list_checkbox').attr("checked")=="checked"){
			$(this).parents('.q-orgManage-if_list_li2').find('.q-orgManage-if_list_checkbox').attr('checked', false);
			}else{
				$(this).parents('.q-orgManage-if_list_li2').find('.q-orgManage-if_list_checkbox').attr('checked', true);
			}
		   
		}

	})
//地域点击确定按钮添加
var allTag1="";
var allTag2="";
$('.q-orgManage-if_confirm1').click(function() {
		var index1=0;
		var name=$(this).parents('.q-orgManage-if1').find('.q-orgManage-if_name').text();
		var txt="";
		$(this).parents('.q-orgManage-if_btn_box').siblings('.q-orgManage-if_lis').find('.q-orgManage-if_list_checkbox').each(function(index, el) {
				if($(this).attr('checked') == "checked"){
					if (txt=="") {
						allTag1=txt=$(this).next().text();
					}else{
						allTag1+="、"+$(this).next().text();
					
						if (index1<5) {
							txt+="、"+$(this).next().text();
						}
						
					}	
					index1++;
				}
			});
		if (txt == '') {
			return false;
		}else{
			AddTag1(txt,allTag1,name,".q-orgManage-top_tag1");
			$('.q-orgManage-if1').find('.q-orgManage-if_list').css({'height':'28px'});
			$('.q-orgManage-if1').find('.q-orgManage-if_right_jiantou2').hide();
			$('.q-orgManage-if1').find('.q-orgManage-if_right_jiantou1').show();
			$('.q-orgManage-if1').find('.q-orgManage-if_list_checkbox').hide();
		}
	});
	//标签检索点击追加功能
	$('.q-orgManage-if_confirm2').click(function() {
		var index1=0;
		var name=$(this).parents('.q-orgManage-if2').find('.q-orgManage-if_name').text();
		var txt="";
		$(this).parents('.q-orgManage-if_btn_box').siblings('.q-orgManage-if_lis').find('.q-orgManage-if_list_checkbox').each(function(index, el) {
				if($(this).attr('checked') == "checked"){
					if (txt=="") {
						allTag2=txt=$(this).next().text();
					}else{
						allTag2+="、"+$(this).next().text();
					
						if (index1<5) {
							txt+="、"+$(this).next().text();
						}
						
					}	
					index1++;
				}
			});
		if (txt == '') {
			return false;
		}else{
			AddTag2(txt,allTag2,name,".q-orgManage-top_tag2");
			$('.q-orgManage-if2').find('.q-orgManage-if_list').css({'height':'28px'});
			$('.q-orgManage-if2').find('.q-orgManage-if_right_jiantou2').hide();
			$('.q-orgManage-if2').find('.q-orgManage-if_right_jiantou1').show();
			$('.q-orgManage-if2').find('.q-orgManage-if_list_checkbox').hide();
		}
	});
	//搜素按钮检索点击追加功能
	$('.q-orgManage-bottom-search_submit').click(function() {
		var name=$('.q-orgManage-bottom-search_text').val();
		if(name == ''){
			return false;
		}else{
			var innerHtml = '<span class="q-orgManage-top_tag" type="search" title="'+name+'"><span>【检索词：</span><span class="q-orgManage-top_li">'+name+'</span><span>】</span><img src="./images/q-orgManage-top_cha.png" title="删除" class="q-orgManage-top_cha" /></span>';
			$('.q-orgManage-top_tag3').find('.q-orgManage-top_tag').remove();
			$('.q-orgManage-top_tag3').html(innerHtml);
			$('.q-orgManage-top_tag3').parent().show();
			$('.q-orgManage-bottom-search_text').val("");
		}
	});
})
//回车提交表单
$(document).keyup(function(event){
  if(event.keyCode ==13){
  	var name=$('.q-orgManage-bottom-search_text').val();
	if(name == ''){
		return false;
	}else{
		var innerHtml = '<span class="q-orgManage-top_tag" type="search" title="'+name+'"><span>【检索词：</span><span class="q-orgManage-top_li">'+name+'</span><span>】</span><img src="./images/q-orgManage-top_cha.png" title="删除" class="q-orgManage-top_cha" /></span>';
			$('.q-orgManage-top_tag3').find('.q-orgManage-top_tag').remove();
		$('.q-orgManage-top_tag3').html(innerHtml);
		$('.q-orgManage-top_tag3').parent().show();
		$('.q-orgManage-bottom-search_text').val("");
	}
  }
}); 
function AddTag1(txt,allTag,name,tagclass){
	var innerHtml1 = '<span class="q-orgManage-top_tag" type="area"><span>【'+name+'：</span><span class="q-orgManage-top_li" title="'+allTag+'">'+txt+'</span><span>】</span><img src="./images/q-orgManage-top_cha.png" title="删除" class="q-orgManage-top_cha q-orgManage-top_cha1" /></span>';
		$(tagclass).find('.q-orgManage-top_tag').remove();
		$(tagclass).html(innerHtml1);
		$(tagclass).parent().show();
}
function AddTag2(txt,allTag,name,tagclass){
	var innerHtml1 = '<span class="q-orgManage-top_tag" type="tag"><span>【'+name+'：</span><span class="q-orgManage-top_li" title="'+allTag+'">'+txt+'</span><span>】</span><img src="./images/q-orgManage-top_cha.png" title="删除" class="q-orgManage-top_cha q-orgManage-top_cha2" /></span>';
		$(tagclass).find('.q-orgManage-top_tag').remove();
		$(tagclass).html(innerHtml1);
		$(tagclass).parent().show();
}


//点击错号删除标签
$(function(){
	$('.q-orgManage-top_cha1').live('click', function() {
		$('.q-orgManage-if_list_li1').find('.q-orgManage-if_list_checkbox').attr('checked', false);
		$(this).parent().parent().html("");
		var con1 = $('.q-orgManage-top_tag1').text();
		var con2 = $('.q-orgManage-top_tag2').text();
		if(con1 != ''){
			$('.q-orgManage-top_box1').show();
			return;
		}else{
			allTag1="";	
		}
		if (con1==""&&con2=="") {
			$('.q-orgManage-top_box1').hide();
		}
	});
	$('.q-orgManage-top_cha2').live('click', function() {
		$('.q-orgManage-if_list_li2').find('.q-orgManage-if_list_checkbox').attr('checked', false);
		$(this).parent().parent().html("");
		var con1 = $('.q-orgManage-top_tag1').text();
		var con2 = $('.q-orgManage-top_tag2').text();
		if ( con2 != '') {
		$('.q-orgManage-top_box1').show();
			return;
		}else{
			allTag2="";
		}
		if (con1==""&&con2=="") {
			$('.q-orgManage-top_box1').hide();
		}
	});
})
//取消按钮的实现
$(function(){
	$('.q-orgManage-if_cancel1').click(function() {
		$('.q-orgManage-if_list_li1').find('.q-orgManage-if_list_checkbox').hide();
		$('.q-orgManage-if1').find('.q-orgManage-if_list').css({'height':'28px'});
		$('.q-orgManage-if1').find('.q-orgManage-if_right_jiantou2').hide();
		$('.q-orgManage-if1').find('.q-orgManage-if_right_jiantou1').show();
	});
	$('.q-orgManage-if_cancel2').click(function() {
		$('.q-orgManage-if_list_li2').find('.q-orgManage-if_list_checkbox').hide();
		$('.q-orgManage-if2').find('.q-orgManage-if_list').css({'height':'28px'});
		$('.q-orgManage-if2').find('.q-orgManage-if_right_jiantou2').hide();
		$('.q-orgManage-if2').find('.q-orgManage-if_right_jiantou1').show();
	});
})
// 仅显示核心出版社的开启与关闭状态
$(function(){
	$('.q-orgManage-on_off-img').toggle(function() {
		$(this).attr({'src':'./images/collect-dak-off.png','title':'关闭'});
	}, function() {
		$(this).attr({'src':'./images/collect-dak.png','title':'开启'});
	});
	
})
// 搜索框的返回后保留之前数据
$(function(){
	$('.q-orgManage-table-tr td a').live('click', function(event) {
		var areaTxt = $('.q-orgManage-top_tag1').find('.q-orgManage-top_li').text();
		var tagTxt = $('.q-orgManage-top_tag2').find('.q-orgManage-top_li').text();
		var searchTxt = $('.q-orgManage-top_tag3').find('.q-orgManage-top_li').text();
		$(this).attr({'href':'back.html?area='+areaTxt+'&tag='+tagTxt+'&search='+searchTxt});
	});
	(function ($) {
	    $.getUrlParam = function (name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null) return decodeURI(r[2]); return null;
	    }
	})(jQuery);
	$(function(){
		var areaTxt=($.getUrlParam('area'));
		var tagTxt=($.getUrlParam('tag'));
		var searchTxt=($.getUrlParam('search'));
		if (areaTxt || tagTxt || searchTxt) {
			$('.q-orgManage-top_box1').show();
		}else{
			$('.q-orgManage-top_box1').hide();
		}
		if(areaTxt !='' && areaTxt !=null){
			var innerHtml1 = '<span class="q-orgManage-top_tag" type="area"><span>【地区：</span><span class="q-orgManage-top_li" title="'+areaTxt+'">'+areaTxt+'</span><span>】</span><img src="./images/q-orgManage-top_cha.png" title="删除" class="q-orgManage-top_cha q-orgManage-top_cha1" /></span>';
			$('.q-orgManage-top_tag1').html(innerHtml1);
		}
		if(tagTxt !='' && tagTxt !=null){
			var innerHtml2 = '<span class="q-orgManage-top_tag" type="area"><span>【标签：</span><span class="q-orgManage-top_li" title="'+tagTxt+'">'+tagTxt+'</span><span>】</span><img src="./images/q-orgManage-top_cha.png" title="删除" class="q-orgManage-top_cha q-orgManage-top_cha2" /></span>';
			$('.q-orgManage-top_tag2').html(innerHtml2);
		}
		if( searchTxt!='' && searchTxt !=null){
			var innerHtml3 = '<span class="q-orgManage-top_tag" type="search" title="'+searchTxt+'"><span>【检索词：</span><span class="q-orgManage-top_li">'+searchTxt+'</span><span>】</span><img src="./images/q-orgManage-top_cha.png" title="删除" class="q-orgManage-top_cha" /></span>';
			$('.q-orgManage-top_tag3').html(innerHtml3);
		}

	})
})

































