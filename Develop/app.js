// Load classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Load modules
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Path variables
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Load render method
const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

// Array of teammembers
const teamInfo = [];
const defaultQuestions = [{
    type: "input",
    name: "name",
    message: "Enter the team member's name: "
}, {
    type: "number",
    name: "id",
    message: "Enter the team member's Id: "
},{
    type: "input",
    name: "email",
    message: "Enter the team member's email: "
}];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

async function getTeamInfo(){
    const t_running = true;
    // While the user wants to keep running
    while(t_running){
        let t_info = {};

    }
}


async function getTeamMemberInfo(){
    let return_info;

    // Get the selected category
    let { role: t_category } = await inquirer.prompt({
        type: "list",
        name: "role",
        message: "Which category of employee do you want to add?",
        choices: ["Manager", "Engineer", "Intern"]
    });

    // Ask default employee information
    let t_info = await inquirer.prompt(defaultQuestions);

    // Gather the custom property
    let t_customProp;
    switch(t_category){
        case "Manager":
            t_customProp = "officeNumber";
            break;
        case "Engineer":
            t_customProp = "github";
            break;
        case "Intern":
            t_customProp = "school";
            break;
    }

    // Update custom property
    let { t_customProt_customValue } = await inquirer.prompt({
        type: "input",
        name: t_customProp,
        message: `What is the Employee's ${t_customProp}?`
    });
    t_info[t_customProp]

    // Construct the object
    switch(t_category){
        case "Manager":
            return_info = new Manager(t_info);
            break;
        case "Engineer":
            return_info = new Engineer(t_info);
            break;
        case "Intern":
            return_info = new Intern(t_info);
            break;
    }

    console.log(return_info);
    return return_info;
}

getTeamMemberInfo();