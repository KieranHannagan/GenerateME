// Requiring packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {renderLicenseSection, generateMarkdown, optionalsChecker } = require('./utils/generateMarkdown');


//  Questions for user input
var questions = [
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
        message: 'Please provide installation instructions:',
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
        choices: ['MIT', 'Mozilla', 'Apache', 'Boost', 'CCO', 'Eclipse', 'GNU GPL v3', 'GNU GPL v2', 'IBM', 'Perl', 'WTFPL']
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
];

inquirer.prompt(questions).then(answers => {

    //checking if the user chose to add contribution and tests
    const optionals = optionalsChecker(answers.contributionGuidelines, answers.testInstructions);

    // generate license section
    const licenseSection = renderLicenseSection(answers.license);

    //template for readme file
    const template = generateMarkdown(answers, optionals, licenseSection);

    console.log(template);
    writeToFile(template);
}
);

// takes in the template to write README file
function writeToFile(data) {
    fs.writeFile(`README.md`, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Success! Your README.md has been generated.');
    })
};

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

