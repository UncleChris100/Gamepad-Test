import MergedInput from "phaser3-merged-input"

export default class testPlayer {
	private mergedInput?: MergedInput
	private player1
	private scene
	
	constructor(scene) {//, keyBindings) {
		this.scene=scene
		this.player1 = this.scene.mergedInput.addPlayer(0)
		this.scene.mergedInput.defineKey(0, 'LC_W', 'A')
		this.scene.mergedInput.defineKey(0,'RC_S','Space')
		this.scene.events.on("update", this.update, this)
		console.log(this.player1)
	}
	update() {
		if (this.player1.buttons_mapped.LC_W > 0) {
			console.log('LC_W Pressed')
		}
		if (this.player1.buttons_mapped.RC_S > 0) {
			console.log('Jump (RC_S) Pressed')
		}
	}
}
