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

jQuery(function($) {

   var $peopleContainer = $('.peopleContainer')
   $peopleContainer.find('.person').on('click', function() {
      $peopleContainer.attr('class', '').addClass('peopleContainer js-person' + $(this).parent().index())
      $peopleContainer.find('.bubble').removeClass('js-active')
      $(this).siblings('.bubble').addClass('js-active')
   })

})

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

jQuery(function($) {

   $('.sm-navButton').on('click', function() {
      $(this).toggleClass('js-animate')
      $(this).siblings('nav').toggleClass('js-slide')
   })

})

jQuery(function($) {

   $(document).on('scroll', function() {
      media('md-lg', function() {
         $('.videoContainer').css('background-position', 'center -' + ($(this).scrollTop() + 20) + 'px')
      })
   })

})

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGVzX2dyaWQuanMiLCJoZWxwZXJzLmpzIiwicGVvcGxlX3NsaWRlci5qcyIsInBvcnRmb2xpb19ncmlkLmpzIiwic2l0ZV9uYXZfc2xpZGVfbGlua3MuanMiLCJzbV9uYXZfYnV0dG9uLmpzIiwidHJhdmlzX3N0cmlwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShmdW5jdGlvbigkKSB7XHJcblxyXG4gICB2YXIgJGFydGljbGVzR3JpZCA9ICQoJy5hcnRpY2xlc0dyaWQnKVxyXG4gICB2YXIgJGFydGljbGVzID0gJGFydGljbGVzR3JpZC5maW5kKCcuYXJ0aWNsZScpXHJcbiAgIHZhciBhcnRpY2xlQW5pbWF0aW9uSW50ZXJ2YWxcclxuXHJcbiAgIGZ1bmN0aW9uIHRyaWdnZXJBbmltYXRpb25zUG9zaXRpb24oJHNlY3Rpb24sIGNhbGxiYWNrKSB7XHJcbiAgICAgIHZhciB3aW5kb3dCb3R0b21Qb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpICsgd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICAgIHZhciBzZWN0aW9uQm90dG9tUG9zaXRpb24gPSAkc2VjdGlvbi5vZmZzZXQoKS50b3AgKyAkc2VjdGlvbi5vdXRlckhlaWdodCgpXHJcbiAgICAgIHZhciBzZWN0aW9uVG9wUG9zaXRpb24gPSAkc2VjdGlvbi5vZmZzZXQoKS50b3BcclxuICAgICAgaWYod2luZG93Qm90dG9tUG9zaXRpb24gPj0gIHNlY3Rpb25Cb3R0b21Qb3NpdGlvbikgY2FsbGJhY2soKVxyXG4gICB9XHJcblxyXG4gICBmdW5jdGlvbiBhcnRpY2xlc1Byb2dyZXNzaXZlVmlzaWJpbGl0eUFuaW1hdGlvbigpIHtcclxuICAgICAgJGFydGljbGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGFydGljbGUpIHtcclxuICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChhcnRpY2xlKS5hZGRDbGFzcygnanMtc2hvdycpXHJcbiAgICAgICAgIH0sIDMwMCAqIGluZGV4KVxyXG4gICAgICB9KVxyXG4gICB9XHJcblxyXG5cclxuICAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBhdFdpbmRvd0JvdHRvbSgkKCcubWVudG9yaW5nU2VjdGlvbicpLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgYXJ0aWNsZXNQcm9ncmVzc2l2ZVZpc2liaWxpdHlBbmltYXRpb24oKVxyXG4gICAgICB9KVxyXG4gICB9KVxyXG5cclxufSlcclxuIiwiZnVuY3Rpb24gbWVkaWEodHlwZSwgY2FsbGJhY2spIHtcclxuICAgdmFyIG1lZGlhVHlwZXMgPSB7XHJcbiAgICAgIHNtOiAnKG1heC13aWR0aDogODUwcHgpJyxcclxuICAgICAgJ3NtLW1kJzogJyhtYXgtd2lkdGg6IDEyMDBweCknLFxyXG4gICAgICBtZDogJyhtaW4td2lkdGg6IDg1MXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KScsXHJcbiAgICAgICdtZC1sZyc6ICcobWluLXdpZHRoOiA4NTFweCknLFxyXG4gICAgICBsZzogJyhtaW4td2lkdGg6IDEyMDFweCknXHJcbiAgIH1cclxuICAgdmFyIGN1cnJlbnRNZWRpYVxyXG4gICBmb3IodmFyIG1lZGlhVHlwZSBpbiBtZWRpYVR5cGVzKSB7XHJcbiAgICAgIGlmKG1lZGlhVHlwZSA9PT0gdHlwZSkgY3VycmVudE1lZGlhID0gbWVkaWFUeXBlc1ttZWRpYVR5cGVdXHJcbiAgIH1cclxuICAgaWYod2luZG93Lm1hdGNoTWVkaWEoY3VycmVudE1lZGlhKS5tYXRjaGVzKSBjYWxsYmFjaygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGN1cnJlbnRJbkZvY3VzKCRlbGVtZW50cykge1xyXG4gICB2YXIgd2luZG93Q2VudGVyUG9zaXRpb24gPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIHdpbmRvdy5pbm5lckhlaWdodCAvIDJcclxuICAgdmFyIGN1cnJlbnRJbkZvY3VzXHJcbiAgICRlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZigkKHRoaXMpLm9mZnNldCgpLnRvcCA8PSB3aW5kb3dDZW50ZXJQb3NpdGlvbikgY3VycmVudEluRm9jdXMgPSAkKHRoaXMpXHJcbiAgIH0pXHJcbiAgIHJldHVybiBjdXJyZW50SW5Gb2N1c1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdFdpbmRvd0JvdHRvbSgkZWxlbWVudCwgY2FsbGJhY2spIHtcclxuICAgdmFyIHdpbmRvd0JvdHRvbVBvc2l0aW9uID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgKyB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgdmFyIGVsZW1lbnRCb3R0b21Qb3NpdGlvbiA9ICRlbGVtZW50Lm9mZnNldCgpLnRvcCArICRlbGVtZW50Lm91dGVySGVpZ2h0KClcclxuICAgaWYod2luZG93Qm90dG9tUG9zaXRpb24gPj0gZWxlbWVudEJvdHRvbVBvc2l0aW9uKSByZXR1cm4gY2FsbGJhY2sgPyBjYWxsYmFjaygpIDogdHJ1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBjZW50ZXJQb3NpdGlvbigkZWxlbWVudCkge1xyXG4gICB2YXIgYWxpZ25lZE1hcmdpbiA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAkZWxlbWVudC5vdXRlckhlaWdodCgpKSAvIDJcclxuICAgcmV0dXJuICRlbGVtZW50Lm9mZnNldCgpLnRvcCAtIGFsaWduZWRNYXJnaW5cclxufVxyXG4iLCJqUXVlcnkoZnVuY3Rpb24oJCkge1xyXG5cclxuICAgdmFyICRwZW9wbGVDb250YWluZXIgPSAkKCcucGVvcGxlQ29udGFpbmVyJylcclxuICAgJHBlb3BsZUNvbnRhaW5lci5maW5kKCcucGVyc29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICRwZW9wbGVDb250YWluZXIuYXR0cignY2xhc3MnLCAnJykuYWRkQ2xhc3MoJ3Blb3BsZUNvbnRhaW5lciBqcy1wZXJzb24nICsgJCh0aGlzKS5wYXJlbnQoKS5pbmRleCgpKVxyXG4gICAgICAkcGVvcGxlQ29udGFpbmVyLmZpbmQoJy5idWJibGUnKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJylcclxuICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmJ1YmJsZScpLmFkZENsYXNzKCdqcy1hY3RpdmUnKVxyXG4gICB9KVxyXG5cclxufSlcclxuIiwialF1ZXJ5KGZ1bmN0aW9uKCQpIHtcclxuXHJcbiAgIHZhciAkcGxhdGZvcm1TZWN0aW9uXHJcbiAgICQoJy5wb3J0Zm9saW9HcmlkIGEnKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxyXG4gICAgICBtZWRpYSgnbGcnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgJHBsYXRmb3JtU2VjdGlvbiA9ICR0aGlzLmNsb3Nlc3QoJy5wbGF0Zm9ybVNlY3Rpb24nKVxyXG4gICAgICAgICAkcGxhdGZvcm1TZWN0aW9uLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICR0aGlzLmF0dHIoJ2RhdGEtY29sb3InKSlcclxuICAgICAgfSlcclxuICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIG1lZGlhKCdsZycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAkcGxhdGZvcm1TZWN0aW9uLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICRwbGF0Zm9ybVNlY3Rpb24uYXR0cignZGF0YS1jb2xvcicpKVxyXG4gICAgICB9KVxyXG4gICB9KVxyXG5cclxufSlcclxuIiwialF1ZXJ5KGZ1bmN0aW9uKCQpIHtcclxuXHJcbiAgIHZhciAkc2VjdGlvbkxpbmtzID0gJCgnLnNpdGVIZWFkZXIgbmF2IGEnKVxyXG4gICB2YXIgJHN0YW5kYXJkU2VjdGlvbnMgPSAkKCcuc3RhbmRhcmRTZWN0aW9uJylcclxuXHJcbiAgIHNldFNjcm9sbEFjdGl2ZVNlY3Rpb25BcnJvdygpXHJcblxyXG4gICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgc2V0U2Nyb2xsQWN0aXZlU2VjdGlvbkFycm93KVxyXG5cclxuICAgJHNlY3Rpb25MaW5rcy5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHZhciAkbGluayA9ICQodGhpcylcclxuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICBzY3JvbGxUb3A6IGNlbnRlclBvc2l0aW9uU2VjdGlvbigkKCRsaW5rLmF0dHIoJ2RhdGEtc2VjdGlvbi1jbGFzcycpKSlcclxuICAgICAgfSwgMzAwKVxyXG4gICAgICBtZWRpYSgnc20nLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgJCgnLnNpdGVIZWFkZXIgbmF2JykucmVtb3ZlQ2xhc3MoJ2pzLXNsaWRlJylcclxuICAgICAgICAgJCgnLnNtLW5hdkJ1dHRvbicpLnJlbW92ZUNsYXNzKCdqcy1hbmltYXRlJylcclxuICAgICAgfSlcclxuICAgfSlcclxuXHJcbiAgIGZ1bmN0aW9uIGNlbnRlclBvc2l0aW9uU2VjdGlvbigkc2VjdGlvbikge1xuICAgICAgdmFyIGNlbnRlclBvc2l0aW9uVmFsdWVcbiAgICAgIG1lZGlhKCdtZC1sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgaWYoJHNlY3Rpb24ub3V0ZXJIZWlnaHQoKSA8IHdpbmRvdy5pbm5lckhlaWdodCkgY2VudGVyUG9zaXRpb25WYWx1ZSA9IGNlbnRlclBvc2l0aW9uKCRzZWN0aW9uKVxuICAgICAgICAgZWxzZSBjZW50ZXJQb3NpdGlvblZhbHVlID0gJHNlY3Rpb24ub2Zmc2V0KCkudG9wXG4gICAgICB9KVxuICAgICAgbWVkaWEoJ3NtJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICBpZigkc2VjdGlvbi5vdXRlckhlaWdodCgpIDwgd2luZG93LmlubmVySGVpZ2h0IC0gNTApIGNlbnRlclBvc2l0aW9uVmFsdWUgPSBjZW50ZXJQb3NpdGlvbigkc2VjdGlvbikgLSAyNVxuICAgICAgICAgZWxzZSBjZW50ZXJQb3NpdGlvblZhbHVlID0gJHNlY3Rpb24ub2Zmc2V0KCkudG9wIC0gNTBcbiAgICAgIH0pXG4gICAgICByZXR1cm4gY2VudGVyUG9zaXRpb25WYWx1ZVxuICAgfVxuXG4gICBmdW5jdGlvbiBzZXRTY3JvbGxBY3RpdmVTZWN0aW9uQXJyb3coKSB7XG4gICAgICB2YXIgY3VycmVudEluRm9jdXNTZWN0aW9uSW5kZXggPSBjdXJyZW50SW5Gb2N1cygkc3RhbmRhcmRTZWN0aW9ucykuaW5kZXgoKVxuICAgICAgaWYoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPT09IDApIGN1cnJlbnRJbkZvY3VzU2VjdGlvbkluZGV4ID0gMFxuICAgICAgZWxzZSBpZihhdFdpbmRvd0JvdHRvbSgkc3RhbmRhcmRTZWN0aW9ucy5sYXN0KCkpKSBjdXJyZW50SW5Gb2N1c1NlY3Rpb25JbmRleCA9ICRzdGFuZGFyZFNlY3Rpb25zLmxhc3QoKS5pbmRleCgpXG4gICAgICAkc2VjdGlvbkxpbmtzLnJlbW92ZUNsYXNzKCdqcy1hcnJvdycpXG4gICAgICAkc2VjdGlvbkxpbmtzLmVxKGN1cnJlbnRJbkZvY3VzU2VjdGlvbkluZGV4KS5hZGRDbGFzcygnanMtYXJyb3cnKVxuICAgfVxyXG5cclxufSlcclxuIiwialF1ZXJ5KGZ1bmN0aW9uKCQpIHtcclxuXHJcbiAgICQoJy5zbS1uYXZCdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnanMtYW5pbWF0ZScpXHJcbiAgICAgICQodGhpcykuc2libGluZ3MoJ25hdicpLnRvZ2dsZUNsYXNzKCdqcy1zbGlkZScpXHJcbiAgIH0pXHJcblxyXG59KVxyXG4iLCJqUXVlcnkoZnVuY3Rpb24oJCkge1xyXG5cclxuICAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBtZWRpYSgnbWQtbGcnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgJCgnLnZpZGVvQ29udGFpbmVyJykuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgJ2NlbnRlciAtJyArICgkKHRoaXMpLnNjcm9sbFRvcCgpICsgMjApICsgJ3B4JylcclxuICAgICAgfSlcclxuICAgfSlcclxuXHJcbn0pXHJcbiJdfQ==
