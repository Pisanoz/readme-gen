// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generatemarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// const questions = [
// 	"what is the name of your project?",
// 	"what does your application do?",
// 	"Did you do any tests",
// 	"What is the use of this application?",
// 	"Who contributed?",
// 	"Git hub User Name",
// 	"What is your email address? ",
// 	"Full name",
// ];
// const names = [
// 	"name",
// 	"description",
// 	"tests",
// 	"usage",
// 	"contribution",
// 	"GitHubUser",
// 	"email",
// 	"fullname",
// ];

// const awnserarry = [];
// for (let i = 0; i < questions.length; i++) {
// 	awnserarry.push({
// 		type: "input",
// 		message: questions[i],
// 		name: names[i],
// 	});
// }
const questions = [
	{
		type:'input', 
		name: 'title', 
		message: 'What is the name of your project?'
	}, 
	{
		type:'input', 
		name: 'description', 
		message: 'what does your application do?'
	},
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
	{
		type:'input', 
		name: 'installation', 
		message: 'Please provide your installation instructions?',
		default: 'npm install or npm i'
	},
	{
		type:'input', 
		name: 'test', 
		message: 'Please provide your test instructions?',
		default: 'npm run test'
	},
	{
		type:'input', 
		name: 'usage', 
		message: 'What is the use of this application?'
	},
	{
		type:'input', 
		name: 'contribution', 
		message: 'What should people know about contributing/cloning your code?'
	},
	{
		type:'input', 
		name: 'github', 
		message: 'What is your github username?'
	},
	{
		type:'input', 
		name: 'email', 
		message: 'What is your email?'
	},
]

// TODO: Create a function to initialize app
function init() {
	inquirer
		.prompt(questions)
		.then( (data) => {
			fs.writeFile("README.md", generatemarkdown(data), 
			function (err) {
				err ? console.error(err) : console.log("success!");
			});
		});
}

// Function call to initialize app
init();
