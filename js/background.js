"use strict";

class Background {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.imgWaves = new Image();
        this.imgWaves.src = "./images/waves.png";
        this.waveWidth = 800;
        this.waveHeight = 315;
        this.waveScale = 0.1;
        this.posY = 300
    }

    draw() {
        this.drawWaves()
        this.drawGround()
    }
    
    drawWaves() {
        for(let i = 0; i < 8; i++){
            this.ctx.drawImage(
                this.imgWaves,                      //image
                200+i*this.waveWidth*this.waveScale,//posx
                this.posY,                          // posy
                this.waveWidth * this.waveScale,    //width
                this.waveHeight * this.waveScale    //height
            );
        }
        // if (this.posY <= 320)
        //     this.posY++
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
