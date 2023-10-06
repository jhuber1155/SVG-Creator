const fs = require('fs');
const inquirer = require('inquirer');



inquirer
  .prompt([
    {
      type: 'input',
      message: 'What letters would you like to use? You may choose up to 3 letters',
      name: 'letters',
    },
    {
      type: 'input',
      message: 'What color would you like to make the letters?',
      name: 'letterColor',
    },
    {
      type: 'list',
      message: 'What shape would you like to have behind the letters? A triangle, circle, or square?',
      choices: ['Triangle', 'Circle', 'Square'],
      name: 'chosenShape',
    },
    {
        type: 'input',
        message: 'What color would you like to make the background shape?',
        name: 'shapeColor',
    },
  ])
    .then((data) =>{
        fs.writeFile("logo.svg", JSON.stringify(data), (err) => {
            err ? console.error(err) : console.log("Generated logo.svg")})
        }); // ??? How to move file after its created? its not fs.rename("logo.svg", "examples") and I cant figure out the join.(__dirname, 'examples', 'logo.svg')
