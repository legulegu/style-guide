module.exports = function() {
  function openNav() {
    $(".lg-side-nav").css("left", "0");
    $(".lg-main").css("margin-left", "150px");
  }

  function closeNav() {
    if ($(".lg-side-nav").css("left") !== "-150px") {
      $(".lg-side-nav").css("left", "-150px");
			$(".lg-main").css("margin-left", "0px");
    }
  }

  $(".lg-navbar-toggle").click(openNav);
  $(".lg-main").click(closeNav);
};
