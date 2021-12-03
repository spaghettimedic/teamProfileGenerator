const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
  const engineer = new Engineer();

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("gets Engineer object's properties", () => {
  const engineer = new Engineer();

  expect(engineer.getName()).toHaveProperty('name');
  expect(engineer.getId()).toHaveProperty('id');
  expect(engineer.getEmail()).toHaveProperty('email');
  expect(engineer.getRole()).toBe('Engineer');
  expect(engineer.getGithub()).toHaveProperty('github');
});
