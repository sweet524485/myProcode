
	//页面加载完成执行
	$(function() {
		//页面图片延迟加载
	   	$("img").lazyload({ 
	        placeholder : "images/loading.gif",
	        effect: "fadeIn"
	    });  
	});
	//初次加载时设置导航条的宽度
	function navWidthAuto(NavList,OutContent){
		var sum = 0;
		$(NavList).each(function(index, el) {
			var w = $(this).outerWidth()+1;
			var marginLeft = parseInt($(this).css("margin-left"));
			var marginRight = parseInt($(this).css("margin-right"));
			sum += w+marginLeft+marginRight;
		});
		$(OutContent).css("width",sum+"px");
	}
	//声明滚屏变量
	var myScroll,
		hMyScroll,
		Scr,
		maxScrollX,
		pullDownEl, pullDownOffset,
		pullUpEl, pullUpOffset,
		generatedCount = 0;
	//下拉刷新方法
	function pullDownAction () {
		setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
			var el, li, i;
			el = document.getElementById('thelist');

			for (i=0; i<3; i++) {
				li = document.createElement('li');
				li.innerText = 'Generated row ' + (++generatedCount);
				el.insertBefore(li, el.childNodes[0]);
			}
			
			myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
		}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
	}
	//加载更多的方法
	function pullUpAction () {
		setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
			var el, li, i;
			el = document.getElementById('thelist');

			for (i=0; i<3; i++) {
				li = document.createElement('li');
				li.innerText = 'Generated row ' + (++generatedCount);
				el.appendChild(li, el.childNodes[0]);
			}
			
			myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
		}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
	}
	//初次加载
	function loaded() {
		pullDownEl = document.getElementById('pullDown');
		pullDownOffset = pullDownEl.offsetHeight;
		pullUpEl = document.getElementById('pullUp');	
		pullUpOffset = pullUpEl.offsetHeight;

		myScroll = new iScroll('wrapper', {
			scrollbarClass: 'myScrollbar',
			useTransition: true,
			momentum:true,
			topOffset: pullDownOffset,
			onRefresh: function () {
				scrollY(this);
				if (pullDownEl.className.match('loading')) {
					$("#header").hide();
					pullDownEl.className = '';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
				} else if (pullUpEl.className.match('loading')) {
					pullUpEl.className = '';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
				}
		
			},
			onScrollMove: function () {
				scrollY(this);
				if (this.y > 5 && !pullDownEl.className.match('flip')) {
					pullDownEl.className = 'flip';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
					this.minScrollY = 0;
					$("#pullDown").show();
					$("#header").hide();
				} else if (this.y < 5 && pullDownEl.className.match('flip')) {
					pullDownEl.className = '';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
					this.minScrollY = -pullDownOffset;
					$("#pullDown").show();
				} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
					pullUpEl.className = 'flip';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
					this.maxScrollY = this.maxScrollY;
				} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
					pullUpEl.className = '';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
					this.maxScrollY = pullUpOffset;
				}
			},
			onScrollEnd: function () {
				scrollY(this);
				//自动触发滚动事件
				$(window).trigger('scroll');
				if (pullDownEl.className.match('flip')) {
					pullDownEl.className = 'loading';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';				
					//myScroll.refresh();	// Execute custom function (ajax call?)
					setTimeout(function(){
						$("#pullDown").hide();
						$("#header").show();
						this.minScrollY = 0;
					},2000);
					
				} else if (pullUpEl.className.match('flip')) {
					pullUpEl.className = 'loading';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';				
				    //myScroll.refresh(); // Execute custom function (ajax call?)
					setTimeout(function(){
						$("#pullUp").removeClass('loading');
						$("#header").show();
						pullUpEl.querySelector('.pullUpLabel').innerHTML = 'load more content...';
						this.maxScrollY = pullUpOffset;
					},2000)
				}
			}
		});

		hMyScroll = new iScroll('wrap',{
			momentum:true,
			bounce:false
		});
		//滑动导航条的宽度
		navWidthAuto(".navSrcList","#scr");
		Scr = new iScroll('wr',{
			momentum:true,
			bounce:false,
			onScrollMove: function () {
				scrollY(this);
				maxScrollX = this.maxScrollX;
			}
		});
		
		setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 200);
	}

	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);


