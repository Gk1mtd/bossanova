"use strict"

class Fisher{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.fisherImg = new Image();
        this.fisherImg.src = "/images/fisher.png";
        this.fisherWidth = 800;
        this.fisherHeight = 800;
        this.fisherScale = 0.25;
    }


    drawFisher() {
        this.ctx.drawImage(this.fisherImg, 30, 110, this.fisherWidth*this.fisherScale, this.fisherHeight*this.fisherScale)
    }
}

export default Fisher