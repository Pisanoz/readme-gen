// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generatemarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
	"what is the name of your project?",
	"what does your application do?",
	"Did you do any tests",
	"What is the use of this application?",
	"Who contributed?",
	"Git hub User Name",
	"Full name",
];
const names = [
	"name",
	"description",
	"tests",
	"usage",
	"contribution",
	"GitHubUser",
	"fullname",
];

const awnserarry = [];
for (let i = 0; i < questions.length; i++) {
	awnserarry.push({
		type: "input",
		message: questions[i],
		name: names[i],
	});
}

// TODO: Create a function to initialize app
function init() {
	inquirer
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
		.then( (data) => {
			fs.writeFile("ReadMe.md", generatemarkdown(data), 
			function (err) {
				err ? console.error(err) : console.log("success!");
			});
		});
}

// Function call to initialize app
init();
