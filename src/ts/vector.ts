export class Vector {
	x: number;
	y: number;

	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}

	add(v: Vector): Vector {
		return new Vector(v.x + this.x, v.y + this.y);
	}

	sub(v: Vector): Vector {
		return new Vector(this.x - v.x, this.y - v.y);
	}

	scale(s: number): Vector {
		return new Vector(this.x * s, this.y * s);
	}

	dot(v: Vector): number {
		return ((this.x * v.x) + (this.y * v.y));
	}

	cross(v: Vector): number {
		return ((this.x * v.y) - (this.y * v.x));
	}

	rotate(v: Vector, a: number): Vector { // a should be in radians
		var x_shifted = this.x - v.x;
		var y_shifted = this.y - v.y;

		var x_rotated = v.x + ((x_shifted * Math.cos(a)) - (y_shifted * Math.sin(a)));
		var y_rotated = v.y + ((x_shifted * Math.sin(a)) + (y_shifted * Math.cos(a)));

		return new Vector(x_rotated, y_rotated);
	}

	vector_pos(): void {
		console.log(`x = ${this.x}, y = ${this.y}`);
	}
}
