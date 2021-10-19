"use strict"

class Fisher{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.fisherImg = new Image();
        this.fisherImg.src = "./images/fisher.png";
        this.fisherWidth = 800;
        this.fisherHeight = 800;
        this.fisherScale = 0.25;
        this.throwPower = 0
        this.calculatedPower = 0
        this.health = 5
    }

    drawFisher() {
        this.ctx.drawImage(this.fisherImg, 30, 110, this.fisherWidth*this.fisherScale, this.fisherHeight*this.fisherScale)
    }

    drawLine(hookPosition) {
        this.ctx.beginPath();
        this.ctx.moveTo(200, 120);
        this.ctx.lineTo(hookPosition.posX, hookPosition.posY);
        this.ctx.strokeStyle = "White";
        this.ctx.lineWidth = 2;
        this.ctx.stroke(); 
    }

    setThrowPower() {
        this.throwPower++
        // calculate Power
        this.calculatedPower = this.throwPower**1.6
    }
    resetThrowPower() {
        this.throwPower = 0
    }

    // 
    setHealth (term) {
        this.health+=term
        //console.log("Fisher lost Live", this.health);
    }
}

export default Fisher
