$(document).ready(function() {
    
    $("#submit").on("click", function() {
        console.log("click");
        event.preventDefault();
        $(".modal").modal("show");
        $(".form-control").val("");
    });

});