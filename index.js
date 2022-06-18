// const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');


const questions = [{
        type: "input",
        name: "createTeam",
        message: "Let's create your team! Enter employee info to create cards and render an HTML page. Press Enter to Begin."
    },
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email address?"
    },
    {
        type: "list",
        message: "Select team member's role by using the down arrow and pressing Enter",
        name: "role",
        choices: ["Manager", "Engineer", "Intern", "Employee"]
    },

];

// Function to initialize app
function init() {
    inquirer.prompt(questions)
}
// Function call to initialize app
init();



// "data" is the team arrary (re: ryan)

// const generateCards = (data) =>{
//     data.forEach((employee)=>{
//       let role = employee.getRole()
//       if(role ==="Manager"){
//           const managerCard = generateManager(employee);
//           cardArr.push(managerCard);
//       }
//       if(role ==="Engineer"){
//           const engineerCard = generateEngineer(employee);
//           cardArr.push(engineerCard);
//       }
//       if(role === "Intern"){
//           const internCard = generateIntern(employee);
//           cardArr.push(internCard);
//       }
//     })
//     let cardStr = cardArr.join("");
//     const renderPage = renderHTML(cardStr);
//     return renderPage
// };