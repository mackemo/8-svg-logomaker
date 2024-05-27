# 8-svg-logomaker

[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  

## Description
The eighth challenge assignment from a bootcamp where the task was to build a Node.js command-line application tthat takes in user input to generate a logo and save it to a .svg file.


## Table of Content
-[Description](#Description)
-[Process](#Process)
-[Links](#Links)
-[Installation](#Installation)
-[Usage](#Usage)
-[Licenses](#Licenses)
-[Contribution](#Contribution)
-[Test](#Test)
-[Acknowledgement](#Acknowledgement)
-[Questions](#Questions)


## Process
The process included creating a test folder and writing tests for the inquirer prompt questions. For the four questions of logo text, text color, logo shape, and shape color, the tests tested whether the user input met the criteria for each question. The index.js file included the questions for user input. The process for creating the questions included adding a validate for the criteria of each question. For example, if the user inputted logo text to be more than 3 characters, the validation would give back an error that the logo must be three characters or less. In the util folder, a generateSVG file was created to alter the data recieved from the user to be put into svg markup language to create the logo. A logo.js file was created to create a Logo object so that each new logo created would be an instance of the object. Once all the data is inputted, the data goes through svg markup and creates a new file called logo.svg that can be opened. The opened file is the image of the logo as 300x200 pixels.


## Links
Link to video of application: https://drive.google.com/file/d/1dL5c2ptSsVas_cwclkuP5_EEBa3kF2lc/view


## Installation
To install this application, copy the ssh key from my github repo and clone it into your respository.


## Usage
This site was a practice assignment for bootcamp students but can be used to see how an application made by Node.js works. Run node index.js in your terminal after installation.


## Licenses
This repository is using the [MIT](https://opensource.org/licenses/MIT) license.


## Contribution
Contact me by email provided in Questions section.


## Test
To test this application, simply run node index.js in your terminal after installation.


## Acknowledgement
Project was done by the knowledge learned from bootcamp instructor John and the Xpert Learning tool.


## Questions
Contact with questions at:

Email: mackenzielmoore14@gmail.com
Click [here](https://github.com/mackemo) for Github account.