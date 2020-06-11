//Business logic 

/* If (number >= 1000 (2200)) {
  let M = number / 1000 (2.2)
  let displayM = ("M")
  let remainder =  number (2200) - M*1000 (2000) = 200
  display the letter M  M/1000 times
  let roman += "M"
  if 
}
*/


while (number >= 1000) { //(3500) (750)
  let M = Math.floor(number/1000); //(3) (X)
  if (M = 1) {
    roman += "M";
  } if (M = 2) {
    roman += "MM";
  }if (M = 3){
    roman += "MMM"; //(MMM)
  }
  let remainderM = number - M*1000; //(3500- 3000 = 500)

  if (remainderM >= 500 || number >= 500)
  let D = Math.floor (number/500); //(1)(1)
  if (D = 1) {
    roman += "D"; //(roman = MMMD)(roman = D)
  }
  if (D=2){
    roman +="DD";
  }if(D=3){
    roman += "DDD";
  }
  if (remainderM >= 500) {
  let remainderD = remainderM - D*500;
  } if (remainderM <=500 && number>=500){
  let remainderD = number - D*500; //(if 750 = number --> remainderD = 250)
  } 

  if (remainderD >=100 || number >=100) {
    
  }

}




//UI logic
$(document).ready(function(){
  $("#numberConverter").submit(function(event) {
  event.preventDefault();
  let number = $("input#enteredNumber").val();
  let results = numbersToRoman(number);
  
  $("#output").show();
  $("#output").text(results);
  });

});