//import Phaser from "phaser"
import MergedInput from "phaser3-merged-input"
//import testGamePad from "./testGamePad"

export default class testPlayer {
	private mergedInput?: MergedInput
	private keyBindings
	private keyUp
	private keyDown
	private keyLeft
	private keyRight
	private keyAttack
	private keyUse
	private keyJump
	private keyRun

	private gameBindings
	private gameUp
	private gameDown
	private gameLeft
	private gameRight
	private gameAttack
	private gameUse
	private gameJump
	private gameRun
	private player1
	private scene
	
	constructor(scene) {//, keyBindings) {
		this.scene=scene
		//this.keyBindings=keyBindings
		this.player1 = this.scene.mergedInput.addPlayer(0)
		this.scene.mergedInput.defineKey(0, 'LC_W', 'A')
		this.scene.mergedInput.defineKey(0,'RC_S','Space')
		//this.assignKeyBindings(this.keyBindings)
		this.scene.events.on("update", this.update, this)
		console.log(this.player1)

	}
	
	assignKeyBindings(keyBindings) {
		this.keyUp = this.cleanKeys(keyBindings.keyUp)
		this.keyDown = this.cleanKeys(keyBindings.keyDown)
		this.keyLeft = this.cleanKeys(keyBindings.keyLeft)
		this.keyRight = this.cleanKeys(keyBindings.keyRight)
		this.keyJump = this.cleanKeys(keyBindings.keyJump)
		this.keyRun = this.cleanKeys(keyBindings.keyRun)
		this.keyAttack = this.cleanKeys(keyBindings.keyAttack)
		this.keyUse = this.cleanKeys(keyBindings.keyUse)

		this.gameUp = keyBindings.gameUp.replace('Button ', 'B').replace('Shift', 'SHIFT')
		this.gameDown = keyBindings.gameDown.replace('Button ', 'B').replace('Shift', 'SHIFT')
		this.gameLeft = keyBindings.gameLeft.replace('Button ', 'B').replace('Shift', 'SHIFT')
		this.gameRight = keyBindings.gameRight.replace('Button ', 'B').replace('Shift', 'SHIFT')
		this.gameJump = keyBindings.gameJump.replace('Button ', 'B').replace('Shift', 'SHIFT')
		this.gameRun = keyBindings.gameRun.replace('Button ', 'B').replace('Shift', 'SHIFT')
		this.gameAttack = keyBindings.gameAttack.replace('Button ', 'B').replace('Shift', 'SHIFT')
		this.gameUse = keyBindings.gameUse.replace('Button ', 'B').replace('Shift', 'SHIFT')
		this.player1 = this.scene.mergedInput.addPlayer(0)
		this.scene.mergedInput.defineKey(0, this.gameUp, this.keyUp)
		this.scene.mergedInput.defineKey(0, this.gameDown, this.keyDown)
		this.scene.mergedInput.defineKey(0, this.gameLeft, this.keyLeft)
		this.scene.mergedInput.defineKey(0, this.gameRight, this.keyRight)
		this.scene.mergedInput.defineKey(0, this.gameJump, this.keyJump)
		this.scene.mergedInput.defineKey(0, this.gameRun, this.keyRun)
		this.scene.mergedInput.defineKey(0, this.gameAttack, this.keyAttack)
		this.scene.mergedInput.defineKey(0, this.gameUse, this.keyUse)
		this.scene.mergedInput.defineKey(0, this.gameRun, this.keyRun)
		console.log('here')

	}
	cleanKeys(keyText: string) {
		return (keyText.replace('Key', '').replace('Arrow', '').replace('Space', 'SPACE').replace('Shift', 'SHIFT').toUpperCase())
	}
	update() {
		// if (['B14', 'B15', 'B0'].filter(x => this.player1.interaction.pressed.includes(x)).length) {
		// 	console.log('here')
		// }
		if (this.player1.buttons_mapped.LC_W > 0) {
			console.log('LC_W Pressed')
		}
		if (this.player1.buttons_mapped.RC_S > 0) {
			console.log('Jump (RC_S) Pressed')
		}
		// console.log(this.player1.buttons.B0 + ","
		// +this.player1.buttons.B1 + ","
		// +this.player1.buttons.B2 + ","
		// +this.player1.buttons.B3 + ","
		// +this.player1.buttons.B4 + ","
		// +this.player1.buttons.B5 + ","
		// +this.player1.buttons.B6 + ","
		// +this.player1.buttons.B7 + ","
		// +this.player1.buttons.B8 + ","
		// +this.player1.buttons.B9 + ","
		// +this.player1.buttons.B10 + ","
		// +this.player1.buttons.B11 + ","
		// +this.player1.buttons.B12 + ","
		// +this.player1.buttons.B13 + ","
		// +this.player1.buttons.B14 + ","
		// +this.player1.buttons.B15 + ",")
	}
}