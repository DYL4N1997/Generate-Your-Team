const Engineer = require("../lib/Engineer");

// testing create manager object
test("creates engineer object", () => {
  const github = "NigelThornberry";
  const engineer = new Engineer ("Nigel Thornberry","3","nigelthornberry@gmail.com",github);

// test the remaining objects
  expect(engineer.name).toEqual("Nigel Thornberry");
  expect(engineer.id).toEqual("3");
  expect(engineer.email).toEqual("nigelthornberry@gmail.com");

  expect(engineer.getGithub()).toBe(github);
  
  expect(engineer.getRole()).toBe("Engineer");
});