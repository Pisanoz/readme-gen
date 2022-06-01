// TODO: Create a function that returns a license badge based on which license is passed in

// renders the badges for the license
function renderLicenseBadge(license) {
	// if (license == "MIT") {
	// 	return `[![PyPi license](https://badgen.net/pypi/license/pip/)](https://pypi.com/project/pip/)`;
	// } else if (license == "BSD 2-Clause License") {
	// } else if (license == "BSD 3-Clause License") {
	// 	return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
	// } else if (license == "Boost Software License") {
	// 	return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
	// } else if (license == "The Unlicense") {
	// 	return `[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)`;
	if (license === "None") {
		return " ";
	}
	return `![License](https://img.shields.io/badge/License-${license}-orange.svg)`;
}

// TODO: Create a function that returns the license link
//link to the license page

function renderLicenseLink(license) {
	if (license == "none") {
		return " ";
	} 
	return `* [License](#license)`
}

function renderLicenseSection(license) {
	if (license === "None") {
		return " ";
	}
	return `## License
	
	
	This project is covered under the ${license} license`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#Usage)
${renderLicenseLink(data.license)}
* [Contribution](#Contribution)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation

${data.installation}

## Usage 

${data.usage}

${renderLicenseSection(data.license)}

## Tests

${data.test}

## Contribution

${data.contribution}

## Questions

If you have any questions:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
