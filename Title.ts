import Phaser from 'phaser'
import Button from './Button'

const SPACING = 30
export default class Title extends Phaser.Scene {

	private waitingForKey = false
	
	private keyUp
	private keyDown
	private keyLeft
	private keyRight
	private keyJump
	private keyRun
	private keyAttack
	private keyGuard
	private keyUse
	private gameUp
	private gameDown
	private gameLeft
	private gameRight
	private gameJump
	private gameRun
	private gameAttack
	//private gameGuard
	private gameUse
	private whichControl
	private choosingGamepad: boolean = false
	public graphics: Phaser.GameObjects.Graphics
	private pads: Phaser.Input.Gamepad.Gamepad[]
	private menuY: number
	private menuX: number
	private gamePadMenu: boolean = false
	private gamepadText: Phaser.GameObjects.BitmapText
	private gamepadCover: Phaser.GameObjects.Rectangle
	private gamepadConnected: boolean = false
	private waitingForGamePad = false
	private gamePadListener
	constructor() {
		super('Title')
	}
	preload() {
		this.load.bitmapFont('myFont', './assets/test-font.png', './assets/test-font.xml')
		this.load.bitmapFont('myFontSmall', './assets/test-font-small.png','./assets/test-font-small.xml')
	}


	create() {
		this.graphics = this.add.graphics()

		this.input.mouse.disableContextMenu()
		//this.pads = this.input.gamepad.gamepads
		this.add.bitmapText(100, 50, 'myFont', "Keyboard Controls")
		this.add.bitmapText(500, 50, 'myFont', "Gamepad Controls")
		this.add.bitmapText(338, 400, 'myFontSmall', '*Double-tap to ROLL')

		this.gamepadText = this.add.bitmapText(460, 10, 'myFontSmall', "Press Any Button On Connected Gamepad:")
		this.gamepadCover = this.add.rectangle(500, 40, 260, 300, 0x000000, 0.8).setDepth(10).setOrigin(0, 0)


		const startButton = new Button(this, 380, 500, 'myFontSmall', 'Start', () => 
		this.scene.start('testGamePad', {
			keyUp: this.keyUp.label,
			keyDown: this.keyDown.label,
			keyLeft: this.keyLeft.label,
			keyRight: this.keyRight.label,
			keyJump: this.keyJump.label,
			keyRun: this.keyRun.label,
			keyAttack: this.keyAttack.label,
			//keyGuard:this.keyGuard.label,
			keyUse: this.keyUse.label,

			gameUp: this.gameUp.label,
			gameDown: this.gameDown.label,
			gameLeft: this.gameLeft.label,
			gameRight: this.gameRight.label,
			gameJump: this.gameJump.label,
			gameRun: this.gameRun.label,
			gameAttack: this.gameAttack.label,
			//	gameGuard: this.gameGuard.label,
			gameUse: this.gameUse.label
		}))
		// this.gamePadListener=this.input.gamepad.once('connected', function (pad) {
		// 	this.gamepadConnected= true
		// 	this.gamepadText.setAlpha(0)
		// 	this.gamepadCover.destroy()
		// 	console.log('gp conn')
		// }, this)
		//-------------------------------------------
		//-------------------------------------------
		//            KEYBOARD/MOUSE
		//-------------------------------------------
		//-------------------------------------------
		this.menuY = 100
		this.menuX = 140
		this.gamePadMenu = false
		this.keyUp = this.menu("KeyW", "Up")
		this.keyDown = this.menu('KeyS', 'Down/Crouch')
		this.keyLeft = this.menu("KeyA", 'Left')
		this.keyRight = this.menu("KeyD", 'Right')
		this.keyJump = this.menu("Space", 'Jump')
		this.keyRun = this.menu("Shift", 'Run*')
		this.keyAttack = this.menu("Mouse 0", 'Attack')
		//this.keyGuard = this.menu("KeyZ", 'Guard')
		this.keyUse = this.menu("KeyE", 'Use/Interact')
		//-------------------------------------------
		//-------------------------------------------
		//            GAMEPAD
		//-------------------------------------------
		//-------------------------------------------
		this.menuY = 100
		this.menuX = 540
		this.gamePadMenu = true
		this.gameUp = this.menu("Button 12", "Up")
		this.gameDown = this.menu('Button 13', 'Down/Crouch')
		this.gameLeft = this.menu("Button 14", 'Left')
		this.gameRight = this.menu("Button 15", 'Right')
		this.gameJump = this.menu("Button 0", 'Jump')
		this.gameRun = this.menu("Button 2", 'Run*')
		this.gameAttack = this.menu("Button 5", 'Attack')
		//this.gameGuard = this.menu("Button 4", 'Guard')
		this.gameUse = this.menu("Button 1", 'Use/Interact')

		this.input.keyboard.on('keydown', (event) => {
			this.getKeyInput(event.code)
		}, this)

	}
	menu(defaultValue: string, defaultMenuText: string) {
		let tt
		if (this.gamePadMenu) {
			tt = new Button(this, this.menuX, this.menuY, 'myFontSmall', defaultValue, this.pickedGamePad)
		} else {
			tt = new Button(this, this.menuX, this.menuY, 'myFontSmall', defaultValue, this.pickedKeyControl)
		}
		this.add.bitmapText(this.menuX + 80, this.menuY, 'myFont', defaultMenuText, 22)//.setDepth(2)
		this.menuY += SPACING
		return tt
	}
	gamePad() {
		console.log('gamePad Called')
		for (let i = 0; i < this.pads.length; i++) {
			const gamepad = this.pads[i];

			if (!gamepad) {
				continue;
			}
			let tt = 0
			gamepad.buttons.forEach(element => {
				if (element.pressed) {
					console.log(element)
					this.getGamePadInput('Button ' + tt)
				}
				tt++

			});
			
		}
	}
	pickedKeyControl(whichControl, scene) {
		console.log('pickedKeyControl Called')

		if (scene.waitingForKey) { return }
		whichControl.clicked()
		scene.waitingForKey = true
		scene.whichControl = whichControl
	}
	getKeyInput(keyCode) {
		console.log('getKeyInput Called')

		if (this.waitingForKey === false) return
		if (keyCode != 'Escape') {
			if (keyCode == 'ShiftLeft' || keyCode == 'ShiftRight') {
				keyCode = 'Shift'
			}
			this.whichControl.updateLabel(keyCode)
		}
		this.whichControl.unClicked()
		this.waitingForKey = false
	}
	pickedGamePad(whichControl, scene) {
		console.log('pickedGamePad Called')

		if (scene.gamepadConnected===false) { return }
		scene.waitingForGamePad = true
		scene.waitingForKey = true
		whichControl.clicked()		// turn active menu item on
		scene.whichControl = whichControl

	}
	getGamePadInput(keyCode) {
		console.log('getGamePadInput Called')

		if (this.waitingForGamePad && keyCode == 'Escape') {
			this.waitingForGamePad = false
			this.waitingForKey = false
			return
		}
		if (this.waitingForGamePad === false) return
		this.whichControl.unClicked()
		this.waitingForKey = false
		this.waitingForGamePad = false
		this.whichControl.updateLabel(keyCode)
	}
	

	update() {
		if (this.waitingForKey && this.input.activePointer.isDown) {
			console.log('done waiting for key')
			this.getKeyInput('Mouse ' + this.input.activePointer.button)
		}
		if (this.waitingForGamePad && this.input.gamepad.total > 0) {
			this.gamePad()

		}
	}
}
