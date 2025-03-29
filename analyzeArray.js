function analyzeArray(array) {
  let total = 0;
  array.forEach((value, index) => {
    total += value;
  });
  let average = total / array.length;
  let sortedArray = sortingArray(array);
  let min = sortedArray[0];
  let max = sortedArray[sortedArray.length - 1];
  let length = sortedArray.length;
  return { average, max, min, length };
}

function sortingArray(array) {
  if (array.length === 1) {
    return array;
  }
  let middleValue = Math.floor(array.length / 2);
  let leftArray = array.splice(0, middleValue);
  let rightArray = array;

  let fullArray = sorting(sortingArray(leftArray), sortingArray(rightArray));
  return fullArray;
}

function sorting(leftArray, rightArray) {
  let entireArray = [];

  let i = 0;
  while (leftArray.length > 0) {
    if (leftArray[0] > rightArray[0]) {
      entireArray.push(rightArray.shift());
    } else {
      entireArray.push(leftArray.shift());
    }
    i++;
  }

  let NewArray = [...entireArray, ...leftArray, ...rightArray];
  return NewArray;
}

export default analyzeArray;
