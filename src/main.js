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
    scene: [ Menu, Play, Credits, Tut ]
}

let game = new Phaser.Game(config);

let centerX = game.config.width/2
let centerY = game.config.height/2
let w = game.config.width
let h = game.config.height

let characterRef = null