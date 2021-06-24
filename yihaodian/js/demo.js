// 最上部——登录、注册框 登录注册——二级菜单
$(function(){
	$('#top .top_box .login').mouseenter(function(){
		$('#top .top_box .login .top_hide ').show();
	})
	$('#top .top_box .login').mouseleave(function(){
		$('#top .top_box .login .top_hide').hide();
	})
});
$(function(){
	$('#top .transport').mouseenter(function(){
		$('#top .transport .area_hide').show();
	})
	$('#top .transport').mouseleave(function(){
		$('#top .transport .area_hide').hide();
	})
});
$(function(){
	$('#top .top_box .myself').mouseenter(function(){
		$('#top .top_box .myself .myself_list').show();
	})
	$('#top .top_box .myself').mouseleave(function(){
		$('#top .top_box .myself .myself_list').hide();
	})
});
$(function(){
	$('#top .top_box .myself1').mouseenter(function(){
		$('#top .top_box .myself1 .myself_list1').show();
	})
	$('#top .top_box .myself1').mouseleave(function(){
		$('#top .top_box .myself1 .myself_list1').hide();
	})
});

$(function(){
	$('#top .top_box .phone').mouseenter(function(){
		$('#top .top_box .phone .phone_list').show();
		$('#top .top_box .phone').css(' border: 1px solid #FAFAFA;');
	})
	$('#top .top_box .phone').mouseleave(function(){
		$('#top .top_box .phone .phone_list').hide();
		$('#top .top_box .phone').css(' border: 1px solid white;');
	})
});

$(function(){
	$('#top .top_box .help').mouseenter(function(){
		$('#top .top_box .help .help_list').show();
	})
	$('#top .top_box .help').mouseleave(function(){
		$('#top .top_box .help .help_list').hide();
	})
});

$(function(){
	$('#top .top_box .web').mouseenter(function(){
		$('#top .top_box .web .web_list').show();
	})
	$('#top .top_box .web').mouseleave(function(){
		$('#top .top_box .web .web_list').hide();
	})	
})
$(function(){
	$('#top .top_box .weixin').mouseenter(function(){
		$('#top .top_box .weixin .weixin_box').show();
	})
	$('#top .top_box .weixin').mouseleave(function(){
		$('#top .top_box .weixin .weixin_box').hide();
	})	
})
$(function(){
	$('#top .top_box .weixin .weixin_box').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'10px'},300)
	})

	$('#top .top_box .weixin .weixin_box').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})
})
$(function(){
	$('#top .top_box .transport .area_car').mouseenter(function(){
		$('#top .top_box .transport .area_car').stop().animate({'left':'500px'},1500,function(){
			$('#top .top_box .transport .area_car').stop().animate({'left':'1050'},3000,function(){
				$('#top .top_box .transport .area_car').stop().animate({'left':'500'},3000,function(){
					$('#top .top_box .transport .area_car').stop().animate({'left':'93px'},2000)
				})
			})
		})
	})
})
$(function(){
	$('#top .top_box .phone .phone_list .bg1').mouseenter(function(){
		$('#top .top_box .phone .phone_list .bg1_hide').show();
	})
	$('#top .top_box .phone .phone_list .bg1_hide').mouseleave(function(){
		$('#top .top_box .phone .phone_list .bg1').show();
		$('#top .top_box .phone .phone_list .bg1_hide').hide();
	})
});
$(function(){
	$('#top .top_box .phone .phone_list .bg2').mouseenter(function(){
		$('#top .top_box .phone .phone_list .bg2_hide').show();
	})
	$('#top .top_box .phone .phone_list .bg2_hide').mouseleave(function(){
		$('#top .top_box .phone .phone_list .bg2').show();
		$('#top .top_box .phone .phone_list .bg2_hide').hide();
	})
});
$(function(){
	$('#top .top_box .phone .phone_list .bg3').mouseenter(function(){
		$('#top .top_box .phone .phone_list .bg3_hide').show();
	})
	$('#top .top_box .phone .phone_list .bg3_hide').mouseleave(function(){
		$('#top .top_box .phone .phone_list .bg3').show();
		$('#top .top_box .phone .phone_list .bg3_hide').hide();
	})
});

