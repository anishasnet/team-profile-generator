class Employee {
    /* Use constructor to set name, id, email */
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    /* get fields methods */
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}
module.exports = Employee;