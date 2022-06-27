const fs = require('fs');
const { filterByQuery, findById, createNewEmployee, validateEmployee } = require('../lib/employee.js');
const { employee } = require('../data/employee');

jest.mock('fs');

//jest installed but tests incomplete