$(document).ready(function(){
    $(".mobile--view").on("click", function(){
        $(this).toggleClass('open');
    });
 });

 $(document).ready(function(){
    $(".mobile--view").on("click", function(){
       $(this).parent().toggleClass('open');
    });
 });