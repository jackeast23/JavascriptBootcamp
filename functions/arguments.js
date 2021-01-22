// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
    // return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge Area
// total, tipPercent

let getTip = function (total, tipPercent = .2) {
    let percentageTip = tipPercent * 100
    let actualTip = tipPercent * total
    return `A ${percentageTip}% on $${total} would be $${actualTip}`
    // return 'Total: $' + total + ' - Tip: $' + tipPercent * total
}

let tip = getTip(10, 0.3)
console.log(tip)

let tip2 = getTip(10)
console.log(tip2)

