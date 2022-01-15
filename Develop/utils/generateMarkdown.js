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
}

// Function to format and check if the user chooses to add contribution and tests  
function optionalsChecker(option1, option2) {
  var optionals = '';
  if (option1 && !(option2)) { //only 1
      optionals = 
      `## Contributing
  ${option1}`
  } else if (!(option1) && option2) { //only 2
      optionals = 
      `## Tests 
  ${option2}`
  } else if (option1 && option2) { //both
      optionals = 
      `## Tests 
  ${option2}
  
  ## Contributing
  ${option1}` 
  }

  return optionals;
};


module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection, optionalsChecker };
