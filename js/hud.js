"use strict";

class HUD {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.grd = this.ctx.createLinearGradient(0, 0, 140, 0);
        this.grd.addColorStop(0, "black");
        this.grd.addColorStop(1, "white");
        this.barPower = 0
    }

    draw() {
        this.drawBar()
        this.drawPowerinBar()
    }
 
    drawBar() {
        this.ctx.strokeStyle = "white";
        this.ctx.beginPath();
        this.ctx.rect(20, 320, 150, 50);
        this.ctx.stroke();
    }
    
    drawPowerinBar() {
        this.ctx.fillStyle = this.grd
        this.ctx.fillRect(22, 325, this.barPower, 40)
        this.ctx.fillStyle = "white"
    }

    setBarPower(newBarPower) {
        this.barPower = newBarPower
    }
}

export default HUD;