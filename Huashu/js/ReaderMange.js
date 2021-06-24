//文本框的得到与失去焦点的边框颜色
$(function () {
    $("input[type='text']").live('focus', function() {
        $(this).css({'box-shadow': '0px 0px 4px #A0C2FD', '-moz-box-shadow': '0px 0px 4px #A0C2FD', '-webkit-box-shadow': '0px 0px 4px #A0C2FD', '-ms-box-shadow': '0px 0px 4px #A0C2FD' });
    })
    $("input[type='text']").live('blur', function() {
        $(this).css({ 'border': '0px solid #C8C8C8', 'box-shadow': '0px 0px 0px #A0C2FD', '-moz-box-shadow': '0px 0px 0px #A0C2FD', '-webkit-box-shadow': '0px 0px 0px #A0C2FD', '-ms-box-shadow': '0px 0px 0px #A0C2FD' });
    })
})
//表格的隔行换色方法
function changeColor(class1,class2){
    $('tr:odd').addClass(class1);
    $('tr:even').addClass(class2); //偶数行
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
$(function(){
    // 隔行变色方法调用
    changeColor('q-odd','q-even');
    //表格的全选功能方法调用
    selectAll('.q-ReaderMange-table_checkbox','checkname');
})







