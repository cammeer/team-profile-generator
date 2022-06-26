const employee = require("./employee");

const equestions = [

    {
        type: 'input',
        name: 'name',
        message: "Enter the engineer's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's employee ID number"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email"
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the engineer's Github username"
    }

]
class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'engineer';
    }
    getGithub() {
        return this.github;
    }

}

module.exports = { engineer, equestions };