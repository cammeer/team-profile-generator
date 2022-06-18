const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');