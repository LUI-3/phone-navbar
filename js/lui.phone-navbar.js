$(document).ready(function(){
	$(".lui_phone_navbar > a").click(function(){

		// CLOSE OPENED WINDOW WITH SAME BUTTON
		if($(this).hasClass("active")){
			// RESET STATE
			$(this).removeClass("active");

			// ENABLE SCROLLING
			if($("html").hasClass("overlay_opened")){
				$("html").removeClass("overlay_opened");
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
			if($("html").hasClass("overlay_opened")){
				$("html").removeClass("overlay_opened");
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
				$("html").addClass("overlay_opened");
				$(".lui_phone_navbar_overlay[data-target="+attr+"]").toggleClass("opened");
			}
		}
	});
});