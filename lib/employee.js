class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    obtainName() {
        return this.name;
    }
    obtainId() {
        return this.id;
    }
    obtainEmail() {
        return this.email;
    }
}

module.exports = Employee;