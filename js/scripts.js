

$(document).ready(function() {
  $("form#whichTrack").submit(function(event) {
    event.preventDefault();

    var resultInterest = $("#interest").val();
    var resultLongHours = $("#longHours").val();
    var resultLayoutDesign = $("#layoutDesign").val();
    var resultBigBusiness = $("#bigBusiness").val();
    var resultDescribeYou = $("#describeYou").val();

    if(resultInterest === "Yes") {
      $("#resultNone").hide();
    } else {
      $("#resultNone").show();
      $("#threeQuestions").hide();
    }

    if(resultLongHours === "1") {
      $("#resultNone").hide();
    } else {
      $("#resultNone").show();
      $("#threeQuestions").hide();
    }
    //
    // if(resultLayoutDesign === "1" && resultBigBusiness === "1" || resultLayoutDesign === "1" && resultDescribeYou === "1" || resultBigBusiness === "1" && resultDescribeYou === "1") {
    //   $("#resultCsharp").show();
    // }
    //
    // if(resultLayoutDesign === "2" && resultBigBusiness === "2" || resultLayoutDesign === "2" && resultDescribeYou === "2" || resultBigBusiness === "2" && resultDescribeYou === "2") {
    //   $("#resultRuby").show();
    // }
    //
    // if(resultLayoutDesign === "3" && resultBigBusiness === "3" || resultLayoutDesign === "3" && resultDescribeYou === "3" ||  resultBigBusiness === "3" && resultDescribeYou === "3") {
    //   $("#resultDesign").show();
    // }
    //
    // if(resultLayoutDesign === "1" && resultBigBusiness === "2" && resultDescribeYou === "3" || resultLayoutDesign === "2" && resultBigBusiness === "3" && resultDescribeYou === "1" || resultLayoutDesign === "3" && resultBigBusiness === "1" && resultDescribeYou === "2") {
    //   $("#resultRuby").show();
    //   $("#resultCsharp").show();
    //   $("#resultDesign").show();
    // }


        if(resultLayoutDesign === "1" && resultBigBusiness === "1" || resultLayoutDesign === "1" && resultDescribeYou === "1" || resultBigBusiness === "1" && resultDescribeYou === "1") {
          $("#resultCsharp").show();
        } else if(resultLayoutDesign === "2" && resultBigBusiness === "2" || resultLayoutDesign === "2" && resultDescribeYou === "2" || resultBigBusiness === "2" && resultDescribeYou === "2") {
          $("#resultRuby").show();
        } else if(resultLayoutDesign === "3" && resultBigBusiness === "3" || resultLayoutDesign === "3" && resultDescribeYou === "3" ||  resultBigBusiness === "3" && resultDescribeYou === "3") {
          $("#resultDesign").show();
        } else if(resultLayoutDesign === "1" && resultBigBusiness === "2" && resultDescribeYou === "3" || resultLayoutDesign === "2" && resultBigBusiness === "3" && resultDescribeYou === "1" || resultLayoutDesign === "3" && resultBigBusiness === "1" && resultDescribeYou === "2") {
          $("#resultRuby").show();
          $("#resultCsharp").show();
          $("#resultDesign").show();
        }





  });
});
