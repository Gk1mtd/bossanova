"use-strict";

// import Game from "./game.mjs";

function fillMainContainerContent(newHTMLContent) {
    const main = document.querySelector("main");
    main.innerHTML = newHTMLContent;
}

function buildSplashScreen() {
    fillMainContainerContent(`
        <section class="splash-screen">
            <img src="/images/splash.png" alt="Bossa Nova Splash">
            <div class="goFish">
                <img src="/images/gofish_button.png" alt="Start Game">
            </div>
        </section>
      `);
    const startButton = document.querySelector(".goFish");
    startButton.addEventListener("click", buildGameScreen);
}

function buildGameScreen() {
    console.log("build game");
    fillMainContainerContent(`
        <section class="game-screen">
          <canvas></canvas>
            <div class="goFish">
                <img src="/images/restart_button.png" alt="Start Game">
            </div>
        </section>  
      `);
    // to restart the game imidiatly
    const startButton = document.querySelector(".goFish");
    startButton.addEventListener("click", buildGameScreen);

    // get
    const width = document.querySelector(".game-screen").offsetWidth;
    const height = document.querySelector(".game-screen").offsetHeight;

    const canvasElement = document.querySelector("canvas");
    canvasElement.setAttribute("width", width);
    canvasElement.setAttribute("height", height);

    // const game = new Game(canvasElement);
    // game.gameOverCallback(buildGameOver);

    // game.startLoop();

    // const setPlayerDirection = (event) => {
    //     if (event.code === "ArrowUp") {
    //         game.player.setDirection(-1);
    //     } else if (event.code === "ArrowDown") {
    //         game.player.setDirection(1);
    //     }
    // };

    // document.addEventListener("keydown", setPlayerDirection);
}

function buildGameOver() {
    fillMainContainerContent(`
        <section class="splash-screen">
            <img src="/images/splash.png" alt="Bossa Nova Splash">
            <div class="goFish">
                <img src="/images/gofish_button.png" alt="Start Game">
            </div>
        </section>
      `);
    const startButton = document.querySelector(".goFish");
    startButton.addEventListener("click", buildGameScreen);
}

const main = () => {
    buildSplashScreen();
};

window.addEventListener("load", main);
