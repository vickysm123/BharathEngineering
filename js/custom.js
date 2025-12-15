"use strict";
	var activityIndicatorOn = function(){
		$('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
  };
	var activityIndicatorOff = function(){
		$('#imagelightbox-loading').remove();
	};
	var closeButtonOn = function(instance){
		$('<button type="button" id="imagelightbox-close" title="Close"></button>').appendTo('body').on('click touchend', function(){ $(this).remove(); instance.quitImageLightbox(); return false; });
	};
	var closeButtonOff = function(){
		$('#imagelightbox-close').remove();
	};
	var overlayOn = function(){$('<div id="imagelightbox-overlay"></div>').appendTo('body');};
	var overlayOff = function(){$('#imagelightbox-overlay').remove();};	
	var captionOff = function(){$('#imagelightbox-caption').remove();};
	var captionOn = function(){
		var description = $('a[href="' + $('#imagelightbox').attr('src') + '"]').data('title');
		if(description.length)
			$('<div id="imagelightbox-caption">' + description +'</div>').appendTo('body');
	};
var arrowsOn = function(instance, selector) {
        var $arrows = $('<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"><i class="fa fa-chevron-left"></i></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"><i class="fa fa-chevron-right"></i></button>');
        $arrows.appendTo('body');
        $arrows.on('click touchend', function(e) {
            e.preventDefault();
            var $this = $(this);
            if( $this.hasClass('imagelightbox-arrow-left')) {
                instance.loadPreviousImage();
            } else {
                instance.loadNextImage();
            }
            return false;
        });
    };	
	var arrowsOff = function(){$('.imagelightbox-arrow').remove();};				
	var selectorG = '.lightbox';
	if($(selectorG).length){
		var instanceG = $(selectorG).imageLightbox({
			quitOnDocClick:	false,
			onStart:		function() {arrowsOn(instanceG, selectorG);overlayOn(); closeButtonOn(instanceG);},
			onEnd:			function() {arrowsOff();captionOff(); overlayOff(); closeButtonOff(); activityIndicatorOff();},
			onLoadStart: 	function() {captionOff(); activityIndicatorOn();},
			onLoadEnd:	 	function() {$('.imagelightbox-arrow').css('display', 'block');captionOn(); activityIndicatorOff();}
		});		
	}			
function expertizeRoundCircle () {
	var rounderContainer = $('.piechart.style-one');
	if (rounderContainer.length) {
		rounderContainer.each(function () {
			var Self = $(this);
			var value = Self.data('value');
			var size = Self.parent().width();
			var color = Self.data('fg-color');

			Self.find('span').each(function () {
				var expertCount = $(this);
				expertCount.appear(function () {
					expertCount.countTo({
						from: 1,
						to: value*100,
						speed: 3000
					});
				});

			});
			Self.appear(function () {					
				Self.circleProgress({
					value: value,
					size: 142,
					thickness: 10,
					emptyFill: 'rgba(208,104,63,1)',
					animation: {
						duration: 3000
					},
					fill: {
						color: color
					}
				});
			});
		});
	};
}

function stickyHeader () {
  if ($('.stricky').length) {
    var strickyScrollPos = $('.stricky').next().offset().top;
    if($(window).scrollTop() > strickyScrollPos) {
      $('.stricky').removeClass('slideIn animated');
      $('.stricky').addClass('stricky-fixed slideInDown animated');
    }
    else if($(this).scrollTop() <= strickyScrollPos) {
      $('.stricky').removeClass('stricky-fixed slideInDown animated');
      $('.stricky').addClass('slideIn animated');
    }
  };
}

jQuery(document).on('ready', function () {
	(function ($) {
		expertizeRoundCircle();
	})(jQuery);
});

(function($) {
 "use strict"; 
   var iconOpen = 'fa fa-minus',
        iconClose = 'fa fa-plus';

    $(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function (e) {
       var $target = $(e.target);
         $target.siblings('.accordion-heading').find('em').toggleClass(iconOpen + ' ' + iconClose);
         if(e.type == 'show') {
           jQuery('#accordion2 em.icon-fixed-width').removeClass(iconOpen);
           jQuery('#accordion2 em.icon-fixed-width').addClass(iconClose);
           jQuery('#accordion2 .accordion-toggle').removeClass('active');
           jQuery('#accordion2 .accordion-body.collapse').removeClass('in');
           $target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');
           $target.prev('.accordion-group').find('.accordion-body.collapse').addClass('in');            
           $target.siblings('.accordion-heading').find('em').addClass('fa-minus');
           $target.siblings('.accordion-heading').find('em').removeClass('fa-plus');
         }
             
         if(e.type == 'hide') {
           jQuery('#accordion2 em.icon-fixed-width').removeClass(iconOpen);
           jQuery('#accordion2 em.icon-fixed-width').addClass(iconClose);
           jQuery('#accordion2 .accordion-toggle').removeClass('active');
           jQuery('#accordion2 .accordion-body.collapse').removeClass('in');
           $(this).find('.accordion-toggle').not($target).removeClass('active');
           $target.siblings('.accordion-heading').find('em').addClass('fa-plus');
           $target.siblings('.accordion-heading').find('em').removeClass('fa-minus');
         }
   }); 
})(jQuery);

 $('.static-section ul li h2').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 250000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
});
	  
