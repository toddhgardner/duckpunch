(function (window, document) {
  "use strict";

    // References to the DOM Elements.
    var button = document.getElementById("send-button");

    // When the form is submitted
    button.addEventListener("click", function onClick (event) {

      // Setup a new AJAX request to our API
      var request = new XMLHttpRequest();
      request.open("post", "/api/emails");

      // Send the request with the serialized emails
      request.send(JSON.stringify({
        emails: ["todd@trackjs.com","eric@trackjs.com"]
      }));
    });


})(window, document);




/**
  * Demo Notes
  * Remove the Array.prototype.toJSON for serialize,
  * then restore it after to leave the environment
  * in the same state
  */