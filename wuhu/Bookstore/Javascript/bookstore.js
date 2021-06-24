// JavaScript Document
function setShowPages(){//设置分页按钮样式
	var makePages = $('.makePages');//设置分页的按钮
	makePages.click(function(e) {
        var env = $(e.target);
		makePages.removeClass('current');
		env.addClass('current');
    });
}