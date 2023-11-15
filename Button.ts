export default class Button {
	public height: number
	public width: number
	public y: number
	public x: number
	public label: string
	private buttonText: Phaser.GameObjects.BitmapText
	private box: Phaser.Geom.Rectangle
	private scene
	private inactiveLine: Phaser.GameObjects.Graphics
	private activeLine: Phaser.GameObjects.Graphics
	private activeLine2: Phaser.GameObjects.Graphics
	constructor(scene, x, y, font, label,callback, fontSize = 14) {
		this.scene=scene
		this.inactiveLine = scene.add.graphics({ lineStyle: { width: 1, color: 0xffffff }, fillStyle: { color: 0x000000 } })
		this.activeLine = scene.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }})
		this.label = label
		this.buttonText = scene.add.bitmapText(x, y + 4, font, label, fontSize,1)
			.setOrigin(0)
			.setDepth(2)
		this.box = scene.add.rectangle(x - 10, y, 85, 20, 0x000000, 0).setOrigin(0).setDepth(1)
			.setInteractive({ useHandCursor: true })
			.on('pointerup', (event) => {
				callback(this, scene)
			})
			.on('pointerover', () => this.buttonText.setTint(0xf39c12))
			.on('pointerout', () => this.buttonText.setTint(0xFFFFFF))
		this.inactiveLine.strokeRectShape(this.box)//.setDepth(1)
		
		this.buttonText.x = this.box.x + 2+(80 - this.buttonText.width) / 2
	}
	
	clicked() {
		console.log('turn on')
		this.inactiveLine.clear()
		this.activeLine.strokeRectShape(this.box)
	}
	unClicked() {
		console.log('turn off')
		this.activeLine.clear()
		this.inactiveLine.strokeRectShape(this.box)
	}
	updateLabel(text: string) {
		console.log('change button text to ' + text)
		this.buttonText.setText(text)
		this.label=text
		this.buttonText.x = this.box.x + 2 + (80 - this.buttonText.width) / 2
	}

}
