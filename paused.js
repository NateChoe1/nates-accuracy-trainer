/*
    Nate's accuracy trainer, it's a mouse accuracy trainer.
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

function pausedReset() {
	return;//I don't know why you would use this, but I need it for standardization.
}

function pausedClick(mouseX, mouseY) {
	return;
}

function pausedDraw() {
	displayMessage(
		"The game is paused. Press escape to continue.\n" +
		"You are playing beta version 1.1.0\n\n" +
		
		"Scroll the mouse to change the size of the circle.\n\n" +

		"Nate's accuracy trainer  Copyright (C) 2020  Nathaniel Choe.\n" +
		"This program comes with ABSOLUTELY NO WARRANTY.\n" +
		"This is free softwarem and you are welcome to to redistribute it\n"+
		"under certain conditions; see license.txt for details.");

	fill(255, 0, 0);
	noStroke();
	ellipse(width * 3 / 4, height / 2, defaultTargetSize, defaultTargetSize);
}
