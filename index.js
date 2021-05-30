// requierment when using inquierer
const inquirer = require('inquirer');

// linking other files
const {Employee, Intern, Engineer, Manager} = require('./lib/index')

// list of questions
const questions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is your name? (Required)',
        default: 'Name',
        validate: function(answer) {
            if (answer < 1 ) {
            return console.log('Please enter your full name');
            } else {
            return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID? (Required)',
        default: 'ID',
        validate: function(answer) {
            if (answer < 1 ) {
            return console.log('Please enter your employee ID!');
            } else {
            return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        default: 'Email',
        validate: function(answer) {
            if (answer < 1 ) {
            return console.log('Please enter your email!');
            } else {
            return true;
            }
        }
    }
].then(answers => {
    console.log(answers);
});

// function to prompt questions

// functions to create employees

// function to create interns

// function to create engineers

// function to create the HTML page