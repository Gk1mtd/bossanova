"use strict";

class BackgroundImage {
    constructor(pathToImage, scale, width, height) {
        this.img = new Image();
        this.img.src = pathToImage;
        this.scale = scale;
        this.width = width;
        this.height = height;
        this.posY = 0
        this.posX = 0
        this.animationTimer = 0
    }
}
export default BackgroundImage