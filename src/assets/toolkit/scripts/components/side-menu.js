module.exports = function() {
  function openNav() {
    $(".sidenav").css("left", "0");
    $(".lg-main").css("margin-left", "150px");
  }

  function closeNav() {
    if ($(".sidenav").css("left") !== "-150px") {
      $(".sidenav").css("left", "-150px");
			$(".lg-main").css("margin-left", "0px");
    }
  }

  $(".lg-navbar-toggle").click(openNav);
  $(".lg-main").click(closeNav);
};
