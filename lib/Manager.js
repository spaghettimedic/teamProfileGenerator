const inquirer = require('inquirer');
const Employee = require('./Employee');

function Manager() {
  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNumber = officeNumber;

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
    return 'Manager';
  }

  this.getOfficeNumber = function() {
    return { officeNumber: this.officeNumber }
  }

  Manager.prototype.promptManager = function() {
    role = this.getRole();

    console.log(`
    ========================================
    Let's start with the team Manager's info
    ========================================
    `);
    
    
    
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
    });
  };
};

module.exports = Manager;
