//Array hold seuqence of colours
const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

//Function that create a new pattern of the game
function nextSequence() {
    let randomNumber = ~~(Math.random()*4);
    //Choose a random colour
    let randomChosenColour = buttonColours[randomNumber];
    //Push that random colour into the pattern
    gamePattern.push(randomChosenColour);
}