function textUping(){
	var i = 0;
	var up = 0.23;
	var ampHtml = $('.jd-newsList').first().clone();
	$('.jd-newsWrap').append(ampHtml);
	var num = $('.jd-newsList').size();
	setInterval(function(){
		i++;
		if(i == num){
			$('.jd-newsWrap').css('margin-top','0rem');
			i = 1;
		}
		$('.jd-newsWrap').stop().animate({'margin-top':'-'+up*i+'rem'}, 300);
	},3000);
}
//获取滚动的y轴的值
function getTransform(el) {
 	var results = $(el).css('transform');
 	var strArr = new Array();
 	strArr=results.split(",");
 	return parseInt(strArr[4]);
}
function daojishi(){
	var now_time=new Date();//创建当前时间
	var shiyi=new Date(2616,9,1,0,0,0);//创建十月一时间
	var diff=shiyi.getTime()-now_time.getTime();//计算时间差
	var title=document.getElementById('title');
	var spans=document.getElementsByTagName('span');

	var tian=parseInt(diff/(24*60*60*1000));//计算还剩多少天
	diff=diff%(24*60*60*1000);//获得还剩多少天后，计算还剩多少毫秒
	var xiaoshi=parseInt(diff/(60*60*1000));//计算还剩多少小时
	diff=diff%(60*60*1000);//获得还剩多少小时后，计算还剩多少毫秒
	var fenzhong=parseInt(diff/(60*1000));//计算还剩多少分钟
	diff=diff%(60*1000);//获得还剩多少分钟后，计算还剩多少毫秒
	var miao=parseInt(diff/1000);//计算毫秒
	// spans[0].innerHTML=tian;
	// spans[0].innerHTML=xiaoshi;
	// spans[1].innerHTML=fenzhong;
	// spans[2].innerHTML=miao;
	if (xiaoshi < 10) {
		xiaoshi = '0' + xiaoshi;
	};
	if (fenzhong < 10) {
		fenzhong = '0' + fenzhong;
	};
	if (miao < 10) {
		miao = '0' + miao;
	};
	$('.jd-daojishi span').eq(0).text(xiaoshi);
	$('.jd-daojishi span').eq(1).text(fenzhong);
	$('.jd-daojishi span').eq(2).text(miao);
}
//截取字符串方法封装
function strCut(tagName){
	$(tagName).each(function(i,item){
		var str = $(tagName).eq(i).text();
		str = cutString(str, 52);
		$(tagName).eq(i).text(str);
	})
}
//点击登录弹出层出现的方法
function LoginShow(){
	$('.alert').show();
	$('.q-alert_centerBox').stop().animate({"width":"3.4rem","height":"0.6rem","margin-left":"-1.7rem","margin-top":"-0.4rem"}, 300);
}
//点击关闭按钮关闭的方法
function Alertclose(){
	$('.q-alert_centerBox').stop().animate({"width":"0px","height":"0px","margin-left":"0px","margin-top":"0px"}, 300);
	$('.alert').hide();
}
//判断滚动高度使导航条显示与隐藏
function scrollY(obj){
	var scrollTopNum = parseInt(obj.y);
	var opacNum = obj.y*(-0.5)/100;
	$(".jd-mb").css('opacity',opacNum);
	if(scrollTopNum < -200){
		$("#backTop").show();
	}else{
		$("#backTop").hide();
	}
}
//以ipone6屏宽414为基准，尺寸px除以100换算成rem
//->响应式布局格式
function autoSize(maxWidth){
	var mWidth = $(window).width();
	var totleWidth = mWidth*100;
	if (mWidth <= maxWidth) {
		var fontSize = totleWidth/414;
		$("html").css("font-size",fontSize+"px");
	};
}
//删除右边距边框
function delBorder(){
	$(".jd-hscroll-list").last().find(".jd-hscroll-listImgCon").css("border-right","0");
}
var i = 0;
$(function(){
	//页面缓冲加载
	$.MyCommon.PageLoading({ sleep: 2000 });
	//淘宝头条向上滚动效果
	textUping();
	//处理标题多余字符的方法
	strCut();
	//倒计时方法调用
	setInterval(daojishi,1000);
	//倒计时
	daojishi();
	//删除右边框
	delBorder();
	//回到顶部
	$("#backTop").click(function(){
		var scrollTopNum = getTransform("#scroller");
		$(this).hide();
		$("#scroller").css("transform","translate3d(0px, 0px, 0px)");
		$(".jd-mb").css('opacity',0);
	});
	//自适应方法调用
	autoSize(2000);
	//滑动导航条的宽度
    navWidthAuto(".navSrcList","#scr");
    //导航条点击效果
    $(".navSrcList").on("click",function(e){
    	i ++;
    	//点击后添加属性
    	$(this).addClass('active').siblings(".navSrcList").removeClass('active');
    	//获取前导航的外边距值
    	var PreW = $(this).prev().outerWidth()+1;
		var PreMarginLeft = parseInt($(this).prev().css("margin-left"));
		var PreMarginRight = parseInt($(this).prev().css("margin-right"));
		var PreConWidth = PreW + PreMarginLeft + PreMarginRight;
		//获取后导航的外边距值
    	var NextW = $(this).next().outerWidth()+1;
		var NextMarginLeft = parseInt($(this).next().css("margin-left"));
		var NextMarginRight = parseInt($(this).next().css("margin-right"));
		var NextConWidth = NextW + NextMarginLeft + NextMarginRight;
    	//点击事件发生的点
		var PositionX = e.pageX;
		//获取滚动区当前的滚动位置
		var ScrollX = getTransform("#scr");
		//获取视口的宽度
		var ClientWidth = $(window).width();
		//获取滚动区的总宽度
		var totalWidth = $("#scr").width();
		//计算应该是否滚动的比例
		var percentage = parseInt(PositionX/ClientWidth*1000);
		//->判断比例 
		if(percentage >= 1 && percentage <= 165){
			if(i%4 == 0){
				if(ScrollX > -105){
					$("#scr").css({"transform":"translate3d(0px, 0px, 0px)"});
				}else{
					var NowSrollX = ScrollX + PreConWidth;
					$("#scr").css({"transform":"translate3d("+NowSrollX+"px, 0px, 0px)"});
				}
			}
		}
		//->判断比例 
		if(percentage >= 800 && percentage <= 995){
			if(i%4 == 0){
				if(ScrollX < -820){
					$("#scr").css({"transform":"translate3d("+maxScrollX+"px, 0px, 0px)"});
				}else{
					var NowSrollX = ScrollX - NextConWidth;
					$("#scr").css({"transform":"translate3d("+NowSrollX+"px, 0px, 0px)"});
				}
			}
		}
	});
})
$(window).resize(function(){
	//自适应方法调用
   	autoSize(2000);
   	//滑动导航条的宽度
    navWidthAuto(".navSrcList","#scr");
});