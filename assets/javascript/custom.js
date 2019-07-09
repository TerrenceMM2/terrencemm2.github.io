$(document).ready(function () {

    $("#aboutLink").on("click", function() {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        $("footer").addClass("position-relative");
    });

    $("#portfolioLink").on("click", function() {
        $("#portfolio").show();
        $("#about").hide();
        $("#contact").hide();
        $("footer").removeClass("position-relative");
    });

    $("#contactLink").on("click", function() {
        $("#contact").show();
        $("#portfolio").hide();
        $("#about").hide();
        $("footer").addClass("position-relative");
    });

    $("#logo").on("click", function() {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        $("footer").addClass("position-relative");
    });

    $("#logo-name").on("click", function() {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        $("footer").addClass("position-relative");
    });


});