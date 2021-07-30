// TODO: Include packages needed for this application
//define what the question objects look like
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [ 
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
    name: 'Title'
},
{
    message: 'Please write a short description of your file',
    type: 'input',
    name: 'Description'
},
{
    message: 'What kind of license should your project have?',
    type: 'list',
    name: 'License',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
},
{
    message: 'What command should be run to install dependencies?',
    type: 'input',
    name: 'Command'
},
{
    message: 'What command should be run to run tests?',
    type: 'input',
    name: 'Tests'
},
{
    message: 'What does the user need to know about using this repo?',
    type: 'input',
    name: 'Repo'
},
{
    message: 'What does the user need to know about contributing to the repo?',
    type: 'input',
    name: 'Contribute'
},
];



// TODO: Create a function to write README file
//think about using fs and appendfile 
// function writeToFile(README.md, answers) {
//     fs.appendFile('README.md', `${process.argv[2]}\n`, (err) =>
//     err ? console.log(err) : console.log('commit logged!')
//     );
// }
// TODO: Create a function to initialize app
//function that ask users the questions
function init() {
    inquirer
    .prompt(questions)
    
    .then((answers) => {
    console.log(answers)
    const markDown = generateMarkdown(answers);
    fs.writeFile('README.md', markDown, (err) =>
    err ? console.log(err) : console.log('success'));
    })
    .catch((error) => {
        if (error.itsTtyError) {
    
        } else {
    
        }
    });
}

// Function call to initialize app
init();
