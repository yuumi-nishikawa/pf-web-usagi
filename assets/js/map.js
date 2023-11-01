$(function(){

    jQuery( 'img[usemap]' ).rwdImageMaps();

    $('a[href^="#"]'+ 'a,area').click(function(){
        var target = $($(this).attr("href")).offset().top;

        target -= 70;

        $("html, body").animate({scrollTop: target}, 500);

        return false;
    });



});