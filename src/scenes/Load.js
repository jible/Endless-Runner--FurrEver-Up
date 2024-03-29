class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        // https://newdocs.phaser.io/docs/3.60.0/Phaser.Sound.Events.LOOP
        
        this.load.image('tree', './assets/TreeBackgroundSprite.png')
        this.load.spritesheet('bear', './assets/bearSprites.png', {
            frameWidth:15,
            frameHeight: 40
        })

        this.load.image('branch', './assets/branch.png')
    }

    create() {
        // hero animations (walking)

        this.anims.create({
            key: 'walk',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('bear', { frames: [1,2] }),
        })
        this.anims.create({
            key: 'chill',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('bear', { frames: [6,7] }),
        })

        this.scene.start('menuScene')
    }
}