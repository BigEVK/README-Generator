const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none'){
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)
    `
  } 
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none'){
    return `[license](#license)
    `
  } 
  else {
    return ""
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none'){
    return ` # License
    This project is covered under ${license}
    `
  } 
  else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  # Description ${renderLicenseBadge (data.license)} 
  - ${data.description}
  # Table of Contents
  - Description
  - Installation Instructions
  - Usage Information
  - Contribution Guidlines
  - Test Instructions
  - GitHub Username
  - E-Mail 
  # Installation Instructions
  - ${data.install}
  # Usage Information
  - ${data.useInfo}
  # Contribution Guidlines
  - ${data.guidlines}
  # Test Instructions
  - ${data.testInst}
  # GitHub Username
  - ${data.gitHub}
  # E-Mail
  - ${data.email}

 ${renderLicenseSection (data.license)}
 ${renderLicenseBadge (data.license)} 
  - ${renderLicenseLink (data.license)}
   
 
`;
}

// const generateMarkdown = fileContent => {
//   return new Promise((resolve, reject) => {
//     generateMarkdown('.README.me', fileContent, err => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve({
//         ok: true,
//         message: 'README created!'
//       });
//     });
//   });
// };

module.exports = generateMarkdown;
