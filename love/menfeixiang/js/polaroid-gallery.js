//全局的图片资源
var imgArr = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg", "./img/6.jpg", "./img/7.jpg", "./img/8.jpg", "./img/9.jpg", "./img/10.jpg","./img/11.jpg", "./img/12.jpg", "./img/13.jpg", "./img/14.jpg", "./img/15.jpg", "./img/16.jpg", "./img/17.jpg", "./img/18.jpg", "./img/19.jpg", "./img/20.jpg","./img/21.jpg", "./img/22.jpg", "./img/23.jpg","./img/19.jpg", "./img/24.jpg","./img/25.jpg", "./img/26.jpg", "./img/27.jpg","./img/19.jpg", "./img/20.jpg","./img/28.jpg", "./img/29.jpg", "./img/30.jpg","./img/31.jpg", "./img/32.jpg","./img/33.jpg", "./img/34.jpg", "./img/35.jpg","./img/36.jpg", "./img/37.jpg","./img/38.jpg", "./img/39.jpg", "./img/40.jpg"];
//动画效果
var moveUi = ["bounce", "rubberBand", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "swing", "rotateIn", "bounce", "rubberBand", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "swing", "rotateIn", "bounce", "rubberBand", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "swing", "rotateIn",, "bounce", "rubberBand", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "swing", "rotateIn"];
//图片的高
var imgH = 200;
//自增变量
var i = 0;
//图片的个数
var leg = '';
//动画的效果
var moveNum = '';
//屏幕的宽度
var w = '';
//屏幕的高度
var h = '';
//图片的横坐标位置
var pLeftArr = '';
//图片的纵坐标的位置
var ptopArr = '';
//获取图片的旋转角度
var degArr = '';
//动画数组的哪一个
var moveArr = '';
//全局变量
var flag = false;
/**参数说明：
 * 函数说明：产生n ~ m个不重复随机数，返回值为数组
 * num 要产生多少个随机数
 * from 产生随机数的最小值
 * to 产生随机数的最大值
 */
function createRandom(num ,from ,to ){
    var arr=[];
    for(var i=from;i<=to;i++){
        arr.push(i);
    }
    arr.sort(function(){
        return 0.5-Math.random();
    });
    arr.length=num;
    return arr;
}
//动态效果
function moving(){
	//屏幕的宽度
	w = $(window).width();
	//屏幕的高度
	h = $(window).height();
	//图片的横坐标位置
	pLeftArr = createRandom(leg ,0 , w-imgH);
	//图片的纵坐标的位置
	ptopArr = createRandom(leg ,0 , h-imgH);
	//获取图片的旋转角度
    degArr = createRandom(leg , -90 , 90);
	//html模板
	var tmpHtml = '';
	if(!flag){
		//遍历数组
		$(imgArr).each(function(i,item){
			tmpHtml += '<div class="figure" id="' + i + '" style="background:#ffffff;margin-left:'+pLeftArr[i]+'px;margin-top:'+ptopArr[i]+'px;-webkit-transform:rotate('+degArr[i]+'deg);-moz-transform:rotate('+degArr[i]+'deg);-ms-transform:rotate('+degArr[i]+'deg);-o-transform:rotate('+degArr[i]+'deg);transform: rotate('+degArr[i]+'deg);">' +
	                		'<img src="'+item+'" alt="'+item+'" style="height:'+imgH+'px;"/>' +
	               	   '</div>';
		});
		$('#gallery').html(tmpHtml);
		$('#'+i+' img').load(function(){
			ming();
			flag = true;
		});
	}else{
		i++;
		if(i == leg){
			i = 0;
		}
		$('.figure').each(function(j,item){
			if(j != i){
				$(item).stop().animate({'margin-left':pLeftArr[j]+'px', 'margin-top':ptopArr[j]+'px'},200).css({'zIndex':'1','background':'#ffffff','webkitTransform':'rotate('+degArr[j]+'deg)','mozTransform':'rotate('+degArr[j]+'deg)','msTransform':'rotate('+degArr[j]+'deg)','oTransform':'rotate('+degArr[j]+'deg)','transform':'rotate('+degArr[j]+'deg)'});
			}else{
				ming();
			}
		});
	}
	function ming(){
		var imgWidth = $('#'+i+' img').width();
		var imgHeight = $('#'+i+' img').height();
		if(imgWidth >= imgHeight+100){
			$('#'+i+' img').css({'width':(h+120)+'px','height':'auto'}).parents().siblings('div').find('img').css({'height':imgH+'px','width':'auto'});
		}else{
			$('#'+i+' img').css({'height':(h-120)+'px','width':'auto'}).parents().siblings('div').find('img').css({'height':imgH+'px','width':'auto'});
		}
		var bigW = $('#'+i).width()+20;
		var bigH = $('#'+i).height()+20;
		var leftW = (w-bigW)/2;
		var topH = (h- bigH)/2;
		//document.title = moveUi[moveArr[i]];
		$('#'+i).addClass(moveUi[moveArr[i]]).css({'background':'url(./img/imgBg.jpg)','zIndex':'10','margin-top':topH+'px','margin-left':leftW+'px','webkitTransform':'rotate(0deg)','mozTransform':'rotate(0deg)','msTransform':'rotate(0deg)','oTransform':'rotate(0deg)','transform':'rotate(0deg)'}).siblings().attr('class', 'figure');
	}
}
//页面加载完成执行
$(function(){
	//屏幕的宽度
	w = $(window).width();
	//屏幕的高度
	h = $(window).height();
	//图片的个数
	leg = imgArr.length;
	//动画的效果
	moveNum = moveUi.length;
	//动画数组的哪一个
	moveArr = createRandom(leg , 0 , moveNum -1);
	//动态效果
	moving();
	setInterval(function(){
		moving();
	},4000);
	//下雪效果
    createSnow('', 50);
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
	});
});

