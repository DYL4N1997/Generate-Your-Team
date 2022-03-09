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

