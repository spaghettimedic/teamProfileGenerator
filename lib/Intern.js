const inquirer = require('inquirer');
const Employee= require('./Employee');

function Intern() {
  this.name = name;
  this.id = id;
  this.email = email;
  this.school = school;

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
    return 'Intern';
  }

  this.getSchool = function() {
    return { school: this.school }
  }

  inquirer.prompt({
  
    type: 'input',
    name: 'school',
    message: "What is the Intern's school?",
    validate: schoolInput => {
      if (schoolInput) {
        return true;
      } else {
        console.log("You must enter the Intern's school!");
        return false;
      }
    }
  });
};

module.exports = Intern;
