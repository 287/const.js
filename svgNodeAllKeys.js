//#!py
/**
 * @include eachObject svgNodeKeys
 */
const svgNodeAllKeys = {}
-
	const svgNodeAddedKeys = {
		placeholder: [],
		
		path: ['offset', 'stroke', 'fill', 'fillRule'],
		line: ['offset', 'stroke'],
		rect: ['offset', 'size', 'stroke', 'fill', 'transform'],
		layer: ['offset', 'size', 'stroke', 'fill', 'transform'],
		image: ['rect'],
		text: ['rect', 'fontStyle'],
		
		root: ['size'],
		foreign: ['offset', 'size', 'fill', 'transform'],
		group: ['offset', 'transform'],
		shape: ['origin', 'transform', 'fill', 'stroke'],
		circle: ['shape'],
		polygon: ['shape'],
		isogon: ['shape'],
		sector: ['shape'],
		ring: ['shape', 'fillRule'],
	}

	eachObject(svgNodeAddedKeys, (keys, type)=> {
		keys = keys.map((key)=> svgNodeAllKeys[key] || svgNodeKeys[key] || [])
		if svgNodeKeys[type]
			keys.unshift(svgNodeKeys[type])
		
		svgNodeAllKeys[type] = [].concat(...keys)
	})
	if svgNodeKeys.common
		eachObject(svgNodeAllKeys, (keys, type)=> {
			if type === 'placeholder'
				return
			keys.push(...svgNodeKeys.common)
		})
	
	delete svgNodeAllKeys.shape

	console.log(svgNodeAllKeys)