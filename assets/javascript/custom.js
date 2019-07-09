$(document).ready(function () {

    $("#aboutLink").on("click", function () {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        if ($(window).width() < 415) {
            $("footer").addClass("position-relative");
        }
    });

    $("#portfolioLink").on("click", function () {
        $("#portfolio").show();
        $("#about").hide();
        $("#contact").hide();
        if ($(window).width() < 415) {
            $("footer").removeClass("position-relative");
        }
    });

    $("#contactLink").on("click", function () {
        $("#contact").show();
        $("#portfolio").hide();
        $("#about").hide();
        if ($(window).width() < 415 && $(window).width() > 361) {
            $("footer").removeClass("position-relative");
        }
    });

    $("#logo").on("click", function () {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        if ($(window).width() < 415) {
            $("footer").addClass("position-relative");
        }
    });

    $("#logo-name").on("click", function () {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        if ($(window).width() < 415) {
            $("footer").addClass("position-relative");
        }
    });


});