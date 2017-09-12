function media(type, callback) {
   var mediaTypes = {
      sm: '(max-width: 850px)',
      'sm-md': '(max-width: 1200px)',
      md: '(min-width: 851px) and (max-width: 1200px)',
      'md-lg': '(min-width: 851px)',
      lg: '(min-width: 1201px)'
   }
   var currentMedia
   for(var mediaType in mediaTypes) {
      if(mediaType === type) currentMedia = mediaTypes[mediaType]
   }
   if(window.matchMedia(currentMedia).matches) callback()
}

function currentInFocus($elements) {
   var windowCenterPosition = $(document).scrollTop() + window.innerHeight / 2
   var currentInFocus
   $elements.each(function() {
      if($(this).offset().top <= windowCenterPosition) currentInFocus = $(this)
   })
   return currentInFocus
}

function atWindowBottom($element, callback) {
   var windowBottomPosition = $(document).scrollTop() + window.innerHeight
   var elementBottomPosition = $element.offset().top + $element.outerHeight()
   if(windowBottomPosition >= elementBottomPosition) return callback ? callback() : true
}

function centerPosition($element) {
   var alignedMargin = (window.innerHeight - $element.outerHeight()) / 2
   return $element.offset().top - alignedMargin
}
