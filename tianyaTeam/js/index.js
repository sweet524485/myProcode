// LOGO字体运动
$(function(){
	// 字体运动
	var timer = setInterval(function(){
		$('.qmj-section1-content_img1').stop(true,true).animate({'top':'10px'},500).animate({'top':'-10px'},500);
		$('.qmj-section1-content_img2').stop(true,true).animate({'top':'12px'},480).animate({'top':'-12px'},480);
		$('.qmj-section1-content_img3').stop(true,true).animate({'top':'14px'},460).animate({'top':'-14px'},460);
		$('.qmj-section1-content_img4').stop(true,true).animate({'top':'16px'},440).animate({'top':'-16px'},440);
		$('.qmj-section1-content_img5').stop(true,true).animate({'top':'18px'},420).animate({'top':'-18px'},420);
		$('.qmj-section1-content_img6').stop(true,true).animate({'top':'20px'},400).animate({'top':'-20px'},400);
		$('.qmj-section1-content_img7').stop(true,true).animate({'top':'22px'},380).animate({'top':'-22px'},380);
		$('.qmj-section1-content_img8').stop(true,true).animate({'top':'24px'},360).animate({'top':'-24px'},360);
		$('.qmj-section1-content_img9').stop(true,true).animate({'top':'26px'},340).animate({'top':'-26px'},340);
	},1000);
})
//前端项目鼠标的移入效果
$(function(){
    $(function(){
        $('.content-list').mouseenter(function(e){
            //获得移入方向
            var direction=hd_direction($(this),e);
            //改变盖子的位置
            switch(direction){
                case 'left':$(this).find('.content-list-con').css({'left':'-200px','top':'0px'});
                break;
                case 'top':$(this).find('.content-list-con').css({'left':'0','top':'-240px'});
                break;
                case 'right':$(this).find('.content-list-con').css({'left':'200px','top':'0px'});
                break;
                case 'bottom':$(this).find('.content-list-con').css({'left':'0','top':'240px;'})
            }
            //让盖子运动
            $(this).find('.content-list-con').stop().animate({'left':0,'top':0},300);
        }).mouseleave(function(e){
            //获得移出方向
            var direction=hd_direction($(this),e);
            //改变盖子的位置
            switch(direction){
                case 'left':$(this).find('.content-list-con').stop().animate({'left':'-200px','top':'0px'},200);
                break;
                case 'top':$(this).find('.content-list-con').stop().animate({'left':'0px','top':'-240px'},100);
                break;
                case 'right':$(this).find('.content-list-con').stop().animate({'left':'200px','top':'0px'},200);
                break;
                case 'bottom':$(this).find('.content-list-con').stop().animate({'left':'0px','top':'240px'},200);
                break;
            }
        })
    })
});
$(function(){

	//擦除效果
	jQuery.extend(jQuery.easing,
		{
			easeOutBack: function (x, t, b, c, d, s) {
				s = s || 1.3;
				return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		}
	});
	
	//nav初始化选中
	var navCurr = $("#navCurr");
	$("#navSelected").css("left", navCurr[0].offsetLeft);
	
	//nav里的链接hover效果
	$("#navBd li").hover(function(){
			if(!!$("#navSelected").stop(true).animate({left:$(this)[0].offsetLeft}, 400, "easeOutBack")) {
				$(this).siblings().removeClass("navHover").end().addClass("navHover");
				$(this).find("a").hide().fadeIn(300);
			}
			
		}, function(){
			$(this).removeClass("navHover");
			$("#navCurr").addClass("navHover");
			//window.setTimeout(function(){$("#navCurr").parent().addClass("navHover")},100);
			$("#navSelected").stop(true).animate({left:navCurr[0].offsetLeft}, 300, "easeOutBack");
		}
	);

})