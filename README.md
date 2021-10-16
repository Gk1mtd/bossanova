# Bossanova

## Description

Bossa Nova is a game, where the player have to catch fish from a pond. Press a button multiple times or long enough, to throw the hook. Try to have the hook land close enough to a fish, to catch it eventually.
The fish randomly appear in the pond.

The game ends if you caught all fish or all your strings break.
​
## MVP (DOM - CANVAS)
​
- game has 3 fish in the pond
- the player can throw out hooks in the pond, by pressing a button
- how far the hook is thrown, depends on how often or long the button was pressed
- a string breaks after a random amount of throws (min 5 times)
​
## Backlog
​
- moving fish
- random fish size
- to catch a fish, you have to reel them in, by pressing the button multiple times
- a fish can battle against the players attempt to reel it in
- the finshing rod string can break, if the fish tries to break free very hard or the player reels to hard
- reeling in the fish moves the fish closer to the player
- if the fish is close to the player, while hooked, he is carched
- bossa nova music playing in the background
​
## Data Structure
​
# main.js
​
- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}
​
# game.js
​
- Game () {}
- startLoop () {}
- checkCollisions () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}
​
# player.js 
​
- Player () {
    this.x
    this.y
    this.strings
}
- draw () {}
- throwHook () {}
- reelHook
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
- move () {}
- checkCollisionPond () {}
- checkCollisionHook()
​
# hud.js 
​
- HUD () {
    this.throwBar
}
- draw () {}
​
## States and States Transitions
Definition of the different states and their transition (transition functions)
​
- splashScreen
- gameScreen
- gameOverScreen
​
## Task
​
- main
    - buildDom
    - buildSplashScreen
    - buildGameScreen
    - buildGameOverScreen
    - addEventListener
    - startLoop
    - buildCanvas
    - updateCanvas
    - drawCanvas
- game
    - checkCollision
    - GameOver
    - add event listener
- player
    - draw player
    - build throw mechanic
- fish
    - draw fish
    - build check collision pond mechanic
    - build check collision hook mechanic
​
## Links
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