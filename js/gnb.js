$(document).ready(function () {
    let $header = $("#header"),
        $header_offset = $header.offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > 50){
            $header.addClass("on");
        } else {
            $header.removeClass("on");
        }
  
    });
        
    $('.hamBtn').on('click', function(e){
        //e.preventDefault();
        $(this).toggleClass('active');
        $('#aside').toggleClass('menu--open');
        $('#lnb').toggleClass('menu--open');
        $('body').toggleClass('menu--open');
    });
});
        