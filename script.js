'use strict';


const playerOneDice = document.querySelector(".img1");
const playerTwoDice = document.querySelector(".img2");
let gameHeading = document.querySelector("h1");
let randomNumber1 = Math.floor((Math.random() * 6) + 1)
let randomNumber2 = Math.floor((Math.random() * 6) + 1)



// firstDiceImage.src = './images/dice1.png';
// secondDiceImage.src = './images/dice1.png';

/////////// The Game ///////////

const diceRoll = function () {
    playerOneDice.src = `./images/dice${randomNumber1}.png`;
    playerTwoDice.src = `./images/dice${randomNumber2}.png`;
    if (randomNumber1 === randomNumber2) {
        gameHeading.textContent = "Draw 🙄"
    } else if (randomNumber1 > randomNumber2) {
        gameHeading.textContent = "🐱‍🏍 Player 1 Wins!"
    } else {
        gameHeading.textContent = "Player 2 Wins! 🐱‍🏍"
    }
}
diceRoll()


