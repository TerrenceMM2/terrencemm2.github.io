$(document).ready(function () {

    $(".nav-link").on("click", function () {

        var click = $(this).attr("href");
        var about = "#about";
        var portfolio = "#portfolio";
        var contact = "#contact";

        switch (click) {
            case about:
                $(portfolio).fadeOut().hide();
                $(contact).fadeOut().hide();
                $(about).fadeIn().show();
                break;
            case portfolio:
                $(about).fadeOut().hide();
                $(contact).fadeOut().hide();
                $(portfolio).fadeIn().show();
                break;
            case contact:
                $(about).fadeOut().hide();
                $(portfolio).fadeOut().hide();
                $(contact).fadeIn().show();
                break;
            default:
                $(about).fadeIn().show();
                $(portfolio).fadeOut().hide();
                $(contact).fadeOut().hide();
        };
    });
});