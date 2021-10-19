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
            <img src="./images/gameOverWon.png" alt="Game Over!">
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
            <img src="./images/gameOver.png" alt="Game Over!">
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
          <div class="goFish">
              <img src="./images/restart_button.png" alt="restart Game">
          </div>
      `);
    // to restart the game immediately 
    const startButton = document.querySelector(".goFish");
    startButton.addEventListener("click", buildGameScreen);

    const canvasElement = document.querySelector("canvas");
    canvasElement.setAttribute("width", 800);
    canvasElement.setAttribute("height", 600);

    const game = new Game(canvasElement);
    game.startLoop();
    
    game.gameOverCallback(buildGameOver)
    game.gameWonCallback(buildGameWon)
}

const main = () => {
    buildSplashScreen();      //uncomment this to start with splashscreen
    //buildGameScreen();          //comment this to start with splashscreen
};

window.addEventListener("load", main);
