# Bossanova

## Description

Bossa Nova is a game, where the player have to catch fish from a pond. Press a button multiple times or long enough, to throw the hook. Try to have the hook land close enough to a fish, to catch it eventually.
The fish randomly appear in the pond.

The game ends if you caught all fish or all your strings break.

## Video
- v1.0 https://youtu.be/cRcTFoAtnvI
- v0.3 https://youtu.be/N2RshRSR5cY
​
## MVP (DOM - CANVAS)
​
- game has 3 fish in the pond
- the player can throw out hooks in the pond, by pressing a button
- how far the hook is thrown, depends on how often or long the button was pressed
- a string breaks after every throws (min 5 times)
​
## Backlog
​
- moving fish       x
- random fish size  x
- to catch a fish, you have to reel them in, by pressing the button multiple times      -
- a fish can battle against the players attempt to reel it in                                   -
- the finshing rod string can break, if the fish tries to break free very hard or the player reels to hard  -
- reeling in the fish moves the fish closer to the player                                               -
- if the fish is close to the player, while hooked, he is carched                                           -
- bossa nova music playing in the background        x
​
## Data Structure
​
# main.js
​
- fillMainContainerContent()
- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameWon () {}
- buildGameOver () {}
​
# game.js
​
- Game () {}
- setFish
- startLoop () {}
- clearCanvas () {}
- updateGame () {}
- drawCanvas () {}
- checkHookCollisionWithFish
- gameOverCallback () {}
- gameWonCallback () {}
- resetGameCallback () {}
​
# fisher.js 
​
- Fisher () {
    this.x
    this.y
    this.strings
}
- drawFisher () {}
- drawString
- drawLine
- setThrowPower () {}
- resetThrowPower () {}
- reduceHealth
​
# fish.js 
​
- Fisch () {
    this.x
    this.y
    this.direction
    this.size
}
- draw () {}
- setFacing () {}
​
# hud.js 
​
- HUD () {
    this.throwBar
}
- draw () {}
- drawBar () {}
- drawPowerinBar () {}
- setBarPower () {}

# hook.js 
​
- Hook () {}
- drawHook () {}
- setToFloatDown () {}
- setPosition () {}
- getPosition () {}

# jsRandomMinMaxInt.js
​
- randomRange () {}

# background.js 
​
- Background () {}
- createClouds () {}
- draw () {}
- drawWaves () {}
- drawClouds () {}
- drawGround () {}

# backgroundImage.js 
​
- BackgroundImage () {}
​
## States and States Transitions
Definition of the different states and their transition (transition functions)
​
- splashScreen
- gameScreen
- gameOverScreen
- gameWonScreen
​
## Task
​
- main
    - buildDom              x
    - buildSplashScreen     x
    - buildGameScreen       x
    - buildGameOverScreen   x
    - addEventListener      x
    - startLoop             x
    - buildCanvas           x
    - updateCanvas          x
    - drawCanvas            x
- game
    - checkCollision        x
    - GameOver              x
    - add event listener    x
- player
    - draw player           x
    - build throw mechanic  x
- fish
    - draw fish             x
    - build check collision pond mechanic   x
    - build check collision hook mechanic   x
​
## Links
https://gk1mtd.github.io/bossanova/
​
### Trello
[Link url](https://trello.com/b/srPzTGcX/bossa-nova-development)
​
### Git
URls for the project repo and deploy
[Link Repo](https://github.com/Gk1mtd/bossanova)
[Link Deploy]()
​
### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1tr9gkdE8FFnluMSNd7gzdEoze9j_3G7Y5IxqIhdnvgs/edit?usp=sharing)
