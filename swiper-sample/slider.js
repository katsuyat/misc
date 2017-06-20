$(document).ready(function(){
  var galleryTop = new Swiper('.gallery-top', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 10,
      //loopすると下のサムネイルと順番が合わなくなるので注意
      //loop: true,
      keyboardControl: true
    }
  );

  var galleryThumb = new Swiper('.gallery-thumb',{
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 2.0,
    slideToClickedSlide: true
  });

  galleryTop.params.control = galleryThumb;
  galleryThumb.params.control = galleryTop;

});
