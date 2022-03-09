const Employee = require("./Employee");

// Extends from employee js
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return this.title;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;