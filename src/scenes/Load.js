/* this is the load bar taken from Paddle Board, needs to be reconfigured 

preload() {
    // loading bar
    // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader

    let loadingBar = this.add.graphics();
    this.load.on('progress', (value) => {
        loadingBar.clear()
        loadingBar.fillStyle(0xFFFFFF, 1)
        loadingBar.fillRect(0, centerY, w * value, 5)
    })
    this.load.on('complete', () => {
        loadingBar.destroy()
    })
    
    this.load.path = './assets/'
    // load graphics assets 
    this.load.image('paddle', 'img/paddle.png')
    this.load.image('fragment', 'img/fragment.png')
    this.load.image('cross', 'img/white_cross.png)

    //load audio assets 
    this.load.audio('beats', ['audio/beats.mp3'])
}


*/