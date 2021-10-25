"use strict";

class BackgroundImage {
    constructor(pathToImage, scale) {
        this.img = new Image();
        this.img.src = pathToImage;
        this.scale = scale;
        this.width = this.img.width;
        this.height = this.img.height;
        this.posY = 0
        this.posX = 0
        this.animationTimer = 0
    }
}
export default BackgroundImage