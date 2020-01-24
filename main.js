
  $.fn.isInViewport = function isInViewport () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
   var counterTwo = 0;
   var counterThree = 0;
  $(window).on('resize scroll', function () {
    
      if ($('#expOne').isInViewport()) {
        counterTwo++;
        if (counterTwo <= 1) {
          $('#expOne').html("1000000000");
        };
      }

      if ($('#expTwo').isInViewport()) {
        counterThree++;
        if (counterThree <= 1) {
          $('#expTwo').html("1000000000");
        };
      }
    });