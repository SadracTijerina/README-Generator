// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project Title: ",
    name: "title",
  },
  {
    type: "input",
    message: "Description of project: ",
    name: "description",
  },
  {
    type: "input",
    message: "Step by step of project installation: ",
    name: "installation",
  },
  {
    type: "input",
    message: "Instructions and examples for use ",
    name: "instructions",
  },
  {
    type: "input",
    message: "Collaboirators if any: ",
    name: "collaborators",
  },
  {
    type: "list",
    message: "Which license does your project have: ",
    name: "license",
    choices: [
      "MIT",
      "Apache 2.0",
      "GNU v3",
      "Mozilla Public License 2.0",
      "BSD 3-Clause",
    ],
  },
  {
    type: "input",
    message: "Guidlines for other developers to contribute: ",
    name: "contributors",
  },
  {
    type: "input",
    message: "Test for your application: ",
    name: "tests",
  },
  {
    type: "input",
    message: "Github username: ",
    name: "username",
  },
  {
    type: "input",
    message: "Email Address: ",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("README created");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("./utils/README.MD", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