$(function(){
	$('#top .top_box .phone .phone_list img').mouseenter(function(){
		$('#top .top_box .phone .phone_list img').css({'width':'95px','height':'95px'});
	})
	$('#top .top_box .phone .phone_list img').mouseleave(function(){
		$('#top .top_box .phone .phone_list img').css({'width':'90px','height':'90px'});
	})
});
/////////////////logo搜索框/////////////////////////////////////////
$(function(){
	$('#logo_box .logo_href').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},300)
	})

	$('#logo_box .logo_href').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})
})
$(function(){
	$('#logo_box .mylogo_href img').mouseenter(function(){
		$('#logo_box .mylogo_href img').stop().animate({'left':'500px'},1500,function(){
			$('#logo_box .mylogo_href img').stop().animate({'left':'930'},3000,function(){
				$('#logo_box .mylogo_href img').stop().animate({'left':'500'},3000,function(){
					$('#logo_box .mylogo_href img').stop().animate({'left':'0px'},2000)
				})
			})
		})
	})
})

$(function(){
	$('#logo_box .fuli img').mouseenter(function(){
		$('#logo_box .fuli img').stop().animate({'top':'-24px'},500,function(){
			$('#logo_box .fuli img').stop().animate({'top':'35'},800,function(){
				$('#logo_box .fuli img').stop().animate({'top':'-10'},500,function(){
					$('#logo_box .fuli img').stop().animate({'top':'0px'},300)
				})
			})
		})
	})
})

$(function(){
	$('#logo_box .dan img').mouseenter(function(){
		$('#logo_box .dan img').stop().animate({'top':'-24px'},400,function(){
			$('#logo_box .dan img').stop().animate({'top':'35'},700,function(){
				$('#logo_box .dan img').stop().animate({'top':'-10'},400,function(){
					$('#logo_box .dan img').stop().animate({'top':'0px'},200)
				})
			})
		})
	})
})

$(function(){
	$('#logo_box .goodcar img').mouseenter(function(){
		$('#logo_box .goodcar img').stop().animate({'top':'-20px'},300,function(){
			$('#logo_box .goodcar img').stop().animate({'top':'35'},600,function(){
				$('#logo_box .goodcar img').stop().animate({'top':'-10'},300,function(){
					$('#logo_box .goodcar img').stop().animate({'top':'0px'},100)
				})
			})
		})
	})
})

$(function(){
	$('#form .text').click(function(){
		$('form .hide_box').show();
	})
	$('#form').mouseleave(function(){
		$('form .hide_box').hide();
	})
});
// 导航条
window.onload=function()
{
	var oDiv=document.getElementById('nav');
	var aStrong=oDiv.getElementsByTagName('strong');
	var aA=oDiv.getElementsByTagName('a');
	var iTarget=oDiv.getElementsByTagName('li')[0].offsetHeight;
 
	for(var i=0; i<aStrong.length; i++)
	{
		aA[i].style.width=aStrong[i].style.width=aStrong[i].getElementsByTagName('span')[0].offsetWidth+'px';
		aStrong[i].style.position='absolute';
		aStrong[i].style.top=aStrong[i].style.left=0;
		
		aStrong[i].onmouseover=function()
		{
			startMove(this, -iTarget);
		};
		aStrong[i].onmouseout=function()
		{
			startMove(this, 0);
		};
	}
};
 
function startMove(obj,target)
{
	clearInterval(obj.iTime);
	obj.iTime=setInterval(function(){
		if(obj.offsetTop==target)
		{
			clearInterval(obj.iTime);
		}
		else
		{
			var iSpeed=(target-obj.offsetTop)/4;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			obj.style.top=obj.offsetTop+iSpeed+'px';
		}
	}, 30);

}

