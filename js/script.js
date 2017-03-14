$(document).ready(function() {

    function menu_size(){
        if($(document).scrollTop()> 39) {
            $(".site-header").addClass("small");
        } else{
            $(".site-header").removeClass("small");
        }
    }

    $(window).scroll(function() {
        menu_size();
    })
});
