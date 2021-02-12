const Hangman = function (word, numGuesses) {
    this.word = word.toLowerCase().split('')
    this.numGuesses = numGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBad = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBad) {
        this.numGuesses--
    }

}

const game1 = new Hangman('Arrow', 6)
console.log(game1.getPuzzle())
console.log(`You have ${game1.numGuesses} remaining guesses`)

window.addEventListener('keypress', function (e) {
    // const guess = String.fromCharCode(e.key)
    const guess = e.key
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(`You have ${game1.numGuesses} remaining guesses`)
})