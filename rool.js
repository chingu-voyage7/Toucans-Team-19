'use strict'

$( document ).ready(function() { 	  
	/*$(window).scroll(function() {
	if ($(window).scrollTop() >= ($("#Thirdsection").offset().top))
	{
		$("#firstthird").fadeTo(1000,1);
		$("#secondthird").delay(800).fadeTo(1000,1);
		$("#thirdthird").delay(1600).fadeTo(1000,1);
		
	}*/
	//window.requestAnimationFrame(step)	
	//$("changewidth").css("width",$("changewidth").height() * 0.95);
});


function myF()
{
	window.scroll({
		top: 0,
		behavior: 'smooth'
	})
}
//https://stackoverflow.com/questions/379900/fade-in-each-element-one-after-another
//https://stackoverflow.com/questions/4655273/jquery-window-scrolltop-but-no-window-scrollbottom
//https://editor.method.ac/  <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->