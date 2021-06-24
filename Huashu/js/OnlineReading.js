//全屏方法
function fullscreen(){  
    elem=document.body;  
    if(elem.webkitRequestFullScreen){  
        elem.webkitRequestFullScreen();     
    }else if(elem.mozRequestFullScreen){  
        elem.mozRequestFullScreen();  
    }else if(elem.requestFullScreen){  
        elem.requestFullscreen();  
    }else{  
        //浏览器不支持全屏API或已被禁用
        $('.q-OnlineReading-fullscreen').hide();
    }  
} 
//退出全屏方法 
function exitFullscreen(){  
    var elem=document;  
    if(elem.webkitCancelFullScreen){  
        elem.webkitCancelFullScreen();      
    }else if(elem.mozCancelFullScreen){  
        elem.mozCancelFullScreen();  
    }else if(elem.cancelFullScreen){  
        elem.cancelFullScreen();  
    }else if(elem.exitFullscreen){  
        elem.exitFullscreen();  
    }else{  
        //浏览器不支持全屏API或已被禁用
        $('.q-OnlineReading-fullscreen').hide();  
    }  
} 
// 去除空格的方法
String.prototype.trim = function () {
    var str = this,
	str = str.replace(/^\s\s*/, ''),
	ws = /\s/,
	i = str.length;
    while (ws.test(str.charAt(--i)));
    return str.slice(0, i + 1);
}
// 滚动条的方法
function slimscroll(tag,width,height,background,opacity){
	$(tag).slimScroll({
	    alwaysVisible: true,
	    // width in pixels of the visible scroll area
        width : width,
        // height in pixels of the visible scroll area
        height : height,
        // scrollbar color, accepts any hex/color value
        color: background,
        // sets scrollbar opacity
        opacity : opacity,
	});
}
//判断评论内容的高度的方法
function loadJudge(tag,num) {
    $(tag).each(function () {
        var conLength = $(this).text().trim().length;
        var content = $(this).text();
        $(this).attr('otypeCon1', content);
        if (conLength >= num) {
            $(this).next().show();
            //var text = cutstr($(this).text(), 34) + "...";
            var text = $(this).text().substring(0, num) + "...";
            $(this).attr('otypeCon2', text);
            $(this).text(text); 
        } 
    });
}
//纵向判断高度的方法
function autoHeight(){
	var verticalHeight = $('.q-OnlineReading_vertica-body').height()-60;
	$('.q-OnlineReading-vertical-conBox').css('height',verticalHeight+'px');
	$('.slimScrollDiv').css('height',verticalHeight+'px');
}
//目录纵向判断高度的方法
function verticalHeight(){
	var autovertical = $('.q-OnlineReading_vertica-body').height()-45;
	$('.q-OnlineReading-vertical-conBox').css('height',autovertical+'px');
}
$(function(){
	var verticalHeight = $('.q-OnlineReading_vertica-body').height()-60;
	var autovertical = $('.q-OnlineReading_vertica-body').height()-45;
	// 不支持全屏效果的浏览器
	fullscreen();
	exitFullscreen();
	//截取目录的方法
	loadJudge('.q-walert-chart span',17);
	loadJudge('.q-walert-chartLi-txt2',30);
	loadJudge('.q-walert-chartLi-txt2-1',30);
	loadJudge('.q-walert-chartLi-txt2-2',28);
	//全屏的切换效果
	$('.q-OnlineReading-fullscreen').toggle(function() {
		fullscreen();
		$(this).find('.q-OnlineReading-fullscreenIcon').attr('title','退出全屏');
		$(this).find('.q-OnlineReading-fullscreenIcon').css('background','url(./images/outscreen.png) no-repeat');

	}, function() {
		exitFullscreen();
		$(this).find('.q-OnlineReading-fullscreenIcon').attr('title','全屏');
		$(this).find('.q-OnlineReading-fullscreenIcon').css('background','url(./images/fullscreen.png) no-repeat');
	});
	//横向目录关闭按钮效果
	$('.q-walert-close').live('click', function(event) {
		$('.q-walert-container').hide(200);
	});
	//纵向目录关闭按钮效果
	$('.q-valert-close').live('click', function(event) {
		$('.q-valert-container').hide(200);
	});
	//横向目录点击效果
	$('.q-OnlineReading-directory').live('click', function(event) {
		var status = $('.q-walert-container').css('display');
		if(status == 'none'){
			$('.q-walert-container').show(200);
			slimscroll('#testDiv4','390px','530px','#D3D3D1',1);
		}else{
			$('.q-walert-container').hide(200);
		}
		var autovertical = $('.q-walert-body').height()-45;
		$('.slimScrollDiv').css('height',autovertical+'px');
	});
	//纵向目录点击效果
	$('.q-OnlineReading-verticaDirectory').live('click', function(event) {
		var status = $('.q-valert-container').css('display');
		if(status == 'none'){
			$('.q-valert-container').show(200);
			slimscroll('.q-valert-chartContent','593px',autovertical+'px','#D3D3D1',1);
		}else{
			$('.q-valert-container').hide(200);
		}
		var autovertical = $('.q-valert-body').height()-45;
		$('.q-valert-chartContent').css('height',autovertical+'px');
	});

	//阅读模式点击切换效果
	$(function(){
		$('.q-OnlineReading-mode').live('click', function(event) {
			$('.q-OnlineReading_lateral').fadeOut(200);
			$('.q-OnlineReading_vertical').fadeIn(200);
			autoHeight();
		});
	})
	//纵向阅读模式点击切换效果
	$(function(){
		$('.q-OnlineReading-verticaMode').live('click', function(event) {
			$('.q-OnlineReading_lateral').fadeIn(200);
			$('.q-OnlineReading_vertical').fadeOut(200);
			autoHeight();
		});
	})
	slimscroll('.q-OnlineReading-vertical-conBox','525px',verticalHeight+'px','#D3D3D1',1);
	slimscroll('.q-valert-chartContent','593px',autovertical+'px','#D3D3D1',1);


	$('.q-OnlineReading-next').live('click', function(event) {
		alert('1');
	});
})
$(window).resize(function(){
	autoHeight();
	verticalHeight();
})






