const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function generateHTML(teamData) {

};

function Team() {
  this.teamData = [{}];
  this.employee;

  Team.prototype.initializeUser = function() {
    console.log(`
    ========================
    Create your team's page!
    ========================
    `);
  
    inquirer.prompt([
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
    .then(({ teamName, role }) => {
      this.teamData.push(teamName); // will have to be deconstructed later to generate HTML
      this.teamMemberType();
    })
  };

  Team.prototype.teamMemberType = function() {

    inquirer.prompt(
      {
        type: 'list',
        name: 'role',
        message: "Select what type of employee you'd like to add to your team:",
        choices: [ 'Manager', 'Engineer', 'Intern', 'I do not need to add more team members' ]
      }
    )
    .then(({ role }) => {
      this.addTeamMember(role);
    })
  }
  
  Team.prototype.addTeamMember = function(role) {
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
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's office phone number?",
        when: ({role}) => {
          if (role === 'Manager') {
            return true;
          } else {
            return false;
          }
        },
        validate: officeNumberInput => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("You must enter the Manager's office phone number!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's GitHub username?",
        when: ({ role }) => {
          if (role === 'Engineer') {
            return true;
          }else {
            return false;
          }
        },
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log("You must enter the Engineer's GitHub username!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: "What is the Intern's school?",
        when: ({ role }) => {
          if (role === 'Intern') {
            return true;
          } else {
            return false;
          }
        },
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log("You must enter the Intern's school!");
            return false;
          }
        }
      }
    ])
    .then(({ role, name, id, email, officeNumber, github, school }) => {
      switch (role) {
        case 'Manager':
          this.employee = new Manager(name, id, email, officeNumber);
          console.log(this.employee);
          this.teamMemberType();
          break;
        case 'Engineer':
          this.employee = new Engineer(name, id, email, github);
          console.log(this.employee);
          this.teamMemberType();
          break
        case 'Intern':
          this.employee = new Intern(name, id, email, school);
          console.log(this.employee);
          this.teamMemberType();
        case 'I do not need to add more team members':
          console.log('Done!');
          break;
      }
    });
  };
};

module.exports = Team;
