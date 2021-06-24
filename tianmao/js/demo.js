//给“我的淘宝”加上JS
$(function(){
	$('#login_s .mytaobao').mouseenter(function(){
		$('#login_s .mytaobao_h').show();
		$('#login_s .mytaobao').hide();
	})
	$('#login_s .mytaobao_h').mouseleave(function(){
		$('#login_s .mytaobao_h').hide();
		$('#login_s .mytaobao').show();
	})
});
//给“收藏夹”加JS
$(function(){
	$('#login_s .bookmark').mouseenter(function(){
		$('#login_s .bookmark_h').show();
		$('#login_s .bookmark').hide();
	})
	$('#login_s .bookmark_h').mouseleave(function(){
		$('#login_s .bookmark_h').hide();
		$('#login_s .bookmark').show();
	})
});
//给“手机版”加一个js效果
$(function(){
	$('#login_s .phoneb').mouseenter(function(){
		$('#login_s .phoneb_h').show();
		$('#login_s .phoneb').hide();
	})
	$('#login_s .phoneb_h').mouseleave(function(){
		$('#login_s .phoneb_h').hide();
		$('#login_s .phoneb').show();
	})
});
//给“商家支持”加一个js效果
$(function(){
	$('#login_s .bsupport').mouseenter(function(){
		$('#login_s .bsupport_h').show();
		$('#login_s .bsupport').hide();
	})
	$('#login_s .bsupport_h').mouseleave(function(){
		$('#login_s .bsupport_h').hide();
		$('#login_s .bsupport').show();
	})
});
//给“网站导航”加JS效果
$(function(){
	$('#login_s .site').mouseenter(function(){
		$('#login_s .site_h').show();
		$('#login_s .site').hide();
	})
	$('#login_s .site_h').mouseleave(function(){
		$('#login_s .site_h').hide();
		$('#login_s .site').show();
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
////////////////////////////////////////////////////////////////
$(function(){
	$('#menu .left').mouseover(function(){
		$(this).find('.hide_box').show();//让hide——box显示
		$(this).find('.hide_box1').show();
		$(this).find('.hide_box2').show();
		//给左侧a标签加curclass
		$(this).find('a').addClass('cur');
		$(this).find('a .img2').show();
		$(this).find('a .img4').show();
		$(this).find('a .img6').show();
		$(this).find('a .img8').show();
		$(this).find('a .img10').show();
		$(this).find('a .img12').show();
		$(this).find('a .img14').show();
		$(this).find('a .img16').show();
		$(this).find('a .img18').show();
		$(this).find('a .img20').show();
		$(this).find('a .img22').show();
		$(this).find('a .img24').show();
		$(this).find('a .img26').show();
		$(this).find('a .img28').show();
		$(this).find('a .img30').show();
		$(this).find('a .img32').show();
	});
	$('#menu .left').mouseout(function(){
		$(this).find('.hide_box').hide();//让hide_box隐藏
		$(this).find('.hide_box1').hide();
		$(this).find('.hide_box2').hide();
		//去掉a标签身上的class
		$(this).find('a').removeClass('cur');
		$(this).find('a .img2').hide();
		$(this).find('a .img4').hide();
		$(this).find('a .img6').hide();
		$(this).find('a .img8').hide();
		$(this).find('a .img10').hide();
		$(this).find('a .img12').hide();
		$(this).find('a .img14').hide();
		$(this).find('a .img16').hide();
		$(this).find('a .img18').hide();
		$(this).find('a .img20').hide();
		$(this).find('a .img22').hide();
		$(this).find('a .img24').hide();
		$(this).find('a .img26').hide();
		$(this).find('a .img28').hide();
		$(this).find('a .img30').hide();
		$(this).find('a .img32').hide();
	})

})

// 二级菜单小图动态效果
$(function(){
	$('#menu .left .hide_box2 .hide_box2_list1 ul li').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'10px'},200)
		alert(1);
	})

	$('#menu .left .hide_box2 .hide_box2_list1 ul li').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

/////////////////轮播图///////////////////////////////////////////////

$(function(){
	var c = 0;
	var autoRun = function(){
		c++;//变量自增
		c = (c==8)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('#jd img').eq(c).fadeIn(200).siblings('img').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('#jd ul li').eq(c).addClass('cur').siblings('li').removeClass('cur');
	}
	var timer = setInterval(autoRun,5000);//设立定时器
	// 给li加鼠标移入事件
	$('#jd ul li').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
		// 获得当前鼠标移入的li的序号
		c = $(this).index();
		// 让c号图片显示，兄弟图片隐藏
		$('#jd img').eq(c).fadeIn(200).siblings('img').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('#jd ul li').eq(c).addClass('cur').siblings('li').removeClass('cur');
	});

	// 给li加鼠标移出效果
	$('#jd ul li').mouseout(function() {
		timer = setInterval(autoRun,5000);//设立定时器
	});
})