$(function(){
	$('#second .daohang_box .ipone').mouseenter(function(){
		$('#second .daohang_box .ipone').stop().animate({'left':'925px'},1000,function(){
			$('#second .daohang_box .ipone').stop().animate({'left':'875'},1000,function(){
				$('#second .daohang_box .ipone').stop().animate({'left':'925'},1000,function(){
					$('#second .daohang_box .ipone').stop().animate({'left':'1072px'},1000)
				})
			})
		})
	})
})
/////////////////二级菜单///////////////////////////////////
$(function(){
	$('#menu .left').mouseover(function(){
		$(this).find('.hide_box').show();//让hide——box显示
		//给左侧a标签加curclass
		$(this).find('a').addClass('cur');
		$(this).find('a .img2').show();
	});
	$('#menu .left').mouseout(function(){
		$(this).find('.hide_box').hide();//让hide_box隐藏
		//去掉a标签身上的class
		$(this).find('a').removeClass('cur');
		$(this).find('a .img2').hide();
	})

})
///////////////////////轮播图/////////////////////////////////////////
$(function(){
	var c = 0;
	var autoRun = function(){
		c++;//变量自增
		c = (c==8)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('#jd .img_box_top').eq(c).fadeIn(200).siblings('.img_box_top').hide();
		$('.img_top_bottom1').eq(c).fadeIn(200).siblings(' .img_top_bottom1').hide();
		$('.img_top_bottom2').eq(c).fadeIn(200).siblings(' .img_top_bottom2').hide();
		$('.img_top_bottom3').eq(c).fadeIn(200).siblings(' .img_top_bottom3').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('#jd ul li').eq(c).addClass('cur').siblings('li').removeClass('cur');
	}
	var timer = setInterval(autoRun,3000);//设立定时器

	$('#jd .left_left').click(function(){
		c--;
		c = (c==-1)?8:c;
		// 让c号图片显示，兄弟图片隐藏
		$('#jd .img_box_top').eq(c).fadeIn(200).siblings('.img_box_top').hide();
		$('.img_top_bottom1').eq(c).fadeIn(200).siblings(' .img_top_bottom1').hide();
		$('.img_top_bottom2').eq(c).fadeIn(200).siblings(' .img_top_bottom2').hide();
		$('.img_top_bottom3').eq(c).fadeIn(200).siblings(' .img_top_bottom3').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('#jd ul li').eq(c).addClass('cur').siblings('li').removeClass('cur');
	})

	$('#jd .right_right').click(function(){
		c++;
		c = (c==8)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('#jd .img_box_top').eq(c).fadeIn(200).siblings('.img_box_top').hide();
		$('.img_top_bottom1').eq(c).fadeIn(200).siblings(' .img_top_bottom1').hide();
		$('.img_top_bottom2').eq(c).fadeIn(200).siblings(' .img_top_bottom2').hide();
		$('.img_top_bottom3').eq(c).fadeIn(200).siblings(' .img_top_bottom3').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('#jd ul li').eq(c).addClass('cur').siblings('li').removeClass('cur');
	})

	// 给li加鼠标移入事件
	$('#jd ul li').mouseover(function() {
		// 清理定时器

		clearInterval(timer);
		// 获得当前鼠标移入的li的序号
		c = $(this).index();
		// 让c号图片显示，兄弟图片隐藏
		$('#jd .img_box_top').eq(c).fadeIn(200).siblings('.img_box_top').hide();
		$('.img_top_bottom1').eq(c).fadeIn(200).siblings('.img_top_bottom1').hide();
		$('.img_top_bottom2').eq(c).fadeIn(200).siblings('.img_top_bottom2').hide();
		$('.img_top_bottom3').eq(c).fadeIn(200).siblings('.img_top_bottom3').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('#jd ul li').eq(c).addClass('cur').siblings('li').removeClass('cur');
	});

	// 给li加鼠标移出效果
	$('#jd ul li').mouseout(function() {
		timer = setInterval(autoRun,3000);//设立定时器
	});
	$('#jd .left_left').mouseover(function() {
		clearInterval(timer);
	});
	$('#jd .left_left').mouseout(function() {
		timer = setInterval(autoRun,3000);//设立定时器
	});
	$('#jd .right_right').mouseover(function() {
		clearInterval(timer);
	});
	$('#jd .right_right').mouseout(function() {
		timer = setInterval(autoRun,3000);//设立定时器
	});
	$('#jd .img_box_top').mouseover(function() {
		clearInterval(timer);
	});
	$('#jd .img_box_top').mouseout(function() {
		timer = setInterval(autoRun,3000);//设立定时器
	});

})

