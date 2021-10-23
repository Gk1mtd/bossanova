"use strict";

class Background {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.imgWaves = new Image();
        this.imgWaves.src = "./images/waves.png";
        this.waveWidth = 50;
        this.waveHeight = 50;
        this.waveScale = 0.2;
        this.posY = 300
        this.posX = 200
        this.timer = 0
    }

    draw() {
        this.drawWaves()
        this.drawGround()
    }
    
    drawWaves() {
        for(let i = 0; i < 75; i++){
            this.ctx.drawImage(
                this.imgWaves,                      //image
                this.posX+i*10,                      //posx // how close the images are
                5*Math.sin((i)*this.posX + this.timer)+300,   // posy // amplitude*sin(b*x+movesHorizontal)+movesUpDown
                this.waveWidth * this.waveScale,    //width
                this.waveHeight * this.waveScale    //height
            );
        }
        this.timer+=0.02  //speed of the waves
    }
    
    drawGround() {
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canvas.clientHeight * 0.5);
        this.ctx.lineTo(200, this.canvas.clientHeight * 0.5);
        this.ctx.lineTo(200, this.canvas.clientHeight);
        this.ctx.strokeStyle = "White";
        this.ctx.lineWidth = 5;
        this.ctx.stroke(); 
    }
}

export default Background;
