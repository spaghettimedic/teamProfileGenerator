const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function generateHTML(teamData) {
  console.log(teamData);
};

function Team() {
  this.teamData = [];
  this.employee;

  Team.prototype.initializeUser = function() {
    console.log(`
    ========================
    Create your team's page!
    ========================
    `);
  
    return inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmTeamName',
        message: 'Would you like to include a team name with this team profile?',
        default: false
      },
      {
        type: 'input',
        name: 'teamName',
        message: "What is your team's name?",
        when: ({ confirmTeamName }) => {
          if (confirmTeamName) {
            return true;
          }
          return false;
        }
      },
    ])
    .then(({ teamName }) => {
      // do something with teamName
      this.teamMemberType();
    })
  };

  Team.prototype.teamMemberType = function() {

    return inquirer.prompt(
      {
        type: 'list',
        name: 'role',
        message: "Select what type of employee you'd like to add to your team:",
        choices: [ 'Manager', 'Engineer', 'Intern', 'I do not need to add more team members' ]
      }
    )
    .then(({ role }) => {
      if (role === 'I do not need to add more team members') {
        return generateHTML(teamData);
      };
      this.addTeamMember(role);
    })
  }
  
  Team.prototype.addTeamMember = function(role) {

    return inquirer.prompt([
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
    ])
    .then(({ name, id, email }) => {
      this.teamData.push(new Manager(name, id, email));
      console.log(this.teamData);
      if (role === 'Manager') {
        return inquirer.prompt({
          type: 'input',
          name: 'officeNumber',
          message: "What is the Manager's office phone number?",
          validate: officeNumberInput => {
            if (officeNumberInput) {
              return true;
            } else {
              console.log("You must enter the Manager's office phone number!");
              return false;
            }
          }
        })
        .then(({ name, id, email, officeNumber }) => {
          console.log(name, id, email, officeNumber);
          this.teamData.push(this instanceof Manager(officeNumber));
          console.log(this.teamData);
          this.teamMemberType();
        });
      } else if (role === 'Engineer') {
        return inquirer.prompt({
          type: 'input',
          name: 'github',
          message: "What is the Engineer's GitHub username?",
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log("You must enter the Engineer's GitHub username!");
              return false;
            }
          }
        })
        .then(({ github }) => {
          console.log(github);
          this.teamMemberType();
        });
      } else if (role === 'Intern') {
        return inquirer.prompt({
          type: 'input',
          name: 'school',
          message: "What is the Intern's school?",
          validate: schoolInput => {
            if (schoolInput) {
              return true;
            } else {
              console.log("You must enter the Intern's school!");
              return false;
            }
          }
        })
        .then(({ school }) => {
          console.log(school);
          this.teamMemberType();
        })
      }
    });
  };
};

module.exports = Team;
