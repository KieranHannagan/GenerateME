// Requiring packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown } = require('./utils/generateMarkdown');

// Function to format and check if the user chooses to add contribution and tests  
var optionalsChecker = function (option1, option2) {
    var optionals = '';
    if (option1 && !(option2)) {
        optionals = `## Contributing
${option1}`
    } else if (!(option1) && option2) {
        optionals = `## Tests
${option2}`
    } else if (option1 && option2) {
        optionals = `## Tests
${option2}

## Contributing
${option1}`
    }

    return optionals;
};

//  Questions for user input
const questions = inquirer.prompt(
    [
        {
            // Title input
            type: 'input',
            message: 'What is the title of your file?',
            name: 'title',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please enter a title";
                }
            }
        },
        {
            // File description
            type: 'input',
            message: 'Please give the file a description:',
            name: 'description',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please enter a description";
                }
            }
        },
        {
            // Installation instruction
            type: 'input',
            message: 'please provide installation instructions:',
            name: 'installInstructions',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please enter the installation instructions";
                }
            }
        },
        {
            // Usage info
            type: 'input',
            message: 'Please provide usage information:',
            name: 'usageInfo',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please enter the usage information:";
                }
            }
        },
        {
            // Contribution guidelines
            type: 'confirm',
            message: 'Would you like to add contribution guidelines?',
            name: 'confirmContributionGuidelines',
            default: false
        },
        {
            // If confirmed the contribution guidelines
            type: 'input',
            message: 'Please provide contribution guidelines:',
            name: 'contributionGuidelines',
            when: ({ confirmContributionGuidelines }) => confirmContributionGuidelines,
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please enter the contribution guidelines:";
                }
            }
        },
        {
            // Test instructions
            type: 'confirm',
            message: 'Would you like to add test instructions?',
            name: 'confirmTestInstructions',
            default: false
        },
        {
            // If confirmed the test instructions
            type: 'input',
            message: 'Please provide test instructions:',
            name: 'testInstructions',
            when: ({ confirmTestInstructions }) => confirmTestInstructions,
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please enter the test instructions:";
                }
            }
        },
        {
            // Choose your license
            type: 'checkbox',
            name: 'license',
            message: 'Please choose your license',
            choices: ['this one', 'that one', 'the third one']
        },
        {
            // GitHub username
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            // Email input
            type: 'input',
            message: 'Please enter an email for your README file',
            name: 'email',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please enter an email";
                }
            }
        },
    ]).then(answers => {

        //checking if the user chose to add contribution and tests
        const optionals = optionalsChecker(answers.contributionGuidelines, answers.testInstructions);

        //template for readme file
        const template =
            `# ${answers.title}
            
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
`
        console.log(template);
        writeToFile(answers.title,template);
    }
    );


// function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data, (err)=>{
        if(err) {
            console.log(err);
        }
        console.log('Success! Your README.md has been generated.');
    })
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
