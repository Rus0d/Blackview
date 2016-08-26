'use strict';
$(document).ready(function() {
    
	var ghostButton = $('.ghost_button'),
		windowHeight = $(window).height(),
		footerHeight = $('footer').height(),
		siteHeight = $(document).height();

	ghostButton.on('click', function(){
		$('html, body').animate({scrollTop: 0}, 500);
	});

    function buttonAppear(){

		if (this.scrollTop() > windowHeight){
			ghostButton.addClass('button_appear');
		}
		else {
			ghostButton.removeClass('button_appear');
		}

		if ((this.scrollTop() + windowHeight) >= (siteHeight - footerHeight - 60)){
			ghostButton.addClass('button_absolute');
		}
		else {
			ghostButton.removeClass('button_absolute');
		}

    }

    $(window).scroll(function(){

		buttonAppear.call($(this));

	});

	buttonAppear.call($(window));

});