module.exports = function() {
  $(".lg-navbar-search").on("click", function() {
    $("#mobile-search-form").addClass("mobile-search");
  });

  $(".mobile-search-close-icon").on("click", function() {
    $("#mobile-search-form").removeClass("mobile-search");
  });
};
