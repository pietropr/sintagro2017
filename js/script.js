$(document).ready(function() {

    $(".home #parceiros").addClass("active");
    $(".home #participantes .menu a.parceiros").addClass("active");

    function menu_size(){
        if($(document).scrollTop()> 39) {
            $(".site-header").addClass("small");
        } else{
            $(".site-header").removeClass("small");
        }
    }

    $('#masthead .menu-toggle').on('click touchstart', function(e){
        $('.menu-principal-container').toggleClass('toggled');
        e.preventDefault();
    });

    $(window).scroll(function() {
        menu_size();
    });

    //PARCEIROS
    $("#participantes .menu a.parceiros").click(function() {
        $("#participantes .menu a").each(function() {
            var link = $(this).attr("data-toggle");
            $(link).removeClass("active");
            $(this).removeClass("active");

        });
        $(this).addClass("active");
        $("#parceiros").addClass("active");


    });

    //APOIO
    $("#participantes .menu a.apoio").click(function() {
        $("#participantes .menu a").each(function() {
            var link = $(this).attr("data-toggle");
            $(link).removeClass("active");
            $(this).removeClass("active");
        });
        $(this).addClass("active");
        $("#apoio").addClass("active");
    });

    //REALIZACAO
    $("#participantes .menu a.realizacao").click(function() {
        $("#participantes .menu a").each(function() {
            var link = $(this).attr("data-toggle");

            $(link).removeClass("active");
            $(this).removeClass("active");
        });
        $(this).addClass("active");
        $("#realizacao").addClass("active");
    });

    //ORGANIZACAO
    $("#participantes .menu a.organizacao").click(function() {
        $("#participantes .menu a").each(function() {
            var link = $(this).attr("data-toggle");
            $(link).removeClass("active");
            $(this).removeClass("active");
        });
        $(this).addClass("active");
        $("#organizacao").addClass("active");
    });

    //PATROCINIO
    $("#participantes .menu a.patrocinio").click(function() {
        $("#participantes .menu a").each(function() {
            var link = $(this).attr("data-toggle");
            $(link).removeClass("active");
            $(this).removeClass("active");
        });
        $(this).addClass("active");
        $("#patrocinio").addClass("active");
    });


    //Smooth quando clicar nos links #anchor
    $('.home a').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset - 165
        }, 300);
    });



});
