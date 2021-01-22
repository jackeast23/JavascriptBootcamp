let myAccount = {
    name: 'Jack East',
    expenses: 0,
    income: 0
}

let addExpenses = function (account, amount) {
    account.expenses = account.expenses + amount
    amount = 100
    amount = 200
}


// addIncone

// resetAccount

// getAccountSummary
// Account for Jack has $900. $1000 in income. $100 in expenses.

// addIncone
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

let addIncome = function (account, income) {
    account.income= account.income + income
    //pay = 2000
}

let resetAccount = function (account) {
    account.income= 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpenses(myAccount, 2.50)
addExpenses(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))