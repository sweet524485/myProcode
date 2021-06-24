
// 右侧友情链接
$(function(){
	//右边Tab
	var a=0
	var autoRun = function(){
		a++;
		a = (a==5)?0:a;
		if(a==5){
			a=0
		}
		var left=a*-141
		$('.index-lunbo-big').css({'left':left+'px'})
		$('.index-lunbo-li').eq(a).addClass('index-lunbo-li-cur').siblings('.index-lunbo-li').removeClass('index-lunbo-li-cur');
	}
	var timer = setInterval(autoRun,3000);//设立定时器
	$('.index-right-lunbo-right').click(function(){
		a--;
		a = (a==-1)?4:a;
		if(a==-1){
			a=4
		}
		var left=a*-141
		$('.index-lunbo-big').css({'left':left+'px'});
		$('.index-lunbo-li').eq(a).addClass('index-lunbo-li-cur').siblings('.index-lunbo-li').removeClass('index-lunbo-li-cur');
	})
	// 左边Tab
	$('.index-right-lunbo-left').click(function(){
		a++;
		a = (a==5)?0:a;
		if(a==5){
			a=1
		}
		var left=a*-141
		$('.index-lunbo-big').css({'left':left+'px'})
		$('.index-lunbo-li').eq(a).addClass('index-lunbo-li-cur').siblings('.index-lunbo-li').removeClass('index-lunbo-li-cur');
	})
	$('.index-lunbo-li').mouseover(function(){
		clearInterval(timer);
		var c=$(this).index();//获得鼠标移入的li的序号
		//计算大div的left值
		var left=c*-141;
		//让div运动到对应的位置
		$('.index-lunbo-big').stop().animate({'left':left+'px'},200);
		//让c号li加上class，并且移出兄弟li身上的class
		$('.index-lunbo-li').eq(c).addClass('index-lunbo-li-cur').siblings('.index-lunbo-li').removeClass('index-lunbo-li-cur');
	})
	$('.index-lunbo-li').mouseout(function() {
		timer = setInterval(autoRun,3000);//设立定时器
	});
	$('.index-right-lunbo-left').mouseover(function() {
		clearInterval(timer);
	});
	$('.index-right-lunbo-left').mouseout(function() {
		timer = setInterval(autoRun,3000);//设立定时器
	});
	$('.index-right-lunbo-right').mouseover(function() {
		clearInterval(timer);
	});
	$('.index-right-lunbo-right').mouseout(function() {
		timer = setInterval(autoRun,3000);//设立定时器
	});
	$('.index-lunbo-big').mouseover(function() {
		clearInterval(timer);
	});
	$('.index-lunbo-big').mouseout(function() {
		timer = setInterval(autoRun,3000);//设立定时器
	});
})
$(function(){
	$('.index-right-lunbo-left').mouseover(function() {
	 	$('.index-lunbo-left-img1').hide();
	 	$('.index-lunbo-left-img2').show();
	});
	$('.index-right-lunbo-left').mouseout(function() {
		$('.index-lunbo-left-img1').show();
	 	$('.index-lunbo-left-img2').hide();
	});
	$('.index-right-lunbo-right').mouseover(function() {
	 	$('.index-lunbo-right-img1').hide();
	 	$('.index-lunbo-right-img2').show();
	});
	$('.index-right-lunbo-right').mouseout(function() {
		$('.index-lunbo-right-img1').show();
	 	$('.index-lunbo-right-img2').hide();
	});
})
// ........................................................
$(function(){
	$('.ed-li').mouseover(function() {
		alert(1);
	 	$(this).find('.grid-165').addClass('hi1de').parents('.row_list').find('.grid-165').removeClass('hi1de');
	});	
})








