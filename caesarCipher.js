function caesarCipher(string, key) {
  let newString = "";
  let firstValue = string[0];
  for (let i = 0; i < string.length; i++) {
    string += string[i]
    newString += string[i + key];
  }
  return newString;
}

console.log(caesarCipher("india", 1));
