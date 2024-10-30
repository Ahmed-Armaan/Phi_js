var canvas = document.getElementById('canvas') as HTMLCanvasElement;
var ctx = canvas.getContext('2d'),
	height: number = 400,
	width: number = 400,
	x: number = 200,
	y: number = 10,
	vy: number = 0,
	ay: number = 0,
	mass: number = 10,
	g: number = 9.8,
	dt: number = 0.02,
	e: number = -0.5,
	r: number = 10,
	rho: number = 1.2,
	C_drag: number = 0.47,
	area: number = Math.PI * r * r / 10000;

function game_loop() {
	//F = ma; a = m/F
	var Fy: number = 0;
	Fy += mass * g;
	Fy -= rho * area * vy * vy * C_drag * 0.5;

	//semi-implicit euler's intergration
	y += ((vy * dt) + (0.5 * ay * dt * dt)) * 1000;

	var new_ay: number = Fy / mass;
	var avg_ay: number = 0.2 * (new_ay - ay);
	vy += avg_ay * dt;
	console.log(vy);

	if (y + r > height) {
		vy = e * vy;
		y = height - r;
	}


	draw();
}

function draw() {
	ctx?.clearRect(0, 0, width, height);
	ctx?.beginPath();
	ctx?.arc(x, y, r, 0, Math.PI * 2, true);
	ctx?.fill();
	ctx?.closePath();
}

setInterval(game_loop, dt * 1000);
