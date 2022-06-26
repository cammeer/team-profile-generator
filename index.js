const inquirer = require('inquirer')
const template = require('./src/page-template')
const writeFile = require('./utils/writeHTML')

// employee questions
const { manager, mquestions } = require('./lib/manager');
const { engineer, equestions } = require('./lib/engineer');
const { intern, iquestions } = require('./lib/intern');

// array for all data objects
const data = []

const init = () => { managerQuestions() }
    // creates the manager
const managerQuestions = () => {
        inquirer.prompt(mquestions)
            .then((answers) => {
                answers = new manager(answers.name, answers.id, answers.email, answers.officeNumber)
                data.push(answers);
                return employeePrompt();
            })
    }
    // creates the engineer
const engineerQuestions = () => {
        inquirer.prompt(equestions)
            .then((answers) => {
                answers = new engineer(answers.name, answers.id, answers.email, answers.github)
                data.push(answers);
                return employeePrompt();
            })
    }
    // creates the intern
const internQuestions = () => {
        inquirer.prompt(iquestions)
            .then((answers) => {
                answers = new intern(answers.name, answers.id, answers.email, answers.school)
                data.push(answers);
                return employeePrompt();
            })
    }
    // employee options
const employeePrompt = () => {
    inquirer.prompt([{
            type: 'list',
            name: 'employeeType',
            message: "Use the arrow keys and press Enter to select an employee role to add to your site",
            choices: [
                { name: 'engineer', value: "addEngineer" },
                { name: 'intern', value: "addIntern" },
                { name: 'DONE', value: "done" }
            ]
        }])
        .then(answer => {
            // returns specific employee questions
            if (answer.employeeType === 'addEngineer') { engineerQuestions(); };
            if (answer.employeeType === 'addIntern') { internQuestions(); };
            if (answer.employeeType === 'done') {
                //need var for data going into HTML template
                let html = template(data)

                //writes HTML file
                writeFile(html);
            }
        })
}

init();