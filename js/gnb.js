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


   $('#header .inner .navbar-nav li').mouseenter(function(){
        $(this).addClass("on");
        $(this).find('.sub_menu').addClass("on");

      });
      $('#header .inner .navbar-nav li').mouseleave(function(){
          $(this).removeClass("on");
          $(this).find('.sub_menu').removeClass("on");
     
          
      });

      $('#header .inner .navbar-nav').mouseenter(function(){
        $("#header").addClass("on");

      });
      $('#header .inner .navbar-nav').mouseleave(function(){
          $("#header").removeClass("on");
     
          
      });

      AOS.init();

      $("#footer .top").click(function() {
        // Scroll to the top of the page smoothly
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
});
        
