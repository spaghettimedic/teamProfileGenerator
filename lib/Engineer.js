const inquirer = require('inquirer');
const Employee = require('./Employee');

function Engineer() {
  this.name = name;
  this.id = id;
  this.email = email;
  this.github = github;

  this.getName = function() {
    return { name: this.name }
  };

  this.getId = function() {
    return { id: this.id }
  };

  this.getEmail = function() {
    return { email: this.email }
  };

  this.getRole = function() {
    return 'Engineer';
  }

  this.getGithub = function() {
    return { github: this.github }
  }

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
  });
};

module.exports = Engineer;
