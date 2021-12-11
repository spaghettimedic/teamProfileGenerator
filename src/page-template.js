const generateManager = employeesArr => {
  return `
  <div class="d-flex justify-content-around my-3">
    ${employeesArr
      .filter(({ role }) => role === 'Manager')
      .map(({ name, id, email, officeNumber }) => {
        return `
        <div class="card border-1 border-light shadow" style="width: 30%">
          <h3 class="card-header bg-primary bg-gradient bg-opacity-75 text-center text-light">Manager</h3>
          <div class="card-body">
            <h4 class="card-title">${name}</h4>
            <p class="card-text"><span class="text-decoration-underline">Employee ID:</span> ${id}</p>
            <p class="card-text"><span class="text-decoration-underline">Email:</span> <a href="mailto:${email}" class="btn btn-outline-dark">${email}</a></p>
            <p class="card-text"><span class="text-decoration-underline">Phone:</span> ${officeNumber}</p>
          </div>
        </div>
        `
      })
    .join('')}
  </div>
  `;
};

const generateEngineer = employeesArr => {
  return `
  <div class="d-flex justify-content-around my-3">
    ${employeesArr
      .filter(({ role }) => role === 'Engineer')
      .map(({ name, id, email, github }) => {
        return `
        <div class="card border-1 border-light shadow" style="width: 30%">
          <h3 class="card-header bg-primary bg-gradient bg-opacity-75 text-center text-light">Engineer</h3>
          <div class="card-body">
            <h4 class="card-title">${name}</h4>
            <p class="card-text"><span class="text-decoration-underline">Employee ID:</span> ${id}</p>
            <p class="card-text"><span class="text-decoration-underline">Email:</span> <a href="mailto:${email}" class="btn btn-outline-dark">${email}</a></p>
            <p class="card-text"><span class="text-decoration-underline">GitHub:</span> <a href="https://www.github.com/${github}" target="_blank" class="btn btn-outline-success">${github}</a></p>
          </div>
        </div>
        `
      })
    .join('')}
  </div>
  `;
};

const generateIntern = employeesArr => {
  return `
  <div class="d-flex justify-content-around my-3">
    ${employeesArr
      .filter(({ role }) => role === 'Intern')
      .map(({ name, id, email, school }) => {
        return `
        <div class="card border-1 border-light shadow" style="width: 30%">
          <h3 class="card-header bg-primary bg-gradient bg-opacity-75 text-center text-light">Intern</h3>
          <div class="card-body">
            <h4 class="card-title">${name}</h4>
            <p class="card-text"><span class="text-decoration-underline">Employee ID:</span> ${id}</p>
            <p class="card-text"><span class="text-decoration-underline">Email:</span> <a href="mailto:${email}" class="btn btn-outline-dark">${email}</a></p>
            <p class="card-text"><span class="text-decoration-underline">School:</span> ${school}</p>
          </div>
        </div>
        `
      })
    .join('')}
  </div>
  `;
};

module.exports = teamDataArr => {
  const { employees, ...header } = teamDataArr;

  return `
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>${header.teamName} Portfolio</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      </head>

      <body>
          <header>
              <div class="container flex-row justify-space-between align-center py-3">
                  <h1 class="page-title text-light bg-danger bg-gradient py-2 px-3">${header.teamName}</h1>
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
