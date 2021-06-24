//判断进度条进度
function pro(num){
	var pro = num*4;
	$('.q-BatchManage-pro-red').css({'width':''+pro+''+'px'});
}
function proGreen(num){
	var pro = num*4;
	$('.q-BatchManage-pro-green').css({'width':''+pro+''+'px'});
}
//红色状态
$(function(){
	pro(70);
})
//绿色状态
$(function(){
	proGreen(100);
})
//表格的隔行换色效果
$(document).ready(function() {
	$('tr').addClass('q-oddd');
	$('tr:even').addClass('q-evend'); //奇偶变色，添加样式
}); 



