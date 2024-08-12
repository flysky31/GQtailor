
$(document).ready(function() {

    //main slide
    var galleryTop = new Swiper('.main_slide', {
        speed:2000,
        effect:"fade",
      //  loop:true,
        navigation: {
            nextEl: ".arrow .swiper-button-next",
            prevEl: ".arrow .swiper-button-prev",
            },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {   
            el: ".pagination_bullet",   
            clickable: true,    
            type : 'bullets',   
            // Bullet Numbering 설정
            // renderBullet: function (index, className) {
            //     return '<span class="' + className + '">' + (index + 1) + "</span>";
            // },
        },
    });
        

    //fraction 
    var pagingSwiper = new Swiper(".main_slide", {
        effect:"fade",
        speed:2000,
      // loop:true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".pagination_fraction",
            type: "fraction",
        },
    });
        
    //Main Swiper로 progress Bar 제어
    galleryTop.controller.control = pagingSwiper;




    //메인 공지
    let notice_Swiper = new Swiper(".box .notice_Swiper", {
      direction: "vertical",
    
      centeredSlides: true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      pagination: false,
      navigation: {
        nextEl: ".no_arrow.swiper-button-next",
        prevEl: ".no_arrow.swiper-button-prev",
      },
    });
  

});




  document.addEventListener("DOMContentLoaded", function () {
    const slideshow = document.getElementById("slideshow");
    const slides = slideshow.getElementsByTagName("li");
    let currentSlideIndex = 0;
    const intervalDuration = 3000; // 변경 간격을 원하는 시간(밀리초)으로 설정
  
    function showSlide(index) {
      // 모든 슬라이드에서 'active' 클래스를 제거
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      // 특정 인덱스의 슬라이드에 'active' 클래스 추가
      slides[index].classList.add("active");
    }
  
    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(currentSlideIndex);
    }
  
    // 초기 슬라이드 표시
    showSlide(currentSlideIndex);
  
    // 일정 시간 간격으로 다음 슬라이드 표시
    setInterval(nextSlide, intervalDuration);
  });
  


//business
$('.business_slide').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          prevArrow: $('.prev_b'),
          nextArrow: $('.next_b'),
          responsive: [
            {
              breakpoint: 640,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
              }
            }
          ]
        });
//need
$('.need_txt').slick({
    arrows:false,
    dots:true,
    slidesToShow: 1,
     responsive: [
            {
              breakpoint: 640,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1,
                fade:true
              }
            }
          ]
});
//value
$('.value_slide').slick({
    dots:true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 2,
    responsive: [
            {
              breakpoint: 640,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0',
                slidesToShow: 1
              }
            }
          ]
});

///scroll
//scroll
var h1 = $('.business').offset().top-200;
var h3 = $('.need').offset().top-350;
// var h4 = $('.comfortable p').eq(0).offset().top-700;
// var h5 = $('.comfortable p').eq(1).offset().top-700;
// var h6 = $('.comfortable p').eq(2).offset().top-700;
// var h7 = $('.comfortable p').eq(2).offset().top-600;

$(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    if(scroll>=h1){
        $('.business .b_img1').addClass('scroll_on');
        $('.business .b_img2').addClass('scroll_on');
        $('.business .b_img3').addClass('scroll_on');
       };
    if(scroll>=h3){
        $('.need_img>ul>li').eq(1).addClass('scroll_on');
        $('.need_img .img_inner li').eq(0).addClass('scroll_on');
        $('.need_img .img_inner li').eq(1).addClass('scroll_on');
        $('.need_txt').addClass('scroll_on');
    }
    // if(scroll>=h4){
    //     $('#contentArea .comfortable p').eq(0).addClass('scroll_on');
    // }
    // if(scroll>=h5){
    //     $('#contentArea .comfortable p').eq(1).addClass('scroll_on');
    // }
    // if(scroll>=h6){
    //     $('#contentArea .comfortable p').eq(2).addClass('scroll_on');
    // }
    // if(scroll>=h7){
    //     $('#contentArea .comfortable .more').addClass('scroll_on');
    // }
});
