let name = '  Jack East  '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abcd123ftyu098'
console.log(password.includes('password'))

// Trim method
console.log(name.trim())

// Challenge area

// isValidPassword
// length is more than 8 - and doesn't contain word password


let isValidPassword = function(password) {
    //return password.length > 8 && !password.includes('password')
    if (password.length <= 8) {
        return 'The password is too short'
    } else if (password.includes('password')) {
        return 'The password contains the word password'
    } else {
        return 'Password is valid'
    }
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123#%^*'))
console.log(isValidPassword('asdfpbkfpewpassword'))

