const inquirer = require('inquirer');
const Employee = require('./Employee');
const Team = require('./Team');

class Manager extends Employee {
  constructor(name, id, email, officeNumber = '') {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager';
  }

  getOfficeNumber() {
    return { officeNumber: this.officeNumber }
  }

  promptManager() {
    let role = this.getRole();
    
    inquirer.prompt({
      type: 'input',
      name: 'officeNumber',
      message: `What is the ${role}'s office phone number?`,
      validate: officeNumberInput => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log(`You must enter the ${role}'s office phone number!`);
          return false;
        }
      }
    })
    .then(function() {
      new Team().addTeamMember();
    })
  };
};

module.exports = Manager;
