"use strict";

import Game from "./game.js";

function fillMainContainerContent(newHTMLContent) {
    const main = document.querySelector("main");
    main.innerHTML = newHTMLContent;
}

function buildSplashScreen() {
    fillMainContainerContent(`
        <section class="splash-screen">
            <img src="./images/splash.png" alt="Bossa Nova Splash">
        </section>
        <p>hold "Space" to launch the hook</p>
        <p>Catch all fish</p>
        <p>loose after 5 tries</p>
        <div class="goFish">
            <img src="./images/gofish_button.png" alt="Start Game">
        </div>
      `);
    const startButton = document.querySelector(".goFish");
    startButton.addEventListener("click", buildGameScreen);
}

function buildGameWon() {
    fillMainContainerContent(`
        <section class="splash-screen">
            <img src="./images/splash.png" alt="Bossa Nova Splash">
        </section>
        <h1>You Won!</h1>
        <div class="goFish">
            <img src="./images/restart_button.png" alt="restart Game">
        </div>
      `);
    const startButton = document.querySelector(".goFish");
    startButton.addEventListener("click", buildGameScreen);
}

function buildGameOver() {
    fillMainContainerContent(`
        <section class="splash-screen">
            <img src="./images/splash.png" alt="Bossa Nova Splash">
        </section>
        <h1>You Lost!</h1>
        <div class="goFish">
            <img src="./images/restart_button.png" alt="restart Game">
        </div>
      `);
    const startButton = document.querySelector(".goFish");
    startButton.addEventListener("click", buildGameScreen);
}

function buildGameScreen() {
    fillMainContainerContent(`
        <section class="game-screen">
            <canvas></canvas>
            </section>
        <audio id="myAudio" loop>
            <source src="sound/bossa_nova.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
      `);
    
    // add music, plays when game screen starts or restarts
    let music = document.getElementById("myAudio"); 
    music.play(); 
    // to restart the game immediately 
    // const startButton = document.querySelector(".goFish");
    // startButton.addEventListener("click", buildGameScreen);

    const canvasElement = document.querySelector("canvas");
    canvasElement.setAttribute("width", 800);
    canvasElement.setAttribute("height", 600);

    const game = new Game(canvasElement);
    game.startLoop();
    
    game.gameOverCallback(buildGameOver)
    game.gameWonCallback(buildGameWon)
    game.resetGameCallback()
}

const main = () => {
    buildSplashScreen();      //uncomment this to start with splashscreen
    //buildGameScreen();          //comment this to start with splashscreen
};

window.addEventListener("load", main);
