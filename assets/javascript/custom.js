$(document).ready(function () {

    $("#aboutLink").on("click", function () {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        $("#skills").hide();
    });

    $("#portfolioLink").on("click", function () {
        $("#portfolio").show();
        $("#about").hide();
        $("#contact").hide();
        $("#skills").hide();
    });

    $("#skillsLink").on("click", function () {
        $("#skills").show();
        $("#contact").hide();
        $("#portfolio").hide();
        $("#about").hide();
    });

    $("#contactLink").on("click", function () {
        $("#contact").show();
        $("#portfolio").hide();
        $("#about").hide();
        $("#skills").hide();
    });

    $("#logo").on("click", function () {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        $("#skills").hide();
    });

    $("#logo-name").on("click", function () {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        $("#skills").hide();
    });


});