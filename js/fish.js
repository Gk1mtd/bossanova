"use strict";
import randomRange from "./jsRandomMinMaxInt.js";

class Fish {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.imgFishRight = new Image();
        this.imgFishRight.src = "./images/fish_right.png";
        this.imgFishLeft = new Image();
        this.imgFishLeft.src = "./images/fish_left.png";
        this.fishWidth = 800;
        this.fishHeight = 800;
        this.fishScale = randomRange(5, 25) / 100; // random fish size
        this.fishValue = (this.fishScale * 100).toFixed(0); // fish value is according to fish size
        this.pondXStart = 250;
        this.pondYStart = canvas.clientHeight * 0.6;
        this.pondSizeWidth = canvas.clientWidth;
        this.pondSizeHeight = 600;
        this.fishFacing = "right"
        this.posX =
            randomRange(
                this.pondXStart + (this.fishWidth * this.fishScale) / 2,
                this.pondSizeWidth
            ) -
            (this.fishWidth * this.fishScale) / 2;
        this.posY =
            randomRange(
                this.pondYStart + (this.fishHeight * this.fishScale) / 2,
                this.pondSizeHeight
            ) -
            (this.fishHeight * this.fishScale) / 2;

            this.timer = randomRange(0, Math.PI) // for individual animation begin
        }
        
        draw() {
            // this.ctx.fillStyle = "red"       //draws a red rect on fish position
            // this.ctx.fillRect(this.posX, this.posY, 10, 10)
            this.timer += 0.02
            this.posY = 0.25*Math.sin(5*this.posX + this.timer)+this.posY,   // posy // amplitude*sin(b*x+movesHorizontal)+movesUpDown
            this.ctx.fillStyle = "white";
            if (this.fishFacing === "right"){
                this.ctx.drawImage(
                    this.imgFishRight,
                    this.posX - (this.fishWidth * this.fishScale) / 2,
                    this.posY - (this.fishHeight * this.fishScale) / 2,
                    this.fishWidth * this.fishScale,
                    this.fishHeight * this.fishScale
                );
            }
            else if (this.fishFacing === "left") {
                this.ctx.drawImage(
                    this.imgFishLeft,
                    this.posX - (this.fishWidth * this.fishScale) / 2,
                    this.posY - (this.fishHeight * this.fishScale) / 2,
                    this.fishWidth * this.fishScale,
                    this.fishHeight * this.fishScale
                );
            }
    }
}

export default Fish;
