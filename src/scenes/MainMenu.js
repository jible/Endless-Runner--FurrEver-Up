class MainMenu extends Phaser.Scene {
    constructor() {
      super("menuScene")
    }
    preload() {
        // load images/tile sprites
        // load spritesheet
        
        // load audio
        this.load.audio('sfx-select', './assets/pickupCoin.wav')
        this.load.audio('sfx-start', './assets/click.wav')

    }


    create() {
    // animation configuration
        

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#8BCA84',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }
        
        // display menu text
        this.add.text(width/2, height/2 - 50, 'FurrEver Up!', menuConfig).setOrigin(0.5)
        this.add.text(width/2, height/2, 'Press Space to Start', menuConfig).setOrigin(0.5)
        this.add.text(width/2, height/2 + +50, 'Press C for credits', menuConfig).setOrigin(0.5)

       

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyCREDITS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C)
        keyJUMP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        
    }
    

    update() {
        if(keyJUMP.isDown ) {
            this.sound.play('sfx-start')
            this.scene.start('playScene')
        } 
        if(keyCREDITS.isDown ) {
            this.sound.play('sfx-select')
            this.scene.start('creditScene')
        } 


        
    }
}
