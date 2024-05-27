function generateSVG(logo) {
    let svg = '';

    // set width and height
    const width = 100;
    const height = 100;

    // SVG header
    svg += `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;

    // logo shape and color
    if (logo.logoShape === 'circle') {
        svg += `<circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) / 2}" fill="${logo.shapeColor}" />`;
    } else if (logo.logoShape === 'square') {
        svg += `<rect x="0" y="0" width="${width}" height="${height}" fill="${logo.shapeColor}" />`;
    } else if (logo.logoShape === 'triangle') {
        const points = `0,${height} ${width},${height} ${width / 2},0`;
        svg += `<polygon points="${points}" fill="${logo.shapeColor}" />`;
    }

    // logo text and color
    svg += `<text x="50%" y="50%" fill="${logo.textColor}" text-anchor="middle">${logo.logoText}</text>`;

    svg += `</svg>`;

    return svg;
}

module.exports = generateSVG;