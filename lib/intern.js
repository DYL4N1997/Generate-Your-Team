const Employee = require("./Employee");

// Extends from employee js
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = school;
    }
    obtainSchoool() {
        return this.school;
    }
    obtainRole() {
        return "Intern";
    }
}

module.exports = Intern;