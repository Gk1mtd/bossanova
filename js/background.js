"use strict";

import randomRange from "./jsRandomMinMaxInt.js";
import BackgroundImage from "./backgroundImage.js";

class Background {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        //wave
        this.wave = new BackgroundImage("./images/wave.png", 0.2)
        this.wave.posX = 200
        this.wave.posY = 300
        //cloud
        this.imgCloud = new Image();
        this.imgCloud.src = "./images/cloud.png";
        this.cloudWidth = this.imgCloud.width;
        this.cloudHeight = this.imgCloud.height;
        this.cloudScale = 0.1;
        this.cloudPosY = 200
        this.cloudPosX = 0
        this.cloudTimer = 0
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
        console.log(this.wave.height);
    }

    drawClouds(){
        for(let i = 0; i < 3; i++){
            this.ctx.drawImage(
                this.imgCloud,                      //image
                this.cloudPosX+i*50+this.cloudTimer,                      //wavePosx // how close the images are
                this.cloudPosY,   // wavePosy // amplitude*sin(b*x+movesHorizontal)+movesUpDown
                this.cloudWidth * this.cloudScale,    //width
                this.cloudHeight * this.cloudScale    //height
            );
        }
        this.cloudTimer+=0.1  //speed of the waves
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
