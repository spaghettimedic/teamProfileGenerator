function Engineer(name = '', id = '', email = '', role = 'Engineer', github = '') {
  this.name = name;
  this.id = id;
  this.email = email;
  this.role = role;
  this.github = github;

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

  this.getGithub = function() {
    return { github: this.github }
  }
};

module.exports = Engineer;
