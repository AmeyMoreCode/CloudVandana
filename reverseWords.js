function reverseWords(sentence) {
  const words = sentence.split(" "); // Split the sentence into words
  const reversedWords = [];

  for (const word of words) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWords.push(reversedWord);
  }

  return reversedWords.join(" ");
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); // Output: "sihT si a ynnus yad"
