const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
  const intern = new Intern();

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.role).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test("gets Intern object's properties", () => {
  const intern = new Intern();

  expect(intern.getName()).toHaveProperty('name');
  expect(intern.getId()).toHaveProperty('id');
  expect(intern.getEmail()).toHaveProperty('email');
  expect(intern.getRole()).toHaveProperty('role');
  expect(intern.getSchool()).toHaveProperty('school');
});
