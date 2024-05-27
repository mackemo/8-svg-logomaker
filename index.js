const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const Logo = require('./lib/logo');
const generateSVG = require('./utils/generateSVG');

// user input questions
const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter up to three characters for your logo:',
        validate: function(input) {
            if (input.length > 3) {
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
];

//  function for writing data to a file
function writeToFile(logo) {
    const filename = `logo.svg`;
    fs.writeFile(filename, generateSVG(logo), (err) => 
        err ? console.error(err) : console.log(colors.green("Generated logo.svg")))
}

//  function for processing user input then using write to file function
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const logo = new Logo(data.logoText, data.textColor, data.logoShape, data.shapeColor);
            writeToFile(logo);
        })

        .catch(function(err) {
            console.error(colors.red("Error occurred:", err));
        });      
}

init();