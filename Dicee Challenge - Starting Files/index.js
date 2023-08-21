function rollDie(){
    return Math.floor(Math.random() * 6) + 1;
}

function getDieImage(val){
    switch(val) {
        case 1:
            return "./images/dice1.png";
        case 2:
            return "./images/dice3.png";
        case 3:
            return "./images/dice3.png";
        case 4:
            return "./images/dice4.png";
        case 5:
            return "./images/dice5.png";
        case 6:
            return "./images/dice6.png";
    }
}

let player1Roll = rollDie();
let player2Roll = rollDie();

let player1Img = document.querySelector(".img1");
let player2Img = document.querySelector(".img2");

player1Img.setAttribute("src", getDieImage(player1Roll));
player2Img.setAttribute("src", getDieImage(player2Roll));

let player1WinText = "Player 1 Wins!"
let player2WinText = "Player 2 Wins!"
let playersTieText = "Tie! No winner."

let title = document.querySelector("h1");

if (player1Roll > player2Roll){
    title.innerHTML = player1WinText;
} else if (player1Roll < player2Roll){
    title.innerHTML = player2WinText;
} else {
    title.innerHTML = playersTieText;
}