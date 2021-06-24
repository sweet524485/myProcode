// JavaScript Document

// 给【更换】加JS效果
$(function(){
	$('._genghuan').click(function(){
		$('#genghuan_h').show();
		$('.mj').hide();
		$('.mj_h').show();
	})
	

	$('#genghuan_h').click(function(){
		$('#genghuan_h').hide();
		// $('#genghuan_h').css('display','none');
		$('.mj').show();
		$('.mj_h').hide();
	})


	$('#genghuan_h').mouseover(function(){
		$('#genghuan_h').show();
		$('.mj').hide();
		$('.mj_h').show();
	})


	$('#genghuan_h').mouseout(function(){
		$('#genghuan_h').hide();
		$('.mj').show();
		$('.mj_h').hide();
	})

})
// ..........................................................

//给手机京东加JS

$(function(){
	$('.sjjd').mouseover(function(){
		$('.khd_h').show();
		$('.sjjd').css('background','white');
		$('.sjjd_h').hide();
		$('.sjjd_h1').show();
		})

	$('.sjjd').mouseout(function(){
		$('.khd_h').hide();
		$('.sjjd').css('background','#F7F7F7');
		$('.sjjd_h').show();
		$('.sjjd_h1').hide();
	})
})

// .......................................................
//给客户服务加JS

$(function(){
	$('.kffw').mouseover(function(){
		$('.bangzhuzx').show();
		$('.kffw').css('background','white');
		$('.kffw_h').hide();
		$('.kffw_h1').show();
		})

	$('.kffw').mouseout(function(){
		$('.bangzhuzx').hide();
		$('.kffw').css('background','#F7F7F7');
		$('.kffw_h').show();
		$('.kffw_h1').hide();
	})
})

// ...........................................................
//给网址导航加JS

$(function(){
	$('.wzdh').mouseover(function(){
		$('#teselm').show();
		$('.wzdh').css('background','white');
		$('.wzdh_h').hide();
		$('.wzdh_h1').show();
		})

	$('.wzdh').mouseout(function(){
		$('#teselm').hide();
		$('.wzdh').css('background','#F7F7F7');
		$('.wzdh_h').show();
		$('.wzdh_h1').hide();
	})
})

// .......................................................

// 让标头广告消失

$(function(){
	$('#first .b1 .b_2').click(function(){
		$('#first .b1').hide();
		$('#first .b').css('top','-70px')
		$('#first .b').css('height','93px')
	})
})

// .......................................................
//给我的京东加JS效果

$(function(){
	$('.b19').mouseover(function(){
		$('.wdjd').hide();
		$('.wdjd_h').show();
		$('#nin_hao').show();
	})
	$('.b19').mouseout(function(){
		$('.wdjd').show();
		$('.wdjd_h').hide();
		$('#nin_hao').hide();
	})

})

// .................................................................

//给去购物车结算加JS效果

$(function(){
	$('.b23').mouseover(function(){
		$('.gwc').hide();
		$('.gwc_h').show();
		$('#xuan_gou').show();
	})
	$('.b23').mouseout(function(){
		$('.gwc').show();
		$('.gwc_h').hide();
		$('#xuan_gou').hide();
	})

})

//////////////////////京东轮播图///////////开始///////////////////////////////////////

$(function(){
	var c = 0;
	var autoRun = function(){
		c++;//变量自增
		c = (c==6)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('#jd img').eq(c).fadeIn(200).siblings('img').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('#jd ul li').eq(c).addClass('cur').siblings('li').removeClass('cur');
	}
	var timer = setInterval(autoRun,3000);//设立定时器
	
	

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
		timer = setInterval(autoRun,3000);//设立定时器
	});
})


//////////////////////京东轮播图///////////结束///////////////////////////////////////

// ...........................1................................................

//胃左部二级菜单

