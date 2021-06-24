//标签点击选中状态
$('.q-reasonAlert-label').live('click',function(){
	var divClassName = $(this).attr('class');
	if (divClassName == "q-reasonAlert-label q-reasonAlert-label_cur"){
		$(this).removeClass('q-reasonAlert-label_cur');
	}else{
		$(this).addClass('q-reasonAlert-label_cur');
	}  
});
//点击删除删除标签
$(function(){
	$('.q-error-icon').live('click', function(event) {
		$(this).parent().remove();
	});
})
//点击回车追加标签
$(document).keyup(function(event){
  if(event.keyCode ==13){
  	$('.q-reasonAlert-input').each(function() {
  		var getInputVal = $(this).val();
        if (getInputVal == '') {
            return false;
        }else{
            var addHtml = '<div class="q-reasonAlert-label q-reasonAlert-label_cur"><span class="q-reasonAlert-text" title="'+getInputVal+'">'+getInputVal+'</span><span class="q-error-icon">×</span></div>';
    		$(this).parent().prepend(addHtml);
            $(this).val("");
        }
  		
  	}); 
  }
}); 










