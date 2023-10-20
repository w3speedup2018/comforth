
const thumbnails = document.querySelectorAll('.thumbnails img');
  const videoPlayer = document.getElementById('video-player');
  const headline = document.querySelector('.headline1');

  // Unmute the video when the 'play' event is fired
if(videoPlayer !== null){
  videoPlayer.addEventListener('play', function() {
    videoPlayer.muted = false;
  });
}

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const videoSrc = thumbnail.getAttribute('data-video');
      const videoHeadline = thumbnail.getAttribute('data-headline');

      videoPlayer.src = videoSrc;
      videoPlayer.play();  // Autoplay the video
      headline.textContent = videoHeadline;

      thumbnails.forEach(thumb => {
        thumb.classList.remove('highlight');
      });

      thumbnail.classList.add('highlight');
    });
  });



  setTimeout(function() {
    
    $('.up-pro-slider').slick({
    dots: true,
    arrows: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          adaptiveHeight: true,
        }
      },
      
    ]
  });

  $('.up-pro-slide:only-child').parents('.up-pro-slider').addClass('one-slide');
	
},3000);

/*$(document).ready(function() {
  var $slider = $('.up-pro-slider');
  
  $slider.on('init', function(event, slick) {
    var slideCount = slick.slideCount;
    
    if (slideCount <= 2) {
      $slider.find('.slick-dots').hide();
    }
  });
  
  $slider.slick({
    slidesToShow: 2,
    autoplay: false,
    dots: true, 
    prevArrow: false, 
    nextArrow: false 
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false
        }
      },
      
    ]
  });
});

  function addToCart(productId) {
  // Implementer den nødvendige logik for at tilføje produktet til kurven
  // Dette kan variere afhængigt af din e-handelsplatform eller backend-implementering
  // Eksempelvis, hvis du bruger Shopify:
  Shopify.addItem(productId, 1); // Tilføj 1 stk af produktet med det angivne productId til kurven
}
*/