$(function(){
	$('#d4').mouseover(function(){
		$('.d18').hide();
		$('.d18_h').show();
		$('.tushu_h').show();
	})
	$('#d4').mouseout(function(){
		$('.d18').show();
		$('.d18_h').hide();
		$('.tushu_h').hide();
	})

	$('#d4 .tushu_h img').click(function(){
		$('.tushu_h').css('display','none')
	})

})
// ..........................2...................................

$(function(){
	$('#d5').mouseover(function(){
		$('.d22').hide();
		$('.d22_h').show();
		$('.jydq_h').show();
	})
	$('#d5').mouseout(function(){
		$('.d22').show();
		$('.d22_h').hide();
		$('.jydq_h').hide();
	})

	$('#d5 .jydq_h img').click(function(){
		$('.jydq_h').css('display','none')
	})

})

// ......................3.......................................

$(function(){
	$('#d6').mouseover(function(){
		$('.d24').hide();
		$('.d24_h').show();
		$('.sjsm_h').show();
	})
	$('#d6').mouseout(function(){
		$('.d24').show();
		$('.d24_h').hide();
		$('.sjsm_h').hide();
	})

	$('#d6 .sjsm_h img').click(function(){
		$('.sjsm_h').css('display','none')
	})

})

// .........................4.......................................

$(function(){
	$('#d7').mouseover(function(){
		$('.d27').hide();
		$('.d27_h').show();
		$('.dnbg_h').show();
	})
	$('#d7').mouseout(function(){
		$('.d27').show();
		$('.d27_h').hide();
		$('.dnbg_h').hide();
	})

	$('#d7 .dnbg_h img').click(function(){
		$('.dnbg_h').css('display','none')
	})

})

// .....................5..................................

$(function(){
	$('#d8').mouseover(function(){
		$('.d30').hide();
		$('.d30_h').show();
		$('.juzu_h').show();
	})
	$('#d8').mouseout(function(){
		$('.d30').show();
		$('.d30_h').hide();
		$('.juzu_h').hide();
	})

	$('#d8 .juzu_h img').click(function(){
		$('.juzu_h').css('display','none')
	})

})

// .............................6....................................

$(function(){
	$('#d9').mouseover(function(){
		$('.d35').hide();
		$('.d35_h').show();
		$('.fsny_h').show();
	})
	$('#d9').mouseout(function(){
		$('.d35').show();
		$('.d35_h').hide();
		$('.fsny_h').hide();
	})

	$('#d9 .fsny_h img').click(function(){
		$('.fsny_h').css('display','none')
	})

})

// ...............................7...............................

$(function(){
	$('#d10').mouseover(function(){
		$('.d38').hide();
		$('.d38_h').show();
		$('.grhl_h').show();
	})
	$('#d10').mouseout(function(){
		$('.d38').show();
		$('.d38_h').hide();
		$('.grhl_h').hide();
	})

	$('#d10 .grhl_h img').click(function(){
		$('.grhl_h').css('display','none')
	})

})

// ........................................8........................................

$(function(){
	$('#d11').mouseover(function(){
		$('.d40').hide();
		$('.d40_h').show();
		$('.xxxb_h').show();
	})
	$('#d11').mouseout(function(){
		$('.d40').show();
		$('.d40_h').hide();
		$('.xxxb_h').hide();
	})

	$('#d11 .xxxb_h img').click(function(){
		$('.xxxb_h').css('display','none')
	})

})

// ...........................................9................................................

$(function(){
	$('#d12').mouseover(function(){
		$('.d45').hide();
		$('.d45_h').show();
		$('.ydhw_h').show();
	})
	$('#d12').mouseout(function(){
		$('.d45').show();
		$('.d45_h').hide();
		$('.ydhw_h').hide();
	})

	$('#d12 .ydhw_h img').click(function(){
		$('.ydhw_h').css('display','none')
	})

})

// ...............................................10............................


$(function(){
	$('#d13').mouseover(function(){
		$('.d47').hide();
		$('.d47_h').show();
		$('.qcyp_h').show();
	})
	$('#d13').mouseout(function(){
		$('.d47').show();
		$('.d47_h').hide();
		$('.qcyp_h').hide();
	})

	$('#d13 .qcyp_h img').click(function(){
		$('.qcyp_h').css('display','none')
	})

})

