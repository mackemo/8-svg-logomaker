class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'circle', shapeColor)
    }
}
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'triangle', shapeColor)
    }
}
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'square', shapeColor)
    }
}

module.exports = { Circle, Triangle, Square };