/////////////////////二级菜单图片动态////////////////////////////////////////////////////

$(function(){
	$('#menu .left .hide_box1 .addd ul li a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'10px'},200)
	})

	$('#menu .left .hide_box1 .addd ul li a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

$(function(){
	$('#menu .left .hide_box2 .addd ul li a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'10px'},200)
	})

	$('#menu .left .hide_box2 .addd ul li a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

$(function(){
	$('#menu .left .hide_box2 .adddd ul li a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'10px'},200)
	})

	$('#menu .left .hide_box2 .adddd ul li a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

$(function(){
	$('#menu_box_second_right  ul li a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'10px'},200)
	})

	$('#menu_box_second_right ul li a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

////////////////////////图片变大变小////////////////////////////////////////

$(function(){
	setInterval(function(){
		$('#menu .left .hide_box1 .bg img').slideDown(3000);
		$('#menu .left .hide_box2 .bg img').slideDown(3000);
	},3000)
})
///////////////////////////热门品牌的主体内容图片加JS////////////////////////////

$(function(){
	$('#hot_brand_main .hot_brand_main_left a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#hot_brand_main .hot_brand_main_left a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

$(function(){
	$('#hot_brand_main .hot_brand_main_right a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'10px'},200)
	})

	$('#hot_brand_main .hot_brand_main_right a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

$(function(){
	//鼠标移入到图片内的时候，让当前的图片变为不透明，它的兄弟图片变为透明
	$('#hot_brand_main .hot_brand_main_left a img').mouseover(function(){
		$(this).fadeTo(0,1).siblings('img').fadeTo(0,0.9);
	});
	//鼠标移出当前区域，让当前区域中的图片都透明度变为1
	$('#hot_brand_main').mouseout(function(){
		$('#hot_brand_main .hot_brand_main_left a img').fadeTo(0,0.9);
	})
})

$(function(){
	//鼠标移入到图片内的时候，让当前的图片变为不透明，它的兄弟图片变为透明
	$('#hot_brand_main .hot_brand_main_right a img').mouseover(function(){
		$(this).fadeTo(0,1).siblings('img').fadeTo(0,0.9);
	});
	//鼠标移出当前区域，让当前区域中的图片都透明度变为1
	$('#hot_brand_main').mouseout(function(){
		$('#hot_brand_main .hot_brand_main_right a img').fadeTo(0,0.9);
	})
})

//////////////////TEP切换效果//////////////////////////////////////////////

$(function(){
		$('#hot_brand .hot_brand_nav li').click(function(){
			var c = $(this).index();//获得当前li的序号
			// alert(c)
			$('#hot_brand_main .hot_brand_main_mid .con').eq(c).show().siblings('.con').hide();//让c号con显示，他的兄弟节点隐藏
			$('#hot_brand .hot_brand_nav li').eq(c).css({'color':'#000','font-weight': '700','text-decoration':'underline'}).siblings('li').css({'color':'#666','font-weight': '400','text-decoration':'none'});
			
		});
	})

////////////////////////品牌街logo效果////////////////////////////////////////////

$(function(){
	$('#hot_brand_main .hot_brand_main_mid .con a').mouseenter(function(){
		$(this).find('.img').stop().animate({'left':'20px'},200)
	})

	$('#hot_brand_main .hot_brand_main_mid .con a').mouseleave(function(){
		$(this).find('.img').stop().animate({'left':'0px'},200)
	})
})

$(function(){
	var c = $(this).index();
	$('#hot_brand_main .hot_brand_main_mid .con a').mouseenter(function(){
		$(this).find('.love').eq(c).show().siblings('.love').hide();
	})

	$('#hot_brand_main .hot_brand_main_mid .con a').mouseleave(function(){
		$(this).find('.love').eq(c).hide().siblings('.love').show();
	})
})

//////////////////f1_top图片动态效果/////////////////////////////////////////

$(function(){
	$('#f1_top a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'10px'},200)
	})

	$('#f1_top a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'30px'},200)
	})
})



//////////////////f1 logo图片动态效果/////////////////////////////////////////
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f1 .f1_logo').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f1 .f1_logo').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})
//////////////////f1 核心core图片动态效果/////////////////////////////////////////
$(function(){
	var a=0;
	var	autoRun = function() {
		a++;
		if(a==4){
			$('#core .core_box').css('left','0px');
			a=1
		}
		//计算top值
		var left1=a*-130
		//让ul的运动到top值
		$('#core .core_box').animate({'left':left1+'px'},200)
       ////////////////////////////////////////
		$('#f1_core .left').click(function(){
		a++;
		if(a==4){
			$('#core .core_box').css('left','0px');
			a=0
		}
		var left1=a*-130
		$('#core .core_box').css({'left':left1+'px'})
	})

	}
	var timer = setInterval(autoRun,2000);//设立定时器

	$('#f1_core').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
	
	});

	// 加鼠标移出效果
	$('#f1_core').mouseout(function() {
		timer = setInterval(autoRun,2000);//设立定时器
	});
})

$(function(){
		a=0
		$('#f1_core .right').click(function(){
		a--;
		if(a==-4){
			$('#core .core_box').css({'left':'130px'});
			a=0
		}
		var left1=a*130
		$('#core .core_box').css({'left':left1+'px'})
	})
})

// '''''''''''''''f1_left右侧小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#core div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#core div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

// ''''''''''''''f1_mid中部大图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f1 .f1_box2 a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f1 .f1_box2 a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid右部小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f1 .f1_box3 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#f1 .f1_box3 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
////////////////////////////////////////////////////////////////////////////////

//////////////////f2 logo图片动态效果/////////////////////////////////////////
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f2 .f1_logo').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f2 .f1_logo').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})
//////////////////f1 核心core图片动态效果/////////////////////////////////////////
$(function(){
	var a=0;
	var	autoRun = function() {
		a++;
		if(a==4){
			$('#core2 .core_box').css('left','0px');
			a=1
		}
		//计算top值
		var left1=a*-130
		//让ul的运动到top值
		$('#core2 .core_box').animate({'left':left1+'px'},200)
       ////////////////////////////////////////
		$('#f2_core .left').click(function(){
		a++;
		if(a==4){
			$('#core2 .core_box').css('left','0px');
			a=0
		}
		var left1=a*-130
		$('#core2 .core_box').css({'left':left1+'px'})
	})

	}
	var timer = setInterval(autoRun,2000);//设立定时器

	$('#f2_core').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
	
	});

	// 加鼠标移出效果
	$('#f2_core').mouseout(function() {
		timer = setInterval(autoRun,2000);//设立定时器
	});
})

$(function(){
		a=0
		$('#f2_core .right').click(function(){
		a--;
		if(a==-4){
			$('#core2 .core_box').css({'left':'130px'});
			a=0
		}
		var left1=a*130
		$('#core2 .core_box').css({'left':left1+'px'})
	})
})

// '''''''''''''''f1_left右侧小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#core2 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#core2 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

// ''''''''''''''f1_mid中部大图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f2 .f1_box2 a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f2 .f1_box2 a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid右部小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f2 .f1_box3 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#f2 .f1_box3 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//////////////////f1_top图片动态效果/////////////////////////////////////////

$(function(){
	$('#f4_top a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'10px'},200)
	})

	$('#f4_top a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'30px'},200)
	})
})


