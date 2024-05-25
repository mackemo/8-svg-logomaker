const Logo = require('../logo');

describe('Logo', () => {
    describe('logoText', () => {
        const logoText = inquirer.prompt[0].validate;
        const result = true;
        it('should have a string with three charcters or less', () => {
            expect(logoText('abc')).toEqual(result);
        });
        it('should include only alphanumeric characters', () => {
            expect(logoText('1ab')).toEqual(result);
        });
    });

    describe('textColor', () => {
        const textColor = inquirer.prompt[1].validate;
        const result = true;
        it('should have a valid color keyword', () => {
            expect(textColor('white')).toEqual(result);
        });
    });

    describe('logoShape', () => {
        const logoShape = inquirer.prompt[2].validate;
        const result = true;
        it('should include a shape from the choices', () => {
            expect(logoShape('circle')).toEqual(result);
        });
    });

    describe('shapeColor', () => {
        const shapeColor = inquirer.prompt[3].validate;
        const result = true;
        it('should have a valid color keyword', () => {
            expect(shapeColor('blue')).toEqual(result);
        });
    });
})
