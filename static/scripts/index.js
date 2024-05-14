// Dette er en funktion der bruges til at gøre billeder og tekst på siden mere dynamiske med blur og opacity effekter
document.addEventListener('DOMContentLoaded', function() {
    $('.grid-img').hover(
        function() {
          $(this).siblings('.grid-text').css('opacity', 1);
          $(this).css("filter", "blur(5px)");
          $(this).css("-webkit-filter", "blur(5px)");
          $(this).css("transform", "scale(1.1)");        
        },
        function() {
          $(this).siblings('.grid-text').css('opacity', 0);
          $(this).css("filter", "blur(0px)");
          $(this).css("-webkit-filter", "blur(0px)");
          $(this).css("transform", "scale(1)");      
        }
      );
      $('.grid-text').hover(
        function() {
          $(this).css('opacity', 1);
          $(this).siblings('.grid-img').css("filter", "blur(5px)");
          $(this).siblings('.grid-img').css("-webkit-filter", "blur(5px)");
          $(this).siblings('.grid-img').css("transform", "scale(1.1)");        
        },
        function() {
          $(this).css('opacity', 0);
          $(this).siblings('.grid-img').css("filter", "blur(0px)");
          $(this).siblings('.grid-img').css("-webkit-filter", "blur(0px)");
          $(this).siblings('.grid-img').css("transform", "scale(1)");        
        }
      );
});
