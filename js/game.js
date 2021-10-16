"use strict";
import Background from "./background.js";
import Fish from "./fish.js";
import Fisher from "./fisher.js";
import Hook from "./hook.js";

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.isGameOver = false

        this.background = new Background(this.canvas)
        //adding 3 fish into an array for later drawing
        this.fish = []
        for (let i = 0; i < 3; i++)
            this.fish.push(new Fish(this.canvas))
        this.fisher = new Fisher(this.canvas)
        this.hook = new Hook(this.canvas)
    }

    startLoop() {
        const loop = () => {
            console.log("in loop");
            this.clearCanvas();
            // this.checkAllCollisions();
            this.drawCanvas();
            if (!this.isGameOver) {
                window.requestAnimationFrame(loop);
            }
        };
        window.requestAnimationFrame(loop);
    }

    drawCanvas() {
        this.background.draw()
        this.fisher.drawFisher()
        this.hook.drawHook()
        this.fisher.drawLine(this.hook.getPosition())   //draws the line from fishers rod to hook
        //draw fish
        this.fish.forEach((fish) => {
            fish.draw()
        })

        this.ctx.font = "30px Arial";
        this.ctx.fillText("Hello World", 10, 50);

    }
    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default Game;