//////////////////f3 logo图片动态效果/////////////////////////////////////////
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f3 .f1_logo').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f3 .f1_logo').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})
//////////////////f1 核心core图片动态效果/////////////////////////////////////////
$(function(){
	var a=0;
	var	autoRun = function() {
		a++;
		if(a==4){
			$('#core3 .core_box').css('left','0px');
			a=1
		}
		//计算top值
		var left1=a*-130
		//让ul的运动到top值
		$('#core3 .core_box').animate({'left':left1+'px'},200)
       ////////////////////////////////////////
		$('#f3_core .left').click(function(){
		a++;
		if(a==4){
			$('#core3 .core_box').css('left','0px');
			a=0
		}
		var left1=a*-130
		$('#core3 .core_box').css({'left':left1+'px'})
	})

	}
	var timer = setInterval(autoRun,2000);//设立定时器

	$('#f3_core').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
	
	});

	// 加鼠标移出效果
	$('#f3_core').mouseout(function() {
		timer = setInterval(autoRun,2000);//设立定时器
	});
})

$(function(){
		a=0
		$('#f3_core .right').click(function(){
		a--;
		if(a==-4){
			$('#core3 .core_box').css({'left':'130px'});
			a=0
		}
		var left1=a*130
		$('#core3 .core_box').css({'left':left1+'px'})
	})
})

