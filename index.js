const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What letters would you like to use? Please choose up to 3 letters',
            name: 'letter',
        },
        {
            type: 'input',
            message: 'Please choose what color you would like to make the text',
            name: 'letterColor',
        },
        {
            type: 'list',
            message: 'Please choose what shape you would like to use: Circle, Triangle, or square',
            name: 'shape',
        },
        {
            type: 'input',
            message: 'Please choose what color you would like to make the shape',
            name: 'shapeColor',
        },
    ])
    .then((data) =>{
            fs.writeFile('logo.svg', data, (err) => err ? console.error(err) : console.log('Generated logo.svg'))
        })