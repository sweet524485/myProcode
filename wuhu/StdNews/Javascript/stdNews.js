// JavaScript Document
function toggleDisplay(){//切换视图
	var setDisplay = $('.setDisplay');//切换显示样式的按钮
	var tableView = $('.tableView').eq(0);
	var ulView = $('.ulView').eq(0);
	setDisplay.click(function(e) {
        var env = $(e.target);
		var str = env.text();
		setDisplay.show();
		env.hide();
		if(str === "切换到摘要")
		{
			tableView.hide();
			ulView.show();
		}
		if(str === "切换到列表")
		{
			tableView.show();
			ulView.hide();
		}
    });
}
function setShowPages(){//设置分页按钮样式
	var makePages = $('.makePages');//设置分页的按钮
	makePages.click(function(e) {
        var env = $(e.target);
		makePages.removeClass('current');
		env.addClass('current');
    });
}