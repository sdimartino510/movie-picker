$(document).ready(function() {
    $("button").on("click", function() {
        event.preventDefault();
        console.log("I've been clicked!");
        let inputGenre = $(".inputGenre").val();
        let inputYear = $(".inputYear").val();
        let inputRating = $(".inputRating").val();
        let inputCast = $(".inputCast").val().trim();
        console.log(inputGenre);
        console.log(inputYear);
        console.log(inputRating);
        console.log(inputCast);
    });
});