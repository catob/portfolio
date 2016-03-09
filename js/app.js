$(document).ready(function(){

  //hover effects
  $(function () {
    $('.thumbs > li').hoverdir();
  });

  //animations
  $('.masthead-intro').fadeIn(1100).removeClass('hidden');
  $('.masthead-button').fadeIn(1500).removeClass('hidden');

  // $('.masthead-intro').fadeIn(1100, function(){
  //   $('.masthead-intro').removeClass('hidden');
  //   $('.masthead-button').fadeIn(1500).removeClass('hidden');
  // });

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

  // smooth scroll
  var $root = $('html, body');
  $('.navbar-nav a, .masthead-intro a, .project-name a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    return false;
  });

  // collaps mobile nav after selecting mapOptions
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
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

  // google maps api
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(52.49082,13.42379,17),
      zoom: 8
    };
    
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);    

    var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map,
      title: 'Click to zoom'
    });

    google.maps.event.addListener(marker, 'click', function(){
      map.setZoom(15);
      map.setCenter(marker.getPosition());
    });
  };

  google.maps.event.addDomListener(window, 'load', initialize);

});