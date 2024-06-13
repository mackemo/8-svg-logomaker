const { Circle, Triangle, Square } = require("./shapes");


const width = 300;
const height = 200;

// testing circle shape
describe('Circle', () => {
    const shape = new Circle('abc', 'white', 'circle', 'blue');
    expect(shape.render()).toEqual(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"> 
        <circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) / 2}" fill="${logo.shapeColor}" />
        <text x="50%" y="50%" fill="${logo.textColor}" text-anchor="middle">${logo.logoText}</text>
        </svg>`);
});

// testing triangle shape
describe('Triangle', () => {
    const shape = new Triangle('abc', 'white', 'triangle', 'blue');
    expect(shape.render()).toEqual(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"> 
        <polygon points="${points}" fill="${logo.shapeColor}" />
        <text x="50%" y="50%" fill="${logo.textColor}" text-anchor="middle">${logo.logoText}</text>
        </svg>`);
});


// testing square shape
describe('Square', () => {
    const shape = new Square('abc', 'white', 'square', 'blue');
    expect(shape.render()).toEqual(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"> 
        <rect x="0" y="0" width="${width}" height="${height}" fill="${logo.shapeColor}" />
        <text x="50%" y="50%" fill="${logo.textColor}" text-anchor="middle">${logo.logoText}</text>
        </svg>`);
});

