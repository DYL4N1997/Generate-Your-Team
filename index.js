// Classes for the team
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

// Node dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// // Link to Team Generation HTML
// const createTeamHTML = require("./src/teamGenHTML");

// // Array for the team
// const teamArray = [];

function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: (input) => {
            if (!input) {
                return "you must enter your managers name";
            } else {
                return true;
            }
        },
    },
    {
        type: "input",
        message: "What is your ID?",
        name: "id",
        validate: (ID) => {
            if (isNaN(ID)) {
                return "You must enter your ID";
            } else {
                return true;
            }
        },
    },
    {
        name: "email",
        message: "Enter your email",
        type: "input",
        validate: (email) => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (!valid) {
                return "You must enter your email";
            } else {
                return true;
            }
        },
    },
    {
        type: "list",
        message: "What is your title",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    }];

    return inquirer
        .prompt(promptArray);
}


// Got here
function runInquirerManager() {
    const promptArray = [{
        type: "input",
        message: "What is your managers office number?",
        name: "officeNumber",
        validate: (managersOfficeNumber) => {
            if (isNaN(managersOfficeNumber)) {
                return "You must enter your managers office number";
            } else {
                return true;
            }
        },
    }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerEngineer() {
    const promptArray = [{
        type: "input",
        message: "What yoyour github?",
        name: "github"
    }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerIntern() {
    const promptArray = [{
        type: "input",
        message: "What school do you attend?",
        name: "school"
    }];

    return inquirer
        .prompt(promptArray);
}