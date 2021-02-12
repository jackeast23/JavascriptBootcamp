const Hangman = function (word, numGuesses) {
    this.word = word.toLowerCase().split('')
    this.numGuesses = numGuesses
    this.guessedLetters = []
    this.status = 'Playing'
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
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.numGuesses--
    }

    this.currentStatus()
}

Hangman.prototype.currentStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (this.numGuesses === 0) {
        this.status = 'Failed'
    } else if (finished) {
        this.status = 'Finished'
    } else {
        this.status = 'Playing'
    }
}