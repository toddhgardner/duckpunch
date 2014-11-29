(function ($) {
  "use strict";

  $("#ajax-button").on("click", function onSubmit (event) {

    $.ajax({
      type: "POST",
      url: "/api/emails",
      data: {}
    });

  });

})(window.jQuery);