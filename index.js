const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml.js');
const employeeTypes = ['employee', 'manager', 'engineer', 'intern'];
const Employee = require('./lib/employee.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');


let employeeData = [];
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'managerName',
            message: 'What is the team manager\'s name? ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name.")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'managerId',
            message: 'What is the team manager\'s id? ',
            validate: idInput => {
                if (idInput) {
                    if (parseInt(idInput) == idInput) {
                        return true;
                    } else {
                        console.log('\nEmployee id\'s can only have numbers.')
                        return false;
                    }
                } else {
                    console.log("Please enter the manager's id.")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'managerEmail',
            message: 'What is the team manager\'s email? ',
            validate: emailInput => {
                if (emailInput) {
                    if (emailInput.includes('@')) {
                        return true;
                    } else {
                        console.log("\nPlease enter a valid email.");
                        return false;
                    }
                    return true;
                } else {
                    console.log("Please enter the manager's email.")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'managerOfficeNumber',
            message: 'What is the team manager\'s office number? ',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number.")
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'nextEmployee',
            message: 'Which type of team member would you like to add? ',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        },
    ])
}

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'engineerName',
            message: 'What is the engineer\'s name? ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name.");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'engineerId',
            message: 'What is the engineer\'s id? ',
            validate: idInput => {
                if (idInput) {
                    if (parseInt(idInput) == idInput) {
                        return true;
                    } else {
                        console.log('\nEmployee id\'s can only have numbers.')
                        return false;
                    }
                } else {
                    console.log("Please enter the engineer's id.")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'engineerEmail',
            message: 'What is the engineer\'s email? ',
            validate: emailInput => {
                if (emailInput) {
                    if (emailInput.includes('@')) {
                        return true;
                    } else {
                        console.log("\nPlease enter a valid email.");
                        return false;
                    }
                    return true;
                } else {
                    console.log("Please enter the engineer's email.")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'engineerGithub',
            message: 'What is the engineer\'s Github username? ',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Github username.")
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'nextEmployee',
            message: 'Which type of team member would you like to add? ',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        },
    ])
}


const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'internName',
            message: 'What is the intern\'s name? ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name.");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'internId',
            message: 'What is the intern\'s id? ',
            validate: idInput => {
                if (idInput) {
                    if (parseInt(idInput) == idInput) {
                        return true;
                    } else {
                        console.log('\nEmployee id\'s can only have numbers.')
                        return false;
                    }
                } else {
                    console.log("Please enter the intern's id.")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'internEmail',
            message: 'What is the intern\'s email? ',
            validate: emailInput => {
                if (emailInput) {
                    if (emailInput.includes('@')) {
                        return true;
                    } else {
                        console.log("\nPlease enter a valid email.");
                        return false;
                    }
                    return true;
                } else {
                    console.log("Please enter the intern's email.")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'internSchool',
            message: 'What is the intern\'s school? ',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school.")
                }
            }
        },
        {
            type: 'list',
            name: 'nextEmployee',
            message: 'Which type of team member would you like to add? ',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        },
    ])
}


const engineerThenStatement = () => {
    engineerQuestions().then(answers => {
        let engineerObj = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        engineerObj.role = engineerObj.getRole()
        employeeData.push(engineerObj);
        if (answers.nextEmployee == "Engineer") {
            return engineerThenStatement();
        } else if (answers.nextEmployee == "Intern") {
            return internThenStatement();
        } else {
            fs.writeFile('./dist/index.html', generateHtml(employeeData), err => {
                if (err) throw err;
                console.log('Portfolio complete! Check out index.html to see the output!');
                
                fs.copyFile('./src/style.css', './dist/style.css', err => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log('Style sheet copied successfully!');
                    });
            })
        }
    })
}

const internThenStatement = () => {
    internQuestions().then(answers => {
        let internObj = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        internObj.role = internObj.getRole()
        employeeData.push(internObj);
        if (answers.nextEmployee == "Engineer") {
            return engineerThenStatement();
        } else if (answers.nextEmployee == "Intern") {
            return internThenStatement();
        } else {
            fs.writeFile('./dist/index.html', generateHtml(employeeData), err => {
                if (err) throw err;
                console.log('Portfolio complete! Check out index.html to see the output!');
                
                fs.copyFile('./src/style.css', './dist/style.css', err => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log('Style sheet copied successfully!');
                    });
            })
        }
    })
}
managerQuestions().then(answers => {
    let managerObj = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
    managerObj.role = managerObj.getRole()
    employeeData.push(managerObj);
    if (answers.nextEmployee == "Engineer") {
        return engineerThenStatement();
    } else if (answers.nextEmployee == "Intern") {
        return internThenStatement();
    } else {
        fs.writeFile('./dist/index.html', generateHtml(employeeData), err => {
            if (err) throw err;
            console.log('Portfolio complete! Check out index.html to see the output!');
            
            fs.copyFile('./src/style.css', './dist/style.css', err => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Style sheet copied successfully!');
                });
        })
    }
})