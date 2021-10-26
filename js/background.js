"use strict";

import randomRange from "./jsRandomMinMaxInt.js";
import BackgroundImage from "./backgroundImage.js";

class Background {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        //wave
        this.wave = new BackgroundImage("./images/wave.png", 0.2, 50, 50)
        this.wave.posX = 200
        this.wave.posY = 300
        //cloud
        this.cloud = new BackgroundImage("./images/cloud.png", 0.1, 400, 400)
        this.cloud.posX = -this.cloud.width*this.cloud.scale
        this.cloud.posY = 200
    }

    draw() {
        this.drawWaves()
        this.drawClouds()
        this.drawGround()
    }
    
    drawWaves() {
        for(let i = 0; i < 75; i++){
            this.ctx.drawImage(
                this.wave.img,                      //image
                this.wave.posX+i*10,                      //wavePosx // how close the images are
                5*Math.sin((i)*this.wave.posX + this.wave.animationTimer)+300,   // wavePosy // amplitude*sin(b*x+movesHorizontal)+movesUpDown
                this.wave.width * this.wave.scale,    //width
                this.wave.height * this.wave.scale    //height
            );
        }
        this.wave.animationTimer+=0.02  //speed of the waves
    }

    drawClouds(){
        for(let i = 0; i < 3; i++){
            this.ctx.drawImage(
                this.cloud.img,                      //image
                this.cloud.posX+i*50+this.cloud.animationTimer,                      //wavePosx // how close the images are
                this.cloud.posY,   // wavePosy // amplitude*sin(b*x+movesHorizontal)+movesUpDown
                this.cloud.width * this.cloud.scale,    //width
                this.cloud.height * this.cloud.scale    //height
            );
        }
        this.cloud.animationTimer+=0.1  //speed of the waves
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
