"use strict"

// used to get random Integers in a range
    function randomRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

export default randomRange;