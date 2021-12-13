const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, role, school = '') {
    super(name, id, email, role);
    this.school = school;
  }

  getRole() {
    return { role: this.role };
  }

  getSchool() {
    return { school: this.school };
  }
};

module.exports = Intern;
