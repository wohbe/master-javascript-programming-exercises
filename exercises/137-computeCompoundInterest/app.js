function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  return principal.concat(interestRate,compoundingFrequency,timeInYears)
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
