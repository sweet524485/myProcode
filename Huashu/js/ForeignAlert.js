//全选功能方法
function selectAll(tag){
    $(tag).live('click', function() {
        if(this.checked){ 
            $(this).parent().next().find("input[name=checkName]").attr('checked', true);
        }else{ 
            $(this).parent().next().find("input[name=checkName]").attr('checked', false);
        }   
    });
}
$(function(){
	//全选方法调用
	selectAll('.q-foreignAlert-selectAll');
	// 去除全选的方法
	 $("input[name=checkName]").click(function () {
        if ($(this).prop("checked") == false) {
            $(this).parent().parent().prev().find(".q-foreignAlert-selectAll").prop("checked", false);
        } else {
        	var ischeck = true;
       $("input[name=checkName]").each(function (i, item) {
            if ($(item).prop("checked") == false) {
                ischeck = false;
            }
        });
        if (ischeck) {
            $(".q-foreignAlert-selectAll").prop("checked", true);
            } else {
                $(this).parent().parent().prev().find(".q-foreignAlert-selectAll").prop("checked", false);
            }
        }
    });
	//TAB切换效果
	$('.q-foreignAlert-nav').live('click', function(event) {
		$(this).addClass('q-foreignAlert-nav_cur').siblings('.q-foreignAlert-nav').removeClass('q-foreignAlert-nav_cur');
		var qmj = $(this).index();
		$('.q-foreignAlert-list').eq(qmj).show().siblings('.q-foreignAlert-list').hide();
	});
})
