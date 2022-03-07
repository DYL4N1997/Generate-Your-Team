const Employee = require("./Employee");

// Extends from employee js
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
    }
    obtainOfficeNumber() {
        return this.officeNumber;
    }
    obtainRole() {
        return "Manager";
    }
}

module.exports = Manager;