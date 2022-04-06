$(function(){

    $('.toggle-button').on('click', function () {
  $('.toggle-brand').toggleClass('open');
  $('.toggle-navbar').toggleClass('open');
 })

 

 /* banner slider */

    $('.banner-slider').slick({
        prevArrow: '<p class="banner-arrow-l"><span class="banner-icons "><a href="#"><i class="fa fa-chevron-left prv-arrow"></i></a></span></p>',
        nextArrow: '<p class="banner-arrow-r"><span class="banner-icons "><a href="#"><i class="fa fa-chevron-right nxt-arrow"></i></a></span></p>',
        dots: false,
        autoplay: true,
        speed: 1000,
        fade: true,
        
        
        
    })
 
				
 /* banner slider */

 /* service slider */
     $('.service-slider').slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
         
    });
 /* service slider */

 /* portfolio slider */
 $('.portfolio-slider').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
         
    });
 /* portfolio slider */





})


