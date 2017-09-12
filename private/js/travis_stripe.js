jQuery(function($) {

   $(document).on('scroll', function() {
      media('md-lg', function() {
         $('.videoContainer').css('background-position', 'center -' + ($(this).scrollTop() + 20) + 'px')
      })
   })

})