$(function(){
	$('#jd').mouseover(function() {
	 	$('#jd .left_left').stop().animate({'left':'0px'},500);
		$('#jd .right_right').stop().animate({'left':'725px'},500);
	});
	$('#jd').mouseout(function() {
		$('#jd .left_left').stop().animate({'left':'-45px'},500);
		$('#jd .right_right').stop().animate({'left':'770px'},500);
	});
})




////////////1号店专享//////////////////////////////////////////////////

$(function(){
	$('#jd_right_box .blong .blong_logo').mouseenter(function(){
		$('#jd_right_box .blong .blong_logo').stop().animate({'left':'170px'},1000,function(){
			$('#jd_right_box .blong .blong_logo').stop().animate({'left':'182'},1000,function(){
				$('#jd_right_box .blong .blong_logo').stop().animate({'left':'0'},1000,function(){
					$('#jd_right_box .blong .blong_logo').stop().animate({'left':'10px'},1000)
				})
			})
		})
	})
})
$(function(){
	$('#jd_right_box .blong a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},300)
	})

	$('#jd_right_box .blong a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

///////////////选项卡/////////////////////////////////////////////////
$(function(){
		$('#jd_right_box .tab1 .tab_btn').mouseover(function(){
			var c = $(this).index();//获得当前li的序号
			$(this).css({'background':'white','border':'1px solid white','color':'#E60012'}).siblings('.tab_btn').css({'background':'#F7F7F7','border':'1px solid #EEEEEE','color':'#333'})
			$('#jd_right_box .tab1 .con').eq(c).show().siblings('.con').hide();//让c号con显示，他的兄弟节点隐藏
			
		});
	})

$(function(){
		$('#jd_right_box .tab11 .tab_btn1').mouseover(function(){
			var c = $(this).index();//获得当前li的序号
			$(this).css({'background':'white','border':'1px solid white','color':'#E60012'}).siblings('.tab_btn1').css({'background':'#F7F7F7','border':'1px solid #EEEEEE','color':'#333'})
			$('#jd_right_box .tab11 .con1').eq(c).show().siblings('.con1').hide();//让c号con显示，他的兄弟节点隐藏
			
		});
	})


$(function(){
	$('#jd_right_box .tab1 .con .tab_img1').mouseenter(function(){
		$(this).find('.mg1').stop().animate({'left':'-5px'},300)
	})

	$('#jd_right_box .tab1 .con .tab_img1').mouseleave(function(){
		$(this).find('.mg1').stop().animate({'left':'0px'},300)
	})
})

$(function(){
		$('#jd_right_box .low_tab .tab_key').mouseover(function(){
			var c = $(this).index();//获得当前li的序号
			$(this).css({'background':'white','border':'1px solid white','color':'#E60012'}).siblings('.tab_key').css({'background':'#F7F7F7','border':'1px solid #EEEEEE','color':'#333'})
			$('#jd_right_box .low_tab .com').eq(c).show().siblings('.com').hide();//让c号con显示，他的兄弟节点隐藏
			
		});
	})

$(function(){
	$('#jd_right_box .low_tab .com .key_img').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-5px'},300)
	})

	$('#jd_right_box .low_tab .com .key_img').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

$(function(){
		$('#swp .swp_btn').mouseover(function(){
			var c = $(this).index();//获得当前li的序号
			$(this).css({'background':'white','border':'1px solid #333333','border-bottom':'0','color':'#E60012'}).siblings('.swp_btn').css({'background':'#F7F7F7','border-bottom':'1px solid #333333','color':'#333','border-left':'0','border-right':'0','border-top':'0'})
		$('#swp .cn').eq(c).show().siblings('.cn').hide();//让c号con显示，他的兄弟节点隐藏
			
	});
})

$(function(){
	$('#swp .cn .img_box .img_href').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-5px'},300)
	})

	$('#swp .cn .img_box .img_href').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})
})


