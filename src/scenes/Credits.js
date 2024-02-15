class Credits extends Phaser.Scene {
    constructor() {
      super("creditScene")
    }
    preload() {
        // load images/tile sprites
        // load spritesheet
        
        // load audio
        this.load.audio('sfx-select', './assets/click.wav')

    }


    create() {
    // animation configuration
        

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '18px',
            backgroundColor: '#F3B141',
            color: '#843305',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }


        let sourecsConfig = {
            fontFamily: 'Courier',
            fontSize: '15px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }
        
        // display menu text
        this.add.text(width/2, height/2 - 50, 'All visual assets made on piskel', menuConfig).setOrigin(0.5)
        this.add.text(width/2, height/2, 'All audio assets made on JSFXR', menuConfig).setOrigin(0.5)
        this.add.text(width/2, height/2 + 50, 'Most code was made from Rocket Patrol Assignment', menuConfig).setOrigin(0.5)
        this.add.text(width/2, height/2 + 100, 'Creator: James Milestone', menuConfig).setOrigin(0.5)
        this.add.text(width/2, height -50, 'Press C to return to menu', menuConfig).setOrigin(0.5)
        
       

        // define keys
        keyCREDITS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C)
        
    }
    

    update() {
        if(keyCREDITS.isDown ) {
            this.sound.play('sfx-select')
            this.scene.start('menuScene')
        } 
        


        // this.sound.play('sfx-select')
        // this.scene.start('playScene')    
        
    }
}
