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
	let defaultGrowthSpeed = 0.5;
	let defaultEndSize = 50;
	let duration = 1800;
	let target;
	let targetsHit = 0;
	let clicks = 0;
	let targetsMissed = 0;

	class Target {
		constructor () {
			this.x = random(width)
			this.y = random(height);
			this.size = 0;
			this.growthSpeed = defaultGrowthSpeed;
			this.endSize = defaultEndSize;
		}

		draw() {
			fill('rgba(0,0,0,0)');
			stroke(255, 0, 0);
			strokeWeight(3);
			ellipse(this.x, this.y, this.endSize, this.endSize);
			fill(255, 0, 0);
			noStroke();
			ellipse(this.x, this.y, this.size, this.size);
			this.size += this.growthSpeed;
		}
	}

	
	speedDraw = function() {
		if (playedFrames >= duration) {
			displayMessage("The game has ended. You hit " + targetsHit + " targets/" + clicks + " clicks (" + (targetsHit / clicks * 100) + "% accuracy).\nYou also spent too long on " + targetsMissed + " targets.\nPress r to play again.")
			return;
		}
		
		target.draw();
		if (target.size >= target.endSize) {
			targetsMissed++;
			target = new Target();
		}
	};
	
	speedReset = function() {
		target = new Target();
		targetsHit = 0;
		clicks = 0;
	};
	
	speedClick = function(mouseX, mouseY) {
		if (sqrt(pow(mouseX - target.x, 2) + pow(mouseY - target.y, 2)) <= target.endSize / 2) {
			target = new Target();
			targetsHit++;
		}
		clicks++;
	}
})()
