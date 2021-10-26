"use strict";

import Game from "./game.js";

// builds html on demand
function fillMainContainerContent(newHTMLContent) {
    const main = document.querySelector("main");
    main.innerHTML = newHTMLContent;
}

// builds splashscreen, first thing a player will see
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

// builds GameWon screen
function buildGameWon() {
    fillMainContainerContent(`
        <section class="splash-screen">
            <img src="./images/splash.png" alt="Bossa Nova Splash">
        </section>
        <h1>You Won!</h1>
        <div class="goFish">
            <img src="./images/gameOverWon.png" alt="restart Game">
        </div>
      `);
    const startButton = document.querySelector(".goFish");
    startButton.addEventListener("click", buildGameScreen);
}

// builds GameOver screen
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

/*builds the actual game screen, canvas is created and music will be played in a loop
will also establish the game itself
eventlisteners reside here for the game */
function buildGameScreen() {
    fillMainContainerContent(`
        <section class="game-screen">
            <canvas></canvas>
            </section>
        <audio id="myAudio" loop>
            <source src="sound/bossa_nova.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <div class="goFish">
            <img src="./images/restart_button.png" alt="restart Game">
        </div>
      `);

    // add music, plays when game screen starts or restarts
    let music = document.getElementById("myAudio");
    music.play();
    // to restart the game immediately, by resetting fisher and fish
    const startButton = document.querySelector(".goFish");

    const canvasElement = document.querySelector("canvas");
    canvasElement.setAttribute("width", 800);
    canvasElement.setAttribute("height", 600);

    const game = new Game(canvasElement);
    game.startLoop();

    game.gameOverCallback(buildGameOver);
    game.gameWonCallback(buildGameWon);
    startButton.addEventListener("click", (event) => {
        game.resetGameCallback();
    });
    
    /* Event listener for space key
            In UpdateLoop:
                if "space key" is pressed the throw power of the fisher object will be raised
                if "space key" is released the hook will be thrown to the calculated distance (calculated in fisher object)
                    HUD power bar will be filled as well
        */
    document.addEventListener("keydown", (event) => {
        game.keyIsDown = true;
        game.keyWentUp = false;
    });
    document.addEventListener("keyup", (event) => {
        game.keyIsDown = false;
        game.keyWentUp = true;
    });
}

const main = () => {
    buildSplashScreen(); //uncomment this to start with splashscreen
    //buildGameScreen();          //comment this to start with splashscreen
};

window.addEventListener("load", main);
