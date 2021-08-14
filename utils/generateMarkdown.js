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
  //Display markdown data from user
  return `
  
  # ${data.title} 
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contributing](#Contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install the dependencies, run the following: 
  ${data.installation}
  ## Usage 
  ${data.instructions}
  ## Credits 
  ${data.collaborators}
  ## Contributing
  ${data.contributors}
  ## Tests
  In order to run tests, run the following:
  ${data.tests}
  ## Questions?
  For any questions, please contact me at [${data.email}](mailto:${data.email}). 
  
  GitHub: [${data.username}](https://github.com/${data.username}) 
`;
}

module.exports = generateMarkdown;
