module.exports = function () {
	var $dropdown = $('.lg-navbar-nav .dropdown');
	$dropdown.mouseenter(function () {
		$(this).addClass('lg-navbar-nav-li--open');
	});
	$dropdown.mouseleave(function () {
		$(this).removeClass('lg-navbar-nav-li--open');
	});
}
