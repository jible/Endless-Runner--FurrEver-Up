class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    preload() {
        
    }

    create() {
        // define keys
        keyJUMP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)


        // Starting // I don't understand exactly why thses scales and positions do but they do.
        this.treeAbove = this.add.image(-(600)/13,((900*4)+660)*2,'tree').setOrigin(0).setScale(4) // Above
        
        this.treeMiddle = this.add.image(-(600)/13,-(900*4)+660,'tree').setOrigin(0).setScale(4) // middle
        this.treeRight = this.add.image((600)/13,(900*4)-660,'tree').setOrigin(0).setScale(4) // right
        this.treeLeft = this.add.image(-3*(600)/13,(900*4)-660,'tree').setOrigin(0).setScale(4) // left




        this.bear = new Bear(this, 0, 0 , 'bear', 0 )

        
        this.cameras.main.startFollow(this.bear)



        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '15px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            align: 'left',
            fixedWidth: 200
        }
        this.score = 0

        this.scoreLeft = this.add.text(0, 10,"Score: " + this.score, scoreConfig)

        let highScoreConfig = {
            fontFamily: 'Courier',
            fontSize: '15px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            align: 'left',
            fixedWidth: 300
        }

        this.highScore = this.add.text(game.config.width - 200, 10,"High Score: " + highScore, highScoreConfig)
        

    }

    update(){
        if(keyLEFT.isDown) {
            this.bear.body.setVelocityX(-50)
            this.bear.resetFlip()
        } else if(keyRIGHT.isDown) {
            this.bear.body.setVelocityX(50)
            this.bear.setFlip(true, false)
        } else {
            this.bear.body.setVelocityX(0)
        }
    }
}