// ................................................11.......................................

$(function(){
	$('#d14').mouseover(function(){
		$('.d49').hide();
		$('.d49_h').show();
		$('.mywj_h').show();
	})
	$('#d14').mouseout(function(){
		$('.d49').show();
		$('.d49_h').hide();
		$('.mywj_h').hide();
	})

	$('#d14 .mywj_h img').click(function(){
		$('.mywj_h').css('display','none')
	})

})

// ........................................12...................................


$(function(){
	$('#d15').mouseover(function(){
		$('.d52').hide();
		$('.d52_h').show();
		$('.spyl_h').show();
	})
	$('#d15').mouseout(function(){
		$('.d52').show();
		$('.d52_h').hide();
		$('.spyl_h').hide();
	})

	$('#d15 .spyl_h img').click(function(){
		$('.spyl_h').css('display','none')
	})

})

// .........................................13..........................

$(function(){
	$('#d16').mouseover(function(){
		$('.d56').hide();
		$('.d56_h').show();
		$('.yybj_h').show();
	})
	$('#d16').mouseout(function(){
		$('.d56').show();
		$('.d56_h').hide();
		$('.yybj_h').hide();
	})

	$('#d16 .spyl_h img').click(function(){
		$('.yybj_h').css('display','none')
	})

})

// .............................................14.....................................


$(function(){
	$('#d17').mouseover(function(){
		$('.d58').hide();
		$('.d58_h').show();
		$('.cply_h').show();
	})
	$('#d17').mouseout(function(){
		$('.d58').show();
		$('.d58_h').hide();
		$('.cply_h').hide();
	})

	$('#d17 .cply_h img').click(function(){
		$('.cply_h').css('display','none')
	})

})

/////////////////////////下拉列表//////////////开始//////////////////////////////////

   $(function(){
   	//鼠标移入移除
     		$('#box').mouseenter(function(){  			
     			$('#box .left').fadeIn(600);
     			$('#box .right').fadeIn(600);
     		})
     		$('#box').mouseleave(function() {
     			$('#box .left').fadeOut(600);
     			$('#box .right').fadeOut(600);
     		})

 			var a=0;
   			$('#box .right').click(function(){				
 				a++;
 				a=a==6?0:a;
 				var left=a*-608;
 				$('#box div ul').stop().animate({'left':left+'px'},300)
 			})
            var b=0;
            $('#box .left').click(function(){
            	b++
            	if(b>0){
            		b=-5
            	}
            	var left=b*608
            	$('#box div ul').stop().animate({'left':left+'px'},300)
            })

   })



/////////////////////////下拉列表//////////////结束//////////////////////////////////

//////////////////////////图片滑动效果///////////开始/////////////////////////////////////////

$(function(){

	$('.f5').mouseenter(function(event) {
		$(this).find('.f9').stop().animate({'left':'-10px'}, 200)

	});

	$('.f5').mouseleave(function(event) {
		$(this).find('.f9').stop().animate({'left':'0px'}, 200)
	});


	$('.f6').mouseenter(function(event) {
		$(this).find('.f10').stop().animate({'left':'-10px'}, 200)

	});

	$('.f6').mouseleave(function(event) {
		$(this).find('.f10').stop().animate({'left':'0px'}, 200)
	});


	$('.f7').mouseenter(function(event) {
		$(this).find('.f11').stop().animate({'left':'-10px'}, 200)

	});

	$('.f7').mouseleave(function(event) {
		$(this).find('.f11').stop().animate({'left':'0px'}, 200)
	});


	$('.f8').mouseenter(function(event) {
		$(this).find('.f12').stop().animate({'left':'-10px'}, 200)

	});

	$('.f8').mouseleave(function(event) {
		$(this).find('.f12').stop().animate({'left':'0px'}, 200)
	});


	$('.f13').mouseenter(function(event) {
		$(this).find('.f17').stop().animate({'left':'-10px'}, 200)

	});

	$('.f13').mouseleave(function(event) {
		$(this).find('.f17').stop().animate({'left':'0px'}, 200)
	});

	$('.f14').mouseenter(function(event) {
		$(this).find('.f18').stop().animate({'left':'-10px'}, 200)

	});

	$('.f14').mouseleave(function(event) {
		$(this).find('.f18').stop().animate({'left':'0px'}, 200)
	});

	$('.f15').mouseenter(function(event) {
	$(this).find('.f19').stop().animate({'left':'-10px'}, 200)

	});

	$('.f15').mouseleave(function(event) {
		$(this).find('.f19').stop().animate({'left':'0px'}, 200)
	});


	$('.f16').mouseenter(function(event) {
	$(this).find('.f20').stop().animate({'left':'-10px'}, 200)

	});

	$('.f16').mouseleave(function(event) {
		$(this).find('.f20').stop().animate({'left':'0px'}, 200)
	});



})


