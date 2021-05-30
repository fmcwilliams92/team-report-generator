// requierment when using inquierer
const inquirer = require('inquirer');

// Classes and functions for each class
class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    // getName();
    // getId();
    // getEmail();
    // getSchool();
};

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // getName();
    // getId();
    // getEmail();
};

class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    // getName();
    // getId();
    // getEmail();
    // getGitHub();
};

class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    // getName();
    // getId();
    // getEmail();
    // getOfficeNumber();
};

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
];

// prompt the questions to collect the user data
