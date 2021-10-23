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
        this.isGameWon = false;
        this.gameOver;
        this.gameWon;

        this.keyIsDown = false;
        this.keyWentUp = false;

        this.background = new Background(this.canvas);
        this.hud = new HUD(this.canvas);
        //adding 3 fish into an array for later drawing
        this.fish = [];
        this.setFish();
        this.fisher = new Fisher(this.canvas);
        this.hook = new Hook(this.canvas);
    }

    setFish() {
        for (let i = 0; i < 3; i++) {
            this.fish.push(new Fish(this.canvas));
        }
    }

    startLoop() {
        const loop = () => {
            this.clearCanvas();
            this.updateGame();
            this.drawCanvas();
            if (!this.isGameOver && !this.isGameWon) {
                window.requestAnimationFrame(loop);
            }
        };
        loop();
        //window.requestAnimationFrame(loop);
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    updateGame() {
        // checks if fish array is empty, if empty all fish are catched and game is over: Won!
        if (this.fish.length === 0) {
            this.isGameWon = true;
        }

        // checks if fisher has no health, sets gameover if so: Lost!
        if (this.fisher.health === -1) {
            this.isGameOver = true;
        }
        // if health of fisher down to zero and the hook didnt catched anything set gameOver state
        if (this.fisher.health === 0 && this.hook.posY > 600) {
            this.isGameOver = true;
        }

        // checks if game is over
        if (this.isGameWon) {
            this.gameWon();
        } else if (this.isGameOver) {
            this.gameOver();
        }

        // triggers if space key is pressed down
        if (this.keyIsDown) {
            this.keyWentUp = false;
            this.fisher.setThrowPower();
            this.hud.setBarPower(this.fisher.calculatedPower);
        }
        // triggers if space key is up
        if (this.keyWentUp) {
            this.keyIsDown = false;
            this.hook.setToFloatDown(true);
            this.hook.setPosition(this.fisher.calculatedPower + 200, 300); //+200 is the pixel width of the ground
            this.fisher.resetThrowPower();
            this.fisher.reduceHealth();
            this.fisher.isFishing = true
            this.keyWentUp = false;
        }
        this.checkHookCollisionWithFish();
    }

    drawCanvas() {
        this.background.draw();
        this.hud.draw();
        this.fisher.draw();
        this.hook.drawHook();
        this.fisher.drawLine(this.hook.getPosition()); //draws the line from fishers rod to hook
        //draw fish
        this.fish.forEach((fish) => {
            fish.posX < this.hook.getPosition().posX    //let the fish face towards the hook
                ? fish.setFacing(1)
                : fish.setFacing(0);
            fish.draw();
        });
    }

    // check if hook is on collision with a fish on x-axis and y-axis, removes the fish afterwards
    checkHookCollisionWithFish() {
        for (let fish of this.fish) {
            //condition, of when the hook lands on a fish x-axis
            let isHookInFishX =
                this.hook.getPosition().posX >
                    fish.posX - (fish.fishWidth * fish.fishScale) / 2 &&
                this.hook.getPosition().posX <
                    fish.posX + (fish.fishWidth * fish.fishScale) / 2;
            //condition, of when the hook lands on a fish y-axis
            let isHookInFishY =
                this.hook.getPosition().posY >
                    fish.posY - (fish.fishHeight * fish.fishScale) / 2 &&
                this.hook.getPosition().posY <
                    fish.posY + (fish.fishHeight * fish.fishScale) / 2;
            if (isHookInFishX) {
                if (isHookInFishY) {
                    this.hook.setToFloatDown(false);
                    this.fish.splice(this.fish.indexOf(fish), 1);
                    break; // so only first fish will be catched, instead of all //if fish are stacked
                }
            }
        }
    }

    gameOverCallback(callback) {
        this.gameOver = callback;
    }
    gameWonCallback(callback) {
        this.gameWon = callback;
    }
    resetGameCallback() {
        this.fisher.health = 5;
        this.hook.isInWater = false;
        this.hook.setPosition(200, 200);
        this.hud.setBarPower(0);
        this.fish = [];
        this.setFish();
    }
}

export default Game;