//////////////////////////图片滑动效果///////////结束/////////////////////////////////////////

////////////////////一楼二级菜单///////////////////////////////////////////////////////////////////


$(function(){
		$('#g .g3 a').mouseover(function() {
			var c = $(this).index();//获得当前移入的a标签的序号
			$('#bigh #h2').eq(c).show().siblings('#h2').hide();//让c号h显示，他的兄弟节点隐藏
			// 计算色块的left值
			var left =210+ c*158;
			// 将色块运动到对应位置
			$('#g .huakuai1').stop().animate({'left':left+'px'}, 300);
		});
	})

////////////////////二楼二级菜单///////////////////////////////////////////////////////////////////

$(function(){
		$('#i .i3 a').mouseover(function() {
			var c = $(this).index();//获得当前移入的a标签的序号
			$('#bigj #j2').eq(c).show().siblings('#j2').hide();//让c号h显示，他的兄弟节点隐藏
			// 计算色块的left值
			var left =210+ c*158;
			// 将色块运动到对应位置
			$('#i .huakuai2').stop().animate({'left':left+'px'}, 300);
		});
	})

////////////////////三楼二级菜单//////////////////////////////////////////////////////////////////


$(function(){
		$('#k .k3 a').mouseover(function() {
			var c = $(this).index();//获得当前移入的a标签的序号
			$('#bigl #l2').eq(c).show().siblings('#l2').hide();//让c号h显示，他的兄弟节点隐藏
			// 计算色块的left值
			var left =210+ c*158;
			// 将色块运动到对应位置
			$('#k .huakuai3').stop().animate({'left':left+'px'}, 300);
		});
	})

////////////////////四楼二级菜单//////////////////////////////////////////////////////////////////


$(function(){
		$('#n .n3 a').mouseover(function() {
			var c = $(this).index();//获得当前移入的a标签的序号
			$('#bigo #o2').eq(c).show().siblings('#o2').hide();//让c号h显示，他的兄弟节点隐藏
			// 计算色块的left值
			var left =210+ c*158;
			// 将色块运动到对应位置
			$('#n .huakuai4').stop().animate({'left':left+'px'}, 300);
		});
	})

////////////////////五楼二级菜单//////////////////////////////////////////////////////////////////


$(function(){
		$('#p .p3 a').mouseover(function() {
			var c = $(this).index();//获得当前移入的a标签的序号
			$('#bigq #q2').eq(c).show().siblings('#q2').hide();//让c号h显示，他的兄弟节点隐藏
			// 计算色块的left值
			var left =210+ c*158;
			// 将色块运动到对应位置
			$('#p .huakuai5').stop().animate({'left':left+'px'}, 300);
		});
	})

////////////////////六楼二级菜单////////////////////////////////////////////////////////////////


$(function(){
		$('#r .r3 a').mouseover(function() {
			var c = $(this).index();//获得当前移入的a标签的序号
			$('#bigs #s2').eq(c).show().siblings('#s2').hide();//让c号h显示，他的兄弟节点隐藏
			// 计算色块的left值
			var left =210+ c*158;
			// 将色块运动到对应位置
			$('#r .huakuai6').stop().animate({'left':left+'px'}, 300);
		});
	})

