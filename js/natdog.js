//<!--Jquery function to show image after submit button click-->

$(".punked").hide();
$("#submitButton").click(function( event ){
  event.preventDefault();
  $(".punked").show("slow");
});
