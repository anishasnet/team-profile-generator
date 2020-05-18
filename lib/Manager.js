const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        /* Use Employee constructor */
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    /* Overriden method to return accurate role */
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;