

let sizes = [40, 20, 3, 34, 12, 23, 54, 11, 25, 11, 40, 21, 3, 80, 56, 23, 21, 80, 78, 32, 40, 27, 66, 23, 55, 23, 54, 92, 25, 54];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	for (let number = 0; number <= 29; number = number + 1) {
		translate(30, 30);
		ellipse(20, 20, sizes[number] * mouseY / 100, sizes[number] * mouseX / 100);
	}


}