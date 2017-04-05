$(document).ready(function(){

	/*$("body").addEventListener('touchmove',function(e){
		if($("body").hasClass("noscroll")){
			e.preventDefault();
		}
	});
*/
	/*$('body').on('touchmove', function (e) {
		if (!$('.scrollable').has($(e.target)).length) e.preventDefault();
	});*/


	$(".lui_phone_navbar > a").click(function(){

		// CLOSE OPENED WINDOW WITH SAME BUTTON
		if($(this).hasClass("active")){
			// RESET STATE
			$(this).removeClass("active");

			// ENABLE SCROLLING
			if($("html").hasClass("noscroll")){
				$("html").removeClass("noscroll");
			}

			// CLOSE ALL OPENED WINDOWS
			$(".lui_phone_navbar_overlay.opened").each(function(){
				$(this).removeClass("opened");
			});
		}
		// CLOSE OPENED WITH DIFFERENT BUTTON + MAKE ACTIVE
		else {
			// RESET STATE
			$(this).siblings().removeClass("active");

			// ENABLE SCROLLING
			if($("html").hasClass("noscroll")){
				$("html").removeClass("noscroll");
			}
			// CLOSE ALL OPENED WINDOWS
			$(".lui_phone_navbar_overlay.opened").each(function(){
				$(this).removeClass("opened");
			});

			// SET ACTIVE
			$(this).addClass("active");

			var attr = $(this).attr("data-target");
			// IF LINK OPENS WINDOW, DISABLE BODY SCROLL
			if(attr){
				$("html").addClass("noscroll");
				$(".lui_phone_navbar_overlay[data-target="+attr+"]").toggleClass("opened");
			}
		}
	});
});