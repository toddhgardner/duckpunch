// Borrowed with love from:
// https://github.com/paulmillr/console-polyfill
//
// And adapted to simplify for demonstration purposes
// of polyfill

(function(console) {
  "use strict";

  // Have to declare method, while is not a closure
  var method;

  // Fallback method if the browser doesn't support the
  // named one.
  var dummy = function() {};

  // Methods we are going to punch onto console
  var methods = ["magic","debug","error","info","log","warn"];

  // Iterate over the methods
  while (method = methods.pop()) {

    // Set the method to itself, or the dummy if 
    // unavailable
    console[method] = console[method] || dummy;

  }

// Invoke the IIFE with a guaranteed console
})(window.console = window.console || {});

