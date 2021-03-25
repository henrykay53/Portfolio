$(document).ready(function(){

   var hamBurger = $(".mobile--view");
   var slider = $('.slider');
   
   hamBurger.on("click", function(){
      if ($(this).toggleClass('open')) {
         slider.show();
      }
      if ($(this).isnot.toggleClass('open')) {
         slider.hide();
      }
      else {
         $(document).alert('Oh well!');
      }
   });
});


