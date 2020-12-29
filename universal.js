let mode = 1;
let selectedMode = 1;
let playedFrames = 0;//This is constantly increasing and will only be reset on new games. There will be no other instances in which this value changes. Do not create any, do not delete any. These are constant. I repeat, do not change playedFrames, only read from it.

function displayMessage(message) {
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(20);
  text(message, width/2, height/2);
}