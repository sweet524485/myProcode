	// 进度条加载
	var i=0;
   /*add——创建tbx下的div加文字和变宽度的方法*/
   function add(i){
		var tbox = $(".tbox");
	       var tiao = $(".tiao");
	       var ticon = $(".ticon");
		tiao.css("width",i+"%");
		ticon.css("left",(i-3)+"%").html(i+"%");
	}
   /*创建方法（i++循环起来）*/
	function xh(){
		if(i>100){
			return;
		}
		if(i<=100){
			setTimeout("xh()",100)
			add(i);
			   i++;
		}	
	}
   /*调用xh()函数*/
	$('.q-OfflineImport-start').live('click', function(event) {
		xh();
	});

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
$(function(){
    //表格的全选功能方法调用
    selectAll('.q-OfflineImport-checkbox','checkname');
})


























