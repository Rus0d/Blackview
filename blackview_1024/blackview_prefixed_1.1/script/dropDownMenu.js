'use strict';
$(document).ready(function() {

    var models = $('.top li').eq(1),
        footerModels = $('.footer_text').eq(1),
        dropDownList = $('.drop_down_container');

    models.on('click', function(){
        $(this).toggleClass('active');
        dropDownList.toggleClass('drop_down_appear');

    });

    footerModels.on('click', function(){
        dropDownList.toggleClass('drop_down_appear');
    });

});