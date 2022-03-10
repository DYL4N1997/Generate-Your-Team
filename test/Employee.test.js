const Employee = require("../lib/Employee");

// test creates employee object
test("creates the employee object for test", () => {
  const employee = new Employee("Dylan", "1", "dylan.metcalf15@gmail.com");

  expect(employee.name).toEqual("Dylan");
  expect(employee.id).toEqual("1");
  expect(employee.email).toEqual("dylan.metcalf15@gmail.com");
});

// gets id from getId() 
test('gets employee name', () => {
  const employee = new Employee("Dylan", 1, "dylan.metcalf15@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

// gets employee email
test("gets employee email", () => {
  const employee = new Employee("Dylan", "1", "dylan.metcalf15@gmail.com");

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets employee role
test("gets employee title", () => {
  const employee = new Employee("Dylan", "1", "dylan.metcalf15@gmail.com");

  expect(employee.getRole()).toBe("Employee");
});