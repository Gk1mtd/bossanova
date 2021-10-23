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
        this.gameOver
        this.gameWon

        this.keyIsDown = false
        this.keyWentUp = false

        this.background = new Background(this.canvas);
        this.hud = new HUD(this.canvas);
        //adding 3 fish into an array for later drawing
        this.fish = [];
        this.setFish()
        this.fisher = new Fisher(this.canvas);
        this.hook = new Hook(this.canvas);
    }

    setFish() {
        for (let i = 0; i < 3; i++){
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
        loop()
        //window.requestAnimationFrame(loop);
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    updateGame() {
        // checks if fish array is empty, if empty all fish are catched and game is over: Won!
        if (this.fish.length === 0) {
            this.isGameWon = true
        }
        
        // checks if fisher has no health, sets gameover if so: Lost!
        if (this.fisher.health === 0){
            this.isGameOver = true
        }
        
        // checks if game is over
        if (this.isGameWon){
            this.gameWon()
        }
        else if (this.isGameOver) {
            this.gameOver()
        }
        
        // triggers if space key is pressed down
        if (this.keyIsDown) {
            this.keyWentUp = false
            this.fisher.setThrowPower();
            this.hud.setBarPower(this.fisher.calculatedPower);
        }
        // triggers if space key is up
        if (this.keyWentUp) {
            this.keyIsDown = false
            this.hook.setIsInWater(true)
            this.hook.setPosition(this.fisher.calculatedPower+200, 300);    //+200 is the pixel width of the ground
            this.fisher.resetThrowPower();
            this.checkHookCollisionWithFish();
            this.fisher.reduceHealth()
            this.keyWentUp = false
        }
        
    }

    drawCanvas() {
        this.background.draw();
        this.hud.draw();
        this.fisher.draw();
        this.hook.drawHook();
        this.fisher.drawLine(this.hook.getPosition()); //draws the line from fishers rod to hook
        //draw fish
        this.fish.forEach((fish) => {
            fish.draw();
        });
    }

    checkHookCollisionWithFish() {
        // check if hook is on collision with a fish on x-axis, removes the fish afterwards
        for (let fish of this.fish) {
            let isHookInFish =                  //condition, of when the hook lands on a fish
                this.hook.getPosition().posX >
                    fish.posX - (fish.fishWidth * fish.fishScale)/2 &&
                this.hook.getPosition().posX <
                    fish.posX + (fish.fishWidth * fish.fishScale)/2;
            if(isHookInFish){
                this.hook.setIsInWater(false)
                this.hook.setPosition(fish.posX, fish.posY)
                this.fish.splice(this.fish.indexOf(fish), 1)
                break   // so only first fish will be catched, instead of all //if fish are stacked
            }
        }
    }

    gameOverCallback(callback) {
        this.gameOver = callback
    }
    gameWonCallback(callback) {
        this.gameWon = callback
    }
    resetGameCallback(){
        this.fisher.health = 5
        this.hook.setPosition(200, 200)
        this.hud.setBarPower(0)
        this.fish = []
        this.setFish()
    }
}

export default Game;