////////////////////名品特卖 ///////////////////////////////////
$(function(){
	$('#horbox .horbox .ban_box1').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-5px'},300)
	})

	$('#horbox .horbox .ban_box1').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

$(function(){
	$('#horbox .horbox .fash_sales .fash_sales_title').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-5px'},300)
	})

	$('#horbox .horbox .fash_sales .fash_sales_title').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})
})

$(function(){
	$('#horbox .horbox .fash_sales .cloth_box .cloth a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'11px'},300)
	})

	$('#horbox .horbox .fash_sales .cloth_box .cloth a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'15px'},300)
	})
})
$(function(){
	$('#horbox .horbox .fash_sales .f1_left_bottom').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})

	$('#horbox .horbox .fash_sales .f1_left_bottom').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'-7px'},300)
	})
})

$(function(){
	$('#horbox .horbox .mid_left .img_href').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-5px'},300)
	})

	$('#horbox .horbox .mid_left .img_href').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'-10px'},300)
	})
})

$(function(){
	$('#horbox .horbox .mid_left .img_href img').mouseenter(function(){
		$('#horbox .horbox .mid_left .img_href .hd_box1').show();
	})

	$('#horbox .horbox .mid_left .img_href img').mouseleave(function(){
		$('#horbox .horbox .mid_left .img_href .hd_box1').hide();
	})
})

$(function(){
	$('#horbox .horbox .mid_four .pic0').mouseenter(function(){
		$('#horbox .horbox .mid_four .pic0 .hd_box1').show();
	})

	$('#horbox .horbox .mid_four .pic0').mouseleave(function(){
		$('#horbox .horbox .mid_four .pic0 .hd_box1').hide();
	})
})


$(function(){
	$('#horbox .horbox .mid_four .pic').mouseenter(function(){
		$('#horbox .horbox .mid_four .pic .hd_box1').show();
	})

	$('#horbox .horbox .mid_four .pic').mouseleave(function(){
		$('#horbox .horbox .mid_four .pic .hd_box1').hide();
	})
})


$(function(){
	$('#horbox .horbox .mid_four a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-4px'},300)
	})

	$('#horbox .horbox .mid_four a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

$(function(){
	$('#horbox .horbox .right_box a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-4px'},300)
	})

	$('#horbox .horbox .right_box a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})
////////////////////二楼 吃货天堂 ///////////////////////////////////
$(function(){
	$('#horbox .horbox .fash_sales .f2_left_bottom').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-5px'},300)
	})

	$('#horbox .horbox .fash_sales .f2_left_bottom').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

$(function(){
	$('#horbox .horbox .fash_sales .picture_box .f2_bigpic').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-8px'},300)
	})

	$('#horbox .horbox .fash_sales .picture_box .f2_bigpic').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

$(function(){
	$('#horbox .horbox .fash_sales .picture_box .a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-8px'},300)
	})

	$('#horbox .horbox .fash_sales .picture_box .a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})
})


$(function(){
	var b = 0;
	var autoRun1 = function(){
		b++;//变量自增
		b = (b==10)?0:b;	
		$('#horbox .horbox .fash_sales .tab .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab .con').eq(b).show().siblings('.con').hide();//让c号con显示，他的兄弟节点隐藏
		
	}
	// 给li加鼠标移入事件
	$('#horbox .horbox .fash_sales .tab .ul li').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
		b = $(this).index();//获得当前li的序号
		$('#horbox .horbox .fash_sales .tab .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab .con').eq(b).show().siblings('.con').hide();//让c号con显示，他的兄弟节点隐藏

	});
	var timer = setInterval(autoRun1,3000);//设立定时器
	// 给li加鼠标移出效果
	$('#horbox .horbox .fash_sales .tab .ul li').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
		
	});
	$('#horbox .horbox .fash_sales .tab .con').mouseover(function() {
		clearInterval(timer);	
	});
	$('#horbox .horbox .fash_sales .tab .con').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
	});

})

