class Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }

    // getId();
    // getEmail();
    // getSchool();
};

module.exports = Employee;