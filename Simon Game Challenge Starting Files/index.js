let colorOptions = ["red", "yellow", "green", "blue"];
let colorSequence = [];
let sequenceGuessPosition = 0;
let gameRunning = false;
let roundNumber = 0;

//animate button sequence
function displaySquence(){
    for (let i = 0; i < colorSequence.length; i++){
        setTimeout(function () {
            buttonAnimation($("#" + colorSequence[i]));
            playButtonSound($("#" + colorSequence[i]));
        }, i * 500);
    }
}

//create new button sequence
function newSquence(){
    let randColor = Math.floor(Math.random() * colorOptions.length);
    colorSequence.push(colorOptions[randColor]);

    displaySquence();
}

function playButtonSound(obj) {
    let buttonSound = new Audio("sounds/" + $(obj).attr("id") + ".mp3");
    buttonSound.play();
}

//animate button press
function buttonAnimation(obj) {
    $(obj).addClass("pressed");
    setTimeout(function () {
        $(obj).removeClass("pressed");
    }, 100);
}

//add pressed button to player's sequence attempt
function checkAnswer(obj) {
    if ($(obj).attr("id") === colorSequence[sequenceGuessPosition]){
        sequenceGuessPosition++;

        if (sequenceGuessPosition == colorSequence.length) {
            setTimeout(function () {
                nextRound();
            }, 1000);
        }
    } else {
        endGame();
    }
}

//initialize game
function nextRound() {
    roundNumber++;
    $("#level-title").text("Round " + roundNumber);

    sequenceGuessPosition = 0;
    newSquence();
    console.log("Round Start!");
}

//cease game function
function endGame() {
    gameRunning = false;
    $("#level-title").text("Game Over! Press 'A' to Restart");

    let gameEndSound = new Audio("sounds/wrong.mp3");
    gameEndSound.play();

    console.log("GAME OVER!")
}

//button click handler
$(".btn").click(function () {
    if (gameRunning){
        buttonAnimation($(this));
        checkAnswer($(this));
        if (gameRunning) {
            playButtonSound($(this));
        }
    }
});

//key pressed event handler
$(document).keydown(function(e) {
    if (e.key === "a"){
        if (!gameRunning){
            colorSequence = [];
            sequenceGuessPosition = 0;
            roundNumber = 0;
            nextRound();
        }
        gameRunning = true;
    }
});