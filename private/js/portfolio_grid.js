jQuery(function($) {

   var $platformSection
   $('.portfolioGrid a').hover(function() {
      var $this = $(this)
      media('lg', function() {
         $platformSection = $this.closest('.platformSection')
         $platformSection.css('background-color', $this.attr('data-color'))
      })
   }, function() {
      media('lg', function() {
         $platformSection.css('background-color', $platformSection.attr('data-color'))
      })
   })

})
