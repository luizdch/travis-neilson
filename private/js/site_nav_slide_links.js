jQuery(function($) {

   var $sectionLinks = $('.siteHeader nav a')
   var $standardSections = $('.standardSection')

   setScrollActiveSectionArrow()

   $(document).on('scroll', setScrollActiveSectionArrow)

   $sectionLinks.on('click', function(event) {
      event.preventDefault()
      var $link = $(this)
      $('html, body').animate({
         scrollTop: centerPositionSection($($link.attr('data-section-class')))
      }, 300)
      media('sm', function() {
         $('.siteHeader nav').removeClass('js-slide')
         $('.sm-navButton').removeClass('js-animate')
      })
   })

   function centerPositionSection($section) {
      var centerPositionValue
      media('md-lg', function() {
         if($section.outerHeight() < window.innerHeight) centerPositionValue = centerPosition($section)
         else centerPositionValue = $section.offset().top
      })
      media('sm', function() {
         if($section.outerHeight() < window.innerHeight - 50) centerPositionValue = centerPosition($section) - 25
         else centerPositionValue = $section.offset().top - 50
      })
      return centerPositionValue
   }

   function setScrollActiveSectionArrow() {
      var currentInFocusSectionIndex = currentInFocus($standardSections).index()
      if($(document).scrollTop() === 0) currentInFocusSectionIndex = 0
      else if(atWindowBottom($standardSections.last())) currentInFocusSectionIndex = $standardSections.last().index()
      $sectionLinks.removeClass('js-arrow')
      $sectionLinks.eq(currentInFocusSectionIndex).addClass('js-arrow')
   }

})
