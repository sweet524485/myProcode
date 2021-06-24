
	//页面加载完成执行
	$(function() {
		//页面图片延迟加载
	   	$("img").lazyload({ 
	        placeholder : "images/loading.gif",
	        effect: "fadeIn"
	    });  
	});

	//声明滚屏变量
	var myScroll,
		hMyScroll,
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

		myScroll = new iScroll('wrapper', {
			scrollbarClass: 'myScrollbar',
			useTransition: true,
			momentum:true,
			topOffset: pullDownOffset,
			onRefresh: function () {
				if (pullDownEl.className.match('loading')) {
					pullDownEl.className = '';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
				} 
		
			},
			onScrollMove: function () {
				if (this.y > 5 && !pullDownEl.className.match('flip')) {
					pullDownEl.className = 'flip';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
					this.minScrollY = 0;
					$("#pullDown").show();
				} 
			},
			onScrollEnd: function () {
				$(window).trigger('scroll');
				if (pullDownEl.className.match('flip')) {
					pullDownEl.className = 'loading';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';				
					//myScroll.refresh();	// Execute custom function (ajax call?)
					setTimeout(function(){
						$("#pullDown").hide();
						this.minScrollY = 0;
					},2000);
					
				} 
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
 	var strArr = [];
 	var strLast = null;
 	strArr=results.split(",");
 	for (var i = 0; i < strArr.length; i++) {
 		strLast = strArr[i];
 	};
 	strLast = parseInt(strLast)*(-1);
 	return strLast;
}
function daojishi(){
	var now_time=new Date();//创建当前时间
	var shiyi=new Date(2616,9,1,0,0,0);//创建十月一时间
	var diff=shiyi.getTime()-now_time.getTime();//计算时间差

	var tian=parseInt(diff/(24*60*60*1000));//计算还剩多少天
	diff=diff%(24*60*60*1000);//获得还剩多少天后，计算还剩多少毫秒
	var xiaoshi=parseInt(diff/(60*60*1000));//计算还剩多少小时
	diff=diff%(60*60*1000);//获得还剩多少小时后，计算还剩多少毫秒
	var fenzhong=parseInt(diff/(60*1000));//计算还剩多少分钟
	diff=diff%(60*1000);//获得还剩多少分钟后，计算还剩多少毫秒
	var miao=parseInt(diff/1000);//计算毫秒
	if (xiaoshi < 10) {
		xiaoshi = '0' + xiaoshi;
	};
	if (fenzhong < 10) {
		fenzhong = '0' + fenzhong;
	};
	if (miao < 10) {
		miao = '0' + miao;
	};
	$("#hours").text(xiaoshi);
	$("#minutes").text(fenzhong);
	$("#seconds").text(miao);
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
//删除方法
function delDiv(){
	$(".m-guassYourLove-delBox").remove();
}
//底部footer区点击选中状态
/**点击添加选中状态
*obj->this
*className->class名字
*active->选中状态的class
**/
function AddActive(obj,className,active){
	$(obj).addClass(active).siblings(className).removeClass(active);
}
$(function(){
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
	//响应式布局方法调用
	autoSize(2000);
	//底部footer区点击选中状态
	$(".footList").click(function() {
		AddActive(this,".footList","active");
	});
})
$(window).resize(function(){
   //响应式布局方法调用
   autoSize(2000);
});