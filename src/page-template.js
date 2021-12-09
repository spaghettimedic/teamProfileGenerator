const generateManager = employeesArr => {
  return `
  <div>
    ${employeesArr
      .filter(({ role }) => role === 'Manager')
      .map(({ name, id, email, officeNumber }) => {
        return `
        <p>Manager</p>
        <p>${name}</p>
        <p>${id}</p>
        <p>${email}</p>
        <p>${officeNumber}</p>
        `
      })
    .join('')}
  </div>
  `;
};

const generateEngineer = employeesArr => {
  return `
  <div>
    ${employeesArr
      .filter(({ role }) => role === 'Engineer')
      .map(({ name, id, email, github }) => {
        return `
        <p>Engineer</p>
        <p>${name}</p>
        <p>${id}</p>
        <p>${email}</p>
        <p>${github}</p>
        `
      })
    .join('')}
  </div>
  `;
};

const generateIntern = employeesArr => {
  return `
  <div>
    ${employeesArr
      .filter(({ role }) => role === 'Intern')
      .map(({ name, id, email, school }) => {
        return `
        <p>Intern</p>
        <p>${name}</p>
        <p>${id}</p>
        <p>${email}</p>
        <p>${school}</p>
        `
      })
    .join('')}
  </div>
  `;
};

module.exports = teamDataArr => {
  const { employees, ...header } = teamDataArr;
  console.log(employees);

  return `
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>${header.teamName} Portfolio</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
          <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="style.css">
      </head>

      <body>
          <header>
              <div class="container flex-row justify-space-between align-center py-3">
                  <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.teamName}</h1>
              </div>
          </header>
          <main class="container my-5">
              ${generateManager(employees)}
              ${generateEngineer(employees)}
              ${generateIntern(employees)}
          </main>
          <footer class="container text-center py-3">
              <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.teamName}</h3>
          </footer>
      </body>
  </html>
  `;
}
