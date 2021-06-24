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
///////////////////////轮播图/////////////////////////////////////////

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

///////////////////////////二级菜单/////////////////////////////////////////
$(function(){
	$('#menu .left').mouseover(function(){
		$(this).find('div').show();//让hide——box显示
		//给左侧a标签加curclass
		$(this).find('a').addClass('cur');
	});
	$('#menu .left').mouseout(function(){
		$(this).find('div').hide();//让hide_box隐藏
		//去掉a标签身上的class
		$(this).find('a').removeClass('cur');
	})

})

$(function(){
		$('#body_second_nav a').mouseover(function(){
			var c = $(this).index();//获得当前li的序号
			// alert(c)
			$('#body_second_nav a').eq(c).css('border-bottom','3px solid green').siblings('.cur1').css('border-bottom','0');
			$('#body_second .con1').eq(c).show().siblings('.con1').hide();//让c号con显示，他的兄弟节点隐藏
			
		});
	})

////////////////////////给回答小图标加JS///////////////////////////////////

$(function(){
	$('#body_second .con1 .eq1').mouseover(function(){
	$('#body_second .con1 .eq1 .title img').show();
	})
	$('#body_second .con1 .eq1').mouseout(function(){
	$('#body_second .con1  .eq1 .title img').hide();
	})
})

$(function(){
	$('#body_second .con1 .eq2').mouseover(function(){
	$('#body_second .con1 .eq2 .title img').show();
	})
	$('#body_second .con1 .eq2').mouseout(function(){
	$('#body_second .con1 .eq2 .title img').hide();
	})
})


$(function(){
	$('#body_second .con1 .eq3').mouseover(function(){
	$('#body_second .con1 .eq3 .title img').show();
	})
	$('#body_second .con1 .eq3').mouseout(function(){
	$('#body_second .con1  .eq3 .title img').hide();
	})
})

$(function(){
	$('#body_second .con1 .eq4').mouseover(function(){
	$('#body_second .con1 .eq4 .title img').show();
	})
	$('#body_second .con1 .eq4').mouseout(function(){
	$('#body_second .con1 .eq4 .title img').hide();
	})
})


$(function(){
	$('#body_second .con1 .eq5').mouseover(function(){
	$('#body_second .con1 .eq5 .title img').show();
	})
	$('#body_second .con1 .eq5').mouseout(function(){
	$('#body_second .con1  .eq5 .title img').hide();
	})
})

$(function(){
	$('#body_second .con1 .eq6').mouseover(function(){
	$('#body_second .con1 .eq6 .title img').show();
	})
	$('#body_second .con1 .eq6').mouseout(function(){
	$('#body_second .con1 .eq6 .title img').hide();
	})
})


$(function(){
	$('#body_second .con1 .eq7').mouseover(function(){
	$('#body_second .con1 .eq7 .title img').show();
	})
	$('#body_second .con1 .eq7').mouseout(function(){
	$('#body_second .con1  .eq7 .title img').hide();
	})
})

$(function(){
	$('#body_second .con1 .eq8').mouseover(function(){
	$('#body_second .con1 .eq8 .title img').show();
	})
	$('#body_second .con1 .eq8').mouseout(function(){
	$('#body_second .con1 .eq8 .title img').hide();
	})
})


$(function(){
	$('#body_second .con1 .eq9').mouseover(function(){
	$('#body_second .con1 .eq9 .title img').show();
	})
	$('#body_second .con1 .eq9').mouseout(function(){
	$('#body_second .con1  .eq9 .title img').hide();
	})
})

$(function(){
	$('#body_second .con1 .eq10').mouseover(function(){
	$('#body_second .con1 .eq10 .title img').show();
	})
	$('#body_second .con1 .eq10').mouseout(function(){
	$('#body_second .con1 .eq10 .title img').hide();
	})
})

// ....................................................

$(function(){
	$('#body_second .con1 .eq1').mouseover(function(){
	$('#body_second .con1 .eq1 .title_mid img').show();
	})
	$('#body_second .con1 .eq1').mouseout(function(){
	$('#body_second .con1 .eq1 .title_mid img').hide();
	})
})


$(function(){
	$('#body_second .con1 .eq2').mouseover(function(){
	$('#body_second .con1 .eq2 .title_mid img').show();
	})
	$('#body_second .con1 .eq2').mouseout(function(){
	$('#body_second .con1 .eq2 .title_mid img').hide();
	})
})

$(function(){
	$('#body_second .con1 .eq3').mouseover(function(){
	$('#body_second .con1 .eq3 .title_mid img').show();
	})
	$('#body_second .con1 .eq3').mouseout(function(){
	$('#body_second .con1 .eq3 .title_mid img').hide();
	})
})


$(function(){
	$('#body_second .con1 .eq4').mouseover(function(){
	$('#body_second .con1 .eq4 .title_mid img').show();
	})
	$('#body_second .con1 .eq4').mouseout(function(){
	$('#body_second .con1 .eq4 .title_mid img').hide();
	})
})

$(function(){
	$('#body_second .con1 .eq5').mouseover(function(){
	$('#body_second .con1 .eq5 .title_mid img').show();
	})
	$('#body_second .con1 .eq5').mouseout(function(){
	$('#body_second .con1 .eq5 .title_mid img').hide();
	})
})


$(function(){
	$('#body_second .con1 .eq6').mouseover(function(){
	$('#body_second .con1 .eq6 .title_mid img').show();
	})
	$('#body_second .con1 .eq6').mouseout(function(){
	$('#body_second .con1 .eq6 .title_mid img').hide();
	})
})

$(function(){
	$('#body_second .con1 .eq7').mouseover(function(){
	$('#body_second .con1 .eq7 .title_mid img').show();
	})
	$('#body_second .con1 .eq7').mouseout(function(){
	$('#body_second .con1 .eq7 .title_mid img').hide();
	})
})


$(function(){
	$('#body_second .con1 .eq8').mouseover(function(){
	$('#body_second .con1 .eq8 .title_mid img').show();
	})
	$('#body_second .con1 .eq8').mouseout(function(){
	$('#body_second .con1 .eq8 .title_mid img').hide();
	})
})

$(function(){
	$('#body_second .con1 .eq9').mouseover(function(){
	$('#body_second .con1 .eq9 .title_mid img').show();
	})
	$('#body_second .con1 .eq9').mouseout(function(){
	$('#body_second .con1 .eq9 .title_mid img').hide();
	})
})


$(function(){
	$('#body_second .con1 .eq10').mouseover(function(){
	$('#body_second .con1 .eq10 .title_mid img').show();
	})
	$('#body_second .con1 .eq10').mouseout(function(){
	$('#body_second .con1 .eq10 .title_mid img').hide();
	})
})



















