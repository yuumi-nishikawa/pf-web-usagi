$(function(){
    $('#contents>div[id !="tab1"]').hide();

    $(".tabMenu a").click(function(){
        $(this).attr("href");
        $("#contents>div").hide();
        $($(this).attr("href")).show();

        $(".current").removeClass("current");
        $(this).addClass("current");

        $(".tabMenu li").removeClass("active");
        $(this).parent("li").addClass("active");

        return false;
    });

        var h = 0;
        $(".col1").each(function(){
            if($(this).height() > h){
                h = $(this).height();
            }
        });

        $(".col1").css("height", h + "px");

});