$(function(){
	$('#horbox .horbox .fash_sales .tab .con .se_box .img_box').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},300)
	})

	$('#horbox .horbox .fash_sales .tab .con .se_box .img_box').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})
})

///////////三楼  右侧菜单////////////////////////////////////////

$(function(){
	var b = 0;
	var autoRun1 = function(){
		b++;//变量自增
		b = (b==10)?0:b;	
		$('#horbox .horbox .fash_sales .tab3 .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab3 .con3').eq(b).show().siblings('.con3').hide();//让c号con显示，他的兄弟节点隐藏
		
	}
	// 给li加鼠标移入事件
	$('#horbox .horbox .fash_sales .tab3 .ul li').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
		b = $(this).index();//获得当前li的序号
		$('#horbox .horbox .fash_sales .tab3 .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab3 .con3').eq(b).show().siblings('.con3').hide();//让c号con显示，他的兄弟节点隐藏

	});
	var timer = setInterval(autoRun1,3000);//设立定时器
	// 给li加鼠标移出效果
	$('#horbox .horbox .fash_sales .tab3 .ul li').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
		
	});
	$('#horbox .horbox .fash_sales .tab3 .con3').mouseover(function() {
		clearInterval(timer);	
	});
	$('#horbox .horbox .fash_sales .tab3 .con3').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
	});

})

$(function(){
	$('#horbox .horbox .fash_sales .tab3 .con3 .se_box .img_box').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},300)
	})

	$('#horbox .horbox .fash_sales .tab3 .con3 .se_box .img_box').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})
})


///////////四楼  右侧菜单////////////////////////////////////////

$(function(){
	var b = 0;
	var autoRun1 = function(){
		b++;//变量自增
		b = (b==10)?0:b;	
		$('#horbox .horbox .fash_sales .tab4 .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab4 .con4').eq(b).show().siblings('.con4').hide();//让c号con显示，他的兄弟节点隐藏
		
	}
	// 给li加鼠标移入事件
	$('#horbox .horbox .fash_sales .tab4 .ul li').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
		b = $(this).index();//获得当前li的序号
		$('#horbox .horbox .fash_sales .tab4 .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab4 .con4').eq(b).show().siblings('.con4').hide();//让c号con显示，他的兄弟节点隐藏

	});
	var timer = setInterval(autoRun1,3000);//设立定时器
	// 给li加鼠标移出效果
	$('#horbox .horbox .fash_sales .tab4 .ul li').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
		
	});
	$('#horbox .horbox .fash_sales .tab4 .con4').mouseover(function() {
		clearInterval(timer);	
	});
	$('#horbox .horbox .fash_sales .tab4 .con4').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
	});

})

$(function(){
	$('#horbox .horbox .fash_sales .tab4 .con4 .se_box .img_box').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},300)
	})

	$('#horbox .horbox .fash_sales .tab4 .con4 .se_box .img_box').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})
})

$(function(){
	$('#horbox .horbox .fash_sales .pinbai a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})

	$('#horbox .horbox .fash_sales .pinbai a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'5px'},300)
	})
})

////////////////五楼  右侧菜单/////////////////////////////////////

