let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('Is account locked')
} else if(userRole === 'admin') {
    console.log('Welcome admin')
} else {
    console.log('Welcome')
}


// Challenge area

let temp = 45

// Its freezing
// Its hot
// Its nice out

if (temp <= 32) {
    console.log('Its freezing')
} else if (temp >= 110) {
    console.log('Its hot')
} else {
    console.log('Its nice')
}