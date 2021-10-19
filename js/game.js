"use strict";
import Background from "./background.js";
import Fish from "./fish.js";
import Fisher from "./fisher.js";
import Hook from "./hook.js";
import HUD from "./hud.js";

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.isGameOver = false;
        this.gameOver

        this.background = new Background(this.canvas);
        this.hud = new HUD(this.canvas);
        //adding 3 fish into an array for later drawing
        this.fish = [];
        for (let i = 0; i < 3; i++) this.fish.push(new Fish(this.canvas));
        this.fisher = new Fisher(this.canvas);
        this.hook = new Hook(this.canvas);

        /* Event listener for space key
            if "space key" is pressed the throw power of the fisher object will be raised
            if "space key" is released the hook will be thrown to the calculated distance (calculated in fisher object)
                HUD power bar will be filled as well
        */
        document.addEventListener("keydown", (event) => {
            if (event.code === "Space") {
                this.fisher.setThrowPower();
                this.hud.setBarPower(this.fisher.calculatedPower);
            }
        });
        document.addEventListener("keyup", (event) => {
            if (event.code === "Space") {
                this.hook.setPosition(this.fisher.calculatedPower+200, 300);    //+200 is the pixel width of the ground
                this.fisher.resetThrowPower();
                this.checkHookCollisionWithFish();
                this.fisher.setHealth(-1)
            }
        });
    }

    startLoop() {
        const loop = () => {
            this.clearCanvas();
            this.updateGame();
            // this.checkAllCollisions();
            this.drawCanvas();
            if (!this.isGameOver) {
                window.requestAnimationFrame(loop);
            }
        };
        window.requestAnimationFrame(loop);
    }

    drawCanvas() {
        this.background.draw();
        this.hud.draw();
        this.fisher.drawFisher();
        this.hook.drawHook();
        this.fisher.drawLine(this.hook.getPosition()); //draws the line from fishers rod to hook
        //draw fish
        this.fish.forEach((fish) => {
            fish.draw();
        });
    }

    updateGame() {
        // checks if fish array is empty, if empty all fish are catched and game is over: Won!
        if (this.fish.length === 0)
            this.isGameOver = true
        
        // checks if fisher has no health, sets gameover if so: Lost!
        if (this.fisher.health === 0)
            this.isGameOver = true
        
        // checks if game is over
        if (this.isGameOver)
            this.gameOver()
    }

    checkHookCollisionWithFish() {
        // check if hook is on collision with a fish on x-axis, removes the fish afterwards
        const foundFishOnHook = this.fish.findIndex(fish => {
            let isHookInFish =
                this.hook.getPosition().posX >
                    fish.posX - (fish.fishWidth * fish.fishScale)/2 &&
                this.hook.getPosition().posX <
                    fish.posX + (fish.fishWidth * fish.fishScale)/2;
            if(isHookInFish)
                return true
        })
        this.fish.splice(foundFishOnHook, 1)
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    gameOverCallback(callback) {
        this.gameOver = callback
    }
}

export default Game;
