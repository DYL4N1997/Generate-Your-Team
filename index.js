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
    return inquirer
        .prompt([
        {
            name: "managersName",
            message: "Enter your managers name",
            type: "input",
            validate: (input) => {
                if (!input) {
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
            validate: (input) => {
                if (""(!input)) {
                    return "You must enter your managers name";
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
            validate: (input) => {
                if (""(!input)) {
                    return "You must enter your managers office number";
                } else {
                    return true;
                }
            },
        },
    ])



}