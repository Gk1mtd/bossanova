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
        this.clouds = []
        this.createClouds()
    }

    // fills cloud array with 3 clouds
    createClouds() {
        for (let i = 0; i < 3; i++) {
            let randomScale = randomRange(3, 10)*0.02
            this.clouds[i] = new BackgroundImage("./images/cloud.png", randomScale, 400, 400)
            this.clouds[i].posX = randomRange(0, 700)
            this.clouds[i].posY = randomRange(0, 250)
        }
    }

    draw() {
        this.drawWaves()
        this.drawClouds()
        this.drawGround()
    }
    
    // draws waves in a sinus curved shape
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
        this.clouds.forEach(cloud => {
            this.ctx.drawImage(
                cloud.img,                      //image
                cloud.posX,                      //wavePosx // how close the images are
                cloud.posY,   // wavePosy // amplitude*sin(b*x+movesHorizontal)+movesUpDown
                cloud.width * cloud.scale,    //width
                cloud.height * cloud.scale    //height)
            )
            cloud.posX += 0.05
            if (cloud.posX > 800){
                cloud.scale = randomRange(3, 10)*0.02
                cloud.posY = randomRange(0, 250)
                cloud.posX = randomRange(-400, -cloud.width*cloud.scale)
            }
        })
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
