"use strict";

import Game from "./game.js";

function fillMainContainerContent(newHTMLContent) {
    const main = document.querySelector("main");
    main.innerHTML = newHTMLContent;
}

function buildSplashScreen() {
    fillMainContainerContent(`
        <section class="splash-screen">
            <img src="/images/splash.png" alt="Bossa Nova Splash">
        </section>
            <div class="goFish">
                <img src="/images/gofish_button.png" alt="Start Game">
            </div>
      `);
    const startButton = document.querySelector(".goFish");
    startButton.addEventListener("click", buildGameScreen);
}
function buildGameOver() {
    fillMainContainerContent(`
        <section class="splash-screen">
            <img src="/images/splash.png" alt="Bossa Nova Splash">
            <h1>You Lost!</h1>
            </section>
            <div class="goFish">
                <img src="/images/gameOver.png" alt="Game Over!">
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
              <img src="/images/restart_button.png" alt="restart Game">
          </div>
      `);
    // to restart the game immediately 
    const startButton = document.querySelector(".goFish");
    startButton.addEventListener("click", buildGameScreen);

    // gets and sets canvas width and height
    // const width = document.querySelector(".game-screen").offsetWidth;
    // const height = document.querySelector(".game-screen").offsetHeight;
    const canvasElement = document.querySelector("canvas");
    canvasElement.setAttribute("width", 800);
    canvasElement.setAttribute("height", 600);

    const game = new Game(canvasElement);
    game.startLoop();

    if (game.isGameOver === true)
        buildGameOver();
}


const main = () => {
    //buildSplashScreen();      //uncomment this to start with splashscreen
    buildGameScreen();          //comment this to start with splashscreen
};

window.addEventListener("load", main);
