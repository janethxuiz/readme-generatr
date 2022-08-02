// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
https://github.com/${data.Username}/${data.Title}

## Descrption
${data.Description}

## Table of Contents
* [Installation](#installation)
* [Usage] (#usage)
* [License] (#license)
* [Contributing] (#contributio)
* [Test] (#test)
* [Questions] (#questions)

## Installation
In order to install the necessary dependencies open the terminal and run the following:
${data.install}

## Usage:
${data.usage}

## License:
${data.license}

## Contributing:
${data.contribute}

## Test:
In order to test open terminal and run the following:
${data.test}

## Questions:
If you have any questions about this project contact me at ${data.email}, or view this project at https://githubt.com/${data.github}.

`;
}

module.exports = generateMarkdown;
