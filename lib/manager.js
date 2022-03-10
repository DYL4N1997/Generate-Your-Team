const Employee = require("./employee");

// Extends from employee js
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
      }
      getRole() {
        return "Manager";
      }
    }

module.exports = Manager;