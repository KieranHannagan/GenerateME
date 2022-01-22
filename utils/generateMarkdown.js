// License badge based on which license is passed in
function renderLicenseBadge(licenseChoices) {
  var licenseBadges = [];

  if (licenseChoices.includes('MIT')) {
    licenseBadges.push('![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)')

  }
  if (licenseChoices.includes('Mozilla')) {
    licenseBadges.push('![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)')

  }
  if (licenseChoices.includes('Apache')) {
    licenseBadges.push('![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)')

  }
  if (licenseChoices.includes('Boost')) {
    licenseBadges.push('![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)')

  }
  if (licenseChoices.includes('CCO')) {
    licenseBadges.push('![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)')

  }
  if (licenseChoices.includes('Eclipse')) {
    licenseBadges.push('![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)')

  }
  if (licenseChoices.includes('GNU GPL v3')) {
    licenseBadges.push('![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)')

  }
  if (licenseChoices.includes('GNU GPL v2')) {
    licenseBadges.push('![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)')

  }
  if (licenseChoices.includes('IBM')) {
    licenseBadges.push('![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)')

  }
  if (licenseChoices.includes('Perl')) {
    licenseBadges.push('![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)')

  }
  if (licenseChoices.includes('WTFPL')) {
    licenseBadges.push('![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)')

  }
  licenseBadges = licenseBadges.join(' ');
  return licenseBadges
};

// license links
function renderLicenseLink(licenseChoices) {
  var licenseLinks = [];

  if (licenseChoices.includes('MIT')) {
    licenseLinks.push('https://opensource.org/licenses/MIT')
  }
  if (licenseChoices.includes('Mozilla')) {
    licenseLinks.push('https://opensource.org/licenses/MPL-2.0')
  }
  if (licenseChoices.includes('Apache')) {
    licenseLinks.push('https://opensource.org/licenses/Apache-2.0')
  }
  if (licenseChoices.includes('Boost')) {
    licenseLinks.push('https://www.boost.org/LICENSE_1_0.txt')

  }
  if (licenseChoices.includes('CCO')) {
    licenseLinks.push('http://creativecommons.org/publicdomain/zero/1.0/')

  }
  if (licenseChoices.includes('Eclipse')) {
    licenseLinks.push('https://opensource.org/licenses/EPL-1.0')

  }
  if (licenseChoices.includes('GNU GPL v3')) {
    licenseLinks.push('https://www.gnu.org/licenses/gpl-3.0')

  }
  if (licenseChoices.includes('GNU GPL v2')) {
    licenseLinks.push('https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html')

  }
  if (licenseChoices.includes('IBM')) {
    licenseLinks.push('https://opensource.org/licenses/IPL-1.0')

  }
  if (licenseChoices.includes('Perl')) {
    licenseLinks.push('https://opensource.org/licenses/Artistic-2.0')

  }
  if (licenseChoices.includes('WTFPL')) {
    licenseLinks.push('http://www.wtfpl.net/about/')

  }
  licenseLinks = licenseLinks.join(', ');
  return licenseLinks;
};

// license section of README
// ! If there is no license, return an empty string
function renderLicenseSection(licenseChoices) {
  // retrieving links and badges though badge and link rendering functions
  var licenseBadges = renderLicenseBadge(licenseChoices);
  var licenseLinks = renderLicenseLink(licenseChoices);

  let licenseSection;

  // if the user chose none, leave the section empty 
  if (licenseChoices.length === 0) {
    licenseSection = '';
  } else {
    licenseSection = `### Badges
  ${licenseBadges}
  ### Links to licenses
  ${licenseLinks}`
  }
  return licenseSection;
};

// Function to format and check if the user adds Contribution and Testing  
function optionalsChecker(contribution, tests) {
  var optionals = '';
  if (contribution && !(tests)) { // only contribution
    optionals =
      `## Contributing
  ${contribution}`
  } else if (!(contribution) && tests) { // only tests
    optionals =
      `## Tests 
  ${tests}`
  } else if (contribution && tests) { // both
    optionals =
      `## Tests 
  ${tests}
  
  ## Contributing
  ${contribution}`
  }

  return optionals;
};

// Function to generate markdown for README
function generateMarkdown(answers, optionals, licenseSection) {
  return `# ${answers.title}
          
  ## Description
  ${answers.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Test](#tests)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [GitHub](#github)
  * [Email](#email)
  
  ## Installation 
  ${answers.installInstructions}
  
  ## Usage 
  ${answers.usageInfo}
  
  ## License
  ${licenseSection}

  ${optionals}

  ## Questions
  If you have any questions, feel free to reach out and contact me via email.
  ### Email
  ${answers.email}
  ### GitHub
  www.github.com/${answers.github}
  

  `;
};

module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection, optionalsChecker };
