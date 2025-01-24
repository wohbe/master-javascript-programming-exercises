function getLargestElement(array) {
  let bigNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > bigNumber) {
      bigNumber = array[i];
    }
  }
  return bigNumber;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;