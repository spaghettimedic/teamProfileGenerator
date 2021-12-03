function Intern(name = '', id = '', email = '', school = '') {
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
};

module.exports = Intern;
