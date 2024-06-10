const Logo = require('../lib/logo');

// testing each question in prompt
describe('Logo', () => {
    const result = true;
    const logo = new Logo('abc', 'white', 'circle', 'blue');

    describe('logoText', () => {
        it('should have a string with three characters or less', () => {
            expect(logo.logoText.length <= 3).toEqual(result);
        });

        it('should include only alphanumeric characters', () => {
            expect(/^[a-zA-Z0-9]+$/.test(logo.logoText)).toEqual(result);
        });
    });

    describe('textColor', () => {
        it('should have a valid color keyword', () => {
            expect(/^[a-zA-Z]+$/.test(logo.textColor)).toEqual(result);
        });
    });

    describe('logoShape', () => {
        it('should include a shape from the choices', () => {
            expect(['circle', 'triangle', 'square'].includes(logo.logoShape)).toEqual(result);
        });
    });

    describe('shapeColor', () => {
        it('should have a valid color keyword', () => {
            expect(/^[a-zA-Z]+$/.test(logo.shapeColor)).toEqual(result);
        });
    });
})
