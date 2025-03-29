function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; 0 <= i; i--) {
    newString += string[i];
  }
  return newString;
}

export default reverseString;
