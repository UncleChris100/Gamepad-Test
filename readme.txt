main.ts calls Title.ts.
Title.ts (scene) has a bunch of stuff in it that's pretty much not used for the test.
Only the Start button really has any effect and takes you to testGamePad.ts (scene) that only creates the testPlayer class from testPlayer.ts
testPlayer.ts sets up LC_W and RC_S gamepad and console logs them as in if(this.player1.buttons_mapped.LC_W>0)....
Console shows debug when pressing buttons first time in testPlayer.ts  (The game display area is blank)
If I press any gamepad buttons on the Title scene and progress to the testGamePad scene - then no output when it gets to testGamePad scene.
