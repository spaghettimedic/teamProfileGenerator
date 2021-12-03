function Employee(name = '', id = '', email = '', role = '') {
  this.name = name;
  this.id = id;
  this.email = email;
  this.role = role;

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
    return { role: this.role }
  }
};

module.exports = Employee;
