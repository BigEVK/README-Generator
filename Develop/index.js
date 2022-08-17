// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');




// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Title of your Project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the Title of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter any installation instructions. (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter any installation instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'useInfo',
            message: 'Please enter any usage information. (Required)',
            validate: usageInfoInput => {
                if (usageInfoInput) {
                    return true;
                } else {
                    console.log('Please enter any usage information.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'Please enter any contribution guidlines. (Required)',
            validate: guidlinesInput => {
                if (guidlinesInput) {
                    return true;
                } else {
                    console.log('Please enter any contribution guidlines.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testInst',
            message: 'Please enter any test instructions. (Required)',
            validate: testInstInput => {
                if (testInstInput) {
                    return true;
                } else {
                    console.log('Please enter any test instructions.');
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter your GitHub username. (Required)',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license type. (Required)',
            choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD", "none"]
        } 
    ])
} 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
// const generateMarkdown = fileContent => {
    
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'README created!'
        });
      });
    });
  };

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
questions()
    .then(answers => {
        console.log(answers)
        return writeToFile("readme.md",generateMarkdown(answers));
    })
    // .then(pageIndex => {console.log(pageIndex);
    //     return writeToFile("readme.md",generateMarkdown(pageIndex));
    // })
    .catch(err => {
        console.log(err);
    });
