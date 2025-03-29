function caesarCipher(string, key) {
  const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  let newKey;

  if (key > 25) {
    for (let i = 0; i < key; i++) {
      if (i % 25 === 0 && i !== 1) {
        newKey = 0;
      } else {
        newKey++;
      }
    }
  } else {
    newKey = key;
  }

  let newWord = "";
  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();
    if (/^[A-Za-z]+$/.test(letter)) {
      for (let g = 0; g < alphabets.length; g++) {
        if (letter === alphabets[g]) {
          if (alphabets[g + newKey]) {
            if (string[i] === string[i].toLowerCase()) {
              newWord += alphabets[g + newKey].toLowerCase();
            } else {
              newWord += alphabets[g + newKey].toUpperCase();
            }
          } else {
            let difference = alphabets.length - g;
            let keyForbBigNo = newKey - difference;
            if (string[i] === string[i].toLowerCase()) {
              newWord += alphabets[keyForbBigNo].toLowerCase();
            } else {
              newWord += alphabets[keyForbBigNo].toUpperCase();
            }
          }
        }
      }
    } else {
      newWord += letter;
    }
  }
  return newWord;
}

export default caesarCipher;