// '''''''''''''''f1_left右侧小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#core3 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#core3 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

// ''''''''''''''f1_mid中部大图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f3 .f1_box2 a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f3 .f1_box2 a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid右部小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f3 .f1_box3 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#f3 .f1_box3 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
////////////////////////////////////////////////////////////////////////////////

//////////////////f4 logo图片动态效果/////////////////////////////////////////
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f4 .f1_logo').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f4 .f1_logo').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})
//////////////////f1 核心core图片动态效果/////////////////////////////////////////
$(function(){
	var a=0;
	var	autoRun = function() {
		a++;
		if(a==4){
			$('#core4 .core_box').css('left','0px');
			a=1
		}
		//计算top值
		var left1=a*-130
		//让ul的运动到top值
		$('#core4 .core_box').animate({'left':left1+'px'},200)
       ////////////////////////////////////////
		$('#f4_core .left').click(function(){
		a++;
		if(a==4){
			$('#core4 .core_box').css('left','0px');
			a=0
		}
		var left1=a*-130
		$('#core4 .core_box').css({'left':left1+'px'})
	})

	}
	var timer = setInterval(autoRun,2000);//设立定时器

	$('#f4_core').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
	
	});

	// 加鼠标移出效果
	$('#f4_core').mouseout(function() {
		timer = setInterval(autoRun,2000);//设立定时器
	});
})

$(function(){
		a=0
		$('#f4_core .right').click(function(){
		a--;
		if(a==-4){
			$('#core4 .core_box').css({'left':'130px'});
			a=0
		}
		var left1=a*130
		$('#core4 .core_box').css({'left':left1+'px'})
	})
})

// '''''''''''''''f1_left右侧小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#core4 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#core4 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

// ''''''''''''''f1_mid中部大图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f4 .f1_box2 a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f4 .f1_box2 a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid右部小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f4 .f1_box3 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#f4 .f1_box3 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

