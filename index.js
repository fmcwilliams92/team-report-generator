// requierment when using inquierer
const inquirer = require('inquirer');

// linking other files
const {Employee, Intern, Engineer, Manager} = require('./lib/Index')

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
    },
    // verify the role of the user
    {
        type: 'list',
        name: 'role',
        message: ' Please specify your role within the company!',
        default: 'Role',
        choices: ['Intern', 'Engineer', 'Manager']
    },
    // additional questions depending on which role the user chose
    {
        type: 'input',
        name: 'GitHub',
        message: 'Please enter your GitHub username',
        when: (input) => input.role === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter your School name!',
        when: (input) => input.role === 'Intern'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your office number!',
        when: (input) => input.role === 'Manager'
    }
];

// function to prompt questions
function addEmployee() {
    inquirer.prompt(questions)
    .then(function(answers) {
        console.log(answers)
    })
};

// functions to create employees

// function to create interns

// function to create engineers

// function to create the HTML page

addEmployee();