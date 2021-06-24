// 按钮效果
$(function () {
    $('.btn').mouseenter(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:80)', 'opacity': '0.8', 'cursor': 'pointer' });
    });
    $('.btn').mouseleave(function (event) {
        $(this).css({ 'filter': 'alpha(opacity:100)', 'opacity': '1' });
    });
});
//tab切换
$(function(){
	$('.q-HomeOut-nav').click(function(){
		var c = $(this).index();
		$(this).addClass('q-HomeOut-nav-cur').siblings('.q-HomeOut-nav').removeClass('q-HomeOut-nav-cur');
		$('.q-HomeOut-list').eq(c).show().siblings('.q-HomeOut-list').hide();
	});
})
//热门图书鼠标的移入效果
$(function () {
    $('.q-Home-f2-book-list').live('mouseenter', function (e) {
        //获得移入方向
        var direction = hd_direction($(this), e);
        //改变盖子的位置
        switch (direction) {
            case 'left': $(this).find('.q-Home-f2-book-list-hide-box').css({ 'left': '-118px', 'top': '84px' });
                break;
            case 'top': $(this).find('.q-Home-f2-book-list-hide-box').css({ 'left': '0', 'top': '-75px' });
                break;
            case 'right': $(this).find('.q-Home-f2-book-list-hide-box').css({ 'left': '118px', 'top': '84px' });
                break;
            case 'bottom': $(this).find('.q-Home-f2-book-list-hide-box').css({ 'left': '0', 'top': '163px' })
        }
        //让盖子运动
        $(this).find('.q-Home-f2-book-list-hide-box').stop().animate({ 'left': 0, 'top': '86px' }, 300);
    }).live('mouseleave', function (e) {
        //获得移出方向
        var direction = hd_direction($(this), e);
        //改变盖子的位置
        switch (direction) {
            case 'left': $(this).find('.q-Home-f2-book-list-hide-box').stop().animate({ 'left': '-118px', 'top': '84px' }, 200);
                break;
            case 'top': $(this).find('.q-Home-f2-book-list-hide-box').stop().animate({ 'left': '0', 'top': '-75px' }, 100);
                break;
            case 'right': $(this).find('.q-Home-f2-book-list-hide-box').stop().animate({ 'left': '118px', 'top': '84px' }, 200);
                break;
            case 'bottom': $(this).find('.q-Home-f2-book-list-hide-box').stop().animate({ 'left': '0', 'top': '163px' }, 200);
                break;
        }
    })
})
//二楼热门图书 鼠标移入和移出效果
$(function () {
    $('.q-Home-f2-book-list').live('mouseover', function () {
        $(this).css('border', '1px solid #00AED1');
        $(this).find('.q-Home-f2-list-book-face img').css({ 'opacity': '0.80', 'filter': 'alpha(opacity=80)' });
    });
    $('.q-Home-f2-book-list').live('mouseout', function () {
        $(this).css('border', '1px solid #E7E7E7');
        $(this).find('.q-Home-f2-list-book-face img').css({ 'opacity': '1', 'filter': 'alpha(opacity=100)' });
    });
})
//收藏新的切换图片
$(function(){
    $('.q-HomeOut-save').toggle(function() {
        $(this).css({'background':'url(./images/collect-xheart.png) no-repeat'})
    }, function() {
        $(this).css({'background':'url(./images/collect-wheart.png) no-repeat'})
    }); 
})







