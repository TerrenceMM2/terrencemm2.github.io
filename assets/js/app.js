$(document).ready(function() {
    
    $("#submit").on("click", function() {
        $(".modal").modal("show");
        $(".form-control").val("");
    });

});