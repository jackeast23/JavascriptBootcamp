const account = {
    name: 'Jack East',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

// Expense -> description, amount
// addExpense -> take in description and amount
// getAccountSummary -> total up all expense and print -. Jack East has $1250 in expenses. (use foreach)

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary

// Jack East has a balance of $10. $100 in income. $90 in expenses.



account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
