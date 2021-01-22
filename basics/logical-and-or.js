let temp = 55

// Logical And Operator - True is both sides are true. False otherwise
// Logical Or Operatior - True if at least one side it true. False otherwise

if (temp >= 60 && temp <= 90) {
    console.log('It is nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Do what you want')
}

// Challenge area

// Restaurant reservation system

let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes

// At least one vegan? Offer up some vegan options

// Else, offer up anything on menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Some vegan dishes')
} else {
    console.log('Offer anything')
}