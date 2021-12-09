const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber = '') {
    super(name, id, email, role);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return { role: this.role};
  }

  getOfficeNumber() {
    return { officeNumber: this.officeNumber };
  }
};

module.exports = Manager;
