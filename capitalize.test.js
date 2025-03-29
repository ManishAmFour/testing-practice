import capitalize from "./capitalize.js";

test("capitalizing the letters", () => {
  expect(capitalize("string")).toEqual("String");
});
