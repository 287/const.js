const svgShapeNodeKeys = {
	node: ['fill', 'stroke', 'strokeWidth', 'rotate', 'scale', 'scaleX', 'scaleY', 'translate', 'translateX', 'translateY', 'display'],
	rect: ['left', 'top', 'width', 'height'],
	image: ['image', 'layout', 'align'],
	text: ['text', 'nowrap', 'fontSize', 'fontFamily', 'lineHeight', 'bold', 'italic', 'align', 'overflow', 'color'],
	path: ['left', 'top', 'path'],
	line: ['startsPoint', 'startsPointX', 'startsPointY', 'endsPoint', 'endsPointX', 'endsPointY'],
	shape: ['x', 'y'],
	polygon: ['r', 'sides', 'revise'],
	isogon: ['outerRadius', 'innerRadius', 'angles', 'revise'],
	sector: ['startsAngle', 'endsAngle', 'r'],
	ring: ['innerRadius', 'outerRadius', 'startsAngle', 'endsAngle'],
}