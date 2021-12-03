function Employee(name = '', id = '', email = '') {
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

};

module.exports = Employee;
