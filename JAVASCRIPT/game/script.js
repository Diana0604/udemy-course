var secretNumber = 4;
var found = false;

while(!found){
    var guessNumber = Number(prompt("What is the number?"));

    if(guessNumber === secretNumber){
        alert("You got it right yaaay!");
        found = true;
    }
    else if(guessNumber < secretNumber){
        alert("The number is too low! Refresh to try again")
    }
    else {
        alert("The number is too high! Refresh to try again")
    }
}
