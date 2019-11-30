//constants
var difficultyModeNums = [3, 6];
var hardNum = 6;
var easyNum = 3;
var HARD = 0;
var EASY = 1;
var emptyString = "";
var correctMessage = "Correct!";
var playAgainMessage = "Play Again?";
var tryAgainMessage = "Try Again";
var newColorMessage = "New Color"
var backgroundColor = "#232323";
var h1BackgroundColor = "steelblue";
//page variables
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var currentNum = difficultyModeNums[1];

//--------------------------MAIN CODE---------------------------
generateAndDisplayRandomColors();
//start game
addClickListeners();
//general buttons
addResetButtonListener();
addModeButtonListener();

//--------------------------- COLOR GENERATION -----------------------
//generate one random color
function randomColor() {
    red = Math.floor(Math.random(0, 1)*256);
    green = Math.floor(Math.random(0, 1)*256);
    blue = Math.floor(Math.random(0, 1)*256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
};
//add num random colors to array
function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i ++){
        newColor = randomColor(); 
        arr.push(newColor);
    }
    return arr;
}
//change color of squares to given array + hide if not displayed
function changeSquareColorsTo(colors){
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
}
//add new random colors
function generateAndDisplayRandomColors(){
    colors = generateRandomColors(currentNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    changeSquareColorsTo(colors);
    h1.style.backgroundColor = h1BackgroundColor;
    resetButton.textContent = newColorMessage;
    messageDisplay.textContent = emptyString;
}

//--------------------------- CHOSE COLOR ---------------------------
//pick a color to be the correct answer
function pickColor(){
    var random = Math.floor(Math.random(0, 1) * colors.length);
    return colors[random];
}

//--------------------------- START GAME ------------------
function displayRandomColors(){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
}
function addClickListeners(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            //check if it is correct answer
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                clickedWinnerColor();
                return;
            }
            clickedLoserColor(this);
        });
    }
}

//------------------------- CLICK SQUARE ----------------------
function changeColorOfSquaresTo(colorString){
    //loop through squares to change color to given color
    for(var i = 0; i < squares.length; i ++){
        squares[i].style.backgroundColor = colorString;
    }
}
function clickedWinnerColor(){
    messageDisplay.textContent = correctMessage;
    changeColorOfSquaresTo(pickedColor);
    h1.style.backgroundColor = pickedColor;
    resetButton.textContent = playAgainMessage;
}
function clickedLoserColor(square){
    square.style.backgroundColor = backgroundColor;
    messageDisplay.textContent = tryAgainMessage;
}

//-------------------------GENERAL BUTTONS----------------------
function addResetButtonListener(){
    resetButton.addEventListener("click", function(){
        generateAndDisplayRandomColors();
    });    
}
function addModeButtonListener(){
    for(var i = 0; i < modeButtons.length; i++){
         modeButtons[i].addEventListener("click", function(){
             toggleDifficultyTo(this);
             this.textContent === "Easy" ? currentNum = easyNum : currentNum = hardNum;
             generateAndDisplayRandomColors();
         });
    }
}
function toggleDifficultyTo(difficulty){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].classList.remove('selected');
    }
    difficulty.classList.add('selected');
}