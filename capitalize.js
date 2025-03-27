function capitalize(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i];
    }
  }
  return newString;
}
console.log(capitalize("manish tewatia"));
