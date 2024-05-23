const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');

const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter up to three characters for your logo:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color for your text?',
    }, 
    {
        type: 'list',
        name: 'logoShape',
        message: 'Which shape would you like for your logo?', 
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color for your shape?',
    }
];