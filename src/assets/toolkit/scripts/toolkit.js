/**
 * Toolkit JavaScript
 */

"use strict";

$(document).ready(function() {
  require("./components/nav")();
  require("./components/auto-complete")(function() {});
	require("./components/mobile-search")();
	require("./components/side-menu.js")();
});
