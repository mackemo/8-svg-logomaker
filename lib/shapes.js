class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    render() {
        // replaced by subclasses
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'circle', shapeColor)
    }

    render() {
        const width = 300;
        const height = 200;
        return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"> 
            <circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) / 2}" fill="${this.shapeColor}" />
            <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
            </svg>`;
    }
}
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'triangle', shapeColor)
    }

    render() {
        const width = 300;
        const height = 200;
        const points = `0,${height} ${width},${height} ${width / 2},0`;
        return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"> 
            <polygon points="${points}" fill="${this.shapeColor}" />
            <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
            </svg>`;
    }
}
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'square', shapeColor)
    }

    render() {
        const width = 300;
        const height = 200;
        return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"> 
            <rect x="0" y="0" width="${width}" height="${height}" fill="${this.shapeColor}" />
            <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
            </svg>`;
    }
}

module.exports = { Shape, Circle, Triangle, Square };

