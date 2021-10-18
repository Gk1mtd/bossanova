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
        // this.fishScale = 0.1;
        this.fishScale = randomRange(5, 25)/100    // random fish size
        this.fishValue = (this.fishScale*100).toFixed(0)         // fish value is according to fish size
        this.pondXStart = 250
        this.pondYStart = canvas.clientHeight*0.6
        this.pondSizeWidth = canvas.clientWidth
        this.pondSizeHeight = 600
        this.posX = randomRange(this.pondXStart+(this.fishWidth*this.fishScale)/2, this.pondSizeWidth)-(this.fishWidth*this.fishScale)/2
        this.posY = randomRange(this.pondYStart+(this.fishHeight*this.fishScale)/2, this.pondSizeHeight)-(this.fishHeight*this.fishScale)/2
    }

    draw() {
        // this.ctx.fillStyle = "red"       //draws a red rect on fish position
        // this.ctx.fillRect(this.posX, this.posY, 10, 10)
        this.ctx.fillStyle = "white"
        this.ctx.drawImage(this.imgFish, this.posX-this.fishWidth*this.fishScale/2, this.posY-this.fishHeight*this.fishScale/2, this.fishWidth*this.fishScale, this.fishHeight*this.fishScale)
    }
}

export default Fish;