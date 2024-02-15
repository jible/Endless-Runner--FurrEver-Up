class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        
        this.load.image('tree', './assets/TreeBackgroundSprite.png')
        this.load.image('bear', './assets/BearSprites.png')
        this.load.image('branch', './assets/branch.png')
    }

    create() {
        // hero animations (walking)

        this.anims.create({
            key: 'walk',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('bear', { start: 2, end: 3 }),
        })

        this.scene.start('menuScene')
    }
}