(function (window) {
  "use strict";

  // Grab a reference to the original function
  var originalSendFn = window.XMLHttpRequest.prototype.send;
  window.XMLHttpRequest.prototype.send = function () {

    // when invoked from an instance, this will be
    // the current request
    var xhr = this;
    var args = Array.prototype.slice.call(arguments, 0);

    // Performance timers
    var start = performance.now();
    var end;

    // When this request is done
    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4) {

        // Record the time and log.
        end = performance.now();
        console.log("AJAX Completed in " + (end-start) + "ms");

      }
    });

    return originalSendFn.apply(xhr, args);
  };

})(window);