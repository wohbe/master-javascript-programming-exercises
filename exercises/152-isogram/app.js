function isIsogram(text) {
  // your code here

  text = text.toLowerCase();
  let checkWord ="";

  for (let i = 0; i < text.length; i++) {
    if (checkWord.includes(text[i])) {
      return false;
  }
  else {
    checkWord += text[i]
  }
}
  return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false