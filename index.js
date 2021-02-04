//Array hold seuqence of colours
const buttonColours = ["red", "blue", "green", "yellow"];
let gameStart = true;
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

//Start the game
while (gameStart == true) {
    gameStart = false;
    $(document).one("keydown", function() {
        nextSequence();
    })
}

//Function that create a new pattern of the game
function nextSequence() {
    //Change title of the screen (h1)
    $("h1").text("Level " + level);
    //Choose a random colour
    let randomNumber = ~~(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    //Push that random colour into the pattern
    gamePattern.push(randomChosenColour);

    //$("#" + randomChosenColour).on("click", function () {
    $("." + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    //});
}

//Play the sound of the button
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Record which button is clicked by the user
$(".btn").on("click", function(event) {
    let userChosenColour = event.currentTarget.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatedPress($("#"+userChosenColour));
})

//Add animation when pressing the button
function animatedPress(currentColour) {
    currentColour.addClass("pressed");
    setTimeout(() => {
        currentColour.removeClass("pressed");
    }, 100);
}