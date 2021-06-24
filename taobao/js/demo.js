//////////////////“当前热点”栏目 图片的动态效果/////////////////////////////////////////
$(function(){
	$('#now_hot .now_hot_img1 a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},300)
	})

	$('#now_hot .now_hot_img1 a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

$(function(){
	$('#now_hot .now_hot_img2 a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},300)
	})

	$('#now_hot .now_hot_img2 a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})
//////////////////主体内容部分 main bank图片的动态效果//////////////////////////////////
$(function(){
	$('#main_left .main_left_box1 .bank').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},300)
	})

	$('#main_left .main_left_box1 .bank').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})
//////////////////主体内容部分 main right图片的动态效果//////////////////////////////////
$(function(){
	$('#main_left .main_left_box1 .main_left_content_img').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},300)
	})

	$('#main_left .main_left_box1 .main_left_content_img').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})
//////////////////主体内容部分水bank图片的动态效果///////////////////////////////
$(function(){
	$('.main_left_bank a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},300)
	})

	$('.main_left_bank a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})
//////////////////发现 好货 图片动态效果///////////////////////////////
$(function(){
	$('#main_right .img_box').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},300)
	})

	$('#main_right .img_box').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})
//////////////////发现 好货 bottom图片出现效果///////////////////////////////
$(function(){
	$('#main_right .myshop').mouseenter(function(){
		$(this).find('.hide').show();
	})
	$('#main_right .myshop').mouseleave(function(){
		$(this).find('.hide').hide();
	})
})

//////////////////发现 好货 logo图片动态效果///////////////////////////////
$(function(){
	$('#main_right .myshop .img_box_left').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},300)
	})

	$('#main_right .myshop .img_box_left').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})
/////////////////////小图的滑动效果////////////////////////////////////
$(function(){
		a=0
		$('#main_right .btn').click(function(){
		a--;
		if(a==-5){
			$('#main_right .tab .tab_box').css({'left':'0px'});
			a=0
		}
		var left=a*256
		$('#main_right .tab .tab_box').css({'left':left+'px'})
	})
})

//////////////////小图片动态效果///////////////////////////////
$(function(){
	$('#main_right .tab .tab_box div .pic_box a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-5px'},300)
	})

	$('#main_right .tab .tab_box div .pic_box a ').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})
//////////////////发现好货 图片动态效果///////////////////////////////
$(function(){
	$('#main_right .goodshop').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'5px'},300)
	})

	$('#main_right .goodshop').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})
//////////////////我的足迹 动态效果///////////////////////////////
$(function(){
	$('#main_right .myfoot .picture_box a').mouseenter(function(){
		$(this).find('img').hide();
	})
	$('#main_right .myfoot .picture_box a').mouseleave(function(){
		$(this).find('img').show();
	})
	
})
//////////////////发现好货 动态效果///////////////////////////////
$(function(){
	$('#main_right .tab .tab_box div .pic_box_top .pic1_box a').mouseenter(function(){
		$(this).find('img').hide();
	})
	$('#main_right .tab .tab_box div .pic_box_top .pic1_box a').mouseleave(function(){
		$(this).find('img').show();
	})
	
})

/////////////////右边下部 图片动态效果///////////////////////////////
$(function(){
	$('#main_right .image_box').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'5px'},300)
	})

	$('#main_right .image_box').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

////////////////星店  star  title 图片动态效果///////////////////////////////
$(function(){
	$('#star .star_box .title').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-5px'},300)
	})

	$('#star .star_box .title').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

////////////////星店  star  face 图片动态效果///////////////////////////////
$(function(){
	$('#star .star_box .star_face').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-5px'},300)
	})

	$('#star .star_box .star_face').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

////////////////星店  .star_img_box 图片动态效果///////////////////////////////

$(function(){
	$('#star .star_box .star_img_box a').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-5px'},300)
	})

	$('#star .star_box .star_img_box a').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

////////////////热卖单品 图片动态效果///////////////////////////////////
$(function(){
	$('#bien_box div .pg_box').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},300)
	})

	$('#bien_box div .pg_box').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})
/*//////////////////底部标题 图片动态效果///////////////////////////////////*/
$(function(){
	$('#btimg_box .btimg1').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},300)
	})

	$('#btimg_box .btimg1').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

$(function(){
	$('#btimg_box .btimg2').mouseenter(function(){
		$(this).find('img').stop().animate({'left':'-10px'},300)
	})

	$('#btimg_box .btimg2').mouseleave(function(){
		$(this).find('img').stop().animate({'left':'0px'},300)
	})
})

$(function(){
	$('#btimg_box .btimg3').mouseenter(function(){
		$('#btimg_box .btimg3').stop().animate({'left':'100px'},1500,function(){
			$('#btimg_box .btimg3').stop().animate({'left':'0'},1000,function(){
				$('#btimg_box .btimg3').stop().animate({'left':'100'},1000,function(){
					$('#btimg_box .btimg3').stop().animate({'left':'980px'},2000)
				})
			})
		})
	})
})

<!-- ///////////////底部 备案信息图片部分//////////////// -->
$(function(){
	$('#adopt .lastest').mouseenter(function(){
		$('#adopt .lastest').stop().animate({'left':'800px'},1500,function(){
			$('#adopt .lastest').stop().animate({'left':'1106'},1000,function(){
				$('#adopt .lastest').stop().animate({'left':'800'},1000,function(){
					$('#adopt .lastest').stop().animate({'left':'310px'},2000)
				})
			})
		})
	})
})









