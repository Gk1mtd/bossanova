"use strict"

// could have been extended by backgroundImage class, but later was introduced very late
class Fisher{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.fisherImg = new Image();
        this.stringImg = new Image();
        this.fisherImg.src = "./images/fisher.png";
        this.stringImg.src = "./images/string.png";
        this.fisherWidth = 800;
        this.fisherHeight = 800;
        this.fisherScale = 0.25;
        this.stringWidth = 800;
        this.stringHeight = 800;
        this.stringScale = 0.08;
        this.throwPower = 0
        this.calculatedPower = 0
        this.health = 5
    }

    draw() {
        this.drawFisher()
        this.drawString()
    }

    drawFisher() {
        this.ctx.drawImage(this.fisherImg, 30, 110, this.fisherWidth*this.fisherScale, this.fisherHeight*this.fisherScale)
    }
    
    // draws the strings left, each string represents the tries left, could have been in the HUD class
    drawString() {
        for (let i = 0; i < this.health; i++){
            this.ctx.drawImage(this.stringImg, 20+i*20, 380, this.stringWidth*this.stringScale, this.stringHeight*this.stringScale)
        }
        
    }
    
    // draws the string from fishing rod to hook
    drawLine(hookPosition) {
        this.ctx.beginPath();
        this.ctx.moveTo(200, 120);
        this.ctx.lineTo(hookPosition.posX, hookPosition.posY);
        this.ctx.strokeStyle = "White";
        this.ctx.lineWidth = 2;
        this.ctx.stroke(); 
    }

    // how far the hook will be placed away from the fisher
    setThrowPower() {
        this.throwPower++
        // calculate Power
        this.calculatedPower = this.throwPower**1.3
    }
    resetThrowPower() {
        this.throwPower = 0
    }

    // reduces fisher health/tries
    reduceHealth () {
        this.health--
    }
}

export default Fisher
