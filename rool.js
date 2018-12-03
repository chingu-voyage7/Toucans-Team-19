'use strict'

$( document ).ready(function() {
	console.log($(window).height());
	$(window).scroll(function() {
	if ($("#Thirdsection").offset().top > $("#ddd").offset().top)
	{
		$("#ddd").css("left","100%");
	}
	else
	{
		$("#ddd").css("left","90%");
	}
	
	if ($(window).scrollTop() >= ($("#Thirdsection").offset().top))
	{
		$("#firstthird").fadeTo(1000,1);
		$("#secondthird").delay(800).fadeTo(1000,1);
		$("#thirdthird").delay(1600).fadeTo(1000,1);
		
	}
	
});
});

window.scroll({
  top: 100,
  left: 100,
  behavior: 'smooth'
});

//https://stackoverflow.com/questions/379900/fade-in-each-element-one-after-another
//https://stackoverflow.com/questions/4655273/jquery-window-scrolltop-but-no-window-scrollbottom