//////////////////f5 logo图片动态效果/////////////////////////////////////////
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f5 .f1_logo').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f5 .f1_logo').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})
//////////////////f1 核心core图片动态效果/////////////////////////////////////////
$(function(){
	var a=0;
	var	autoRun = function() {
		a++;
		if(a==4){
			$('#core5 .core_box').css('left','0px');
			a=1
		}
		//计算top值
		var left1=a*-130
		//让ul的运动到top值
		$('#core5 .core_box').animate({'left':left1+'px'},200)
       ////////////////////////////////////////
		$('#f5_core .left').click(function(){
		a++;
		if(a==4){
			$('#core5 .core_box').css('left','0px');
			a=0
		}
		var left1=a*-130
		$('#core5 .core_box').css({'left':left1+'px'})
	})

	}
	var timer = setInterval(autoRun,2000);//设立定时器

	$('#f5_core').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
	
	});

	// 加鼠标移出效果
	$('#f5_core').mouseout(function() {
		timer = setInterval(autoRun,2000);//设立定时器
	});
})

$(function(){
		a=0
		$('#f5_core .right').click(function(){
		a--;
		if(a==-4){
			$('#core5 .core_box').css({'left':'130px'});
			a=0
		}
		var left1=a*130
		$('#core5 .core_box').css({'left':left1+'px'})
	})
})

// '''''''''''''''f1_left右侧小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#core5 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#core5 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

// ''''''''''''''f1_mid中部大图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f5 .f1_box2 a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f5 .f1_box2 a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid右部小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f5 .f1_box3 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#f5 .f1_box3 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

//////////////////f6 logo图片动态效果/////////////////////////////////////////
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f6 .f1_logo').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f6 .f1_logo').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid中部大图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f6 .f1_box2 a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f6 .f1_box2 a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid右部小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f6 .f1_box3 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#f6 .f1_box3 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})
// ‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’
$(function(){
	$('#core_botton6 a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#core_botton6 a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})
// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//////////////////f7_top图片动态效果/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
$(function(){
	$('#f7_top a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'10px'},200)
	})

	$('#f7_top a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'30px'},200)
	})
})
//////////////////f7 logo图片动态效果/////////////////////////////////////////
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f7 .f1_logo').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f7 .f1_logo').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid中部大图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f7 .f1_box2 a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f7 .f1_box2 a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid右部小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f7 .f1_box3 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#f7 .f1_box3 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})
// ‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’
$(function(){
	$('#core_botton7 a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#core_botton7 a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

//////////////////f8 logo图片动态效果/////////////////////////////////////////
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f8 .f1_logo').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f8 .f1_logo').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})
//////////////////f1 核心core图片动态效果/////////////////////////////////////////
$(function(){
	var a=0;
	var	autoRun = function() {
		a++;
		if(a==4){
			$('#core8 .core_box').css('left','0px');
			a=1
		}
		//计算top值
		var left1=a*-130
		//让ul的运动到top值
		$('#core8 .core_box').animate({'left':left1+'px'},200)
       ////////////////////////////////////////
		$('#f8_core .left').click(function(){
		a++;
		if(a==4){
			$('#core8 .core_box').css('left','0px');
			a=0
		}
		var left1=a*-130
		$('#core8 .core_box').css({'left':left1+'px'})
	})

	}
	var timer = setInterval(autoRun,2000);//设立定时器

	$('#f8_core').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
	
	});

	// 加鼠标移出效果
	$('#f8_core').mouseout(function() {
		timer = setInterval(autoRun,2000);//设立定时器
	});
})

$(function(){
		a=0
		$('#f8_core .right').click(function(){
		a--;
		if(a==-4){
			$('#core8 .core_box').css({'left':'130px'});
			a=0
		}
		var left1=a*130
		$('#core8 .core_box').css({'left':left1+'px'})
	})
})

// '''''''''''''''f1_left右侧小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#core8 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#core8 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

