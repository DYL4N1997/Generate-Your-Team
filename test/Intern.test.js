const Intern = require("../lib/Intern");

// testing create manager object
test("creates intern object", () => {
  const intern = new Intern ("Nigel Thornberry","7","nigelthornberry@gmail.com","Cambridge");

// test the remaining objects
  expect(intern.name).toEqual("Nigel Thornberry");
  expect(intern.id).toEqual("7");
  expect(intern.email).toEqual("nigelthornberry@gmail.com");
  expect(intern.school).toEqual("Cambridge");
  expect(intern.getRole()).toBe("Intern");
});