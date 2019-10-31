$(document).ready(function(){

  //animations
  $('.masthead-intro').fadeIn(1100).removeClass('hidden');
  $('.masthead-button').fadeIn(1500).removeClass('hidden');

/* Every time the window is scrolled ... */
  $(window).scroll( function(){

    /* Check the location of each desired element */
    $('.appear').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + ($(window).height() * 1.3);

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},700);
      }
    });
  });

  // character counter on text input field
  $("textarea").on("keyup", function(){
    var charCount = $("textarea").val().length;
    $("#char-count").html(charCount);
    if (charCount > 500) {
      $("#char-count").css("color", "#FF0000");
    } else {
      $("#char-count").css("color", "#3E51A3");
    };
  });
});
