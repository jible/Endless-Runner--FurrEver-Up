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
            debug: false
        }
    },
    scene: [ Load, MainMenu, Play ]
}

const game = new Phaser.Game(config)
let keyJUMP, keyDOWN, keyLEFT, keyRIGHT, click
let width = 600
let height = 900
let verticalMovement, horizontalMovement
// set UI sizes
let highScore = 0
let screenWidth =0
let player
let platforms
let topPlatform
let platformCount