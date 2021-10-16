"use strict"
import randomRange from "./jsRandomMinMaxInt.js";

class Fish {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.imgFish = new Image();
        this.imgFish.src = "/images/fish.png";
        this.fishWidth = 800;
        this.fishHeight = 800;
        this.fischScale = 0.1;
        this.pondXStart = 200
        this.pondYStart = canvas.clientHeight*0.5
        this.pondSizeWidth = canvas.clientWidth
        this.pondSizeHeight = 600
        this.posX = randomRange(this.pondXStart, this.pondSizeWidth)-(this.fishWidth*this.fischScale)/2
        this.posY = randomRange(this.pondYStart, this.pondSizeHeight)-(this.fishHeight*this.fischScale)/2
    }

    draw() {
        this.ctx.drawImage(this.imgFish, this.posX, this.posY, this.fishWidth*this.fischScale, this.fishHeight*this.fischScale)
    }
}

export default Fish;