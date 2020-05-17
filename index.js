const inquirer = require('inquirer')
const employeeTypes = ['employee', 'manager', 'engineer', 'intern']
const Employee = require('./lib/employee.js')
const questions = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'employeeType',
            message: 'What type of employee:',
            validate: employeeTypeInput => {
                if (employeeTypeInput) {
                    if (employeeTypes.includes(employeeTypeInput.toLowerCase())){
                        return true;
                    } else {
                        console.log("\nEmployee type must be either Employee, Manager, Engineer, or Intern")
                    }
                } else {
                    console.log("Please enter the employee type")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'name',
            message: 'Name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'Employee id:',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's id")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Email:',
            validate: emailInput => {
                if (emailInput) {
                    if (emailInput.includes('@')){
                        return true;
                    } else {
                        console.log("\nPlease enter a valid email");
                        return false;
                    }
                } else {
                    console.log("Please enter the employee's email")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: 'Office Number:',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's office number")
                    return false;
                }
            },
            when: function( answers ) {
                return answers.employeeType.toLowerCase() === "manager";
              },
        },
        {
            type: 'text',
            name: 'github',
            message: 'Github username:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Github username.")
                    return false;
                }
            },
            when: function( answers ) {
                return answers.employeeType.toLowerCase() === "engineer";
              },
        },
        {
            type: 'text',
            name: 'school',
            message: 'School:',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school")
                    return false;
                }
            },
            when: function( answers ) {
                return answers.employeeType.toLowerCase() === "intern";
              },
        },
        {
            type: 'confirm',
            name: 'newEmployee',
            message: 'Would you like to input another employee: ',
        },


    ])
}

questions().then(answers => {
    if (answers.newEmployee) {
        return questions();
    } else {
        console.log(answers);
    }
})