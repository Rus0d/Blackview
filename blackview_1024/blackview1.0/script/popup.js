'use strict';
$(document).ready(function() {

    var spec = $('.bottom li').eq(1),
        popUpWrapper = $('.popup_wrapper'),
        cross = $('.cross');

    spec.on('click', function(){
        popUpWrapper.show(500);
    });

    cross.on('click', function(){
        popUpWrapper.hide(500);
    });

});