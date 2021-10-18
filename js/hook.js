"use strict"

class Hook{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.hookImg = new Image();
        this.hookImg.src = "/images/hook.png";
        this.hookWidth = 800;
        this.hookHeight = 800;
        this.hookScale = 0.1;
        this.posX = 200
        // this.posY = this.canvas.clientHeight/2
        this.posY = 350
    }

    drawHook() {
        this.ctx.drawImage(this.hookImg, this.posX-(this.hookWidth*this.hookScale)/2, this.posY-5, this.hookWidth*this.hookScale, this.hookHeight*this.hookScale)
    }

    setPosition(x, y) {
        this.posX = x+200
        this.posY = y
    }
    getPosition() {
        return {
            posX: this.posX,
            posY: this.posY
        }
    }
}

export default Hook