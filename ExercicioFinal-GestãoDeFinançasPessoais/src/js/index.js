<<<<<<< HEAD
import { RenderTransaction } from "./RenderTransactions.js";

=======
function renderTransaction(transactionData) {
    const transactionTable = document.querySelector('#transaction-area');
    
    const tableRow = document.createElement('tr');
    const tableCategory = document.createElement('td');
    const tableAmount = document.createElement('td');
    const tableDate = document.createElement('td');
    const deleteButton = document.createElement('button')

    tableRow.classList.add('table-row', 'mb-3')
    tableCategory.classList.add('table-data');
    tableAmount.classList.add('table-data');
    tableDate.classList.add('table-data');
    deleteButton.classList.add('remove-line-btn')

    tableRow.id = `transaction-${transactionData.id}`;
    tableCategory.textContent = `${transactionData.category}`;
    tableAmount.textContent = `\$${transactionData.amount.toFixed(2)}`;
    tableDate.textContent = `${transactionData.date}`;
    deleteButton.textContent = `X`
    deleteButton.id = `delete-button-${transactionData.id}`

    tableRow.append(tableCategory, tableAmount, tableDate, deleteButton)
    transactionTable.appendChild(tableRow)

}

async function fetchTransactions(){
    const transactions = await fetch("http://localhost:3000/transaction").then(res => res.json())
    transactions.forEach(renderTransaction)
}
>>>>>>> parent of 7ff1adb (Made API work)

document.addEventListener("DOMContentLoaded", () => {
    fetchTransactions()
})

<<<<<<< HEAD
// Get API data
async function fetchTransactions(){
    const transactions = await fetch("http://localhost:3000/transaction").then(res => res.json())
    transactions.forEach(RenderTransaction)
}


// Get HTML elements FORM, Expense button and Earning button
const form = document.querySelector('#form-section');
const submitExpense = document.querySelector('#expense-button');
const submitEarning = document.querySelector('#earning-button');
const transactionList = []

console.log(transactionList)


// Check which button call the Submit
let transactionType = ''
submitExpense.addEventListener('click', () => {
    transactionType = 'Expense';
})

submitEarning.addEventListener('click', () => {
    transactionType = 'Earning';
})

// Reset form and get input values, POST in Json Data Base
/*
form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    UpdateBalance()
=======
const form = document.querySelector('#form-section')
form.addEventListener('Submit',async (ev) => {
    ev.preventDefault()

>>>>>>> parent of 7ff1adb (Made API work)
    const transactionData = {
        category: document.getElementById('#category').value,
        amount: document.getElementById('#amount-input').value,
        date: document.getElementById('#date-input').value
    }

    const response = await fetch("https://localhost:3000/transaction", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transactionData)
    })

<<<<<<< HEAD
    const savedTransaction = await response.json();
    renderTransaction(savedTransaction);
    form.reset();
    
});

*/
// ============================================= // 

// Update Balance 

// ============================================= //


=======
    const savedTransaction = await response.json()
    form.reset()
    renderTransaction(savedTransaction)
})
>>>>>>> parent of 7ff1adb (Made API work)