$(function(){
	var b = 0;
	var autoRun1 = function(){
		b++;//变量自增
		b = (b==8)?0:b;	
		$('#horbox .horbox .fash_sales .tab5 .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab5 .con5').eq(b).show().siblings('.con5').hide();//让c号con显示，他的兄弟节点隐藏
		
	}
	// 给li加鼠标移入事件
	$('#horbox .horbox .fash_sales .tab5 .ul li').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
		b = $(this).index();//获得当前li的序号
		$('#horbox .horbox .fash_sales .tab5 .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab5 .con5').eq(b).show().siblings('.con5').hide();//让c号con显示，他的兄弟节点隐藏

	});
	var timer = setInterval(autoRun1,3000);//设立定时器
	// 给li加鼠标移出效果
	$('#horbox .horbox .fash_sales .tab5 .ul li').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
		
	});
	$('#horbox .horbox .fash_sales .tab5 .con5').mouseover(function() {
		clearInterval(timer);	
	});
	$('#horbox .horbox .fash_sales .tab5 .con5').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
	});

})

$(function(){
	$('#horbox .horbox .fash_sales .tab5 .con5 .se_box .img_box').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},300)
	})

	$('#horbox .horbox .fash_sales .tab5 .con5 .se_box .img_box').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})
})

$(function(){
	$('#horbox .horbox .fash_sales .pinbai a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})

	$('#horbox .horbox .fash_sales .pinbai a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'5px'},300)
	})
})

////////////////六楼  右侧菜单/////////////////////////////////////

$(function(){
	var b = 0;
	var autoRun1 = function(){
		b++;//变量自增
		b = (b==8)?0:b;	
		$('#horbox .horbox .fash_sales .tab6 .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab6 .con6').eq(b).show().siblings('.con6').hide();//让c号con显示，他的兄弟节点隐藏
		
	}
	// 给li加鼠标移入事件
	$('#horbox .horbox .fash_sales .tab6 .ul li').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
		b = $(this).index();//获得当前li的序号
		$('#horbox .horbox .fash_sales .tab6 .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab6 .con6').eq(b).show().siblings('.con6').hide();//让c号con显示，他的兄弟节点隐藏

	});
	var timer = setInterval(autoRun1,3000);//设立定时器
	// 给li加鼠标移出效果
	$('#horbox .horbox .fash_sales .tab6 .ul li').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
		
	});
	$('#horbox .horbox .fash_sales .tab6 .con6').mouseover(function() {
		clearInterval(timer);	
	});
	$('#horbox .horbox .fash_sales .tab6 .con6').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
	});

})

$(function(){
	$('#horbox .horbox .fash_sales .tab6 .con6 .se_box .img_box').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},300)
	})

	$('#horbox .horbox .fash_sales .tab6 .con6 .se_box .img_box').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})
})
////////////////七楼  右侧菜单////////////////////////////////////

$(function(){
	var b = 0;
	var autoRun1 = function(){
		b++;//变量自增
		b = (b==8)?0:b;	
		$('#horbox .horbox .fash_sales .tab7 .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab7 .con7').eq(b).show().siblings('.con7').hide();//让c号con显示，他的兄弟节点隐藏
		
	}
	// 给li加鼠标移入事件
	$('#horbox .horbox .fash_sales .tab7 .ul li').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
		b = $(this).index();//获得当前li的序号
		$('#horbox .horbox .fash_sales .tab7 .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab7 .con7').eq(b).show().siblings('.con7').hide();//让c号con显示，他的兄弟节点隐藏

	});
	var timer = setInterval(autoRun1,3000);//设立定时器
	// 给li加鼠标移出效果
	$('#horbox .horbox .fash_sales .tab7 .ul li').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
		
	});
	$('#horbox .horbox .fash_sales .tab7 .con7').mouseover(function() {
		clearInterval(timer);	
	});
	$('#horbox .horbox .fash_sales .tab7 .con7').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
	});

})

$(function(){
	$('#horbox .horbox .fash_sales .tab7 .con7 .se_box .img_box').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},300)
	})

	$('#horbox .horbox .fash_sales .tab7 .con7 .se_box .img_box').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})
})

////////////////八楼  右侧菜单////////////////////////////////////

