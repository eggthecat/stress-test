$(document).ready(function() {
  $("#fortunequiz").submit(function(event) {
    event.preventDefault();
    //
    var points = 0;
    $("input:checkbox[name=For]:checked").each(function(){
      points++;
    });
    $(".results").hide();
    if(points <= 3){
      $(".Ans1").show();
    } else if (points <= 6){
      $(".Ans2").show();
    } else if (points > 6){
      $(".Ans3").show();
    }
  });
});
