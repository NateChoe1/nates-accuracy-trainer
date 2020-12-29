/*
    Accuracy, it's a mouse accuracy trainer.
    Copyright (C) 2020  Nathaniel Choe

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
			break;
	}
}
