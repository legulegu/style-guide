module.exports = function() {
  $(".lg-navbar-search").on("click", function() {
    $("#mobile-search-form").addClass("lg-mobile-search");
  });

  $(".lg-mobile-search-close-icon").on("click", function() {
    $("#mobile-search-form").removeClass("lg-mobile-search");
  });
};
