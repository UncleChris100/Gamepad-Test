const gl = document.createElement('canvas').getContext('webgl2');
if (!gl) {
	alert('Your browser does not support WebGL2.\nPlease enable WebGL in this browser or try another browser.');
}
import Phaser, { Game, GameObjects, Physics } from 'phaser'
import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin";
import { MatterGravityFixPlugin } from './MatterGravityFixPlugin'
import MergedInput from 'phaser3-merged-input'
import TestScene from './TestScene'
import Title from './Title'
import testGamePad from './testGamePad';
const config = {
	type: Phaser.WEBGL,
	width: 800,
	height: 576,
	input: {
		gamepad: true
	},
	pixelArt: true,
	backgroundColor: "#000000",
	parent: "game-container",
	scene: [Title, TestScene,testGamePad],
	physics: {
		default: 'matter',
		matter: {
			gravity: { y: 2 },

			//overlapBias: 10,
			setBounds: { x: 0, y: 0, width: 1600, height: 1600 },	 // or true for game area width,height (800x576)
			debug: false

		}

	},
	fps: { forceSetTimeOut: true, target: 60 },
	plugins: {
		scene: [
			{
				key: "MatterGravityFixPlugin",
				plugin: MatterGravityFixPlugin,
				mapping: "matterGravityFix",
				start: true,
			},
			{
				key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
				plugin: PhaserMatterCollisionPlugin, // The plugin class
				mapping: "matterCollision" as "matterCollision", // Where to store in the Scene, e.g. scene.matterCollision
				start: true,
			},

			{
				key: "mergedInput",
				plugin: MergedInput,
				mapping: "mergedInput",
			},
		]
	}
};

export default new Phaser.Game(config)
