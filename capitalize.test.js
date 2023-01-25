const capitalize = require('./capitalize')
//Test

test("capitalize returns the string with the first character capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});
