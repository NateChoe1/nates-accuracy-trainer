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

(function() {
	let target;
	let targetsHit = 0;
	let clicks = 0;
	let gameDuration = defaultGameDuration;

	class Target {
		constructor () {
			this.x = random(width)
			this.y = random(height);
			this.size = defaultTargetSize;
		}

		draw() {
			fill(255, 0, 0);
			noStroke();
			ellipse(this.x, this.y, this.size, this.size);
		}
	}

	
	speedDraw = function() {
		if (playedFrames >= gameDuration) {
			displayMessage("The game has ended. You hit " + targetsHit + " targets/" + clicks + " clicks (" + (targetsHit / clicks * 100) + "% accuracy).\nPress r to play again.")
			return;
		}
		
		target.draw();
	};
	
	speedReset = function() {
		target = new Target();
		targetsHit = 0;
		clicks = 0;
	};
	
	speedClick = function(mouseX, mouseY) {
		if (sqrt(pow(mouseX - target.x, 2) + pow(mouseY - target.y, 2)) <= target.size / 2) {
			target = new Target();
			targetsHit++;
		}
		clicks++;
	}
})()
