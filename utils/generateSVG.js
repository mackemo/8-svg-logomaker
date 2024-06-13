function generateSVG(shape) {
    let svg = '';

    // set width and height
    const width = 300;
    const height = 200;

    // SVG header
    svg += `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;

    // logo shape and color
    if (shape.shape === 'circle') {
        svg += `<circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) / 2}" fill="${shape.shapeColor}" />`;
    } else if (shape.shape === 'square') {
        svg += `<rect x="0" y="0" width="${width}" height="${height}" fill="${shape.shapeColor}" />`;
    } else if (shape.shape === 'triangle') {
        const points = `0,${height} ${width},${height} ${width / 2},0`;
        svg += `<polygon points="${points}" fill="${shape.shapeColor}" />`;
    }

    // logo text and color
    svg += `<text x="50%" y="50%" fill="${shape.textColor}" text-anchor="middle">${shape.text}</text>`;

    svg += `</svg>`;

    return svg;
}

module.exports = generateSVG;