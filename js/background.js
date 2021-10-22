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
        this.posX = 200
        this.counter = 0
    }

    draw() {
        this.drawWaves()
        this.drawGround()
    }
    
    drawWaves() {
        // for(let i = 0; i < 8; i++){
        //     this.ctx.drawImage(
        //         this.imgWaves,                      //image
        //         this.posX+i*this.waveWidth*this.waveScale,//posx
        //         this.posY,                          // posy
        //         this.waveWidth * this.waveScale,    //width
        //         this.waveHeight * this.waveScale    //height
        //     );
        // }

        for(let i = 0; i < 8; i++){
            this.ctx.drawImage(
                this.imgWaves,                      //image
                this.posX+i*80,//posx
                15*Math.sin((i)*this.posX + this.counter)+300,                          // posy
                this.waveWidth * this.waveScale,    //width
                this.waveHeight * this.waveScale    //height
            );
        }
        this.counter+=0.01
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
