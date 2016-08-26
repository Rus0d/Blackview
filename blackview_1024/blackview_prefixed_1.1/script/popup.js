'use strict';
$(document).ready(function() {

    var spec = $('.bottom li').eq(1),
        popUpWrapper = $('.popup_wrapper'),
        body = $('body'),
        cross = $('.cross');

    spec.on('click', function(){
        popUpWrapper.show(500);
        body.addClass('noscroll');
    });

    cross.on('click', function(){
        popUpWrapper.hide(500);
		body.removeClass('noscroll');
    });

});