jQuery(function($) {

   var $peopleContainer = $('.peopleContainer')
   $peopleContainer.find('.person').on('click', function() {
      $peopleContainer.attr('class', '').addClass('peopleContainer js-person' + $(this).parent().index())
      $peopleContainer.find('.bubble').removeClass('js-active')
      $(this).siblings('.bubble').addClass('js-active')
   })

})
