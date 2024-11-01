import { Vector } from "./vector";

class rectangle {
	top_left: Vector; top_right: Vector; bottom_left: Vector; bottom_right: Vector;
	velocity: Vector; acceleration: Vector; theta: number; omega: number; alpha: number; J: number;
	w: number; h: number; m: number;
	constructor(x: number, y: number, w: number, h: number, m: number) {
		this.w = w;
		this.h = h;
		this.m = m;
		this.top_left = new Vector(x, y);
		this.top_right = new Vector(x + w, y);
		this.bottom_right = new Vector(x, y + h);
		this.bottom_left = new Vector(x + w, y + h);
		this.velocity = new Vector(0, 0);
		this.acceleration = new Vector(0, 0);
		this.theta = 0;
		this.omega = 0;
		this.alpha = 0;
		this.J = this.m * ((this.w * this.w) + (this.h * this.h)) / 12000; // moment of inertia of rect = [m * (w^2 + h^2)]/12
	}

	centre(): Vector {
		var diagonal: Vector = this.bottom_right.sub(this.top_left);
		var mid_point: Vector = this.top_left.add(diagonal.scale(0.5));
		return mid_point;
	}

	rotate(a: number): void {
		this.theta += a;
		var centre: Vector = this.centre();

		this.top_left = this.top_left.rotate(centre, a);
		this.top_right = this.top_right.rotate(centre, a);
		this.bottom_left = this.bottom_left.rotate(centre, a);
		this.bottom_right = this.bottom_right.rotate(centre, a);
	}

	move(v: Vector): void {
		this.top_left = this.top_left.add(v);
		this.top_right = this.top_right.add(v);
		this.bottom_left = this.bottom_left.add(v);
		this.bottom_right = this.bottom_right.add(v);
	}
}
