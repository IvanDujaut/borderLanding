const navToggle = document.querySelector(".navbar-toggle");
const navMenu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("menu_visible");
});

window.addEventListener("scroll", () => {
  function swiping(direction) {
    var animated = document.querySelectorAll(".swiping" + direction);
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animated.lenght; i++) {
      let animatedHeight = animated[i].offsetTop;
      if (animatedHeight <= scrollTop) {
        animated[i].style.opacity = 1;
        animated[i].classList.add("swiping" + direction);
      }
    }
  }

  swiping("Left");
  swiping("Right");
});

!(function ($) {
  "use strict";
  // Formulario de contacto
  $("#formulario").submit(function (event) {
    $(".formulario__btn").html("Sending...");
    event.preventDefault();
    hideAlertMessages();
    if (!$(this).valid()) {
      $(".formulario__btn").html("Send");
      return;
    }
    $.ajax({
      type: "POST",
      url: "../forms/sendmail.php",
      data: $("#formulario").serialize(),
      dataType: "json",
      success: function (_response) {
        $("#formulario").fadeTo("slow", 1, function () {
          $(".formulario__btn").html("Send");
          $(this).find(":input").val("");
          $(this).find("label").css("cursor", "default");
          $("#alert-success").fadeIn();
          $("#alert-error").hide();
          $("#alert-success").show();
          hideAlertMessages();
        });
      },
      error: function (_request, _status, _error) {
        $("#formulario").fadeTo("slow", 1, function () {
          $(".formulario__btn").html("Send");
          $("#alert-error").fadeIn();
          $("#alert-success").hide();
          $("#alert-error").show();
          hideAlertMessages();
        });
      },
    });
  });
  function hideAlertMessages() {
    setTimeout(function () {
      $("#alert-error").fadeOut();
      $("#alert-success").fadeOut();
    }, 8000);
  }

  //Formulario equipo
  $("#formulario-equipo").submit(function (event) {
    $(".btn-form-equipo").html("Sending...");
    event.preventDefault();
    hideAlertMessages();
    if (!$(this).valid()) {
      $(".btn-form-equipo").html("Send");
      return;
    }
    $.ajax({
      type: "POST",
      url: "../forms/sendmail.php",
      data: $("#formulario-equipo").serialize(),
      dataType: "json",
      success: function (_response) {
        $("#formulario-equipo").fadeTo("slow", 1, function () {
          $(".btn-form-equipo").html("Sent");
          $(this).find(":input").val("");
          $(this).find("label").css("cursor", "default");
        });
      },
      error: function (_request, _status, _error) {
        $("#formulario-equipo").fadeTo("slow", 1, function () {
          $(".btn-form-equipo").html("Send");
        });
      },
    });
  });
})(jQuery);

function toSend() {
  document.getElementById("toReceive").style.display = "none";
  document.getElementById("toSend").style.display = "grid";
  document.getElementById("toReceiveAnchor").style.color = "#a0cbe3";
  document.getElementById("toSendAnchor").style.color = "#5CB2E4";
}

function toReceive() {
  document.getElementById("toSend").style.display = "none";
  document.getElementById("toReceive").style.display = "grid";
  document.getElementById("toSendAnchor").style.color = "#a0cbe3";
  document.getElementById("toReceiveAnchor").style.color = "#5CB2E4";
}
