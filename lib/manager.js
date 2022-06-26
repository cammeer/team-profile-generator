const employee = require("./employee");

const mquestions = [

    {
        type: 'input',
        name: 'name',
        message: "Enter manager's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter manager's employee ID number"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter manager's email"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter manager's office number"
    }

]

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'manager'
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = { manager, mquestions };