////////////////////七楼二级菜单////////////////////////////////////////////////////////////////


$(function(){
		$('#t .t3 a').mouseover(function() {
			var c = $(this).index();//获得当前移入的a标签的序号
			$('#bigu #u2').eq(c).show().siblings('#u2').hide();//让c号h显示，他的兄弟节点隐藏
			// 计算色块的left值
			var left =210+ c*158;
			// 将色块运动到对应位置
			$('#t .huakuai7').stop().animate({'left':left+'px'}, 300);
		});
	})


////////////////////八楼二级菜单////////////////////////////////////////////////////////////////

$(function(){
		$('#v .v3 a').mouseover(function() {
			var c = $(this).index();//获得当前移入的a标签的序号
			$('#bigw #w2').eq(c).show().siblings('#w2').hide();//让c号h显示，他的兄弟节点隐藏
			// 计算色块的left值
			var left =210+ c*158;
			// 将色块运动到对应位置
			$('#v .huakuai8').stop().animate({'left':left+'px'}, 300);
		});
	})

///////////////////////////晒单加JS//////////////////////////////////////////////////////////////
$(function(){

var	autoRun=function(){
		$('#x1 div').last().height(0);
		$('#x1').prepend($('#x1 div').last());
		$('#x1 div').first().animate({'height':'110px'},300);
	}
	var timer = setInterval(autoRun,2000);

	$('#x1 div').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
	
	});

	// 加鼠标移出效果
	$('#x1 div').mouseout(function() {
		timer = setInterval(autoRun,2000);//设立定时器
	});

})

// ......................................................................

$(function(){

var	autoRun=function(){
		$('#x2 div').last().height(0);
		$('#x2').prepend($('#x2 div').last());
		$('#x2 div').first().animate({'height':'110px'},300);
	}
	var timer = setInterval(autoRun,2000);

	$('#x2 div').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
	
	});

	// 加鼠标移出效果
	$('#x2 div').mouseout(function() {
		timer = setInterval(autoRun,2000);//设立定时器
	});

})


///////////////////轮播图右边//////////////////////////////////////




$(function(){

	$('#d88 .d_h1').mouseenter(function(){

		$('#sweetone').show();

		$('#sweettwo').hide();

		$('#sweetthree').hide();

		$('#sweetfour').hide();


		$('#sweetone').animate({'top':'-173px'},500)
	})

	$('.shi').click(function(){

		$('#sweetone').animate({'top':'0px'},500)
	})

})



$(function(){

	$('#d88 .d_h2').mouseenter(function(){

		$('#sweettwo').show();

		$('#sweetone').hide();

		$('#sweetthree').hide();

		$('#sweetfour').hide();


		$('#sweettwo').animate({'top':'-173px'},500)

	})



	$('.shi').click(function(){

		$('#sweettwo').animate({'top':'0px'},500)
	})

})



$(function(){

	$('#d88 .d_h3').mouseenter(function(){

		$('#sweetthree').show();

		$('#sweetone').hide();

		$('#sweettwo').hide();

		$('#sweetfour').hide();


		$('#sweetthree').animate({'top':'-173px'},500)

	})


	$('.shi').click(function(){

		$('#sweetthree').animate({'top':'0px'},500)
	})

})



$(function(){

	$('#d88 .d_h4').mouseenter(function(){

		$('#sweetfour').show();

		$('#sweetone').hide();

		$('#sweettwo').hide();

		$('#sweetthree').hide();

		$('#sweetfour').animate({'top':'-173px'},500)

	})


	$('.shi').click(function(){

		$('#sweetfour').animate({'top':'0px'},500)
	})

})




///////////////////////京东左右滑动轮播图////////////////////////////////

