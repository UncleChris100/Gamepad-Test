//import Phaser, { Game, GameObjects, Physics } from 'phaser'
//import MergedInput from 'phaser3-merged-input'
import testPlayer from './testPlayer'
export default class testGamePad extends Phaser.Scene {
	//private mergedInput?: MergedInput
	//private player1
	private keyBindings
	// private keyUp
	// private keyDown
	// private keyLeft
	// private keyRight
	// private keyJump
	// private keyRun
	// private keyAttack
	// private keyUse
	// private gameUp
	// private gameDown
	// private gameLeft
	// private gameRight
	// private gameJump
	// private gameRun
	// private gameAttack
	// private gameUse
	// init(data) {
	// 	this.keyBindings = data
	// }
	constructor() {
		super('testGamePad')
	}
	
	// preload() {
	// 	this.load.scenePlugin('mergedInput', MergedInput)
	// }
	create() {
		new testPlayer(this)//, this.keyBindings)
		// this.assignKeyBindings(this.keyBindings)
		
	}
	// assignKeyBindings(keyBindings) {
	// 	this.keyUp = this.cleanKeys(keyBindings.keyUp)
	// 	this.keyDown = this.cleanKeys(keyBindings.keyDown)
	// 	this.keyLeft = this.cleanKeys(keyBindings.keyLeft)
	// 	this.keyRight = this.cleanKeys(keyBindings.keyRight)
	// 	this.keyJump = this.cleanKeys(keyBindings.keyJump)
	// 	this.keyRun = this.cleanKeys(keyBindings.keyRun)
	// 	this.keyAttack = this.cleanKeys(keyBindings.keyAttack)
	// 	this.keyUse = this.cleanKeys(keyBindings.keyUse)
		
	// 	this.gameUp = keyBindings.gameUp.replace('Button ', 'B').replace('Shift', 'SHIFT')
	// 	this.gameDown = keyBindings.gameDown.replace('Button ', 'B').replace('Shift', 'SHIFT')
	// 	this.gameLeft = keyBindings.gameLeft.replace('Button ', 'B').replace('Shift', 'SHIFT')
	// 	this.gameRight = keyBindings.gameRight.replace('Button ', 'B').replace('Shift', 'SHIFT')
	// 	this.gameJump = keyBindings.gameJump.replace('Button ', 'B').replace('Shift', 'SHIFT')
	// 	this.gameRun = keyBindings.gameRun.replace('Button ', 'B').replace('Shift', 'SHIFT')
	// 	this.gameAttack = keyBindings.gameAttack.replace('Button ', 'B').replace('Shift', 'SHIFT')
	// 	this.gameUse = keyBindings.gameUse.replace('Button ', 'B').replace('Shift', 'SHIFT')
	// 	this.player1 = this.mergedInput.addPlayer(0)
	// 	this.mergedInput.defineKey(0, this.gameUp, this.keyUp)
	// 	this.mergedInput.defineKey(0, this.gameDown, this.keyDown)
	// 	this.mergedInput.defineKey(0, this.gameLeft, this.keyLeft)
	// 	this.mergedInput.defineKey(0, this.gameRight, this.keyRight)
	// 	this.mergedInput.defineKey(0, this.gameJump, this.keyJump)
	// 	this.mergedInput.defineKey(0, this.gameRun, this.keyRun)
	// 	this.mergedInput.defineKey(0, this.gameAttack, this.keyAttack)
	// 	this.mergedInput.defineKey(0, this.gameUse, this.keyUse)
	// 	this.mergedInput.defineKey(0, this.gameRun, this.keyRun)
	// 	console.log('here')

	// }
	// cleanKeys(keyText: string) {
	// 	return (keyText.replace('Key', '').replace('Arrow', '').replace('Space', 'SPACE').replace('Shift', 'SHIFT').toUpperCase())
	// }
	update() {
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