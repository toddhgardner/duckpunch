(function (window, document) {
  "use strict";

  document.addEventListener("DOMContentLoaded", function onLoad (event) {

    // Duck-Punch Lodash with instrumented version of itself so we can monitor
    // performance of each function.
    var prop;
    var object = window._;

    // We loop over each property in the object. Objects behave like maps, and
    // we can iterate over them the same as arrays.
    for (prop in object) {

      // Tricky-Bit: The for-loop does not create a closure for us to operate 
      // in, allowing the values of name and originalFunction to change. An 
      // IIFE gives us the closure we expect.
      (function () {

        // Save off the original function name and references
        var fnName = prop;
        var fnReference = object[prop];
        
        // Redefine (duck-punch) the function on the original object.
        object[prop] = function () {

          // Format and log the calling context
          var args = Array.prototype.slice.call(arguments, 0);
          var call = formatFunctionCallLog(fnName, args);
          console.debug(call);
          
          // Set timers and execute the original function
          var start = performance.now();
          var result = fnReference.apply(this, args);
          var end = performance.now();

          // Log the resulting context and return
          console.debug(formatFunctionReturnLog(call, start, end, result));
          return result;
        }
      })();
    }

    /**
      * formatFunctionCallLog
      * This is a helper method to build a pleasantly formatted log statement
      * that looks like how the function was initially invoked.
      */
    function formatFunctionCallLog(fnName, args) {
      var result = fnName + "(";
      var i;
      for(i = 0; i < args.length; i++) {
        if (i !== 0) {
          result += ", ";
        }
        result += formatArgument(args[i]);
      }
      return result += ")";
    }

    /**
      * formatFunctionReturnLog
      * This is a helper method to build a pleasantly formatted log statement
      * for the performance and results of the method
      */
    function formatFunctionReturnLog(call, start, end, result) {
      return call + 
        " finished in " + 
        (end - start) + 
        "ms with result " +
        formatArgument(result);
    }

    /**
      * formatArgument
      * This is a helper method to build a pleasantly formatted log statement
      * for an object passed or returned from a function
      */
    function formatArgument(arg) {
      if (typeof arg === "function") {
        return arg.toString();
      } 
      else {
        return JSON.stringify(arg);
      }
    }

  });

})(window, document);