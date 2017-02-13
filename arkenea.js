$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.navbar-inverse');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar-inverse').css('background-color', '#222426');
       } else {
          $('.navbar-inverse').css('background-color', 'transparent');
       }
   });
});