$(window).scroll(function() {
        if ($(this).scrollTop() > 120){  
        $('#main-navigation-wrapper').removeClass('slideIn animated');
          $('#main-navigation-wrapper').addClass("sticky_header slideInDown animated");
        }
        else{
        $('#main-navigation-wrapper ').removeClass('sticky_header slideInDown animated');
           $('#main-navigation-wrapper ').addClass('slideIn animated');
        }
});
 $(document).ready(function(){
        $(".mob_drop_arrow").click(function(){
          $(this).parent().find(".submenu").toggleClass("show_sub_menu")
        $(this).parent().find(".nav_drop_ar").toggleClass("show")
        $(this).parent().find(".mob_drop_arrow").toggleClass("active")
        })
		
})

function customTabSingleService () {
    if ($('.tabmenu-box').length) {
        var tabWrap = $('.tab-content-box');
        var tabClicker = $('.tabmenu-box ul li');
        
        tabWrap.children('div').hide();
        tabWrap.children('div').eq(0).show();
        tabClicker.on('click', function() {
            var tabName = $(this).data('tab-name');
            tabClicker.removeClass('active');
            $(this).addClass('active');
            var id = '#'+ tabName;
            tabWrap.children('div').not(id).hide();
            tabWrap.children('div'+id).fadeIn('500');
            return false;
        });        
    }
}

jQuery(document).on('ready', function () {
	(function ($) {
            
        customTabSingleService ();
	})(jQuery);
});

"use strict";
$(function(){
  var offset = 300,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    $back_to_top = $('.cd-top');

  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

});

"use strict";
$(document).ready(function () {
   setTimeout(function () {
     $('#loader-wrapper').fadeOut();
   }, 500);
});

(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};

    return $(this).each(function () {
     
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from:            $(this).data('from'),
        to:              $(this).data('to'),
        speed:           $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals:        $(this).data('decimals')
      }, options);

     var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

       var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};

      $self.data('countTo', data);

       if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof(settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
         
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;

          if (typeof(settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.text(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0,               
    to: 0,                
    speed: 1000,          
    refreshInterval: 100,  
    decimals: 0,           
    formatter: formatter,  
    onUpdate: null,       
    onComplete: null       
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
}(jQuery));

    jQuery(function ($) {
     
     
      $('.timer').each(count);
      
     
      $( window ).scroll(function () {console.log($(window).scrollTop());
    if($(window).scrollTop() > 300 && $(window).scrollTop() < 850)
    {
       $('.timer').each(count);
     }
      });
      
      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
    });

$("figure").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);






