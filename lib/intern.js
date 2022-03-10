const Employee = require("./Employee");

// Extends from employee js
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
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