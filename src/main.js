// Name: Ruby Hirsch 
// Game Title: Contagion Crosser 
// Approx time: 30 hours 
// Creative Tilt: I made all of the assets, including the sprite animations 
// I had an extension until Feb 12th

let config = {
    type: Phaser.AUTO,
    width: 1680, 
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true
        }
    },
    scene: [ Menu, Play, Credits, Tut, GameOver ]
}

let game = new Phaser.Game(config);

let centerX = game.config.width/2
let centerY = game.config.height/2
let w = game.config.width
let h = game.config.height

let characterRef = null