$(function(){
	$('#h12 ul li').mouseover(function(event) {
		var c = $(this).index();//获得鼠标移入的li的序号
		// 计算大div的left值
		var left = c*-455;
		// 让div运动到对应的位置
		$('#h12 .pic_box1').stop().animate({'left':left+'px'}, 200);
		// 让c号li加上class,并且移出兄弟li身上的class
		$('#h12 ul li').eq(c).addClass('cur1').siblings('li').removeClass('cur1');
	});
})

// ..................................................................................


$(function(){
	$('#j12 ul li').mouseover(function(event) {
		var c = $(this).index();//获得鼠标移入的li的序号
		// 计算大div的left值
		var left = c*-455;
		// 让div运动到对应的位置
		$('#j12 .pic_box2').stop().animate({'left':left+'px'}, 200);
		// 让c号li加上class,并且移出兄弟li身上的class
		$('#j12 ul li').eq(c).addClass('cur2').siblings('li').removeClass('cur2');
	});
})

// ...................................................................................


$(function(){
	$('#o12 ul li').mouseover(function(event) {
		var c = $(this).index();//获得鼠标移入的li的序号
		// 计算大div的left值
		var left = c*-455;
		// 让div运动到对应的位置
		$('#o12 .pic_box3').stop().animate({'left':left+'px'}, 200);
		// 让c号li加上class,并且移出兄弟li身上的class
		$('#o12 ul li').eq(c).addClass('cur3').siblings('li').removeClass('cur3');
	});
})

// .....................................................................................

$(function(){
	$('#q12 ul li').mouseover(function(event) {
		var c = $(this).index();//获得鼠标移入的li的序号
		// 计算大div的left值
		var left = c*-455;
		// 让div运动到对应的位置
		$('#q12 .pic_box4').stop().animate({'left':left+'px'}, 200);
		// 让c号li加上class,并且移出兄弟li身上的class
		$('#q12 ul li').eq(c).addClass('cur4').siblings('li').removeClass('cur4');
	});
})

// ..................................................................................


$(function(){
	$('#s12 ul li').mouseover(function(event) {
		var c = $(this).index();//获得鼠标移入的li的序号
		// 计算大div的left值
		var left = c*-455;
		// 让div运动到对应的位置
		$('#s12 .pic_box5').stop().animate({'left':left+'px'}, 200);
		// 让c号li加上class,并且移出兄弟li身上的class
		$('#s12 ul li').eq(c).addClass('cur5').siblings('li').removeClass('cur5');
	});
})

// .............................................................................

$(function(){
	$('#u12 ul li').mouseover(function(event) {
		var c = $(this).index();//获得鼠标移入的li的序号
		// 计算大div的left值
		var left = c*-455;
		// 让div运动到对应的位置
		$('#u12 .pic_box6').stop().animate({'left':left+'px'}, 200);
		// 让c号li加上class,并且移出兄弟li身上的class
		$('#u12 ul li').eq(c).addClass('cur6').siblings('li').removeClass('cur6');
	});
})

// ..........................................................................

$(function(){
	$('#w12 ul li').mouseover(function(event) {
		var c = $(this).index();//获得鼠标移入的li的序号
		// 计算大div的left值
		var left = c*-455;
		// 让div运动到对应的位置
		$('#w12 .pic_box7').stop().animate({'left':left+'px'}, 200);
		// 让c号li加上class,并且移出兄弟li身上的class
		$('#w12 ul li').eq(c).addClass('cur7').siblings('li').removeClass('cur7');
	});
})

////////////////各个楼层图片热点效果/////////////////////////////////////////////////////

$(function(){
		// 鼠标移入到图片内的时候，让当前鼠标移入的图片变为不透明，它的兄弟图片变为透明
		$('.aaa1').mouseover(function() {
			$(this).fadeTo(0,0.7);
		});

		// 鼠标移出当前区域，让当前区域中的图片都透明度变为1
		$('.aaa1').mouseout(function() {
			$('.aaa1').fadeTo(0,1);
		});
	})

// .......................3f图片热点..........................................................

