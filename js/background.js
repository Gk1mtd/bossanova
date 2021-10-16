"use strict";

class Background {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.imgWaves = new Image();
        this.imgWaves.src = "/images/waves.png";
        this.waveWidth = 800;
        this.waveHeight = 315;
        this.waveScale = 0.1;
    }

    draw() {
        this.drawWaves()
    }
    
    drawWaves() {
        for(let i = 0; i < 8; i++){
            this.ctx.drawImage(
                this.imgWaves,                      //image
                200+i*this.waveWidth*this.waveScale,                                //posx
                this.canvas.clientHeight * 0.5,     // posy
                this.waveWidth * this.waveScale,    //width
                this.waveHeight * this.waveScale    //height
            );
        }
        
    }
}

export default Background;
