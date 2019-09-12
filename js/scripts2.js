$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    // debugger;
    var nameInput = $("input#name").val();
    var streetInput = $("input#street").val();
    var phoneInput = $("input#phone").val();
    var emailInput = $("input#email").val();
    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $(".phone").text(phoneInput);
    $(".email").text(emailInput);
    $("#contacts").append("<div><h1>" + nameInput + "</h1></div>")
    // $("#blanks").hide();
    $("#contacts").show();

    event.preventDefault();

  });
  $(".name").click(function() {
    alert('asdf');
  });
});
