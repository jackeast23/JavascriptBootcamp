const Hangman = function (word, numGuesses) {
    this.word = word
    this.numGuesses = numGuesses
}

const game1 = new Hangman('Arrow', 6)
console.log(game1)

const game2 = new Hangman('Water', 6)
console.log(game2)