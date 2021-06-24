window.onload=function(){
	var oPf=document.getElementById('pingfen');
	var aLi=oPf.getElementsByTagName('li');
	var i=0;
	
	for(i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for(i=0;i<aLi.length;i++){
				if(i<=this.index)
				{
					aLi[i].style.background="url(./images/pfsxxx.png) no-repeat 0 0";
					var num = this.index+1;
					if (num == 1) {
						$('.q-HomeDetail-right-section2-scre').html('很差');
					}else if(num == 2){
						$('.q-HomeDetail-right-section2-scre').html('较差');
					}else if(num == 3){
						$('.q-HomeDetail-right-section2-scre').html('还行');
					}else if(num == 4){
						$('.q-HomeDetail-right-section2-scre').html('推荐');
					}else{
						$('.q-HomeDetail-right-section2-scre').html('力荐');
					}
				}
				else
				{
					aLi[i].style.background="url(./images/pf.png) no-repeat 0 0";
				}
			}
		};
		aLi[i].onmousedown=function ()
		{
			var num = this.index+1;
			if (num == 1) {
				$('.q-HomeDetail-right-section2-scre').html('很差');
			}else if(num == 2){
				$('.q-HomeDetail-right-section2-scre').html('较差');
			}else if(num == 3){
				$('.q-HomeDetail-right-section2-scre').html('还行');
			}else if(num == 4){
				$('.q-HomeDetail-right-section2-scre').html('推荐');
			}else{
				$('.q-HomeDetail-right-section2-scre').html('力荐');
			}
		};
	}
};



















