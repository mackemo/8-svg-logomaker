const Logo = require('../lib/logo')

function generateSVG () {
    let svg = '';

    // set width and height
    const width = 100;
    const height = 100;

    // SVG header
    svg += `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;

    // logo shape and color
    if (Logo.logoShape === 'circle') {
        svg += `<circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) / 2}" fill="${Logo.shapeColor}" />`;
    } else if (Logo.logoShape === 'square') {
        svg += `<rect x="0" y="0" width="${width}" height="${height}" fill="${Logo.shapeColor}" />`;
    } else if (Logo.logoShape === 'triangle') {
        const points = `0,${height} ${width},${height} ${width / 2},0`;
        svg += `<polygon points="${points}" fill="${Logo.shapeColor}" />`;
    }

    // logo text and color
    svg += `<text x="50%" y="50%" fill="${Logo.textColor}" text-anchor="middle">${Logo.logoText}</text>`;

    svg += `</svg>`;

    return svg;
}

module.exports = generateSVG;