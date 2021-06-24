
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
				if (pullDownEl.className.match('loading')) {
					pullDownEl.className = '';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
				} else if (pullUpEl.className.match('loading')) {
					pullUpEl.className = '';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
				}
		
			},
			onScrollMove: function () {
				if (this.y > 5 && !pullDownEl.className.match('flip')) {
					pullDownEl.className = 'flip';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
					this.minScrollY = 0;
					$("#pullDown").show();
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
				$(window).trigger('scroll');
				//判断滚动条的位置让回到顶部显示与隐藏
				var scrollTopNum = getTransform("#scroller");
				if(scrollTopNum > 800){
					$("#backTop").show();
				}else{
					$("#backTop").hide();
				}
				if (pullDownEl.className.match('flip')) {
					pullDownEl.className = 'loading';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';				
					//myScroll.refresh();	// Execute custom function (ajax call?)
					setTimeout(function(){
						$("#pullDown").hide();
						this.minScrollY = 0;
					},2000);
					
				} else if (pullUpEl.className.match('flip')) {
					pullUpEl.className = 'loading';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';				
				    //myScroll.refresh(); // Execute custom function (ajax call?)
					setTimeout(function(){
						$("#pullUp").removeClass('loading');
						pullUpEl.querySelector('.pullUpLabel').innerHTML = 'load more content...';
						this.maxScrollY = pullUpOffset;
					},2000)
				}
			}
		});
		
		setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
	}

	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);


function textUping(){
	var i = 0;
	var up = 1.2176;
	var ampHtml = $('.tb-tbttRightList').first().clone();
	$('.tb-tbttRightBox').append(ampHtml);
	var num = $('.tb-tbttRightList').size();
	setInterval(function(){
		i++;
		if(i == num){
			$('.tb-tbttRightBox').css('margin-top','0rem');
			i = 1;
		}
		$('.tb-tbttRightBox').stop().animate({'margin-top':'-'+up*i+'rem'}, 300);
	},3000);
}
/**参数说明：
 * 根据长度截取先使用字符串，超长部分追加…
 * str 对象字符串
 * len 目标字节长度
 * 返回值： 处理结果字符串
 */
function cutString(str, len) {
	//length属性读出来的汉字长度为1
 	if(str.length*2 <= len) {
  		return str;
	}
 	var strlen = 0;
 	var s = "";
 	for(var i = 0;i < str.length; i++) {
  		s = s + str.charAt(i);
  		if (str.charCodeAt(i) > 128) {
   			strlen = strlen + 2;
   			if(strlen >= len){
    			return s.substring(0,s.length-1) + "...";
   			}
  		} else {
   			strlen = strlen + 1;
	   		if(strlen >= len){
	    		return s.substring(0,s.length-2) + "...";
	   		}
  		}
 	}
 	return s;
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
	$('.tb-daojishi span').eq(0).text(xiaoshi);
	$('.tb-daojishi span').eq(1).text(fenzhong);
	$('.tb-daojishi span').eq(2).text(miao);
}
//截取字符串方法封装
function strCut(){
	$('.tb-CNXH-title').each(function(i,item){
		var str = $('.tb-CNXH-title').eq(i).text();
		str = cutString(str, 52);
		$('.tb-CNXH-title').eq(i).text(str);
	})
}
//点击登录弹出层出现的方法
function LoginShow(){
	$('.alert').fadeIn();
	$('.q-alert_centerBox').animate({"width":"18rem","height":"4rem","margin-left":"-9rem","margin-top":"-4rem"}, 100);
}
//点击关闭按钮关闭的方法
function Alertclose(){
	$('.q-alert_centerBox').animate({"width":"0px","height":"0px","margin-left":"0px","margin-top":"0px"}, 100);
	$('.alert').fadeOut();
}
$(function(){
	//页面缓冲加载
	$.MyCommon.PageLoading({ sleep: 2000 });
	//淘宝头条向上滚动效果
	textUping();
	//处理标题多余字符的方法
	strCut();
	//倒计时方法调用
	setInterval(daojishi,1000);
	daojishi();
	//回到顶部
	$("#backTop").click(function(){
		var scrollTopNum = getTransform("#scroller");
		$(this).hide();
		$("#scroller").css("transform","translate3d(0px, 0px, 0px)");
	})
})