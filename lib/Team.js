const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

let teamData = [];

function generateHTML(teamData) {

};

function Team() {

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
      }
    ])
    .then(({ teamName }) => {
      console.log(teamName);
    })
    .then(function() {
      console.log(`
    ==========================================
    Let's start with the Manager's information
    ==========================================
    `);
    new Manager().promptEmployee();
    });
  };
  

  Team.prototype.addTeamMember = function() {

    inquirer.prompt({
      type: 'list',
      name: 'role',
      message: "Select what type of employee you'd like to add to your team:",
      choices: [ 'Engineer', 'Intern', 'I do not need to add more team members' ],
    })
    .then(({ role }) => {
      switch (role) {
        case 'I do not need to add more team members':
          // do something
          break;
        case 'Engineer':
          new Engineer().promptEmployee();
          break;
        case 'Intern':
          new Intern().promptEmployee();
          break;
      }
    })
  };
};

module.exports = Team;
