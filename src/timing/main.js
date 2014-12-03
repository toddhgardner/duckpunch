(function ($) {
  "use strict";

  $("#ajax-button").on("click", function onClick (event) {

    $.ajax({
      type: "POST",
      url: "/api/emails",
      data: {}
    });

  });

})(window.jQuery);