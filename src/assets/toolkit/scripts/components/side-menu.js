module.exports = function() {
  function openNav() {
    $(".sidenav").css("width", "150px");
    $(".lg-main").css("margin-left", "150px");
  }

  function closeNav() {
    if ($(".sidenav").css("width") !== "0px") {
      $(".sidenav").css("width", "0px");
      $(".lg-main").css("margin-left", "0px");
    }
  }

  $(".lg-navbar-toggle").click(openNav);
  $(".lg-main").click(closeNav);
};
