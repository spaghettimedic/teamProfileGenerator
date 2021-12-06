const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school = '') {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return 'Intern';
  }

  getSchool() {
    return { school: this.school }
  }

  promptIntern() {
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
    })
    .then(function() {
      new Team().addTeamMember();
    })
  };
};

module.exports = Intern;
