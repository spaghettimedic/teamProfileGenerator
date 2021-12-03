function Employee(name = '', id = '', email = '', officeNumber = '') {
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

};

module.exports = Employee;
