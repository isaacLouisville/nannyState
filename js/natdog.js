<!--Jquery function to show image after submit button click-->

$(".punked").hide().show();
$("#submitButton").click(function(){
  $(".punked").show("slow");
});
