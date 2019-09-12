$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    // var nameInput = $("input#name").val();
    // var ageInput = $("input#age").val();
    // var favFoodInput = $("input#favFood").val();
    // var favMusicInput = $("input#favMusic").val();
    // var favMovieInput = $("input#favMovie").val();

    var nameInput = $("input#name").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var zipInput = $("input#zip").val();
    var stateInput = $("select#state").value();


    // $(".name").text(nameInput);
    // $(".age").text(ageInput);
    // $(".favFood").text(favFoodInput);
    // $(".favMovie").text(favMovie);
    // $(".favMusic").text(favMusicInput);

    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".zip").text(zipInput);
    $(".state").text(stateInput);


    $("#shipping").show();

    event.preventDefault();

  });
});
