$(function(){
	var screenWidth = $('.q-OrderStatus-f2-box').width();
	if(screenWidth > 1100){
		$('.q-OrderStatus-line').css({'width':'29.5%'});
		$('.q-OrderStatus-round_text_box1').css({'left':'-150%'});
	}else if(screenWidth < 1100 && screenWidth > 788) {
		$('.q-OrderStatus-line').css({'width':'28%'});
		$('.q-OrderStatus-round_text_box1').css({'left':'-127%'})
	}else if(screenWidth > 788 && screenWidth < 970){
		$('.q-OrderStatus-line').css({'width':'25%'});
		$('.q-OrderStatus-round_text_box1').css({'left':'-123%'})
	}else{
		$('.q-OrderStatus-line').css({'width':'24%'});
		$('.q-OrderStatus-round_text_box1').css({'left':'-121%'})
	}
})
$(window).resize(function(){
	var screenWidth = $('.q-OrderStatus-f2-box').width();
	if(screenWidth > 1100){
		$('.q-OrderStatus-line').css({'width':'29.5%'});
		$('.q-OrderStatus-round_text_box1').css({'left':'-150%'});
	}else if(screenWidth < 1100 && screenWidth > 788) {
		$('.q-OrderStatus-line').css({'width':'28%'});
		$('.q-OrderStatus-round_text_box1').css({'left':'-127%'});
	}else if(screenWidth > 788 && screenWidth < 970){
		$('.q-OrderStatus-line').css({'width':'25%'});
		$('.q-OrderStatus-round_text_box1').css({'left':'-123%'})
	}else{
		$('.q-OrderStatus-line').css({'width':'24%'});
		$('.q-OrderStatus-round_text_box1').css({'left':'-120%'})
	}
})
















