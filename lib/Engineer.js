const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github = '') {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return 'Engineer';
  }

  getGithub() {
    return { github: this.github }
  }

  promptEngineer() {
    inquirer.prompt({
      type: 'input',
      name: 'github',
      message: "What is the Engineer's GitHub username?",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("You must enter the Engineer's GitHub username!");
          return false;
        }
      }
    })
    .then(function() {
      new Team().addTeamMember();
    })
  };
};

module.exports = Engineer;
