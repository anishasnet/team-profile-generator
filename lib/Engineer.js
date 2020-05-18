const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        /* Use Employee constructor */
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }

    /* Overriden method to return accurate role */
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;
