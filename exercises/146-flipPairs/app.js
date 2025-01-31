function flipPairs(input) {
    // your code here
    const reversedInput = input.split('').reverse().join('');
    return reversedInput;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
