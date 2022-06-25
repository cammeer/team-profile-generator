const inquirer = require('inquirer')
const template = require('./src/page-template')
const writeFile = require('./src/write-file')

// employee questions
const { Manager, managerQuestionsArr } = require('./lib/manager');
const { Engineer, engineerQuestionsArr } = require('./lib/engineer');
const { Intern, internQuestionsArr } = require('./lib/intern');

// array for all data objects
const data = []

const init = () => { managerQuestions() }
    // prompts manager questions then creates object from user inputs based on Manager class 
const managerQuestions = () => {
        inquirer.prompt(managerQuestionsArr)
            .then((answers) => {
                answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
                data.push(answers);
                return employeePrompt();
            })
    }
    // prompts engineer questions then creates object from user inputs based on Engineer class 
const engineerQuestions = () => {
        inquirer.prompt(engineerQuestionsArr)
            .then((answers) => {
                answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
                data.push(answers);
                return employeePrompt();
            })
    }
    // prompts intern questions then creates object from user inputs based on Intern class 
const internQuestions = () => {
        inquirer.prompt(internQuestionsArr)
            .then((answers) => {
                answers = new Intern(answers.name, answers.id, answers.email, answers.school)
                data.push(answers);
                return employeePrompt();
            })
    }
    // handles prompts
const employeePrompt = () => {
    inquirer.prompt([{
            type: 'list',
            name: 'employeeType',
            message: "What kind of team member would you like to add?",
            choices: [
                { name: 'Engineer', value: "addEngineer" },
                { name: 'Intern', value: "addIntern" },
                { name: 'DONE', value: "done" }
            ]
        }])
        .then(answer => {
            // sends correct prompts based on the employee type
            if (answer.employeeType === 'addEngineer') { engineerQuestions(); };
            if (answer.employeeType === 'addIntern') { internQuestions(); };
            if (answer.employeeType === 'done') {
                // converts users inputs into HTML
                let html = template(employeesArr)
                console.log('...');
                // creates HTML file
                writeFile(html);
            }
        })
}

init();