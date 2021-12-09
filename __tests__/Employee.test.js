const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
  const employee = new Employee('David', '1704867', 'dsteiner247@gmail.com', 'Engineer');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.role).toEqual(expect.any(String));
});

test("gets Employee object's properties", () => {
  const employee = new Employee('David', '1704867', 'dsteiner247@gmail.com', 'Engineer');

  expect(employee.getName()).toHaveProperty('name');
  expect(employee.getId()).toHaveProperty('id');
  expect(employee.getEmail()).toHaveProperty('email');
  expect(employee.getRole()).toHaveProperty('role');
});
