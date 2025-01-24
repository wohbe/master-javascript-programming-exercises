function joinArrayOfArrays(arr) {
  // your code here
  return [].concat.apply([], arr)
  
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
