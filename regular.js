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

//Thanks dad for telling me about IIFEs, I never would've found out about them otherwise.

(function() {
	let duration = 300;
	let frequency = 60;
	let targets = new Set();
	let targetsHit = 0;
	let targetsShown = 0;

	class Target {
		constructor (x, y, growthSpeed, endSize) {
			this.x = x;
			this.y = y;
			this.size = 0;
			this.growthSpeed = growthSpeed;
			this.endSize = endSize;
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
	
	regularDraw = function() {
		if (playedFrames >= duration) {
			displayMessage("The game has ended. You got " + targetsHit + "/" + targetsShown + " (" + (targetsHit / targetsShown * 100) + "%) targets.\nPress r to play again.")
			return;
		}

		if (playedFrames % frequency == 0) {
			targets.add(new Target(random(0, width), random(0, height), 0.5, 50));
			targetsShown++;
		}

		for (let t of targets) {
			t.draw();
			if (t.size >= t.endSize) targets.delete(t);
		}
	};
	
	regularReset = function() {
		targets = new Set();
		targetsHit = 0;
		targetsShown = 0;
	};
	
	regularClick = function(mouseX, mouseY) {
		for (let target of targets) {
			if (sqrt(pow(mouseX - target.x, 2) + pow(mouseY - target.y, 2)) <= target.endSize / 2) {
				targets.delete(target);
				targetsHit++;
			}
		}
	}
})()
