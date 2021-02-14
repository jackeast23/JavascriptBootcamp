const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')
const game1 = new Hangman('Arrow', 6)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()

console.log(game1.getPuzzle())
console.log(`You have ${game1.numGuesses} remaining guesses`)

window.addEventListener('keypress', function (e) {
    const guess = e.key
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatusMessage()
})