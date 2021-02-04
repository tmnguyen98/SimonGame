//Array hold seuqence of colours
const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

//Function that create a new pattern of the game
function nextSequence() {
    let randomNumber = ~~(Math.random()*4);
    //Choose a random colour
    let randomChosenColour = buttonColours[randomNumber];
    //Push that random colour into the pattern
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    //playSound(randomChosenColour);
}

//Play the sound of the button
function playSound(key) {
    switch (key) {
        case "red":
            break;
    
        case "green":
            break;
            
        case "blue":
            break;
        
        case "yellow":
            break;
        
        default:
            break;
    }
}

//Record which button is clicked by the user
$(".btn").on("click", function(event) {
    let userChosenColour = event.currentTarget.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})