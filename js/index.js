const navToggle = document.querySelector(".navbar-toggle");
const navMenu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("menu_visible");
});

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

// i18n
!(function ($) {
  $("#language").click(function () {
    $.i18n().locale = $.i18n().locale == "en" ? "es" : "en";
    $("html").i18n();
  });
  function getLocaleFromClientBrowser() {
    return navigator.languages &&
      navigator.languages.length &&
      console.info(`language available: ${navigator.languages}`) &&
      navigator.languages[0].indexOf("es") > 0
      ? "es"
      : "en";
  }
  jQuery(function ($) {
    $.i18n()
      .load({
        en: "./i18n/en.json",
        es: "./i18n/es.json",
      })
      .done(() => {
        $.i18n().locale = getLocaleFromClientBrowser();
        $("html").i18n();
      });
  });
})(jQuery);


// Navigation active state on scroll
var nav_sections = $("section");
var main_nav = $(".navbar, #mobile-nav");

$(window).on("scroll", function () {
  var cur_pos = $(this).scrollTop() + 200;

  nav_sections.each(function () {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
        console.log("entro para remover");
        main_nav.find("li").removeClass("active");
      }
      main_nav
        .find('a[href="#' + $(this).attr("id") + '"]')
        .parent("li")
        .addClass("active");
    }
    if (cur_pos < 300) {
      $(".menu__items ul:first li:first").addClass("active");
    }
  });
});
