// Create an array with five todos
// Print message with length "you have x todos"
// Print first and second to last items to terminal -> todo: walk dog

const todos = [{
    text: 'Make resume',
    completed: true,
}, {
     text: 'Get linkedin pic',
     completed: true
}, {
    text: 'Create linkedin profile',
    completed: true
}, {
    text: 'Create personal website',
    completed: false
}, {
    text: 'Apply to jobs',
    completed: false
}]

// 1. Convert array to array of objects -> text, completed property
// 2. Create function to remove a todo by text value

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}


const getThingsToDo = function (todos, query) {
    return todos.filter(function (todo, index) {
        return !todo.completed
    })
}


const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)


// console.log(getThingsToDo(todos))


// deleteTodo(todos, '!!!create linkedin profile')
// console.log(todos)



// // Delete third item
// todo.splice(2, 1)
// // Add a new item on the end
// todo.push('Crush job interview')
// // Remove the first item from list
// todo.shift()

// console.log(`You have ${todo.length} todos`)

// // 1. First item
// // 2. Second item

// todo.forEach(function (todo, index) {
//     // console.log(index + 1,'. ', todo)
//     console.log(`${index + 1}. ${todo}`)
// })


// // console.log(`Todo: ${todo[0]}`)
// // console.log(`Todo: ${todo[todo.length-2]}`)

// // for (let count = 0; count < todo.length; count++) {
// //     console.log(`${count + 1}. ${todo[count]}`)
// // }