$(function () {

  $('.toggle-button').on('click', function () {
    $('.toggle-brand').toggleClass('open');
    $('.toggle-navbar').toggleClass('open');
  })






  /* our blog slider */
  $('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.our-arrow-l'),
    nextArrow: $('.our-arrow-r'),
    dots: false,
    speed: 300,
    autoplay: false,
    fade: false,
    centerMode: true,
    centerPadding: '0px',
  });
  /* our blog slider */

  /* banner slider */

  $('.banner-slider').slick({
    prevArrow: '<p class="banner-arrow-l"><span class="banner-icons "><a ><i class="fa fa-chevron-left prv-arrow"></i></a></span></p>',
    nextArrow: '<p class="banner-arrow-r"><span class="banner-icons "><a ><i class="fa fa-chevron-right nxt-arrow"></i></a></span></p>',
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
    prevArrow: $('.portfolio-arrow-l'),
    nextArrow: $('.portfolio-arrow-r')
  });
  /* portfolio slider */


  /* testimonial slider */
  $('.testimonial-info-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testimonial-img-slider'
  });
  $('.testimonial-img-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial-info-slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
    prevArrow: $('.testimonial-arrow-l'),
    nextArrow: $('.testimonial-arrow-r')
  });
  /* testimonial slider */

  /* brand slider */
  $('.brand-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
    prevArrow: $('.brand-arrow-l'),
    nextArrow: $('.brand-arrow-r')
  });
  /* brand slider */

    /* our team slider */
  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: false,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: $('.our-arrow-l'),
    nextArrow: $('.our-arrow-r')

  });
  /* our team slider */







})