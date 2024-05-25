const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');

inquirer
    .prompt([
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter up to three characters for your logo:',
        validate: function(input) {
            if (input.length <= 3) {
                return 'Logo must have three characters or less.';
            }
            if (!input.match(/^[a-zA-Z0-9]+$/)) {
                return 'Logo text must be alphanumeric.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color for your text?',
        validate: function(input) {
            if (!input.match(/^[a-zA-Z]+$/)) {
                return 'Please enter a valid color keyword (only alphabetic characters).';
            }
            return true; 
        }
    }, 
    {
        type: 'list',
        name: 'logoShape',
        message: 'Which shape would you like for your logo?', 
        choices: ['circle', 'triangle', 'square'],
        validate: function(input) {
            if (!input) {
                return 'Please select a shape for your logo.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color for your shape?',
        validate: function(input) {
            if (!input.match(/^[a-zA-Z]+$/)) {
                return 'Please enter a valid color keyword (only alphabetic characters).';
            }
            return true; 
        }
    }
]) 
    .then((response) => {
        const filename = `logo.svg`;
        fs.writeFile(filename, (response), (err) => 
            err ? console.error(err) : console.log("Generated logo.svg"))
    })

    .catch(function (error) {
        console.error("Error occurred:", error);
    });
    