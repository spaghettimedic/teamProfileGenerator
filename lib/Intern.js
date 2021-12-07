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
};

module.exports = Intern;
