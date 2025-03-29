import caesarCipher from "./caesarCipher.js";

describe("testing caesarCipher", () => {
  let MainValue;
  let TestCase;
  let TestPunctuation;
  beforeAll(() => {
    MainValue = caesarCipher("xyz", 3);
    TestCase = caesarCipher("HeLLo", 3);
    TestPunctuation = caesarCipher("Hello, World!", 3);
  });
  test("test wrapping", () => {
    expect(MainValue).toEqual("abc");
  });
  test("test case preservation", () => {
    expect(TestCase).toEqual("KhOOr");
  });
  test("test punctuation", () => {
    expect(TestPunctuation).toEqual("Khoor, Zruog!");
  });
});
