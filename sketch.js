function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (width != windowWidth || height != windowHeight) {
    createCanvas(windowWidth, windowHeight);
  }
  background(0);
  
  switch (mode) {
    case 0:
      pausedDraw();
      break;
    case 1:
      vanillaDraw();
      break;
  }
  if (mode != 0) {
    playedFrames++;
  }
}

function keyPressed() {
  if (keyCode == ESCAPE) {
    if (mode != 0) {
      selectedMode = mode;
      mode = 0;
    }
    else {
      mode = selectedMode;
    }
  }
  
  if (keyCode == 82) {
    playedFrames = 0;
    switch (mode) {
      case 1:
        vanillaReset();
        break;
    }
  }
}

function mousePressed() {
  switch(mode) {
    case 1:
      vanillaClick(mouseX, mouseY);
  }
}