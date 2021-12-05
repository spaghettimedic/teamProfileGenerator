const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

function buildTeam() {
  const addEmployee = function() {
    
    inquirer.prompt({
      type: 'list',
      name: 'employeeType',
      message: "Select what type of employee you'd like to add to your team",
      choices: [ 'Engineer', 'Intern', 'I do not need to add more team members' ],
      default: 'I do not need to add more team members'
    })
    .then(({ employeeType }) => {
      if (employeeType === 'I do not need to add more team members') {
        generateHTML();
      } else {
        this.employeeType = new Employee(employeeType).promptEmployee();
      }
    })
  };
  
  const promptUser = function () {
  
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
  };

  promptUser();
}

buildTeam();
