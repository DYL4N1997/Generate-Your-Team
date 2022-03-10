const Employee = require("./employee");

// Extends from employee js
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = school;
    }
    getSchoool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;