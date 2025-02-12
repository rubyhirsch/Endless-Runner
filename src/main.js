let config = {
    type: Phaser.AUTO,
    width: 1680, 
    height: 900,
    scene: [ Menu, Play, Credits ]
}

let game = new Phaser.Game(config);

let centerX = game.config.width/2
let centerY = game.config.height/2
let w = game.config.width
let h = game.config.height