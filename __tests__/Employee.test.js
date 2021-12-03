const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
  const employee = new Employee('David', '1704867', 'dsteiner247@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});
