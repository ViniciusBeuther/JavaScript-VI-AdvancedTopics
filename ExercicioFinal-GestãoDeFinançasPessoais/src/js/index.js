
// Render transactions in screen
function renderTransaction(transactionData) {
    const transactionTable = document.querySelector('#transaction-area');
    const tableRow = document.createElement('tr');
    const tableCategory = document.createElement('td');
    const tableAmount = document.createElement('td');
    const tableDate = document.createElement('td');
    const deleteButton = document.createElement('button')

    tableRow.classList.add('table-row', 'mb-1')
    tableCategory.classList.add('table-data');
    tableAmount.classList.add('table-data');
    tableDate.classList.add('table-data');
    deleteButton.classList.add('remove-line-btn')

    const amountFloat = parseFloat(transactionData.amount)
    const formattedDate = transactionData.date.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/,"$3\/$2\/$1")
    console.log(typeof transactionData.category)
    const mixedCategory = transactionData.category[0].toUpperCase() + transactionData.category.slice(1);

    tableRow.id = `transaction-${transactionData.id}`;
    tableCategory.textContent = `${mixedCategory}`;
    tableDate.textContent = `${formattedDate}`;
    deleteButton.textContent = `X`
    deleteButton.id = `delete-button-${transactionData.id}`
    tableRow.classList.add('bg-light-font')
// Checking type, if expense render red and if earning render green
    if (transactionData.type === 'Expense'){
        tableAmount.classList.add('text-dark-expense')
        tableAmount.textContent = `- \$${amountFloat.toFixed(2)}`;
        transactionList.push(amountFloat * -1)

    } else if (transactionData.type === 'Earning'){
        tableAmount.classList.add('text-success')
        tableAmount.textContent = `+ \$${amountFloat.toFixed(2)}`;
        transactionList.push(amountFloat)
    } else {
        throw new Error (`Invalid transaction type = ${transactionData.type}`)
    }

    tableRow.append(tableCategory, tableAmount, tableDate, deleteButton)
    transactionTable.appendChild(tableRow)

}

// Load the transactions from data base when the page refresh
document.addEventListener("DOMContentLoaded", () => {
    fetchTransactions()
})

// Get API data
async function fetchTransactions(){
    const transactions = await fetch("http://localhost:3000/transaction").then(res => res.json())
    transactions.forEach(renderTransaction)
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
form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    updateBalance()
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


// ============================================= // 

// Update Balance 

// ============================================= //

async function updateBalance() {
    let total = 0.00;
    const balanceField = document.querySelector('#balance-field');
    transactionList.forEach((transaction) => {
        if(transaction > 0){
            console.log(transaction);
            total += transaction;
        } else{
            console.log(transaction);
            total -= transaction;
        }
        
    })

    balanceField.placeholder = `$ ${total.toFixed(2).toString()}`
    console.log(total)
}
