const inquirer = require('inquirer');

function Employee() {
  this.name = name;
  this.id = id;
  this.email = email;

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
    return 'Employee';
  }
  
  Employee.prototype.promptEmployee = function(role) {
    role = this.getRole();

    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: `What is the ${role}'s name?`,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`${role}'s name is required!`);
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: `What is the ${role}'s ID number?`,
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log(`You must enter the ${role}'s ID number!`);
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: `What is the ${role}'s email address? (Required)`,
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log(`You must enter the ${role}'s email address!`);
            return false;
          }
        }
      }
    ]);
  };
};

module.exports = Employee;
