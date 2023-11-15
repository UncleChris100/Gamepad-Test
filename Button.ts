export default class Button {
	public height: number
	public width: number
	public y: number
	public x: number
	public label: string
	private buttonText: Phaser.GameObjects.BitmapText
	private box: Phaser.Geom.Rectangle
	//private activeBox: Phaser.Geom.Rectangle
	private scene
	private inactiveLine: Phaser.GameObjects.Graphics
	private activeLine: Phaser.GameObjects.Graphics
	private activeLine2: Phaser.GameObjects.Graphics
	//private blackLine: Phaser.GameObjects.Graphics
	constructor(scene, x, y, font, label,callback, fontSize = 14) {
		this.scene=scene
		this.inactiveLine = scene.add.graphics({ lineStyle: { width: 1, color: 0xffffff }, fillStyle: { color: 0x000000 } })
		this.activeLine = scene.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }})
		//this.activeLine2 = scene.add.graphics({ lineStyle: { width: 2, color: 0x00ffFF } })
		//this.blackLine = scene.add.graphics({ lineStyle: { width: 2, color: 0x000000 }, fillStyle: { color: 0x000000 } })
		this.label = label
		this.buttonText = scene.add.bitmapText(x, y + 4, font, label, fontSize,1)
			.setOrigin(0)
			.setDepth(2)
		//let tmpBox = new Phaser.Geom.Rectangle(x - 10, y, 85, 20)
		//this.activeBox = scene.add.rectangle(x - 12, y-2, 89, 24, 0x00FF00, 0).setOrigin(0).setDepth(1)
		this.box = scene.add.rectangle(x - 10, y, 85, 20, 0x000000, 0).setOrigin(0).setDepth(1)
			.setInteractive({ useHandCursor: true })
			.on('pointerup', (event) => {
				//	event.stopPropogation()
				callback(this, scene)
			})
			.on('pointerover', () => this.buttonText.setTint(0xf39c12))
			.on('pointerout', () => this.buttonText.setTint(0xFFFFFF))
		//this.activeLine.strokeRectShape(this.box)//.setDepth(1)
		this.inactiveLine.strokeRectShape(this.box)//.setDepth(1)
		//	this.blackLine.strokeRectShape(this.activeBox)
		
		this.buttonText.x = this.box.x + 2+(80 - this.buttonText.width) / 2
	}
	
	clicked() {
		console.log('turn on')
		this.inactiveLine.clear()
		//this.activeLine.active=true
		this.activeLine.strokeRectShape(this.box)
		//this.activeLine.setVisible(true)
		//this.thickLine.strokeRectShape(this.box)//.setDepth(1)
	}
	unClicked() {
		//this.blackLine.strokeRectShape(this.box)//.setDepth(1)
		console.log('turn off')
		//this.scene.graphics.clear()
		//this.blackLine.strokeRectShape(this.activeBox)
		this.activeLine.clear()
		this.inactiveLine.strokeRectShape(this.box)


	}
	updateLabel(text: string) {
		console.log('change button text to ' + text)
		this.buttonText.setText(text)
		this.label=text
		//this.buttonText.x=10
		this.buttonText.x = this.box.x + 2 + (80 - this.buttonText.width) / 2
	}
