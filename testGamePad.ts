import testPlayer from './testPlayer'
export default class testGamePad extends Phaser.Scene {
	private keyBindings
	constructor() {
		super('testGamePad')
	}
	create() {
		new testPlayer(this)//, this.keyBindings)
		
	}
}
