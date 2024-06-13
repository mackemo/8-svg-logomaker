const { Circle, Triangle, Square } = require("./shapes");


const width = 300;
const height = 200;


// testing circle shape
describe('Circle', () => {
    it('should render a circle SVG correctly', () => {
        const shape = new Circle('abc', 'white', 'blue');
        const expectedSVG = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"> 
            <circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) / 2}" fill="blue" />
            <text x="50%" y="50%" fill="white" text-anchor="middle">abc</text>
            </svg>`;
        expect(shape.render()).toEqual(expectedSVG);
    });
});

// testing triangle shape
describe('Triangle', () => {
    it('should render a triangle SVG correctly', () => {
        const points = `0,${height} ${width},${height} ${width / 2},0`;
        const shape = new Triangle('abc', 'white', 'blue');
        const expectedSVG = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"> 
            <polygon points="${points}" fill="blue" />
            <text x="50%" y="50%" fill="white" text-anchor="middle">abc</text>
            </svg>`;
        expect(shape.render()).toEqual(expectedSVG);
    });
});

// testing square shape
describe('Square', () => {
    it('should render a square SVG correctly', () => {
        const shape = new Square('abc', 'white', 'blue');
        const expectedSVG = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"> 
            <rect x="0" y="0" width="${width}" height="${height}" fill="blue" />
            <text x="50%" y="50%" fill="white" text-anchor="middle">abc</text>
            </svg>`;
        expect(shape.render()).toEqual(expectedSVG);
    });
});

