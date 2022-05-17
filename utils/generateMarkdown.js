// TODO: Create a function that returns a license badge based on which license is passed in

// renders the badges for the license
function renderLicenseBadge(license) {
	if (license == "MIT") {
		return `[![PyPi license](https://badgen.net/pypi/license/pip/)](https://pypi.com/project/pip/)`;
	} else if (license == "BSD 2-Clause License") {
		return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
	} else if (license == "BSD 3-Clause License") {
		return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
	} else if (license == "Boost Software License") {
		return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
	} else if (license == "The Unlicense") {
		return `[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)`;
	} else if (license == "None") {
		return " ";
	}
}

// TODO: Create a function that returns the license link
//link to the license page

function renderLicenseLink(license) {
	if (license == "none") {
		return " ";
	} else if (license == "MIT") {
		return "https://mit-license.org/";
	} else if (license == "BSD 2") {
		return `https://opensource.org/licenses/BSD-2-Clause`;
	} else if (license == "BSD 3") {
		return `https://opensource.org/licenses/BSD-3-Clause`;
	} else if (license == "Boost Software") {
		return `https://www.boost.org/users/license.html`;
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.name}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#Description)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [Questions](#Questions)
* [Deployment](#Deployment)

## Description 
${data.description}
## Usage 
${data.usage}
## Tests
${data.tests}
## Contribution
${data.contribution}
## Questions
If you have any questions:
  - GitHub [${data.GitHubUser}](https://github.com/${data.GitHubUser})
  - Email ${data.email}

${renderLicenseLink(data.license)}
${renderLicenseSection(data.license, username)}
`;
}

module.exports = generateMarkdown;
