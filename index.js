const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./utils/generate-site.js');

const data = [];

// Add manager
const promptUser = [{
        name: 'role',
        type: 'confirm',
        message: 'This application will generate an HTML page for your team. Are you ready to get started?',
    },
    {
        name: 'name',
        type: 'input',
        message: 'Enter manager name'
    },
    {
        name: 'id',
        type: 'input',
        message: 'Enter employee ID #'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter email address'
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'Enter office number'
    },
    {
        name: 'addEmployee',
        type: 'list',
        choices: ['Add engineer', 'Add intern', 'Add manager', 'DONE. Generate HTML'],
        message: 'Add employee or choose DONE',
    },
];

// Add new engineer
const addEngineer = [{
        name: 'name',
        type: 'input',
        message: "Enter engineer name"
    },
    {
        name: 'id',
        type: 'input',
        message: "Enter engineer employee ID #"
    },
    {
        name: 'email',
        type: 'input',
        message: "Enter engineer email"
    },
    {
        name: 'github',
        type: 'input',
        message: "Enter engineer Github username"
    },
    {
        name: 'addEmployee',
        type: 'list',
        choices: ['Add engineer', 'Add intern', 'Add manager', 'Done. Generate HTML'],
        message: 'Add employee or choose DONE',
    },
];

// Add intern
const addIntern = [{
        name: 'name',
        type: 'input',
        message: "Enter intern name"
    },
    {
        name: 'id',
        type: 'input',
        message: "Enter intern employee ID #"
    },
    {
        name: 'email',
        type: 'input',
        message: "Enter intern email"
    },
    {
        name: 'school',
        type: 'input',
        message: "Enter intern school"
    },
    {
        name: 'addEmployee',
        type: 'list',
        choices: ['Add engineer', 'Add intern', 'Add manager', 'Done. Generate HTML'],
        message: 'Add employee or choose DONE',
    },
];

// start app
ask(promptUser);

// Cycle through questions if member needs to be added
function ask(questionArr) {
    inquirer
        .prompt(questionArr)
        .then((member) => {
            data.push(member);

            if (member.addEmployee === 'Add engineer') {
                ask(addEngineer);
            } else if (member.addEmployee === 'Add intern') {
                ask(addIntern);
            } else {
                generateCards(data);
            }
        })
        .catch((err) => console.log(err));
}

// function engineerHTML (data) {
//     return `

// //html for the actual card (3 different cards)

// ${data.name}

//     `
// }

//THE END (from TAs)

const generateCards = (data) => {
    // data.forEach((employee) => {
    //     let role = employee.getRole()
    //     if (role === "Manager") {
    //         const managerCard = generateManager(employee);
    //         cardArr.push(managerCard);
    //     }
    //     if (role === "Engineer") {
    //         const engineerCard = generateEngineer(employee);
    //         cardArr.push(engineerCard);
    //     }
    //     if (role === "Intern") {
    //         const internCard = generateIntern(employee);
    //         cardArr.push(internCard);
    //     }
    // })
    // let cardStr = cardArr.join("");
    const renderPage = renderHTML(cardStr);
    return renderPage
};



// promptUser()
//     .then(promptProject)
//     .then(portfolioData => {
//         return generatePage(portfolioData);
//     })
//     .then(pageHTML => {
//         return writeFile(pageHTML);
//     })
//     .then(writeFileResponse => {
//         console.log(writeFileResponse);
//         return copyFile();
//     })
//     .then(copyFileResponse => {
//         console.log(copyFileResponse);
//     })
//     .catch(err => {
//         console.log(err);
//     });