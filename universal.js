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

let mode = 1;
let previousMode = 1;
let playedFrames = 0;//This is constantly increasing and will only be reset on new games. There will be no other instances in which this value changes. Do not create any, do not delete any. These are constant. I repeat, do not change playedFrames, only read from it.
let totalModes = 2;//Paused doesn't count.

function displayMessage(message) {
	fill(255);
	noStroke();
	textAlign(CENTER, CENTER);
	textSize(20);
	text(message, width/2, height/2);
}
