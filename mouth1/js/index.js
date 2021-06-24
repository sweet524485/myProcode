// demo说明js
$(function(){
	// setInterval(function(){
	$('.header-context').animate({'left':'-10px'},3000,function(){
		$('.header-context').animate({'left':'0'},3000,function(){
			$('.header-context').animate({'left':'10px'},3000,function(){
				$('.header-context').animate({'left':'0'},3000)
			})
		})
	})
	var autoRun = function(){
		$('.header-context').animate({'left':'-10px'},3000,function(){
			$('.header-context').animate({'left':'0'},3000,function(){
				$('.header-context').animate({'left':'10px'},3000,function(){
					$('.header-context').animate({'left':'0'},3000)
				})
			})
		})
	}
	var timer = setInterval(autoRun,12000);//设立定时器
})
// 轮播图JS
$(function(){
	var c = 0;
	var autoRun = function(){
		c++;//变量自增
		c = (c==4)?0:c;
		// 让c号图片显示，兄弟图片隐藏
		$('.index-con img').eq(c).fadeIn(200).siblings('img').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('.index-ul li').eq(c).addClass('index-li-cur').siblings('li').removeClass('index-li-cur');
	}
	var timer = setInterval(autoRun,2000);//设立定时器
	// 给li加鼠标移入事件
	$('.index-ul li').mouseover(function() {
		// 清理定时器
		clearInterval(timer);
		// 获得当前鼠标移入的li的序号
		c = $(this).index();
		// 让c号图片显示，兄弟图片隐藏
		$('.index-con img').eq(c).fadeIn(200).siblings('img').hide();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('.index-ul li').eq(c).addClass('index-li-cur').siblings('li').removeClass('index-li-cur');
	});
	$('.index-con img').mouseover(function() {
		clearInterval(timer);
	});
	// 给li加鼠标移出效果
	$('.index-ul li').mouseout(function() {
		timer = setInterval(autoRun,2000);//设立定时器
	});
	$('.index-con img').mouseout(function() {
		timer = setInterval(autoRun,2000);//设立定时器
	});
})
// 导航条的点击效果
$(function() {
	$('.nav_list').click(function() {
		$(this).addClass('nav_list_cur').siblings('.nav_list').removeClass('nav_list_cur');
	});
})
$(function() {
	$('.bottom-nav').click(function() {
		$(this).addClass('bottom-nav-cur').siblings('.bottom-nav').removeClass('bottom-nav-cur');
	});
})
//前端项目鼠标的移入效果
$(function(){
    $(function(){
        $('.content-list').mouseenter(function(e){
            //获得移入方向
            var direction=hd_direction($(this),e);
            //改变盖子的位置
            switch(direction){
                case 'left':$(this).find('.content-list-con').css({'left':'-280px','top':'0px'});
                break;
                case 'top':$(this).find('.content-list-con').css({'left':'0','top':'-280px'});
                break;
                case 'right':$(this).find('.content-list-con').css({'left':'280px','top':'0px'});
                break;
                case 'bottom':$(this).find('.content-list-con').css({'left':'0','top':'280px;'})
            }
            //让盖子运动
            $(this).find('.content-list-con').stop().animate({'left':0,'top':0},300);
        }).mouseleave(function(e){
            //获得移出方向
            var direction=hd_direction($(this),e);
            //改变盖子的位置
            switch(direction){
                case 'left':$(this).find('.content-list-con').stop().animate({'left':'-280px','top':'0px'},200);
                break;
                case 'top':$(this).find('.content-list-con').stop().animate({'left':'0px','top':'-280px'},100);
                break;
                case 'right':$(this).find('.content-list-con').stop().animate({'left':'280px','top':'0px'},200);
                break;
                case 'bottom':$(this).find('.content-list-con').stop().animate({'left':'0px','top':'280px'},200);
                break;
            }
        })
    })
})
// 工作中项目模块的JS效果
$(function(){
	$(".content-work-list").hover(function(){
		$(this).addClass("animated swing");
		$(this).find(".content-work-context").stop().fadeTo(500,0.7);
	},function(){
		$(this).removeClass("animated swing");
		$(this).find(".content-work-context").stop().fadeTo(500,0);
	});
});
// 头部鼠标滚动事件
$(function(){ 
	$(document).scroll(function() {
	 	var top=$(document).scrollTop();
	 	if (top<=605) {
	 		$('.nav_list1').addClass('nav_list_cur').siblings('.nav_list').removeClass('nav_list_cur');
		$('.bottom-nav1').addClass('bottom-nav-cur').siblings('.bottom-nav').removeClass('bottom-nav-cur');
	 		$('.nav_list1').addClass('index-left-nav-cur').siblings('.index-left-nav').removeClass('index-left-nav-cur');
	 	}
		if (top>1160) {
	 		$('.nav_list2').addClass('nav_list_cur').siblings('.nav_list').removeClass('nav_list_cur');
	 		$('.bottom-nav2').addClass('bottom-nav-cur').siblings('.bottom-nav').removeClass('bottom-nav-cur');
			$('.nav_list2').addClass('index-left-nav-cur').siblings('.index-left-nav').removeClass('index-left-nav-cur');
	 	}
	 	if (top>4010) {
	 		$('.nav_list3').addClass('nav_list_cur').siblings('.nav_list').removeClass('nav_list_cur');
	 		$('.bottom-nav3').addClass('bottom-nav-cur').siblings('.bottom-nav').removeClass('bottom-nav-cur');
	 		$('.nav_list3').addClass('index-left-nav-cur').siblings('.index-left-nav').removeClass('index-left-nav-cur');
	 	}
    	if (top>8920) {
	 		$('.nav_list4').addClass('nav_list_cur').siblings('.nav_list').removeClass('nav_list_cur');
	 		$('.bottom-nav4').addClass('bottom-nav-cur').siblings('.bottom-nav').removeClass('bottom-nav-cur');
	 		$('.nav_list4').addClass('index-left-nav-cur').siblings('.index-left-nav').removeClass('index-left-nav-cur');
	 	}
	 });
});
// 首页头像的自动触发
$(function () {
	$('.index-con').on('click',function() {
		$('.index-con').css({'top':'-70%' , 'left': '39%'});
		$('.index-con').animate({'top':'45%' , 'left': '2%'}, 2000).animate({'top':'45%' , 'left': '75%'}, 1000).animate({'top':'-20%' , 'left': '39%'}, 1000).animate({'top':'2%' , 'left': '39%'}, 500)
	})
	$('.index-con').trigger('click');  //主动触发事件
})
//首页右侧固定JS
$(function (){
	var quickTop = 150;
	$(function(){
		$(document).scroll(function(){
			var scrollTop = $(this).scrollTop() 
		    if(scrollTop > quickTop){
				$(".index-left-box").animate({top:(scrollTop+150)+"px"}, 50);
			}else{
				$(".index-left-box").animate({top:quickTop+"px"}, 50);
		    }

	    });
    });
})
$(function(){
	//滚动到活动介绍
	$('.nav_list1').click(function(){

		$('html,body').stop().animate({'scrollTop':'0px'},1300);
	});
	//滚动到下载APP
	$('.nav_list2').click(function(){

		$('html,body').stop().animate({'scrollTop':'1180px'},1300);
	});
	//滚动到积分任务
	$('.nav_list3').click(function(){

		$('html,body').stop().animate({'scrollTop':'4170px'},1300);
	});
	//滚动到资格查看
	$('.nav_list4').click(function(){

		$('html,body').stop().animate({'scrollTop':'9970px'},1300);
	});
})
// 欢迎字体
$(function(){
	// alert(1);
	// 字体运动
	var timer = setInterval(function(){
		$('.section_group .b').stop(true,true).animate({'top':'160px'},500).animate({'top':'180px'},500);
	},1000);
	// 图块运动
	$('.section_group .show').hover(function(){
		// clearInterval(timer);
		// $(this).find('.b').css({'top':'195px'});
		$(this).find('.a').stop().animate({'height':0},200);
		$(this).find('.b').stop(true,true).animate({'width':0},100);
		$(this).animate({'height':'220px','width':'220px','margin-top':'15px'});
	},function(){
		$(this).find('.a').stop().animate({'height':'220px',},300);
		$(this).find('.b').stop(true,true).animate({'width':'220px'},100);
		$(this).animate({'height':'225px','width':'225px','margin-top':'25px'});
	})
})
//逐条加载方法
function addActive(tagName,className){
	var win_h=$(window).height()*0.5;
	var t=$(tagName).offset().top;
	var top=$(window).scrollTop(); 	
	if(top>t-win_h){
		$(tagName).addClass(className);	
	}else{
		$(tagName).removeClass(className);
	}
}
function addActive2(tagName1,tagName2,className1,className2){
	var win_h=$(window).height()*0.5;
	var t=$(tagName1).offset().top;
	var top=$(window).scrollTop(); 	
	if(top>t-win_h){
		$(tagName1).addClass(className1);
		$(tagName2).fadeOut(300);
		$(tagName2).removeClass(className2);	
	}else{
		$(tagName1).removeClass(className1);
		$(tagName2).fadeIn(300);
		$(tagName2).addClass(className2);	
	}
}
function tableActive(tagName,className){
	var t=$(tagName).offset().top;
	var top=$(window).scrollTop(); 	
	if(top>t-3500){
		$(tagName).addClass(className);	
	}
}
//逐条加载方法调用
$(function(){
	$(window).scroll(function(){
		addActive2('.title-left1','.thank-text1','title-left_cur','thank-text_cur');
		addActive2('.title-left2','.thank-text2','title-left_cur','thank-text_cur');
		addActive2('.title-left3','.thank-text3','title-left_cur','thank-text_cur');
		addActive2('.title-left4','.thank-text4','title-left_cur','thank-text_cur');
		addActive2('.title-left5','.thank-text5','title-left_cur','thank-text_cur');
		tableActive('.table','table_cur');
		tableActive('.myLogo','myLogo_cur');
		addActive('.title-right1','title-right_cur');
		addActive('.title-right2','title-right_cur');
		addActive('.title-right3','title-right_cur');
		addActive('.title-right4','title-right_cur');
		addActive('.title-right5','title-right_cur');
	})
})
//点击登录弹出层出现的方法
function LoginShow(){
	$('.alert').fadeIn();
	$('.q-alert_centerBox').animate({"width":"600px","height":"360px","margin-left":"-300px","margin-top":"-180px"}, 500);
}
//点击关闭按钮关闭的方法
function Alertclose(){
	$('.q-alert_centerBox').animate({"width":"0px","height":"0px","margin-left":"0px","margin-top":"0px"}, 500);
	$('.alert').delay(500).fadeOut();
}
//点击用户注册文字效果
function LoginText(){
	$(".newRegister").show();
	$(".newLogin").hide();
	$(".q-alert-title").text("仇郯郯个人网站注册");
	$('.q-alert_centerBox').animate({"width":"600px","height":"400px","margin-left":"-300px","margin-top":"-200px"}, 500);
}
//用户返回登录方法
function BackLogin(){
	$(".newRegister").hide();
	$(".newLogin").show();
	$(".q-alert-title").text("仇郯郯个人网站登录");
	$('.q-alert_centerBox').animate({"width":"600px","height":"360px","margin-left":"-300px","margin-top":"-180px"}, 500);
}
/*
****单行文本框的得到与失去焦点的边框变化方法
****author：仇郯郯
****用途：用于单行文本框得到与市区焦点边框颜色的变化
****一个参数，即调用的标签id、class或者标签名称
*/
function InputChangeColor(TagName){
	$(TagName).live('focus', function() {
        $(this).css({ 'border': '1px solid #1CA989', 'box-shadow': '0px 0px 2px #1CA989', '-moz-box-shadow': '0px 0px 2px #1CA989', '-webkit-box-shadow': '0px 0px 2px #1CA989', '-ms-box-shadow': '0px 0px 2px #1CA989' });
    })
    $(TagName).live('blur', function() {
        $(this).css({ 'border': '1px solid #C8C8C8', 'box-shadow': 'inset 0 2px 2px rgba(59,163,84,0.075)', '-moz-box-shadow': 'inset 0 2px 2px rgba(59,163,84,0.075)', '-webkit-box-shadow': 'inset 0 2px 2px rgba(59,163,84,0.075)', '-ms-box-shadow': 'inset 0 2px 2px rgba(59,163,84,0.075)' });
    })
}
/*
****按钮鼠标移入移出的淡入淡出效果
****author：仇郯郯
****用途：按钮鼠标移入移出的淡入淡出给用户一个明显区别
****一个参数，即调用的标签id、class或者标签名称
*/
function BtnChangeBg(TagName){
	$(TagName).mouseenter(function (event) {
		$(this).css({ 'filter': 'alpha(opacity:90)', 'opacity': '0.9', 'cursor': 'pointer' });
	});
	$(TagName).mouseleave(function (event) {
		$(this).css({ 'filter': 'alpha(opacity:100)', 'opacity': '1' });
	});
}
/*
****文本框提示的验证实例
****author：仇郯郯
****用途：用于文本框的提示词
****三个参数
****TagName：文本框的名字
****NoticeName：错误提示框的名字
****NoticeTxt：提示的文字说明
*/
function NoticeTest(TagName,NoticeName,NoticeTxt){
	$(TagName).bind("focus", function () {
	    $(NoticeName).html(NoticeTxt);
	});
	$(TagName).bind("blur", function () {
	    $(NoticeName).html("");
	});
}
 /*
****只验证不为空的方法
****author：仇郯郯
****用途：文本框简单验证，只要用户输入不为空即可通过
****三个参数（要验证的文本框，提示错误框，提示词）
****InputName：要验证的文本框
****NoticeTxt：提示错误框
****NoticeContent：提示词
*/
function UserTest(InputName,NoticeTxt,NoticeContent) {
    var txt_value = $(InputName).val();
    if (txt_value == "") {
        $(NoticeTxt).html(NoticeContent);
        $(InputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
        $(InputName).parent().addClass('error');
    } else {
        $(NoticeTxt).html("");
        $(InputName).parent().removeClass('error');
    }
}
/*
****特殊验证的方法
****author：仇郯郯
****用途：文本框特殊验证
****五个参数（要验证的文本框，提示错误框，提示词）
****InputName：要验证的文本框
****ErrorBox：提示错误框
****NoticeTxt1：不能为空的提示词
****NoticeTxt2：验证错误的提示词
****Rule：验证规则
*/
function PassTest(InputName, ErrorBox, NoticeTxt1, NoticeTxt2, Rule) {
    var txt_value = $(InputName).val();
    if (txt_value == "") {
        $(ErrorBox).html(NoticeTxt1);
        $(InputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
        $(InputName).parent().addClass('error'); 
    } else if (!(Rule.test(txt_value))) {
        $(ErrorBox).html(NoticeTxt2);
        $(InputName).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
        $(InputName).parent().addClass('error');
    } else {
        $(ErrorBox).html("");
        $(InputName).parent().removeClass('error');
    }
}
/*
****特殊验证之确认密码的方法
****author：仇郯郯
****用途：文本框确认密码验证
****五个参数（要验证的文本框，提示错误框，提示词）
****InputName1：确认密码框
****InputName2：上一级的密码框
****ErrorBox：提示错误框
****NoticeTxt1：不能为空的提示词
****NoticeTxt2：密码不一致的提示词
*/
function ConfirmPassword(InputName1, InputName2, ErrorBox, NoticeTxt1, NoticeTxt2) {
    var txt_value1 = $(InputName1).val();
    var txt_value2 = $(InputName2).val();
    if (txt_value1 == "") {
        $(ErrorBox).html(NoticeTxt1);
        $(InputName1).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
        $(InputName1).parent().addClass('error');
    } else if (txt_value1 != txt_value2) {
        $(ErrorBox).html(NoticeTxt2);
        $(InputName1).css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
        $(InputName1).parent().addClass('error');
    } else {
        $(ErrorBox).html("");
       	$(InputName1).parent().removeClass('error');
    }
}
//声明存放用户名和密码的数组
//---临时存放
var UserName = ["仇郯郯"];
var PassWord = ["123456"];
//登录用户匹配方法
function Logining(){
	var User = $(".loginUserName").val();
	var Pass = $(".loginPass").val();
	$(UserName).each(function(i, item) {
		if(User != item && Pass != PassWord[i]){
			$('.loginUserName').css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
			$('.loginUserError').html("用户名不存在！");
		}else if(User == item && Pass != PassWord[i]){
			$('.loginPass').css({ 'border': '1px solid #D88E8F', 'box-shadow': '0px 15px 30px #FFE7E7 inset', '-moz-box-shadow': '0px 15px 30px #FFE7E7 inset', '-webkit-box-shadow': '0px 15px 30px #FFE7E7 inset' });
			$('.loginPassError').html("密码输入有误！")
		}else if(User == item && Pass == PassWord[i]){
			$('.loginUserName').css({ 'border': '1px solid #C8C8C8', 'box-shadow': 'inset 0 2px 2px rgba(59,163,84,0.075)', '-moz-box-shadow': 'inset 0 2px 2px rgba(59,163,84,0.075)', '-webkit-box-shadow': 'inset 0 2px 2px rgba(59,163,84,0.075)', '-ms-box-shadow': 'inset 0 2px 2px rgba(59,163,84,0.075)' });
			$('.loginUserError').html("");
			Alertclose();
			$(".admin").text(User);
			$(".login").addClass('loginOut').text("退出");
		}
	});
}
//注册成功的方法
function registerSuccess(){
	var registerN = $(".registerUser").val();
	var registerP = $(".registerConfirmPass").val();
	UserName.push(registerN);
	PassWord.push(registerP);
	BackLogin();
}
//退出的方法
function loginOut(){
	$('.admin').text("游客，请");
	$('.login').text("登录");
	$(".login").removeClass('loginOut')
}
// 欢迎的自动触发
$(function () {
	$('#jd').on('click',function() {
		$('#jd').css({'margin-top':'-600px'});
		$('#jd').animate({'margin-top':'100px'}, 4000).animate({'margin-top':'-300px'}, 3000).animate({'margin-top':'100px'}, 1000).animate({'margin-top':'0px'}, 1000);
	})
	$('#jd').trigger('click');  //主动触发事件
	// 登录按钮的点击效果
	$('.login').on('click',function(){
		var className = $(this).attr("class");
		if(className == 'login'){
			LoginShow();
		}else{
			loginOut();
		}
	});
	//登录按钮的点击关闭效果
	$('.q-alert-del').on('click',function(){
		Alertclose();
	});
	//点击用户注册的效果
	$('.register').on('click',function(){
		LoginText();
	});
	//点击用户返回登录的效果
	$('.backLogin').on('click',function(){
		BackLogin();
	});
	//单行文本框的得到与失去焦点的边框变化方法调用
	InputChangeColor('.loginList-input');
	//按钮鼠标移入移出的淡入淡出效果方法调用
	BtnChangeBg('.alert-btn');
	//文本框提示的验证
	NoticeTest('.loginUserName','.loginUserError','<span style="color:#999;">用户名大于1个字符</span>');
	NoticeTest('.registerUser','.registerUserError','<span style="color:#999;">用户名大于1个字符</span>');
	NoticeTest('.loginPass','.loginPassError','<span style="color:#999;">密码为大于6的字符</span>');
	NoticeTest('.registerPass','.registerPassError','<span style="color:#999;">密码为大于6的字符</span>');
	NoticeTest('.registerConfirmPass','.registerConfirmNotice','<span style="color:#999;">请保持密码一致</span>');
	//登录时验证
	$('.alert-login').live('click', function(event) {
	    UserTest('.loginUserName','.loginUserError','用户名不能为空');
	    PassTest('.loginPass', '.loginPassError', '密码不能为空', '密码格式不正确', /^[\w\W]{6,}$/);
	    var curName = 0;
	    $('.newLogin').find('.loginList').each(function() {
	    	var className = $(this).attr('class');
	    	if(className == 'loginList error'){
	    		curName ++;
	    	}
	    	if(curName == 0){
	    		//登录成功的方法调用
	        	Logining();
	    	}
	    });
	
	})
	//用户注册验证
	$('.alert-register').live('click', function(event) {
	    UserTest('.registerUser','.registerUserError','用户名不能为空');
	    PassTest('.registerPass', '.registerPassError', '密码不能为空', '密码格式不正确', /^[\w\W]{6,}$/);
	    ConfirmPassword('.registerConfirmPass','.registerPass','.registerConfirmNotice', '确认密码不为空', '两次密码不一致');
	    var curI = 0;
	    $('.newRegister').find('.loginList').each(function() {
	    	var className = $(this).attr('class');
	    	if(className == 'loginList error'){
	    		curI ++;
	    	}
	    	if(curI == 0){
	    		//注册成功的方法调用
	    		registerSuccess();
	    	}
	    });
	
	})
})











