// TODO: Include packages needed for this application
//define what the question objects look like
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require ('fs');

inquirer
  .prompt([
    {
        message: 'What is your Github Username?',
        type: 'input',
        name: 'Username'
    },
    {
        message: 'What is your Email?',
        type: 'input',
        name: 'Email'
    },
    {
        message: 'What is your project name?',
        type: 'input',
        name: 'Project name'
    },
    {
        message: 'Please write a short description of your file',
        type: 'input',
        name: 'Project Description'
    },
    {
        message: 'What kind of license should your project have?',
        type: 'list',
        name: 'License',
        chocies: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        message: 'What command should be run to install dependencies?',
        type: 'input',
        name: 'Command',
    },
    {
        message: 'What command should be run to run tests?',
        type: 'input',
        name: 'Tests',
    },
    {
        message: 'What does the user need to know about using this repo?',
        type: 'input',
        name: 'Need to know',
    },
    {
        message: 'What does the user need to know about contributing to the repo?',
        type: 'input',
        name: 'Contribute',
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const filename = `${answers.name.toLowercase().trim().split(' ').join('')}.json`
    fs.writeFile(filename, JSON.stringify(answers, null, 2), (err) =>{
        err ? console.error(err) : console.log('Writing to a JSON document...')
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

const questions = [ {
    message: 'What is your Github Username?',
    type: 'input',
    name: 'Username'
},
{
    message: 'What is your Email?',
    type: 'input',
    name: 'Email'
},
{
    message: 'What is your project name?',
    type: 'input',
    name: 'Project name'
},
{
    message: 'Please write a short description of your file',
    type: 'input',
    name: 'Project Description'
},
{
    message: 'What kind of license should your project have?',
    type: 'list',
    name: 'License',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
},
{
    message: 'What command should be run to install dependencies?',
    type: 'input',
    name: 'Command',
},
{
    message: 'What command should be run to run tests?',
    type: 'input',
    name: 'Tests',
},
{
    message: 'What does the user need to know about using this repo?',
    type: 'input',
    name: 'Need to know',
},
{
    message: 'What does the user need to know about contributing to the repo?',
    type: 'input',
    name: 'Contribute',
}
];

// TODO: Create a function to write README file
//think about using fs and appendfile 
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function that ask users the questions
function init() {}

// Function call to initialize app
init();
