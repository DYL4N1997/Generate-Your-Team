const Manager = require("../lib/Manager");

// testing create manager object
test("creates manager object", () => {
  const officeNumber = 180;
  const manager = new Manager("Nigel Thornberry","1","nigelthornberry@gmail.com",officeNumber);
  expect(manager.getOfficeNumber()).toEqual(officeNumber);
});

// testing get role
test("gets role", () => {
  const manager = new Manager("Nigel","Thornberry","nigelthornberry@gmail.com","180");
  expect(manager.getRole()).toEqual("Manager");
});