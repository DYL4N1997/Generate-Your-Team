// Classes for the team
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// Node dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// Link to Team Generation HTML
const createTeamHTML = require("./src/teamGenHTML");

// Array for the team
const teamArray = [];

const managerInfo = () => {
    console.log( `
     -----------------------------------------------------------
    |                                                           |
    |                Time to build your team!                   |
    |                                                           |
      ----------------------------------------------------------
    `);
    return inquirer
        .prompt([
        {
            name: "managersName",
            message: "Enter your managers name",
            type: "input",
            validate: (managersName) => {
                if (""(managersName)) {
                    return "You must enter your managers name";
                } else {
                    return true;
                }
            },
        },
        
        {
            name: "managersID",
            message: "Enter your managers ID",
            type: "input",
            validate: (managersID) => {
                if (""(managersID)) {
                    return "You must enter your managers ID";
                } else {
                    return true;
                }
            },
        },

        {
            name: "managersEmail",
            message: "Enter your managers email",
            type: "input",
            validate: (email) => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (!valid) {
                    return "You must enter your managers email";
                } else {
                    return true;
                }
            },
        },

        {
            name: "managersOfficeNumber",
            message: "Enter your managers office number",
            type: "input",
            validate: (managersOfficeNumber) => {
                if (""(managersOfficeNumber)) {
                    return "You must enter your managers office number";
                } else {
                    return true;
                }
            },
        },
    ])
  
    .then((managerResponses) => {
        const { managersName, managersID, managersEmail, managersOfficeNumber} = managerResponses;
        const manager = new Manager( managersName, managersID, managersEmail, managersOfficeNumber);
        
        // Push data to array
        teamArray.push(manager);
        });
};

// Add employee after manager
const addEmployee = () => {
    console.log( `
     -----------------------------------------------------------
    |                                                           |
    |                      Add an Employee!                     |
    |                                                           |
      ----------------------------------------------------------
    `);
    return inquirer
        .prompt([
            {
                name: "role",
                message: "Input the employee's role",
                type: "list",
                choices: ["Manager", "Engineer", "Intern"],
            },
            {
                name: "name",
                message: "What is the employee's name?",
                type: "input",
                validate: (name) => {
                if (name) {
                    return true;
                } else {
                    console.log("Input the employee's name");
                    return false;
                }
            },
            },
            
            {
                name: "id",
                message: "Input the employee's ID.",
                type: "input",
                validate: (ID) => {
                if (""(ID)) {
                    console.log("You must enter the employee's ID");
                    return false;
                } else {
                    return true;
                }
            },
            },
            
            {
                name: "email",
                essage: "Input the employee's email.",
                type: "input",
                validate: (email) => {
                email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (email) {
                    return true;
                } else {
                    console.log("You must enter an email");
                    return false;
                }
            },
            },


        ])
}