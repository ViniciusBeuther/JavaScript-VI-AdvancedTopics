import { RenderTransaction } from "./RenderTransactions.js";


// Load the transactions from data base when the page refresh
document.addEventListener("DOMContentLoaded", () => {
    fetchTransactions()
})

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
    const transactionData = {
        category: document.querySelector('#category').value,
        amount: document.querySelector('#amount-input').value,
        date: document.querySelector('#date-input').value,
        type: transactionType
    }

    const response = await fetch("http://localhost:3000/transaction", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transactionData)
    });

    const savedTransaction = await response.json();
    renderTransaction(savedTransaction);
    form.reset();
    
});

*/
// ============================================= // 

// Update Balance 

// ============================================= //


