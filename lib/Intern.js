const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        /* Use Employee constructor */
        super(name, id, email);
        this.school = school
    }
    getSchool() {
        return this.school;
    }
    /* Overriden method to return accurate role */
    getRole() {
        return "Intern";
    }
}
module.exports = Intern;