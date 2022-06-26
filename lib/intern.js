const employee = require("./employee");

const iquestions = [

    {
        type: 'input',
        name: 'name',
        message: "Enter the intern's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the intern's employee ID number"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email"
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter name of the intern's school"
    }

]

class intern extends employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'intern';
    }

}

module.exports = { intern, iquestions };