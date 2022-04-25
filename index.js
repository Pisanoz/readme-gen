// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const generatemarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
	"what is the name of your project?",
	"what does your application do?",
	"Di you do any tests ",
	"Link to deployment ",
	"How do you install it? ",
	"What is the use of this application?",
	"Who contributed? ",
	"Github Link ",
	"DO you want to include an email",
	"Full name",
	"Alt names for screenshots if there are any? ",
];
const names = [
	"name",
	"description",
	"tests",
	"deployment",
	"instillation",
	"usage",
	"contribution",
	"username",
	"email",
	"fullname",
	"alttext",
];
const blankenterys = [
	"This project does not have a project name",
	"There is no description for this project",
	"There are no tests for this application",
	"This project does not have a deployed page",
	"There are no instillation guidelines for this project",
	"There are no description on how to use this application",
	"There are no contribution guidelines for this project",
	"",
	"",
	"",
	"there is no screenshot",
];

const awnserarry = [];
for (let i = 0; i < questions.length; i++) {
	awnserarry.push(
		{
			type: "input",
			message: questions[i],
			name: names[i],
			default: blankenterys[i],
		},
		{
			type: "confrim",
			message: "Do you have any screenshots to add",
			name: "screenshots",
			default: "",
		}
	);
}

// TODO: Create a function to initialize app
function init() {
	inquire
		.prompt([
			...awnserarry,
			{
				type: "list",
				message: "license to use",
				name: "license",
				choices: [
					"MIT",
					"BSD 2-Clause License",
					"BSD 3-Clause License",
					"Boost Software License",
					"The Unlicense",
					"None",
				],
			},
		])
		.then(
			fs.writeFile(ReadMe.md, generatemarkdown(data), function (err) {
				err ? console.error(err) : console.log("success!");
			})
		);
}

// Function call to initialize app
init();
