// Classes for the team
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

// Node dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// Link to Team Generation HTML
const teamGenHTML = require("./src/teamGenHTML");

// Array for the team
const teamArray = [];

const addManager = () => {
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
            name: "name",
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
            name: "id",
            message: "Enter your managers ID",
            type: "input",
            validate: (input) => {
                if (isNaN(input)) {
                    return "You must enter your managers ID";
                } else {
                    return true;
                }
            },
        },

        {
            name: "email",
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
            name: "officeNumber",
            message: "Enter your managers office number",
            type: "input",
            validate: (nameInput) => {
                if (isNaN(nameInput)) {
                    return "You must enter your managers office number";
                } else {
                    return true;
                }
            },
        },
    ])
  
    .then((managerResponses) => {
        const { name, id, email, officeNumber } = managerResponses;
        const manager = new Manager( name, id, email, officeNumber );
        
        // Push data to array
        teamArray.push(manager);
        console.log(manager);
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
                choices: ["Engineer", "Intern", "Manager"],
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
                if (isNaN(ID)) {
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

            {
                name: "github",
                message: "Enter github username",
                type: "input",
                when: (input) => input.role === "Engineer",
                validate: (github) => {
                if (!github) {
                    return "You need to enter a github username";
                } else {
                    return true;
                }
            },
            },

            {
                 name: "school",
                 message: "Enter the school",
                 type: "input",
                 when: (input) => input.role === "Intern",
                 validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("You must enter a school");
                }              
            },
            },

            {
                name: "officeNo",
                message: "Enter manager's office number",
                type: "input",
                when: (input) => input.role === "Manager",
                validate: (officeNo) => {
                if (isNaN(officeNo)) {
                    console.log("Office number required");
                return false;
                } else {
                    return true;
                }
            },
            },

            {
                name: "confirmAddEmployee",
                message: "Are there any more team members?",
                type: "confirm",
                default: false,
            },
        ])
        .then((employeeDetails) => {
        const { name, id, email, role, github, school, officeNo, confirmAddEmployee, }
        = employeeDetails;
        let employee;
        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);
        } else if (role === "Manager") {
        employee = new Manager(name, id, email, officeNo);
        }
        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

// function to generate HTML page file using file system
const writeFile = (data) => {
    fs.writeFile("./dist/meetTheTeam.html", data, (err) => {
      // if there is an error
      if (err) {
        console.log(err);
        return;
        // when the profile has been created
      } else {
        console.log( `
        -----------------------------------------------------------
        |                                                           |
        |                HTML File has been generated!              |
        |                                                           |
          ----------------------------------------------------------
        `);
        }
    })
};
  
addManager()
  .then(addEmployee)
  .then((teamArray) => {
    return teamGenHTML(teamArray);
  })
  .then(teamHTML => {
    return writeFile(teamHTML);
  })
  .catch(err => {
 console.log(err);
  });


