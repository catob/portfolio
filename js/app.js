$(document).ready(function(){

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

  // character counter on text input field
  $("textarea").on("keyup", function(){
    var charCount = $("textarea").val().length;
    $("#char-count").html(charCount);
    if (charCount > 50) {
      $("#char-count").css("color", "#FF0000");
    } else {
      $("#char-count").css("color", "#3E51A3");
    };
  });

  //form send button
  $('#send-button').on("click", function(){
    var errorMsg = "I'm sorry, my form is not working. Please copy your message and send it to:\n cato.benjaminsen@gmail.com. Thanks!";
    alert(errorMsg);
  })

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