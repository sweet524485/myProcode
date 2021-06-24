//轮播图函数
function moveUI(time){
	//声明一个自动累加的器
	var i = 0;
	//声明一个定时器
	var timer = null;
	//让轮播区第一个的层级高一级
	$('#moveContent > a').first().css({'opacity':1,'z-index': 1});
	function autoRun(){
		i ++;
		if(i > 4){
			i = 0;
		}
		$('#moveContent > a').eq(i).stop().animate({'opacity':1,'z-index': 1},200).siblings('a').stop().animate({'opacity':0,'z-index': 0},200);
		$('.hover-bg').stop().animate({'top':60*i+'px'});
	}
	//鼠标移入右侧导航区
	$('.qtt-move-cLi').hover(function(){
		var index = $(this).index();
		i = index;
		$('#moveContent > a').eq(i).stop().animate({'opacity':1,'z-index': 1},200).siblings('a').stop().animate({'opacity':0,'z-index': 0},200);
		$('.hover-bg').stop().animate({'top':60*i+'px'});
	})
	//鼠标移入轮播图让其停止
	$('#moveContent').parent().hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoRun,time);
	})
	//让主图自动轮播
	timer = setInterval(autoRun,time);
}
//回到顶部回滚效果
 function scrollBlock(){
 	var quickTop = 350;
 	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop() 
	    if(scrollTop > quickTop){
			$(".backTopBox").animate({top:(scrollTop+350)+"px"}, 50);
		}else{
			$(".backTopBox").animate({top:quickTop+"px"}, 50);
	   }
    });
    $('.backTop-top').click(function(){
		$('html,body').stop().animate({'scrollTop':'0px'},1000);
	});
 } 
$(function(){
	//轮播图
	moveUI(3000);
	//回到顶部回滚效果
	scrollBlock();
})
