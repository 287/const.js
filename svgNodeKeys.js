/**
 * @include ltKeys xyKeys sizeKeys
 */
const svgNodeKeys = {
	common: ['display', 'cursor', 'transition', 'pointerEvents'],
	
	stroke: ['stroke', 'strokeWidth'],
	fill: ['fill'],
	fillRule: ['fillRule'],
	transform: ['rotate', 'scale', 'scaleX', 'scaleY', 'translate', 'translateX', 'translateY'],
	offset: ltKeys,
	origin: xyKeys,
	size: sizeKeys,
	
	fontStyle: ['fontFamily', 'color', 'bold', 'italic'],
	
	layer: ['overflow'],
	
	path: ['path'],
	line: ['startsPoint', 'startsPointX', 'startsPointY', 'endsPoint', 'endsPointX', 'endsPointY', 'arrowMode', 'arrowType', 'arrowSize', 'arrowAngle', 'arrowReverse', 'stepMode', 'stepOffset'],
	rect: [],
	image: ['image', 'layout', 'align'],
	text: ['text', 'nowrap', 'fontSize', 'lineHeight', 'align', 'baseline', 'overflow', 'padding'],
	
	circle: ['r'],
	polygon: ['r', 'sides', 'revise'],
	isogon: ['outerRadius', 'innerRadius', 'angles', 'revise'],
	sector: ['startsAngle', 'endsAngle', 'r'],
	ring: ['innerRadius', 'outerRadius', 'startsAngle', 'endsAngle'],
}