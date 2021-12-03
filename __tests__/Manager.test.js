const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
  const manager = new Manager();

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(String));
});

test("gets Manager object's properties", () => {
  const manager = new Manager();

  expect(manager.getName()).toHaveProperty('name');
  expect(manager.getId()).toHaveProperty('id');
  expect(manager.getEmail()).toHaveProperty('email');
  expect(manager.getRole()).toBe('Manager');
  expect(manager.getOfficeNumber()).toHaveProperty('officeNumber');
});
