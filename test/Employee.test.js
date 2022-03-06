const Employee = require("../lib/employee");

// test creates employee object
test("creates the employee object for test", () => {
  const employee = new Employee("Dylan", "1", "dylan.metcalf15@gmail.com");

  expect(employee.name).toEqual("Dylan");
  expect(employee.id).toEqual("1");
  expect(employee.email).toEqual("dylan.metcalf15@gmail.com");
});

// gets employee email
test("gets employee email", () => {
  const employee = new Employee("Dylan", "1", "dylan.metcalf15@gmail.com");

  expect(employee.getEmail()).toBe("dylan.metcalf15@gmail.com");
});

// gets employee role
test("gets employee title", () => {
  const employee = new Employee("Dylan", "1", "dylan.metcalf15@gmail.com");

  expect(employee.obtainTitle()).toBe("Employee");
});