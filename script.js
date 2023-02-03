
let targetNum = Math.floor(Math.random() * 20) +1;

function checkValue(){
  
  let result = parseInt($("#guessInput").val());
  
  if(result  > targetNum ) {
      $("#result").text("Too High! This student does not receive a prize.");
      $("#result").css("color", "Red");
      $("#result").css("font-size", "50px");
  }  
  else if (result < targetNum) {
      $("#result").text("Too Low! This student does not receive a prize.");
      $("#result").css("color", "Red");
    
  }else {
      $("#result").text("Correct! This student gets the prize");
      $("#result").css("color", "Green");
      targetNum = Math.floor(Math.random() * 20) +1;

  }
} 