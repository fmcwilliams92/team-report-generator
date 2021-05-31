// document requirements
const inquirer = require('inquirer');
const http = require('http');
const fs = require('fs');
const port = 3001;

// linking other files
const {Employee, Intern, Engineer, Manager} = require('./lib/Index')

// list of questions
const questions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is your name?',
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
        message: 'What is your ID?',
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
    console.log(answers);
    })
};

// functions to create employees

// function to create interns

// function to create engineers

// function to create the HTML page
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: File not found')
        } else {
            res.write(answers)
        }
        res.end();
    })
});

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong!', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
});

addEmployee();