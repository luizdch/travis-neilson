jQuery(function($) {

   $('.sm-navButton').on('click', function() {
      $(this).toggleClass('js-animate')
      $(this).siblings('nav').toggleClass('js-slide')
   })

})
