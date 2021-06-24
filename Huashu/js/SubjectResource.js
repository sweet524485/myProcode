// 去除空格的方法
String.prototype.trim = function () {
    var str = this,
  str = str.replace(/^\s\s*/, ''),
  ws = /\s/,
  i = str.length;
    while (ws.test(str.charAt(--i)));
    return str.slice(0, i + 1);
}
//去除下划线的方法
function delBorder(tag) {
    $(tag).last().css('border-bottom', '0');
}
//推荐到首页点击效果 方法
function recommendation(tag,className){
	$(tag).live('click', function(event) {
		var titleTxt = $(this).attr('title');
		if (titleTxt == "推荐到首页") {
			$(this).addClass(className);
			$(this).attr('title','已推荐');
		}else{
			$(this).removeClass(className);
			$(this).attr('title','推荐到首页');
		}
	});
}	
//表格的全选功能方法
function selectAll(tag,checkname){
    $(tag).live('click', function() {
        if(this.checked){ 
             $("input[name=checkname]").attr('checked', true);
        }else{ 
            $("input[name=checkname]").attr('checked', false);
        }   
    });
}
//最下部全选方法
function allSelect(tag,checkname){
    $(tag).live('click', function() {
        $("input[name=checkname]").attr('checked', true);
    });
}
//文本框的得到与失去焦点的边框颜色
$(function () {
    $("input[type='text']").live('focus', function() {
        $(this).css({ 'border': '1px solid #A0C2FD', 'box-shadow': '0px 0px 2px #A0C2FD', '-moz-box-shadow': '0px 0px 2px #A0C2FD', '-webkit-box-shadow': '0px 0px 2px #A0C2FD', '-ms-box-shadow': '0px 0px 2px #A0C2FD' });
    })
    $("input[type='text']").live('blur', function() {
        $(this).css({ 'border': '1px solid #DADADA', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
    })
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
$(function(){
	//去除最后一行下划线的方法调用
	delBorder('.q-addSubjectResource-li');
	//推荐到首页点击效果 方法调用
	recommendation('.q-SubjectResource-Recommendation','q-SubjectResource-Recommendation_cur');	
	//全选方法调用
	selectAll('.q-addSubjectResource-checkbox','checkname');
	allSelect('.q-addSubjectResource-AllBtn','checkname');
	//删除方法
	$('.q-SubjectResource-del').live('click', function(event) {
		if(confirm("您确认删除吗？")){
			$(this).parent().parent().remove();
		}
	});
	//点击图片让按钮切换
	$('.td2 img').live('click', function(event) {
		$(this).addClass('img_cur').parent().parent().siblings('tr').find('.td2 img').removeClass('img_cur');
		$('.q-SubjectResource-uploadCreat').addClass('q-SubjectResource-uploadCreat_cur');
		var editTxt = $(this).parent().next().find('a').text().trim();
		$('.q-SubjectResource-uploadInput').val(editTxt);
	});
	//列表内容点击变红
	$('.q-addSubjectResource-AllBox a').live('click', function(event) {
		$(this).css('color','red').siblings('a').css('color','#7C93AE');
		$(this).parent().prev().css('color','#7C93AE');
	});
	//点击全部的变红效果
	$('.q-addSubjectResource-AllText').live('click', function(event) {
		$(this).css('color','red').next().find('a').css('color','#7C93AE');
	})
	//列表点击变红效果
	$('.q-addSubjectResource-li').live('click', function(event) {
		$(this).css('color','red').siblings('a').css('color','#7C93AE');
	});
})


































