// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
    
        this.likes.forEach ((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} with a ${this.grade}`
    }
    updateGrade(amount) {
        this.grade += amount
    }
}

const me = new Student ('Jack', 'East', 25, 65, ['Cooking', 'Video Games'])
console.log(me.getBio())
me.updateGrade(10)
console.log(me.getBio())


// const me = new Employee('Jack', 'East', 25, 'Developer', ['Cooking', 'Video Games'])
// me.setName('Doug Nisbet')
// console.log(me.getBio())
// console.log(me.getYearsLeft())

// const person2 = new Person('Colin', 'East', 27)
// console.log(person2.getBio())