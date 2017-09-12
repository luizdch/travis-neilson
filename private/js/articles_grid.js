jQuery(function($) {

   var $articlesGrid = $('.articlesGrid')
   var $articles = $articlesGrid.find('.article')
   var articleAnimationInterval

   function triggerAnimationsPosition($section, callback) {
      var windowBottomPosition = $(document).scrollTop() + window.innerHeight
      var sectionBottomPosition = $section.offset().top + $section.outerHeight()
      var sectionTopPosition = $section.offset().top
      if(windowBottomPosition >=  sectionBottomPosition) callback()
   }

   function articlesProgressiveVisibilityAnimation() {
      $articles.each(function(index, article) {
         setTimeout(function() {
            $(article).addClass('js-show')
         }, 300 * index)
      })
   }


   $(document).on('scroll', function() {
      atWindowBottom($('.mentoringSection'), function() {
         articlesProgressiveVisibilityAnimation()
      })
   })

})
