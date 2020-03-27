/* 
   CounterUp
   ========================================================================== */
    jQuery(document).ready(function( $ ) {
      $('.counter').counterUp({
        time: 500
      });
    });

/* 
   MixitUp
   ========================================================================== */
    $(function(){
      $('#portfolios').mixItUp();
    });
  
  /* 
   Wow js
   ========================================================================== */
   jQuery(function($) {
    //Initiat WOW JS
    new WOW().init();   
});

  /* Nivo Lightbox
  ========================================================*/
  jQuery(document).ready(function( $ ) {    
     $('.lightbox').nivoLightbox({
      effect: 'fadeScale',
      keyboardNav: true,
    });

  });

  /* stellar js
  ========================================================*/
  $(function(){
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 40,
      responsive: true
    });
  });

/* 
   Page Loader
   ========================================================================== */
   $(window).load(function() {
    "use strict";
    $('#loader').fadeOut();
   });
