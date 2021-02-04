//Array hold seuqence of colours
const buttonColours = ["red", "blue", "green", "yellow"];
let gameStart = true;
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

//Start the game
function startGame() {
    $(document).one("keydown", function() {
        nextSequence();})
}
startGame();

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
    let currentIndex = userClickedPattern.push(userChosenColour) - 1;
    playSound(userChosenColour);
    animatedPress($("#"+userChosenColour));

    // Check if the game already started when user clicks button
    if (gamePattern.length > 0) {
        //Check if user's click is the same as pattern
        if (checkAnswer(currentIndex) == true) {
            //Check if user clicked correctly to the last pattern
            if (currentIndex + 1 == gamePattern.length) {
                //reset user clicked pattern and increase the next pattern
                userClickedPattern = [];
                setTimeout(() => {
                    level++;
                    nextSequence();
                }, 600);
            }
        // If you user clicked the wrong button
        } else {
            //Notify that user is lost, and restart the game
            alert("You lose");
            gamePattern = [];
            userClickedPattern = [];
            level = 0;
            nextSequence();
        }
    } else {
        userClickedPattern = [];
    }
})

//Add animation when pressing the button
function animatedPress(currentColour) {
    currentColour.addClass("pressed");
    setTimeout(() => {
        currentColour.removeClass("pressed");
    }, 100);
}

//Check if user's answer is correct
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        return true;
    } else {
        return false;
    }
}