// Code Practice: Scrolling States
// Name: James Milestone
// Date: 2/5/24

'use strict'

// Taken from CP-Scrolling 
const config = {   
    width: 600,
    height: 900,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Load, MainMenu, Play ]
}

const game = new Phaser.Game(config)
let keyJUMP, keyRESET, keyLEFT, keyRIGHT, click

// set UI sizes
let highScore = 0
let screenWidth =0