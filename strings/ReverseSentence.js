function reverseSentence(input) {
    const words = input.split(" ");
    let reversedSentence = "";

    for (const word of words) {
        const reversedWord = word.split("").reverse().join("");
        reversedSentence += reversedWord + " ";
    }

    return reversedSentence.trim();
}
const str="prathibha wor"
console.log(reverseSentence(str))