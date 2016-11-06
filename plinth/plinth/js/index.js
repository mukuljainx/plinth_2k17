$(document).ready(function() {

   footerHandler = function(){
       var $el = $('.main-logo');
       var footerTop = $el.offset().top + $el.outerHeight(true);

       if(footerTop + $('footer').height <  $(window).innerHeight() && $(window).innerWidth() > 640){
         $('footer').addClass('footer-fixed');
       }
   }

   footerHandler();

   $(window).resize( function(){
       footerHandler();
   });

});
