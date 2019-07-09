$(document).ready(function () {

    $("#aboutLink").on("click", function () {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        if (screen.width < 414) {
            $("footer").removeClass("position-absolute");
            $("footer").addClass("position-relative");
        }
    });

    $("#portfolioLink").on("click", function () {
        $("#portfolio").show();
        $("#about").hide();
        $("#contact").hide();
        if (screen.width < 414 && screen.height < 630) {
            $("footer").removeClass("position-relative");
            $("footer").addClass("position-absolute");
        }
        if (screen.width < 414 && screen.height > 630) {
            $("footer").removeClass("position-relative");
            $("footer").addClass("position-absolute");
        }
    });

    $("#contactLink").on("click", function () {
        $("#contact").show();
        $("#portfolio").hide();
        $("#about").hide();
        if (screen.width < 414 && screen.height < 630) {
            $("footer").removeClass("position-absolute");
            $("footer").addClass("position-relative");
        }
        if (screen.width < 414 && screen.height > 630) {
            $("footer").removeClass("position-relative");
            $("footer").addClass("position-absolute");
        }
    });

    $("#logo").on("click", function () {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        if (screen.width < 414) {
            $("footer").removeClass("position-absolute");
            $("footer").addClass("position-relative");
        }
    });

    $("#logo-name").on("click", function () {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();
        if (screen.width < 414) {
            $("footer").removeClass("position-absolute");
            $("footer").addClass("position-relative");
        }
    });


});