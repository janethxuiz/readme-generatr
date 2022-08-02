// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
//const utils = require("utils");
const generatorMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "Input",
        message: "What is the title of your project?",
        name: "Title"
    },
    {
        type: "Input",
        message: "What is your GitHub username",
        name: "GitHub"
    },
    {
        type: "Input",
        message: "What is your email address",
        name: "Email"
    },
    {
        type: "Input",
        message: "What is your project about?",
        name: "Description"
    },
    {
        type: "Input",
        message: "Add a Table of Contents(Optional)",
        name: "Table of Contents"
    },
    {
        type: "Input",
        message: "What dependencies are required to install your project?",
        name: "Installation"
    },
    {
        type: "Input",
        message: "Provide instructions and examples for use.",
        name: "Usage"
    },
    {
        type: "Input",
        message: "Do you have a license for your project?",
        name: "License"
    },
    {
        type: "Input",
        message: "Do you have any badges for your project? List all if any.",
        name: "Badges"
    },
    {
        type: "Input",
        message: "Who contributed to this project",
        name: "Contributing"
    },
    {
        type: "Input",
        message: "Do you have any written tests for your project? List examples if any.",
        name: "Tests"
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("True")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
