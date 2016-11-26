$(document).ready(function() {

   footerHandler = function(){
       var $el = $('.main-logo');
       var footerTop = $el.offset().top + $el.outerHeight(true);

       if(footerTop + $('footer').height() <  $(window).innerHeight() && $(window).innerWidth() > 640){
         $('footer').addClass('footer-fixed');
       }
       else{
         $('footer').removeClass('footer-fixed');
       }
       console.log("window hiehgt : " + $(window).innerHeight());
       console.log("footer top : " + footerTop);
   }

   footerHandler();

   $(window).resize( function(){
       footerHandler();
   });

});
