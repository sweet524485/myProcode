(function(){

var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;

s=window.innerHeight/500;
ss=250*(1-s);

$('.wrap').css('-webkit-transform','scale('+s+','+s+') translate(0px,-'+ss+'px)');

document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);

$(document).swipeUp(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row != 4) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}	
})

$(document).swipeDown(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}	
})

//$(document).swipeLeft(function(){
//	if (isAnimating) return;
//	last.row = now.row;
//	last.col = now.col;
//	if (last.row>1 && last.row<5 && last.col==1) { now.row = last.row; now.col = 2; pageMove(towards.left);}	
//})
//
//$(document).swipeRight(function(){
//	if (isAnimating) return;
//	last.row = now.row;
//	last.col = now.col;
//	if (last.row>1 && last.row<5 && last.col==2) { now.row = last.row; now.col = 1; pageMove(towards.right);}	
//})

function pageMove(tw){
	var lastPage = ".page-"+last.row+"-"+last.col,
		nowPage = ".page-"+now.row+"-"+now.col;
	
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).removeClass('page-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		
		$(nowPage).addClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
		
		isAnimating = false;
	},600);
}
})();
//ping
var pop_up_note_mode = true;
        var note_id = 1;

        function $$(name) {
            return document.getElementById(name);
        }
        function switchsound() {
            au = $$('bgsound');
            ai = $$('sound_image');
            if (au.paused) {
                au.play();
                ai.src = "images/music_note_big.png";
                pop_up_note_mode = true;
                popup_note();
                $$("music_txt").innerHTML = "??????";
                $$("music_txt").style.visibility = "visible";
                setTimeout(function () { $$("music_txt").style.visibility = "hidden" }, 2500);
            }
            else {
                pop_up_note_mode = false;
                au.pause();
                ai.src = "images/music_note_big.png";
                $$("music_txt").innerHTML = "??????";
                $$("music_txt").style.visibility = "visible";
                setTimeout(function () { $$("music_txt").style.visibility = "hidden" }, 2500);
            }
        }

        function on_pop_note_end(event) {
            note = event.target;

            if (note.parentNode == $$("note_box")) {
                $$("note_box").removeChild(note);
             }
        }

        function popup_note() {
            box = $$("note_box");

            note = document.createElement("span");
            note.style.cssText = "visibility:visible;position:absolute;background-image:url('images/music_note_small.png');width:15px;height:25px";
            note.style.left = Math.random() * 20 + 20;
            note.style.top = "75px";
            this_node = "music_note_" + note_id;
            note.setAttribute("ID", this_node);
            note_id += 1;
            scale = Math.random() * 0.4 + 0.4;
            note.style.webkitTransform = "rotate(" + Math.floor(360 * Math.random()) + "deg) scale(" + scale + "," + scale + ")";
            note.style.webkitTransition = "top 2s ease-in, opacity 2s ease-in, left 2s ease-in";
            note.addEventListener("webkitTransitionEnd", on_pop_note_end);
            box.appendChild(note);

            setTimeout("document.getElementById('" + this_node + "').style.left = '0px';", 100);
            setTimeout("document.getElementById('" + this_node + "').style.top = '0px';", 100);
            setTimeout("document.getElementById('" + this_node + "').style.opacity = '0';", 100);

            if (pop_up_note_mode) {
                setTimeout("popup_note()", 600);
            }
        }        
        // ???????????????
        function playbksound() {
            var audiocontainer = $$('audiocontainer');
            if (audiocontainer != undefined) {
                audiocontainer.innerHTML = '<audio id="bgsound" loop="loop" autoplay="autoplay"> <source src="' + gSound + '" /> </audio>';
            }
           
            var audio = $$('bgsound');
            audio.play();
            sound_div = document.createElement("div");
            sound_div.setAttribute("ID", "cardsound");
            sound_div.style.cssText = "position:fixed;right:20px;top:20px;z-index:50000;visibility:visible;";
            sound_div.onclick = switchsound;
            if (document.body.offsetWidth > 400) {
                bg_htm = "<img id='sound_image' src='images/music_note_big.png'>";
                box_htm = "<div id='note_box' style='height:100px;width:44px;position:absolute;left:-20px;top:-80px'></div>";
            }
            else {
                bg_htm = "<img id='sound_image' width='30px' src='images/music_note_big.png'>";
                box_htm = "<div id='note_box' style='height:100px;width:44px;position:absolute;left:-5px;top:-80px'></div>";
            }
            txt_htm = "<div id='music_txt' style='color:white;position:absolute;left:-40px;top:30px;width:60px'></div>"
            sound_div.innerHTML = bg_htm + box_htm + txt_htm;
            document.body.appendChild(sound_div);
            setTimeout("popup_note()", 100);
        } 
