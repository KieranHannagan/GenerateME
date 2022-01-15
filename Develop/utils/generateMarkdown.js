// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers, optionals) {
  return `# ${answers.title}
          
  ## Description
  ${answers.description}
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#tests)
  * [License](#license)
  * [GitHub](#github)
  * [Email](#email)
  * [Credits](#credits)
  
  ## Installation 
  ${answers.installInstructions}
  
  ## Usage 
  ${answers.usageInfo}
  
  ## License
  ${answers.license}
  
  ## GitHub
  ${answers.github}
  
  ## Email
  ${answers.email}
  
  ${optionals}
  `;
  // optionals consists of the Testing and Contribution sections
}

// Function to format and check if the user adds Contribution and Testing  
function optionalsChecker(contribution, tests) {
  var optionals = '';
  if (contribution && !(tests)) { // only contribution
      optionals = 
      `## Contributing
  ${contribution}`
  } else if (!(contribution) && tests) { // only tests
      optionals = 
      `## tests 
  ${tests}`
  } else if (contribution && tests) { // both
      optionals = 
      `## tests 
  ${tests}
  
  ## Contributing
  ${contribution}` 
  }

  return optionals;
};


module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection, optionalsChecker };
