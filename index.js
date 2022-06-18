const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

// "data" is the team arrary
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