$(document).ready(function () {
  //animations
  $(".masthead-intro").fadeIn(1100).removeClass("hidden");

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $(".appear").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height() * 1.3;

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 700);
      }
    });
  });

  // Modal functionality
  $(
    ".project-link-item[data-modal], .bio-link[data-modal], .bio-text-link[data-modal]"
  ).on("click", function (event) {
    event.preventDefault();
    var modalId = $(this).data("modal");
    $("#" + modalId).fadeIn(300);
    $("body").css("overflow", "hidden"); // Prevent background scrolling
  });

  // Close modal when clicking the X
  $(".close").on("click", function () {
    $(this).closest(".modal").fadeOut(300);
    $("body").css("overflow", "auto"); // Restore scrolling
  });

  // Close modal when clicking outside of it
  $(".modal").on("click", function (event) {
    if (event.target === this) {
      $(this).fadeOut(300);
      $("body").css("overflow", "auto"); // Restore scrolling
    }
  });

  // Close modal with Escape key
  $(document).on("keydown", function (event) {
    if (event.keyCode === 27) {
      // Escape key
      $(".modal:visible").fadeOut(300);
      $("body").css("overflow", "auto"); // Restore scrolling
    }
  });
});
