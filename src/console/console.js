// Borrowed with love from:
// https://github.com/paulmillr/console-polyfill
//
// And adapted to simplify for demonstration purposes
// of polyfill

(function(window) {
  "use strict";

  var console = window.console || {};
  var dummy = function () {};
  var method;

  // Methods we are going to punch onto console
  var methods = ["debug","error","info","log","warn","magic"];

  // Iterate over the methods
  while (method = methods.pop()) {

    // Set the method to itself, or the dummy if
    // unavailable
    console[method] = console[method] || dummy;

  }

  // put our polyfill console back onto window
  window.console = console;


})(window);
