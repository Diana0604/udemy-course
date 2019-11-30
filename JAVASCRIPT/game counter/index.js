var playerOne = document.querySelector("#playerOne");
var scoreOneSpan = document.querySelector("#scoreOne");
var playerTwo = document.querySelector("#playerTwo");
var scoreTwoSpan = document.querySelector("#scoreTwo");
var reset = document.querySelector("#reset");
var inputNum = document.querySelector("input");
var scoreMessage = document.querySelector("p");
var scoreOne = 0;
var scoreTwo = 0;
var maxScore = 5;
var gameOver = false;

playerOne.addEventListener("click", function(){
    if(!gameOver){
        scoreOne++;
        scoreOneSpan.textContent = scoreOne;
        if(scoreOne === maxScore){
            scoreOneSpan.classList.toggle("winner");
            gameOver = true;
        }
    }
});


playerTwo.addEventListener("click", function(){
    h1 = document.querySelector("h1");
    if(!gameOver){
        scoreTwo++;
        scoreTwoSpan.textContent = scoreTwo;
        if(scoreTwo === maxScore){
            gameOver = true;
            scoreTwoSpan.classList.toggle("winner");
        }
    }
});

function resetGame(){
    scoreOne = 0;
    scoreTwo = 0;
    scoreOneSpan.textContent = scoreOne;
    scoreTwoSpan.textContent = scoreTwo;
    scoreOneSpan.classList.remove("winner");
    scoreTwoSpan.classList.remove("winner");
    gameOver = false;

}

reset.addEventListener("click", function(){
    resetGame();
});

inputNum.addEventListener("change", function(){
    maxScore = Number(this.value);
    scoreMessage.textContent = "Playing to: " + this.value;
    resetGame();
});