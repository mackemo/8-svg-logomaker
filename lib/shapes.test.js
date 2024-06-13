const Shape = require('./shapes');

// testing each question in prompt
describe('Shape', () => {
    const result = true;
    const shape = new Shape('abc', 'white', 'circle', 'blue');

    describe('text', () => {
        it('should have a string with three characters or less', () => {
            expect(shape.text.length <= 3).toEqual(result);
        });

        it('should include only alphanumeric characters', () => {
            expect(/^[a-zA-Z0-9]+$/.test(shape.text)).toEqual(result);
        });
    });

    describe('textColor', () => {
        it('should have a valid color keyword', () => {
            expect(/^[a-zA-Z]+$/.test(shape.textColor)).toEqual(result);
        });
    });

    describe('shape', () => {
        it('should include a shape from the choices', () => {
            expect(['circle', 'triangle', 'square'].includes(shape.shape)).toEqual(result);
        });
    });

    describe('shapeColor', () => {
        it('should have a valid color keyword', () => {
            expect(/^[a-zA-Z]+$/.test(shape.shapeColor)).toEqual(result);
        });
    });
})