$(function(){
		// 鼠标移入到图片内的时候，让当前鼠标移入的图片变为不透明，它的兄弟图片变为透明
		$('#ll2  a').mouseover(function() {
			$(this).find('img').fadeTo(0,1).parent().find('img').not($(this)).fadeTo(0,0.7);
		});

		// 鼠标移出当前区域，让当前区域中的图片都透明度变为1
		$('#ll2 div').mouseout(function() {
			$(this).find('img').fadeTo(0,1)
		});
	})


	
$(function(){

	$('#ll2 div img').mouseenter(function(event) {
		$(this).stop().animate({'left':'-10px'}, 200)

	});

	$('#ll2 div img').mouseleave(function(event) {
		$(this).stop().animate({'left':'0px'}, 200)
	});
})




//////////////////////xiaoer///////////////////////////////////////

	
$(function(){
	$('#h46 ul li').mouseover(function(event) {
		var c = $(this).index();//获得鼠标移入的li的序号
		// 计算大div的left值
		var left = c*-210;
		// 让div运动到对应的位置
		$('#h46 .pic_tu1').stop().animate({'left':left+'px'}, 200);
		// 让c号li加上class,并且移出兄弟li身上的class
		$('#h46 ul li').eq(c).addClass('curr1').siblings('li').removeClass('curr1');
	});
})

// .....................2.............................................

	
$(function(){
	$('#j46 ul li').mouseover(function(event) {
		var c = $(this).index();//获得鼠标移入的li的序号
		// 计算大div的left值
		var left = c*-210;
		// 让div运动到对应的位置
		$('#j46 .pic_tu1').stop().animate({'left':left+'px'}, 200);
		// 让c号li加上class,并且移出兄弟li身上的class
		$('#j46 ul li').eq(c).addClass('curr1').siblings('li').removeClass('curr1');
	});
})

// ...........................3........................................................

$(function(){
	$('#m46 ul li').mouseover(function(event) {
		var c = $(this).index();//获得鼠标移入的li的序号
		// 计算大div的left值
		var left = c*-210;
		// 让div运动到对应的位置
		$('#m46 .pic_tu1').stop().animate({'left':left+'px'}, 200);
		// 让c号li加上class,并且移出兄弟li身上的class
		$('#m46 ul li').eq(c).addClass('curr1').siblings('li').removeClass('curr1');
	});
})

// .................................................................................

$(function(){
	$('#o46 ul li').mouseover(function(event) {
		var c = $(this).index();//获得鼠标移入的li的序号
		// 计算大div的left值
		var left = c*-210;
		// 让div运动到对应的位置
		$('#o46 .pic_tu1').stop().animate({'left':left+'px'}, 200);
		// 让c号li加上class,并且移出兄弟li身上的class
		$('#o46 ul li').eq(c).addClass('curr1').siblings('li').removeClass('curr1');
	});
})

// ...........................................................................

$(function(){
	$('#q46 ul li').mouseover(function(event) {
		var c = $(this).index();//获得鼠标移入的li的序号
		// 计算大div的left值
		var left = c*-210;
		// 让div运动到对应的位置
		$('#q46 .pic_tu1').stop().animate({'left':left+'px'}, 200);
		// 让c号li加上class,并且移出兄弟li身上的class
		$('#q46 ul li').eq(c).addClass('curr1').siblings('li').removeClass('curr1');
	});
})

//////////////////////////////最后一个效果///////////////////////////////////////////

$(function(){
		$('#vv a').mouseover(function() {
			var c = $(this).index();//获得当前移入的li的序号
			$('#herf .w3').eq(c).show().siblings('.w3').hide();//让c号con显示，他的兄弟节点隐藏
			// 计算色块的left值
			var left = c*38;
			// 将色块运动到对应位置
			$('.huadong').stop().animate({'left':left+'px'}, 300);
			if(c==4){
				$('.huadong').css('width','63px');
				$('.impic').css('width','63px');


			}else{
				$('.huadong').css('width','40px');
				$('.impic').css('width','40px');
			}
		});
	})







 