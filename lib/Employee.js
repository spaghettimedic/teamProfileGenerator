const inquirer = require('inquirer');

class Employee {
  constructor(name = '', id = '', email = '') {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return { name: this.name }
  };

  getId() {
    return { id: this.id }
  };

  getEmail() {
    return { email: this.email }
  };

  getRole() {
    return 'Employee';
  };
  
  promptEmployee(role) {
    if (!role) {
      role = this.getRole();
    }

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
