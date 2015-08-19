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

  // work image hover overlay
  $('.work-img').contenthover({
    overlay_background:'#000',
    overlay_opacity:0.8
  });

  // see more work button
  $('.read-more').click(function(){
    $('.read-more-hidden').slideToggle();
    $('.img-last').css("padding-bottom", "0");
      // if (!$(this).hasClass('less')) $(this).text('Hide').addClass('less');
      // else $(this).text('More').removeClass('less');
      $(this).hide();
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