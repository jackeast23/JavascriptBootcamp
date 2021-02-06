const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Jack',
    age: 25
}, {
    name: 'Colin',
    age: 27
}, {
    name: 'Nick',
    age: 57
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

// 1. Find the person with age equal to 25
// 2. Print that persons name

const age27 = people.find((person) => person.age === 27)

console.log(age27)