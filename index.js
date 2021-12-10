const inquirer = require('inquirer');
const Manager = require('./lib//Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile } = require('./utils/generateSite');

const initializeUser = () => {
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
};

const addTeamMember = teamDataArr => {
  if (!teamDataArr.employees) {
    teamDataArr.employees = [];
  }

  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Select what type of employee you'd like to add to your team:",
      choices: [ 'Manager', 'Engineer', 'Intern', 'Finish building team' ]
    },
    {
      type: 'input',
      name: 'name',
      message: `What is this Employee's name?`,
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log(`Name is required!`);
          return false;
        }
      },
      when: ({ role }) => {
        if (role !== 'Finish building team') {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: `What is this Employee's ID number?`,
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log(`ID number is required!`);
          return false;
        }
      },
      when: ({ role }) => {
        if (role !== 'Finish building team') {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: `What is this Employee's email address?`,
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log(`Email address is required!`);
          return false;
        }
      },
      when: ({ role }) => {
        if (role !== 'Finish building team') {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the Manager's office phone number?",
      validate: officeNumberInput => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log("The Manager's office phone number is required!");
          return false;
        }
      },
      when: ({ role }) => {
        if (role === 'Manager') {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the Engineer's GitHub username?",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("The Engineer's GitHub username is required!");
          return false;
        }
      },
      when: ({ role }) => {
        if (role === 'Engineer') {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the Intern's school?",
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log("The Intern's school is required!");
          return false;
        }
      },
      when: ({ role }) => {
        if (role === 'Intern') {
          return true;
        } else {
          return false;
        }
      }
    },
  ])
  .then(({ role, name, id, email, officeNumber, github, school }) => {

    if (role === 'Manager') {
      teamDataArr.employees.push(new Manager(name, id, email, role, officeNumber));
      return addTeamMember(teamDataArr);
    } else if (role === 'Engineer') {
      teamDataArr.employees.push(new Engineer(name, id, email, role, github));
      return addTeamMember(teamDataArr);
    } else if (role === 'Intern') {
      teamDataArr.employees.push(new Intern(name, id, email, role, school));
      return addTeamMember(teamDataArr);
    } else if (role === 'Finish building team') {
      return teamDataArr;
    }
  });
}

initializeUser()
.then(addTeamMember)
.then(teamDataArr => {
  return generatePage(teamDataArr);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
})
.catch(err => {
  console.log(err);
})
