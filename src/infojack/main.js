(function (window, document) {
  "use strict";

    // References to the DOM Elements.
    var form = document.getElementById("form-email");
    var email = document.getElementById("input-email");
    var message = document.getElementById("form-success");

    // When the form is submitted
    form.addEventListener("submit", function onSubmit (event) {

      // Setup a new AJAX request to our API
      var request = new XMLHttpRequest();
      request.open("post", "/api/emails");

      // When it's done, show the thank-you message
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          form.style.display = "none";
          message.style.display = "block";
        }
      }
      
      // Send the request with the serialized email
      request.send(JSON.stringify({
        email: email.value
      }));

      // Prevent the standard form post action from happening
      event.preventDefault();
      return false;
    });


})(window, document);