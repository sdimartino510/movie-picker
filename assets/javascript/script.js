$(document).ready(function () {
  const inputGenre = $(".inputGenre");
  const inputYear = $(".inputYear");
  const inputRating = $(".inputRating");
  const inputCast = $(".inputCast");
  const $inputForm = $(".inputForm");
  const $resultsBox = $(".resultsBox");

  $("button").on("click", function () {
    event.preventDefault();

    let genre = inputGenre.val();
    let year = inputYear.val();
    let rating = inputRating.val();
    let cast = inputCast.val().trim();

    console.log(genre);
    console.log(year);
    console.log(rating);
    console.log(cast);

    $inputForm.css("display", "none");
    $resultsBox.css("display", "block");

    const url = "http://www.omdbapi.com/?apikey=7978fb46&t='titanic'"

    $.ajax({
        url,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
  });
});
