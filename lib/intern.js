const { ModuleMocker } = require("jest-mock");

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

module.exports = Intern;