// 导航条点击效果
$(function(){
	$('.header-nav').click(function() {
		var b = $(this).index();//获得当前li的序号
		$('.qmj-content-main').eq(b).show().siblings('.qmj-content-main').hide();
		$(this).addClass('header-nav-cur').siblings('.header-nav').removeClass('header-nav-cur');
		$('.qmj-content-main').eq(b).stop().animate({'margin-top':'-20px'},100,function(){
			$('.qmj-content-main').stop().animate({'margin-top':'20px'},100,function(){
				$('.qmj-content-main').stop().animate({'margin-top':'-10px'},100,function(){
					$('.qmj-content-main').stop().animate({'margin-top':'0px'},100)
				})
			})
		})
	});
})
// TAB切换效果
$(function(){
    $('.qmj-content-left-li').click(function(){
    	var c = $(this).index();//获得当前li的序号
      	$('.qmj-content-right-con').eq(c).show().siblings('.qmj-content-right-con').hide();
      	$('.qmj-content-right-con').eq(c).stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-right-con').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-right-con').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-right-con').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
		$(this).addClass('qmj-content-left-li-cur').siblings('a').removeClass('qmj-content-left-li-cur');
    })
});
$(function(){
    $('.qmj-content-left-li1').click(function(){
    	var c = $(this).index();//获得当前li的序号
      	$('.qmj-content-right-con1').eq(c).show().siblings('.qmj-content-right-con1').hide();
      	$('.qmj-content-right-con1').eq(c).stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-right-con1').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-right-con1').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-right-con1').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
		$(this).addClass('qmj-content-left-li-cur').siblings('a').removeClass('qmj-content-left-li-cur');
    })
});
// 专家的JS
$(function(){
    $('.qmj-zj1').click(function(){
      	$('.qmj-content-right-zhuanjia1').show();
      	$('.qmj-content-right-zhuanjia').hide();
      	$('.qmj-content-right-zhuanjia1').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-right-zhuanjia1').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-right-zhuanjia1').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-right-zhuanjia1').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-zj2').click(function(){
      	$('.qmj-content-right-zhuanjia2').show();
      	$('.qmj-content-right-zhuanjia').hide();
      	$('.qmj-content-right-zhuanjia2').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-right-zhuanjia2').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-right-zhuanjia2').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-right-zhuanjia2').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-zj3').click(function(){
      	$('.qmj-content-right-zhuanjia3').show();
      	$('.qmj-content-right-zhuanjia').hide();
      	$('.qmj-content-right-zhuanjia3').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-right-zhuanjia3').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-right-zhuanjia3').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-right-zhuanjia3').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-zj4').click(function(){
      	$('.qmj-content-right-zhuanjia4').show();
      	$('.qmj-content-right-zhuanjia').hide();
      	$('.qmj-content-right-zhuanjia4').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-right-zhuanjia4').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-right-zhuanjia4').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-right-zhuanjia4').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-zreo').click(function(){
    	$('.qmj-content-right-zhuanjia').show();
      	$('.qmj-content-right-zhuanjia1').hide();
      	$('.qmj-content-right-zhuanjia2').hide();
      	$('.qmj-content-right-zhuanjia3').hide();
      	$('.qmj-content-right-zhuanjia4').hide();	
      	$('.qmj-content-right-zhuanjia').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-right-zhuanjia').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-right-zhuanjia').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-right-zhuanjia').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
// 产品部分JS
$(function(){
    $('.qmj-produce1').click(function(){
    	$('.qmj-content-produce-box1').show();
      	$('.qmj-content-produce-box').hide();	
      	$('.qmj-content-produce-box1').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-produce-box1').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-produce-box1').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-produce-box1').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-produce2').click(function(){
    	$('.qmj-content-produce-box2').show();
      	$('.qmj-content-produce-box').hide();	
      	$('.qmj-content-produce-box2').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-produce-box2').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-produce-box2').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-produce-box2').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-produce3').click(function(){
    	$('.qmj-content-produce-box3').show();
      	$('.qmj-content-produce-box').hide();	
      	$('.qmj-content-produce-box3').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-produce-box3').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-produce-box3').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-produce-box3').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-produce4').click(function(){
    	$('.qmj-content-produce-box4').show();
      	$('.qmj-content-produce-box').hide();	
      	$('.qmj-content-produce-box4').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-produce-box4').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-produce-box4').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-produce-box4').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-produce5').click(function(){
    	$('.qmj-content-produce-box5').show();
      	$('.qmj-content-produce-box').hide();	
      	$('.qmj-content-produce-box5').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-produce-box5').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-produce-box5').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-produce-box5').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-produce6').click(function(){
    	$('.qmj-content-produce-box6').show();
      	$('.qmj-content-produce-box').hide();	
      	$('.qmj-content-produce-box6').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-produce-box6').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-produce-box6').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-produce-box6').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-produce7').click(function(){
    	$('.qmj-content-produce-box7').show();
      	$('.qmj-content-produce-box').hide();	
      	$('.qmj-content-produce-box7').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-produce-box7').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-produce-box7').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-produce-box7').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-produce8').click(function(){
    	$('.qmj-content-produce-box8').show();
      	$('.qmj-content-produce-box').hide();	
      	$('.qmj-content-produce-box8').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-content-produce-box8').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-content-produce-box8').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-content-produce-box8').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.header-nav').click(function(){
    	$('.qmj-content-produce-box').show();
      	$('.qmj-content-produce-box1').hide();
      	$('.qmj-content-produce-box2').hide();
      	$('.qmj-content-produce-box3').hide();
      	$('.qmj-content-produce-box4').hide();
      	$('.qmj-content-produce-box5').hide();
      	$('.qmj-content-produce-box6').hide();
      	$('.qmj-content-produce-box7').hide();
      	$('.qmj-content-produce-box8').hide();	
      	$('.qmj-content-produce-box').stop().animate({'margin-top':'-20px'},100,function(){
			$('.qmj-content-produce-box').stop().animate({'margin-top':'20px'},100,function(){
				$('.qmj-content-produce-box').stop().animate({'margin-top':'10px'},100,function(){
					$('.qmj-content-produce-box').stop().animate({'margin-top':'0px'},100)
				})
			})
		})
    })
});
// 美容项目JS
$(function(){
    $('.qmj-pro1').click(function(){
    	$('.qmj-project1').show();
      	$('.qmj-project').hide();	
      	$('.qmj-project1').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-project1').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-project1').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-project1').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-pro2').click(function(){
    	$('.qmj-project2').show();
      	$('.qmj-project').hide();	
      	$('.qmj-project2').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-project2').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-project2').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-project2').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-pro3').click(function(){
    	$('.qmj-project3').show();
      	$('.qmj-project').hide();	
      	$('.qmj-project3').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-project3').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-project3').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-project3').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-pro4').click(function(){
    	$('.qmj-project4').show();
      	$('.qmj-project').hide();	
      	$('.qmj-project4').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-project4').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-project4').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-project4').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.header-nav').click(function(){
    	$('.qmj-project').show();
      	$('.qmj-project1').hide();
      	$('.qmj-project2').hide();
      	$('.qmj-project3').hide();
      	$('.qmj-project4').hide();	
      	$('.qmj-project').stop().animate({'margin-top':'-20px'},100,function(){
			$('.qmj-project').stop().animate({'margin-top':'20px'},100,function(){
				$('.qmj-project').stop().animate({'margin-top':'10px'},100,function(){
					$('.qmj-project').stop().animate({'margin-top':'0px'},100)
				})
			})
		})
    })
});
$(function(){
    $('.qmj-zreo').click(function(){
    	$('.qmj-project').show();
      	$('.qmj-project1').hide();
      	$('.qmj-project2').hide();
      	$('.qmj-project3').hide();
      	$('.qmj-project4').hide();	
      	$('.qmj-project').stop().animate({'margin-left':'-20px'},100,function(){
			$('.qmj-project').stop().animate({'margin-left':'20px'},100,function(){
				$('.qmj-project').stop().animate({'margin-left':'10px'},100,function(){
					$('.qmj-project').stop().animate({'margin-left':'0px'},100)
				})
			})
		})
    })
});











































