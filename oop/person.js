const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Jack', 'East', 25)
console.log(me)

const person2 = new Person('Colin', 'East', 27)
console.log(person2)