$(function(){
	var b = 0;
	var autoRun1 = function(){
		b++;//变量自增
		b = (b==10)?0:b;	
		$('#horbox .horbox .fash_sales .tab8 .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab8 .con8').eq(b).show().siblings('.con8').hide();//让c号con显示，他的兄弟节点隐藏
		
	}
	// 给li加鼠标移入事件
	$('#horbox .horbox .fash_sales .tab8 .ul li').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
		b = $(this).index();//获得当前li的序号
		$('#horbox .horbox .fash_sales .tab8 .ul li').eq(b).css({'background':'white','border-right':'0','color':'#E60012'}).siblings('li').css({'background':'#F7F7F7','color':'#333'})
		$('#horbox .horbox .fash_sales .tab8 .con8').eq(b).show().siblings('.con8').hide();//让c号con显示，他的兄弟节点隐藏

	});
	var timer = setInterval(autoRun1,3000);//设立定时器
	// 给li加鼠标移出效果
	$('#horbox .horbox .fash_sales .tab8 .ul li').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
		
	});
	$('#horbox .horbox .fash_sales .tab8 .con8').mouseover(function() {
		clearInterval(timer);	
	});
	$('#horbox .horbox .fash_sales .tab8 .con8').mouseout(function() {
		timer = setInterval(autoRun1,3000);//设立定时器
	});

})

$(function(){
	$('#horbox .horbox .fash_sales .tab8 .con8 .se_box .img_box').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},300)
	})

	$('#horbox .horbox .fash_sales .tab8 .con8 .se_box .img_box').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},300)
	})
})
////////////////底部图片效果//////////////////////////////////////////
$(function(){
	$('#bottom2 .bg1').mouseenter(function(){
		$('#bottom2 .bg11').show();
		$('#bottom2 .bg1').hide();
	})

	$('#bottom2 .bg11').mouseleave(function(){
		$('#bottom2 .bg1').show();
		$('#bottom2 .bg11').hide();
	})
})

$(function(){
	$('#bottom2 .bg2').mouseenter(function(){
		$('#bottom2 .bg22').show();
		$('#bottom2 .bg2').hide();
	})

	$('#bottom2 .bg22').mouseleave(function(){
		$('#bottom2 .bg2').show();
		$('#bottom2 .bg22').hide();
	})
})

$(function(){
	$('#bottom2 .bg3').mouseenter(function(){
		$('#bottom2 .bg33').show();
		$('#bottom2 .bg3').hide();
	})

	$('#bottom2 ').mouseleave(function(){
		$('#bottom2 .bg3').show();
		$('#bottom2 .bg33').hide();
	})
})

$(function(){
	$('#bottom3 .a1').mouseenter(function(){
		$('#bottom3 .a1 .span2').show();
		$('#bottom3 .a1 .span1').hide();
	})

	$('#bottom3 .a1').mouseleave(function(){
		$('#bottom3 .a1 .span1').show();
		$('#bottom3 .a1 .span2').hide();
	})
})

$(function(){
	$('#bottom3 .a2').mouseenter(function(){
		$('#bottom3 .a2 .span2').show();
		$('#bottom3 .a2 .span1').hide();
	})

	$('#bottom3 .a2').mouseleave(function(){
		$('#bottom3 .a2 .span1').show();
		$('#bottom3 .a2 .span2').hide();
	})
})

$(function(){
	$('#bottom3 .a3').mouseenter(function(){
		$('#bottom3 .a3 .span2').show();
		$('#bottom3 .a3 .span1').hide();
	})

	$('#bottom3 .a3').mouseleave(function(){
		$('#bottom3 .a3 .span1').show();
		$('#bottom3 .a3 .span2').hide();
	})
})

$(function(){
	$('#bottom3 .a4').mouseenter(function(){
		$('#bottom3 .a4 .span2').show();
		$('#bottom3 .a4 .span1').hide();
	})

	$('#bottom3 .a4').mouseleave(function(){
		$('#bottom3 .a4 .span1').show();
		$('#bottom3 .a4 .span2').hide();
	})
})

$(function(){
	$('#foot').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},500)
	})

	$('#foot').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},500)
	})
})

$(function(){
	$('#menu .left a .hide_box2 .boc1').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},500)
	})

	$('#menu .left a .hide_box2 .boc1').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},500)
	})
})

















