function analyzeArray(array) {
  let total = 0;
  array.forEach((value, index) => {
    total += value;
  });
  let average = total / array.length;
  let sortedArray = sortingArray(array);
}

function sortingArray(array) {
  if (array.length === 1) {
    return array;
  }
  let middleValue = Math.floor(array.length / 2);
  let leftArray = array.splice(0, middleValue);
  let rightArray = array;
  let fullArray = sorting(sortingArray(leftArray), sortingArray(rightArray));
  console.log(fullArray);
}

function sorting(leftArray, rightArray) {
  console.log(`${leftArray}:${rightArray}`);
  /*let entireArray = [];
  if (leftArray[0] > rightArray[0]) {
    entireArray.push(rightArray.shift());
  } else {
    entireArray.push(leftArray.shift());
  }
  let NewArray = [...entireArray, ...leftArray, ...rightArray];
  return NewArray;*/
}

const object = analyzeArray([1, 8, 3, 4, 2, 6]);
