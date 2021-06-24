// JavaScript Document
function myRadioBox(){
	$('.radioBox .myradio').click(function(e) {
        var env = $(e.target);
		var radios = env.parent('.radioBox').children('.myradio');
		if(env.hasClass('sel') === false)
		{
			radios.attr('class', 'myradio unsel');
			env.removeClass('unsel');
			env.addClass('sel');
		}
    });
}