// ''''''''''''''f1_mid中部大图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f8 .f1_box2 a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f8 .f1_box2 a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid右部小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f8 .f1_box3 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#f8 .f1_box3 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

//////////////////f9 logo图片动态效果/////////////////////////////////////////
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f9 .f1_logo').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f9 .f1_logo').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// '''''''''''''''f1_left右侧小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#core9 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#core9 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

// ''''''''''''''f1_mid中部大图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f9 .f1_box2 a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f9 .f1_box2 a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid右部小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f9 .f1_box3 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#f9 .f1_box3 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//////////////////f10_top图片动态效果/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
$(function(){
	$('#f10_top a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'10px'},200)
	})

	$('#f10_top a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'30px'},200)
	})
})
//////////////////f10 logo图片动态效果/////////////////////////////////////////
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f10 .f1_logo').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f10 .f1_logo').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid中部大图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f10 .f1_box2 a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f10 .f1_box2 a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid右部小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f10 .f1_box3 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#f10 .f1_box3 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})
// ‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’
$(function(){
	$('#core_botton10 a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#core_botton10 a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})
//////////////////f11 logo图片动态效果/////////////////////////////////////////
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f11 .f1_logo').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f11 .f1_logo').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid中部大图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f11 .f1_box2 a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f11 .f1_box2 a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid右部小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f11 .f1_box3 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#f11 .f1_box3 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})
// ‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’
$(function(){
	$('#core_botton11 a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#core_botton11 a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})
//////////////////f12 logo图片动态效果/////////////////////////////////////////
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f12 .f1_logo').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f12 .f1_logo').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid中部大图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f12 .f1_box2 a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'-10px'},200)
	})

	$('#f12 .f1_box2 a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})
})

// ''''''''''''''f1_mid右部小图动态效果''''''''''''''''''''''''''''''''''''''''''''''''
$(function(){
	$('#f12 .f1_box3 div a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#f12 .f1_box3 div a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})
// ‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’
$(function(){
	$('#core_botton12 a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},200)
	})

	$('#core_botton12 a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},200)
	})
})
/////////////////f7_top图片动态效果/////////////////////////////////////////
$(function(){
	$('#f12_top a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'10px'},200)
	})

	$('#f12_top a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'30px'},200)
	})
})
/////////////////////////一共12楼层结束了，辛苦了/////////////////////////////
///////////////////////////////////////////////////////////////////////////////
$(function(){
	$('#after_sale1 a').mouseenter(function(){
		$(this).find('img').stop().animate({'top':'0px'},200)
	})

	$('#after_sale1 a').mouseleave(function(){
		$(this).find('img').stop().animate({'top':'-2px'},200)
	})
})
////////////////////////底部图片动态效果//////////////////////////////////////////

$(function(){
	$('#bottom .bottom_line6 a ').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'900px'},1000)
	})

	$('#bottom .bottom_line6 a ').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},1000)
	})
})
///////////////////////底部天猫logo图片动态效果//////////////////////////////////////////
$(function(){
	$('#bottom .cat img').mouseenter(function(){
		$('#bottom .cat img').stop().animate({'left':'720px'},1500,function(){
			$('#bottom .cat img').stop().animate({'left':'1000'},1000,function(){
				$('#bottom .cat img').stop().animate({'left':'720px'},1000,function(){
					$('#bottom .cat img').stop().animate({'left':'0px'},2000)
				})
			})
		})
	})
})
///////////////////////l飞舞的蝴蝶图片动态效果//////////////////////////////////////////
$(function(){
	$('#fly').mouseenter(function(){
		$('#fly').stop().animate({'left':'800px'},2000,function(){
			$('#fly').stop().animate({'left':'1050'},1000,function(){
				$('#fly').stop().animate({'left':'800px'},2000,function(){
					$('#fly').stop().animate({'left':'0px'},4000,alert('主人已经调试好兼容性了\~(^o^)/~'))
				})
			})
		})
	})
})
