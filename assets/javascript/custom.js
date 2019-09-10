$(document).ready(function () {

    $("#aboutLink").on("click", function () {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        $("#skills").hide();
        $("#resume").hide();
    });

    $("#portfolioLink").on("click", function () {
        $("#portfolio").show();
        $("#about").hide();
        $("#contact").hide();
        $("#skills").hide();
        $("#resume").hide();
    });

    $("#skillsLink").on("click", function () {
        $("#skills").show();
        $("#contact").hide();
        $("#portfolio").hide();
        $("#about").hide();
        $("#resume").hide();
    });

    $("#resumeLink").on("click", function () {
        $("#resume").show();
        $("#contact").hide();
        $("#portfolio").hide();
        $("#about").hide();
        $("#skills").hide();
    });

    $("#contactLink").on("click", function () {
        $("#contact").show();
        $("#portfolio").hide();
        $("#about").hide();
        $("#skills").hide();
        $("#resume").hide();
    });

    $("#logo").on("click", function () {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        $("#skills").hide();
        $("#resume").hide();
    });

    $("#logo-name").on("click", function () {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        $("#skills").hide();
        $("#resume").hide();
    });


});