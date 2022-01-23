// Import classes
const Manager = require('./Manager.js')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

// Import npm packages
const inquirer = require("inquirer");
const fs = require("fs");

// Import modular functions
const {generateHtml} = require('../htmlTemplate');
const {generateEmployeeCard} = require('../cardGenerator');

// Array to hold html code for employess
let company = [];

class Generator {
    constructor() {

    }

    // Runs program
    run() {
        inquirer 
        // Ask them for manager info
        .prompt([
            // Prompt the user for the data
            {
                type: "input",
                name: "manager",
                message: "What is the name of the manager?"
            },
            {
                type: "input",
                name: "employeeId",
                message: "What is the employee ID of the manager?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the email of the manager?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the office number of the manager?"
            },

        ]) 
        // Then create and store an object for the Manager
        .then((data) => {
            const manager = new Manager (data.manager, data.employeeId, data.email, data.officeNumber);
            company.push(generateEmployeeCard(manager));
            this.addEmployee();
        })
    }
        
        // Then ask what they would like to do next
    addEmployee() {
        inquirer
        .prompt([
            {
                type: "list",
                name: "nextMove",
                choices: ["Add Engineer", "Add Intern", "Quit"],
                message: "What would you like to do next?"
            },
        ])
        .then((data) => {
            if (data.nextMove === "Add Engineer"){
                inquirer 
                // Ask them for Engineer info
                .prompt([
                    // Prompt the user for the data
                    {
                        type: "input",
                        name: "engineer",
                        message: "What is the name of the engineer?"
                    },
                    {
                        type: "input",
                        name: "employeeId",
                        message: "What is the employee ID of the engineer?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the email of the engineer?"
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is the Github username of the engineer?"
                    },
        
                ]) 
                // Then create and store an object for the Manager
                .then((data) => {
                    const engineer = new Engineer (data.engineer, data.employeeId, data.email, data.github);
                    company.push(generateEmployeeCard(engineer));
                    this.addEmployee();
                })
            } else if (data.nextMove === "Add Intern"){
                inquirer 
                // Ask them for Intern info
                .prompt([
                    // Prompt the user for the data
                    {
                        type: "input",
                        name: "intern",
                        message: "What is the name of the intern?"
                    },
                    {
                        type: "input",
                        name: "employeeId",
                        message: "What is the employee ID of the intern?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the email of the intern?"
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "What school does the intern attend?"
                    },
        
                ]) 
                // Then create and store an object for the Manager
                .then((data) => {
                    const intern = new Intern (data.intern, data.employeeId, data.email, data.school);
                    company.push(generateEmployeeCard(intern));
                    this.addEmployee();
                })
            } else {
                // Then write html file by sending company array to generateHtml function and saving the html file in the dist directory
                fs.writeFile("./dist/index.html", generateHtml(company), (err) =>
                err ? console.error(err) : console.log('Success!')
                );
            }
        })
    }

}

// Export generator to index.js
module.exports = Generator;