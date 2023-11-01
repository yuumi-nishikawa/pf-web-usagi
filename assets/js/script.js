$(function(){
    var btn = $('.toTop');

    $(window).on('load scroll', function(){
        if($(this).scrollTop() > 100) {
        btn.addClass('active');
        }else{
        btn.removeClass('active');
        }
    });

    $(window).on('load scroll', function(){
        var height = $(document).height(),
            position = window.innerHeight + $(window).scrollTop(),
            footer = $('footer').height();
        if ( height - position  < footer ){
        btn.addClass('absolute');
        } else {
        btn.removeClass('absolute');
        }
    });

    $(".toTop img").click(function(){
        $("html,body").animate({scrollTop:0},500);
    });

    $(".openbtn").click(function () {
        $(this).toggleClass('active');
        $("#g-nav").toggleClass('panelactive');
    });

    $("#g-nav a").click(function () {
        $(".openbtn").removeClass('active');
        $("#g-nav").removeClass('panelactive');
    });


});