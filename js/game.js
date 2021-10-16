"use strict";
import Background from "./background.js";
import Fish from "./fish.js";

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.isGameOver = false

        this.background = new Background(this.canvas)
        this.fish = new Fish(this.canvas)
    }

    startLoop() {
        const loop = () => {
            console.log("in loop");
            this.clearCanvas();
            // this.checkAllCollisions();
            // drawCanvas
            this.drawCanvas();
            if (!this.isGameOver) {
                window.requestAnimationFrame(loop);
            }
        };
        window.requestAnimationFrame(loop);
    }

    drawCanvas() {
        this.background.draw()
        this.fish.draw()

        this.ctx.font = "30px Arial";
        this.ctx.fillText("Hello World", 10, 50);

    }
    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default Game;
