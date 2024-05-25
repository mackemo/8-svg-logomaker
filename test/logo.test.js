const Logo = require('../logo');

describe('Logo', () => {
    describe('logoText', () => {
        const logoText = inquirer.prompt[0].validate;
        const result = true;
        it('should have a string with three charcters or less', () => {
            expect(logoText('abc')).toEqual(result);
        });
    });

    describe('textColor')
})
