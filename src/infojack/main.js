(function ($) {
  "use strict";

  $("form").on("submit", function onSubmit (event) {

    $.ajax({
      type: "POST",
      url: "/api/emails",
      data: {
        email: $("#input-email").val()
      },
      success: function () {
        $("form").hide();
        $("#form-success").show();
      }
    });

    // Prevent the standard form post action from happening
    event.preventDefault();
    return false;
  });

})(window.jQuery);