const { employee } = require("../lib/employee")

const mquestions = manager => {
    return `
    <div id="${manager.getRole()}-card" class="box card">
      <div class="box name-role manager-name">
        <h2>${manager.getName()}</h2>
        <h3>Role: ${manager.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  `
}

const equestions = engineer => {
        return `
    <div id="${engineer.getRole()}-card" class="box card">
      <div class="box name-role engineer-name">
        <h2>${engineer.getName()}</h2>
        <h3>Role: ${engineer.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          
          <li class="list-group-item">Github:
          <a href="https://www.github.com/${engineer.getGithub()}" target="_blank">www.github.com/${engineer.getGithub()}</a>
          </li>
        </ul>
      </div>
    </div>
  `
    }
    // Intern card template
const iquestions = intern => {
        return `
    <div id="${intern.getRole()}-card" class="box card">
      <div class="box name-role intern-name">
        <h2>${intern.getName()}</h2>
        <h3>Role: ${intern.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
  `
    }
    // create and combine cards
const employeesDiv = employee => {
    let employeeHtml = ''

    for (i = 0; i < employee.length; i++) {
        if (data[i].getRole() === "manager") {
            employeeHtml = employeeHtml + manager(mquestions[i])
        }
        if (data[i].getRole() === "engineer") {
            employeeHtml = employeeHtml + engineer(equestions[i])
        }
        if (data[i].getRole() === "intern") {
            employeeHtml = employeeHtml + intern(iquestions[i])
        }
    }
    return employeeHtml
}

// html boilerplate
const template = data => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>E Corp Team Site</title>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./style.css"><source src="../page-template.js" type="page-template">
      </head>
      <body>
        <header class = "container">
          <div class = "flex box justify-center my-team">
            <h1> E Corp's Evil Employees </h1>
          </div>
        </header>
        <main class = "container">
        </main>
      </body>
    </html>
  `
}

module.exports = template;