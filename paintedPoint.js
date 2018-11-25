const paintedPoint = {
	M: [x, y],
	L: [x, y],
	// svg		a	: [rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
	// canvas	quadraticCurveTo	: [cpx,cpy,x,y]
	Q: [x, y, ctrlX, ctrlY],
	C: [x, y, ctrlX1, ctrlY1, ctrlX2, ctrlY2],
	
	// svg		a	: [rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
	// canvas	arc	: [x, y, r, startsAngle, endsAngle, counterclockwise]
	A: [x, y, startsAngle, endsAngle, r],
}