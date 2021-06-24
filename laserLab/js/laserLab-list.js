//删除最后一行的下划线
function delBorder(tagName){
	$(tagName).last().find('.jg-detail-ComListBox').css("border","0");
}
$(function(){
	//显示更多点击效果
	//学科专业区点击效果
	$(".jg-show-leftBootIcon").on("click",function(){
		var className = $(this).attr("class");
		if(className == "jg-show-leftBootIcon"){
			$(this).addClass("active");
			$(".jg-list-topCon").css("height","auto");
		}else{
			$(this).removeClass("active");
			$(".jg-list-topCon").css("height","177px");
		}
	});
})