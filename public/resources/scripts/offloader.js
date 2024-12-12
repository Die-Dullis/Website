$(function() {
    // Dynamically load and append the footer to the body
    $("body").append($("<footer>").load("../resources/misc/footer.html", function() {
        // Fade in the body once the footer is loaded
        $("body").fadeIn(1000);
    }));
});
