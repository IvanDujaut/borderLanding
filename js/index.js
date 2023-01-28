/*----Para desplegar el menu en la seccion mobile ----*/
const navToggle = document.querySelector(".navbar-toggle");
const navMenu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("menu_visible");
});


/*----Para switchear entre las secciones toSend y toReceive ----*/
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


/*----Para la funcionalidad del formulario ----*/
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

/*----Para la funcionalidad del cambio de idioma ----*/
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


/*----Para marcar en el header la seccion en donde estamos ----*/
// Navigation active state on scroll
var nav_sections = $("section");
var main_nav = $(".navbar");

$(window).on("scroll", function () {
  var cur_pos = $(this).scrollTop() + 200;

  nav_sections.each(function () {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
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

/*----Para modificar el placeholder de los forms al cambiar de idioma ----*/
// Define an object to hold the translations
var translations = {
  en: {
    emailOurTeam: "Enter your e-mail",
    name: "First name",
    surname: "Last name",
    email: "Email",
    phone: "Phone Number",
    country: "Country where you live",
    nationality: "Nationality",
  },
  es: {
    emailOurTeam: "Ingresá tu e-mail",
    name: "Nombre",
    surname: "Apellido",
    email: "Correo electrónico",
    phone: "Número de teléfono",
    country: "País",
    nationality: "Nacionalidad",
  },
};

// Get the form inputs
var emailOurTeamInput = document.getElementById("e-mail");
var nameInput = document.getElementById("name");
var surnameInput = document.getElementById("surname");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var countryInput = document.getElementById("country");
var nationalityInput = document.getElementById("nationality");

// Get the language toggle button
var toggleBtn = document.getElementById("language");

// Set the default language to English
var currentLanguage = "en";

// Function to toggle the language
function toggleLanguage() {
  currentLanguage = currentLanguage === "es" ? "en" : "es";
  updateForm();
}

// Function to update the form with the current language
function updateForm() {
  emailOurTeamInput.placeholder = translations[currentLanguage].emailOurTeam;
  nameInput.placeholder = translations[currentLanguage].name;
  surnameInput.placeholder = translations[currentLanguage].surname;
  emailInput.placeholder = translations[currentLanguage].email;
  phoneInput.placeholder = translations[currentLanguage].phone;
  countryInput.placeholder = translations[currentLanguage].country;
  nationalityInput.placeholder = translations[currentLanguage].nationality;
}

// Listen for clicks on the toggle button
toggleBtn.addEventListener("click", toggleLanguage);

// Update the form with the default language
updateForm();


/*----Para eliminar el spin button en input del tipo number para Mozilla ----*/
let inputField = document.getElementById("phone");

inputField.style.WebkitAppearance = "none";
inputField.style.MozAppearance = "textfield";
