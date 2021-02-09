// const myAge = 25
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote'
// console.log(message)

const myAge = 25
const showPage = () => {
    return 'showPage'
}
const showErrorPage = () => {
    return 'showErrorPage'
}

const message = myAge >= 19 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter']
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')
