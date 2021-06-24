// 导航条点击效果
$(function(){
	$('.film-nav').click(function() {
		$(this).addClass('film-nav-cur').siblings('.film-nav').removeClass('film-nav-cur');
	});
})
// 导航条鼠标放上去效果
$(function(){
	$('.film-nav1').click(function() {
		var c = $(this).index();//获得当前移入的li的序号
		var left1 = 0;
		// 将色块运动到对应位置
		$('.film-nav-move').stop().animate({'left':left1+'px'}, 200);
	});
})
$(function(){
	$('.film-nav2').click(function() {
		var c = $(this).index();//获得当前移入的li的序号
		var left2 = 217;
		// 将色块运动到对应位置
		$('.film-nav-move').css({'width':'176px'});
		$('.film-nav-move').stop().animate({'left':left2+'px'}, 200);
	});
})
$(function(){
	$('.film-nav3').click(function() {
		var c = $(this).index();//获得当前移入的li的序号
		var left3 = 431;
		// 将色块运动到对应位置
		$('.film-nav-move').css({'width':'235px'});
		$('.film-nav-move').stop().animate({'left':left3+'px'}, 200);
	});
})
$(function(){
	$('.film-nav4').click(function() {
		var c = $(this).index();//获得当前移入的li的序号
		var left4 = 708;
		// 将色块运动到对应位置
		$('.film-nav-move').css({'width':'203px'});
		$('.film-nav-move').stop().animate({'left':left4+'px'}, 200);
	});
})
$(function(){
	$('.film-nav5').click(function() {
		var c = $(this).index();//获得当前移入的li的序号
		var left5 = 947;
		// 将色块运动到对应位置
		$('.film-nav-move').css({'width':'208px'});
		$('.film-nav-move').stop().animate({'left':left5+'px'}, 200);
	});
})
// 一楼层轮播图的JS
$(function(){
	var c = 0;
	var autoRun = function(){
		c++;//变量自增
		c = (c==3)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.film-move_list').eq(c).fadeIn(200).siblings('.film-move_list').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('.film-move_li').eq(c).addClass('cur').siblings('.film-move_li').removeClass('cur');
	}
	var timer = setInterval(autoRun,3000);//设立定时器
	$('.film-move_left').click(function(){
		c--;
		c = (c==-1)?2:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.film-move_list').eq(c).fadeIn(200).siblings('.film-move_list').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('.film-move_li').eq(c).addClass('cur').siblings('.film-move_li').removeClass('cur');
	})
	$('.film-move_right').click(function(){
		c++;
		c = (c==3)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.film-move_list').eq(c).fadeIn(200).siblings('.film-move_list').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('.film-move_li').eq(c).addClass('cur').siblings('.film-move_li').removeClass('cur');
	})
})
// 瀑布流JS
$(window).load(function(){
	//url data function dataType
	function loadMeinv(){
		var data = 1;
		for(var i=1;i<106;i++){
			data = parseInt(Math.random()*106+1);
			var html = "";
			html = '<img src = images/img/'
					+data+'.jpg>';
			$minUl = getMinUl();
			$minUl.append(html);
		}
	}
	loadMeinv();
	$(window).on("scroll",function(){
		$minUl = getMinUl();
		if($minUl.height() <= $(window).scrollTop()+$(window).height()){
			loadMeinv();
		}
	})
	function getMinUl(){
		var $arrUl = $("#fiml-work-list1 .fiml-work-list-li");
		var $minUl =$arrUl.eq(0);
		$arrUl.each(function(index,elem){
			if($(elem).height()<$minUl.height()){
				$minUl = $(elem);
			}
		});
		return $minUl;
	}
})
$(window).load(function(){
	//url data function dataType
	function loadMeinv(){
		var data = 1;
		for(var i=1;i<106;i++){
			data = parseInt(Math.random()*106+1);
			var html = "";
			html = '<img src = images/img/'
					+data+'.jpg>';
			$minUl = getMinUl();
			$minUl.append(html);
		}
	}
	loadMeinv();
	$(window).on("scroll",function(){
		$minUl = getMinUl();
		if($minUl.height() <= $(window).scrollTop()+$(window).height()){
			loadMeinv();
		}
	})
	function getMinUl(){
		var $arrUl = $("#fiml-work-list2 .fiml-work-list-li");
		var $minUl =$arrUl.eq(0);
		$arrUl.each(function(index,elem){
			if($(elem).height()<$minUl.height()){
				$minUl = $(elem);
			}
		});
		return $minUl;
	}
})
$(window).load(function(){
	//url data function dataType
	function loadMeinv(){
		var data = 1;
		for(var i=1;i<106;i++){
			data = parseInt(Math.random()*106+1);
			var html = "";
			html = '<img src = images/img/'
					+data+'.jpg>';
			$minUl = getMinUl();
			$minUl.append(html);
		}
	}
	loadMeinv();
	$(window).on("scroll",function(){
		$minUl = getMinUl();
		if($minUl.height() <= $(window).scrollTop()+$(window).height()){
			loadMeinv();
		}
	})
	function getMinUl(){
		var $arrUl = $("#fiml-work-list3 .fiml-work-list-li");
		var $minUl =$arrUl.eq(0);
		$arrUl.each(function(index,elem){
			if($(elem).height()<$minUl.height()){
				$minUl = $(elem);
			}
		});
		return $minUl;
	}
})
$(function(){
	$('.film-move_left').mouseover(function() {
	 	$(this).find('.film-move_img2').show().siblings('img').hide();
	});
	$('.film-move_left').mouseout(function() {
		$(this).find('.film-move_img1').show().siblings('img').hide();
	});
	$('.film-move_right').mouseover(function() {
	 	$(this).find('.film-move_img2').show().siblings('img').hide();
	});
	$('.film-move_right').mouseout(function() {
		$(this).find('.film-move_img1').show().siblings('img').hide();
	});
})
// 二楼层轮播图的JS
$(function(){
	var c = 0;
	var autoRun = function(){
		c++;//变量自增
		c = (c==3)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.film-move_list1').eq(c).fadeIn(200).siblings('.film-move_list1').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('.film-move_li1').eq(c).addClass('cur').siblings('.film-move_li1').removeClass('cur');
	}
	var timer = setInterval(autoRun,3000);//设立定时器
	$('.film-move_left1').click(function(){
		c--;
		c = (c==-1)?2:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.film-move_list1').eq(c).fadeIn(200).siblings('.film-move_list1').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('.film-move_li1').eq(c).addClass('cur').siblings('.film-move_li1').removeClass('cur');
	})
	$('.film-move_right1').click(function(){
		c++;
		c = (c==3)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.film-move_list1').eq(c).fadeIn(200).siblings('.film-move_list1').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('.film-move_li1').eq(c).addClass('cur').siblings('.film-move_li1').removeClass('cur');
	})
})
$(function(){
	$('.film-move_left1').mouseover(function() {
	 	$(this).find('.film-move_img22').show().siblings('img').hide();
	});
	$('.film-move_left1').mouseout(function() {
		$(this).find('.film-move_img11').show().siblings('img').hide();
	});
	$('.film-move_right1').mouseover(function() {
	 	$(this).find('.film-move_img22').show().siblings('img').hide();
	});
	$('.film-move_right1').mouseout(function() {
		$(this).find('.film-move_img11').show().siblings('img').hide();
	});
})
// 三楼鼠标移入效果
$(function(){
    $(function(){
        $('.film-content-li2-list').mouseenter(function(e){
            //获得移入方向
            var direction=hd_direction($(this),e);
            //改变盖子的位置
            switch(direction){
                case 'left':$(this).find('.film-content-li2-con').css({'left':'-220px','top':'0px'});
                break;
                case 'top':$(this).find('.film-content-li2-con').css({'left':'0','top':'-340px'});
                break;
                case 'right':$(this).find('.film-content-li2-con').css({'left':'220px','top':'0px'});
                break;
                case 'bottom':$(this).find('.film-content-li2-con').css({'left':'0','top':'340px;'})
            }
            //让盖子运动
            $(this).find('.film-content-li2-con').stop().animate({'left':0,'top':0},300);
        }).mouseleave(function(e){
            //获得移出方向
            var direction=hd_direction($(this),e);
            //改变盖子的位置
            switch(direction){
                case 'left':$(this).find('.film-content-li2-con').stop().animate({'left':'-220px','top':'0px'},200);
                break;
                case 'top':$(this).find('.film-content-li2-con').stop().animate({'left':'0px','top':'-340px'},100);
                break;
                case 'right':$(this).find('.film-content-li2-con').stop().animate({'left':'220px','top':'0px'},200);
                break;
                case 'bottom':$(this).find('.film-content-li2-con').stop().animate({'left':'0px','top':'340px'},200);
                break;
            }
        })
    })
})
// 三楼鼠标移入效果
$(function(){
	$('.film-content-li2-list').mouseover(function() {
		$(this).css({'border':' 5px solid #FF0000'});
	});
	$('.film-content-li2-list').mouseleave(function() {
		$(this).css({'border':' 5px solid #ECECEC'});
	});
});
// 四楼鼠标移入效果
$(function(){
	$('.film-content-f4-list').mouseover(function() {
		$(this).find('.film-content-f4-face').css({'border':'4px solid #FF0000'});
		$(this).find('.film-content-f4-country').css({'color':'#FF0000','border':'3px solid #FF0000'});
		$(this).find('.film-content-f4-name').css({'color':'#FF0000','border':'2px solid #FF0000','box-shadow':'0 0 1px #FF0000'});
	});
	$('.film-content-f4-list').mouseleave(function() {
		$(this).find('.film-content-f4-face').css({'border':'4px solid #EDEDED'});
		$(this).find('.film-content-f4-country').css({'color':'#706B6B','border':'3px solid #EDEDED'});
		$(this).find('.film-content-f4-name').css({'color':'#6B6359','border':'2px solid #E2E2E2','box-shadow':'0 0 1px #E2E2E2'});
	});
});
//首页右侧固定JS
$(function (){
	var quickTop = 350;
	$(function(){
		$(document).scroll(function(){
			var scrollTop = $(this).scrollTop() 
		    if(scrollTop > quickTop){
				$(".film-left-box").animate({top:(scrollTop+350)+"px"}, 40);
			}else{
				$(".film-left-box").animate({top:quickTop+"px"}, 40);
		    }

	    });
    });
})
// 返回顶部
$(function(){
	//滚动到顶部
	$('.film-back-top').click(function(){
		$('html,body').stop().animate({'scrollTop':'0px'},1000);
	});
})
// 欢迎字体
$(function(){
	var autoRun = function(){
		$('.film-back-top').stop(true,true).animate({'bottom':'10px'},100).animate({'bottom':'0px'},100);
	}
	var timer = setInterval(autoRun,1000);//设立定时器
	$('.film-back-top img').mouseover(function() {
		clearInterval(timer);
	});
	// 给li加鼠标移出效果
	$('.film-back-top img').mouseout(function() {
		timer = setInterval(autoRun,1000);//设立定时器
	});
})
// 关于我们导航条点击效果
$(function(){
	$('.film-about-nav').click(function() {
		$(this).addClass('film-about-nav-cur').siblings('.film-about-nav-common').removeClass('film-about-nav-cur');
	});
})
// 教学课程导航条点击效果
$(function(){
	$('.film-class-nav').click(function() {
		$(this).addClass('film-class-nav-cur').siblings('.film-class-nav').removeClass('film-class-nav-cur');
	});
})
$(function(){
    $('.film-about-nav').click(function(){
    	var c = $(this).index();//获得当前li的序号
      	$('.film-about-right-list').eq(c).show().siblings('.qmj-content-right-con').hide();
      	$('.film-about-right-list').eq(c).stop().animate({'margin-left':'-20px'},100,function(){
			$('.film-about-right-list').stop().animate({'margin-left':'20px'},100,function(){
				$('.film-about-right-list').stop().animate({'margin-left':'-10px'},100,function(){
					$('.film-about-right-list').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
		$('.film-about-right-list').eq(c).show().siblings('div').hide();//让c号con显示，他的兄弟节点隐藏
    })
});
$(function(){
    $('.film-class-nav').click(function(){
    	var c = $(this).index();//获得当前li的序号
      	$('.film-class-right-list').eq(c).show().siblings('.qmj-content-right-con').hide();
      	$('.film-class-right-list').eq(c).stop().animate({'margin-left':'-20px'},100,function(){
			$('.film-class-right-list').stop().animate({'margin-left':'20px'},100,function(){
				$('.film-class-right-list').stop().animate({'margin-left':'-10px'},100,function(){
					$('.film-class-right-list').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
		$('.film-class-right-list').eq(c).show().siblings('div').hide();//让c号con显示，他的兄弟节点隐藏
    })
});
// 首页轮播图JS
$(function(){
	//单张图片宽度
	var imgWidth = $('#film-header-move-box ul li a img').width();
	// var imgHeight = $('#film-header-move-box ul li a img').height();
	if($(window).width()<imgWidth) {
		$('#film-header-move-box ul li a img').css({'width':$(window).width()});
		// $('#film-header-move-box').css({'width':$(window).width(),'height':'imgHeight'+'px'});
	}
})
// 师资力量鼠标移入效果
$(function(){
    $(function(){
        $('.film-teacher-list').mouseenter(function(e){
            //获得移入方向
            var direction=hd_direction($(this),e);
            //改变盖子的位置
            switch(direction){
                case 'left':$(this).find('.film-teacher-detail').css({'left':'-228px','top':'0px'});
                break;
                case 'top':$(this).find('.film-teacher-detail').css({'left':'0','top':'-310px'});
                break;
                case 'right':$(this).find('.film-teacher-detail').css({'left':'228px','top':'0px'});
                break;
                case 'bottom':$(this).find('.film-teacher-detail').css({'left':'0','top':'310px;'})
            }
            //让盖子运动
            $(this).find('.film-teacher-detail').stop().animate({'left':0,'top':0},300);
        }).mouseleave(function(e){
            //获得移出方向
            var direction=hd_direction($(this),e);
            //改变盖子的位置
            switch(direction){
                case 'left':$(this).find('.film-teacher-detail').stop().animate({'left':'-228px','top':'0px'},200);
                break;
                case 'top':$(this).find('.film-teacher-detail').stop().animate({'left':'0px','top':'-310px'},100);
                break;
                case 'right':$(this).find('.film-teacher-detail').stop().animate({'left':'228px','top':'0px'},200);
                break;
                case 'bottom':$(this).find('.film-teacher-detail').stop().animate({'left':'0px','top':'310px'},200);
                break;
            }
        })
    })
})
// 作品展示TAB切换效果
$(function(){
    $('.fiml-woke-nav').click(function(){
    	var c = $(this).index();//获得当前li的序号
      	$('.fiml-work-list').stop().animate({'margin-top':'-20px'},100,function(){
			$('.fiml-work-list').stop().animate({'margin-top':'58px'},100,function(){
				$('.fiml-work-list').stop().animate({'margin-top':'-10px'},100,function(){
					$('.fiml-work-list').stop().animate({'margin-top':'38px'},100)
				})
			})
		})
      	$('.fiml-work-list').eq(c).show().siblings('div').hide();//让c号con显示，他的兄弟节点隐藏
      	$(this).addClass('fiml-woke-nav-cur').siblings('.fiml-woke-nav').removeClass('fiml-woke-nav-cur');
    })
});
// 导航固定定位
$(window).bind('scroll',function(){
	if ($(document).scrollTop() >200) { 
		$('.film-header-blind').css({'position':'fixed','top':'0','left':'0','z-index':'99998'});
		$('.film-header-fixed').css({'position':'fixed','top':'0','left':'0','z-index':'99999'});
		$('.film-header-nav-box').css({'margin':'35px auto','z-index':'99999'});
	}else{ 
		$('.film-header-blind').css({'position':'absolute','top':'200px','left':'0','z-index':'99998'});
		$('.film-header-fixed').css({'position':'relative','z-index':'99999'});
		$('.film-header-nav-box').css({'margin':'235px auto','z-index':'99999'});
	} 
})
 $(document).on('click','.fiml-work-list-li img',function(){
    $('.film-loading-cover').fadeIn(200);
    $('.film-loading-body').fadeIn(200);
    $('.film-loading-center_box').stop().animate({'left':'45%'},100,function(){
	$('.film-loading-center_box').stop().animate({'left':'55%'},100,function(){
		$('.film-loading-center_box').stop().animate({'left':'48%'},100,function(){
			$('.film-loading-center_box').stop().animate({'left':'50%'},100)
			})
		})
	})
	var newH=$(this).clone();//克隆标签
	var h = newH.context.clientHeight;
	var w = newH.context.clientWidth;
	var w_height=$(window).height();
	var w_width=$(window).width();
	$('.film-loading-center_box').css({'height':h+'px','margin-top':'-'+h/2+'px','width':w+'px','margin-left':'-'+w/2+'px'});
	if (h> 228) {
		$('.film-loading-center_box').css({'height':'500px','margin-top':'-250px','width':'300px','margin-left':'-150px'});
		newH.css({'height':'500px','box-shadow':'0 0 30px #fff'});
	}else{
		$('.film-loading-center_box').css({'height':h+'px','margin-top':'-'+h/2+'px','width':w+'px','margin-left':'-'+w/2+'px'});
		newH.css({'box-shadow':'0 0 30px #fff'});
	}
	$('.film-loading-center_box').append(newH);

	$('.film-globleclose').click(function(event) {
		$('.film-loading-body').hide();
		$('.film-loading-cover').hide();
		newH.remove();
	});
})


     
































