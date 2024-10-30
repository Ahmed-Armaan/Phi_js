"use strict";
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d'), height = 400, width = 400, x = 200, y = 10, vy = 0, ay = 0, mass = 10, g = 9.8, dt = 0.02, e = -0.5, r = 10, rho = 1.2, C_drag = 0.47, area = Math.PI * r * r / 10000;
function game_loop() {
    //F = ma; a = m/F
    var Fy = 0;
    Fy += mass * g;
    Fy -= rho * area * vy * vy * C_drag * 0.5;
    //semi-implicit euler's intergration
    y += ((vy * dt) + (0.5 * ay * dt * dt)) * 1000;
    var new_ay = Fy / mass;
    var avg_ay = 0.2 * (new_ay - ay);
    vy += avg_ay * dt;
    console.log(vy);
    if (y + r > height) {
        vy = e * vy;
        y = height - r;
    }
    draw();
}
function draw() {
    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, width, height);
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx === null || ctx === void 0 ? void 0 : ctx.fill();
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath();
}
setInterval(game_loop, dt * 1000);
