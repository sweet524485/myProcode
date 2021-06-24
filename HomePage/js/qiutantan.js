function moveImg(id,time){
	// 设置初始值
	var i = 0;
	// 设定定时器
	var timer = null;
	// 获取单个轮播的宽度
	var w = $(id+' .move li').width();
	// 复制四倍要轮播的东西
	var clone = $(id+' .move li').clone();
	$(id+' .move').append(clone);
	// 获取两倍的轮播列表个数
	var num = $(id+' .move li').size();
	for (var j = 0; j < num/2; j++) {
		$(id+' .doc').append('<li></li>');
	}
	// 让轮播内部的盒子足够大
	$(id+' .move').css('width',num*w+'px');
	$(id+' .doc li').first().addClass('cur');
	// 自动轮播函数
	function autoRun(){
		i --;
		if (i == -1) {
			$(id+' .move').css({'left':'-'+w*(num/2)+'px'});
			i = num/2-1;
		}
		$(id+' .move').stop().animate({'left':'-'+w*i+'px'},200);
		$(id+' .doc li').eq(i).addClass('cur').siblings('li').removeClass('cur');
	}
	timer = setInterval(autoRun,time);
	$(id+' .move-left').on('click',function(){
		autoRun();
	});
	$(id+' .move-right').on('click',function(){
		i ++;
		if(i == num/2){
			$(id+' .doc li').eq(0).addClass('cur').siblings('li').removeClass('cur');
		}
		if (i == num/2+1) {
			$(id+' .move').css({'left':'0px'});
			i = 1;
		}
		$(id+' .move').stop().animate({'left':'-'+w*i+'px'},200);
		$(id+' .doc li').eq(i).addClass('cur').siblings('li').removeClass('cur');
	});
	$(id+' .doc li').hover(function(){
		var indexNum = $(this).index();
		i = indexNum;
		$(this).addClass('cur').siblings('li').removeClass('cur');
		$(id+' .move').stop().animate({'left':'-'+w*i+'px'},200);
	})
	$(id).hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoRun,time);
	});
}
/*
****单行文本框的得到与失去焦点的边框变化方法
****author：仇郯郯
****用途：用于单行文本框得到与市区焦点边框颜色的变化
****一个参数，即调用的标签id、class或者标签名称
*/
function InputChangeColor(TagName){
	$(TagName).focus(function() {
        $(this).css({ 'border': '1px solid #1CA989', 'box-shadow': '0px 0px 2px #1CA989', '-moz-box-shadow': '0px 0px 2px #1CA989', '-webkit-box-shadow': '0px 0px 2px #1CA989', '-ms-box-shadow': '0px 0px 2px #1CA989' });
    })
    $(TagName).blur(function() {
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
	$(TagName).on("focus", function () {
	    $(NoticeName).html(NoticeTxt);
	});
	$(TagName).on("blur", function () {
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
//点击登录弹出层出现的方法
function ImgShow(){
	$('.alertImg').fadeIn();
	$('.q-Img_centerBox').animate({"width":"1240px","height":"552px","margin-left":"-620px","margin-top":"-276px"}, 500);
}
//点击关闭按钮关闭的方法
function Imgclose(){
	$('.q-Img_centerBox').animate({"width":"0px","height":"0px","margin-left":"0px","margin-top":"0px"}, 500);
	$('.alertImg').delay(500).fadeOut();
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
$(function(){
	//moveImg("#box0",12215000);
	//轮播图列表的鼠标移入效果
	$('.content-con-list').hover(function(){
		$(this).find('.content-con-detail').stop().animate({'opacity':'0.8'},500);
		$(this).find('img').css({'-webkit-transform':'scale(1.5)','-moz-transform':'scale(1.5)','-ms-transform':'scale(1.5)','-o-transform':'scale(1.5)','transform':'scale(1.5)'});
		$(this).addClass($(this).attr('qmj'));
	},function(){
		$(this).find('.content-con-detail').stop().animate({'opacity':'0'},500);
		$(this).find('img').css({'-webkit-transform':'scale(1)','-moz-transform':'scale(1)','-ms-transform':'scale(1)','-o-transform':'scale(1)','transform':'scale(1)'});
		$(this).removeClass($(this).attr('qmj'));
	})
	// 登录按钮的点击效果
	$('.login').click(function(){
		var className = $(this).attr("class");
		if(className == 'login'){
			LoginShow();
		}else{
			loginOut();
		}
	});
	//图片详细点击效果
	$('.ImgAlert').click(function(){
		ImgShow();
		var ImgUrl = $(this).find('.content-con-listImg').attr('qrc');
		$('.q-alert-Images img').attr('src',ImgUrl);
	});
	//图片错号点击效果
	$('.q-Img-del').click(function(){
		Imgclose();
		$('.q-alert-Images img').attr('src','');
	})
	//登录按钮的点击关闭效果
	$('.q-alert-del').click(function(){
		Alertclose();
	});
	//点击用户注册的效果
	$('.register').click(function(){
		LoginText();
	});
	//点击用户返回登录的效果
	$('.backLogin').click(function(){
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
	$('.alert-login').click(function(event) {
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
	$('.alert-register').click(function(event) {
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
	//音乐的点击效果
	$('.muisc-box').click(function(){
		var className = $(this).attr('class');
		if(className == 'muisc-box'){
			$(this).addClass('active');
			$('.muisc-paly').hide();
			$('.muisc-paused').show();
			$('.muisc-paused').css('visibility','visible');
			$('#music').trigger('pause');
		}else{
			$(this).removeClass('active');
			$('.muisc-paused').hide();
			$('.muisc-paly').show();
			$('.muisc-paused').css('visibility','hidden');
			$('#music').trigger('play');
		}
	})
})