let total = 0;
let transactionType = '';
const form = document.querySelector('#form-section');
const submitExpenseBtn = document.querySelector('#expense-button');
const submitEarningBtn = document.querySelector('#earning-button');
const balanceInput = document.querySelector('#balance-field');


function RenderTransaction(transactionData) {
    const transactionTable = document.querySelector('#transaction-area');
    const tableRow = document.createElement('tr');
    const tableCategory = document.createElement('td');
    const tableAmount = document.createElement('td');
    const tableDate = document.createElement('td');
    const deleteButton = document.createElement('button');

    tableRow.classList.add('table-row', 'mb-1');
    tableCategory.classList.add('table-data');
    tableAmount.classList.add('table-data');
    tableDate.classList.add('table-data');
    deleteButton.classList.add('remove-line-btn', 'mr-1');

    const amountFloat = parseFloat(transactionData.amount);
    const formattedDate = transactionData.date.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, "$3/$2/$1");
    const mixedCategory = transactionData.category[0].toUpperCase() + transactionData.category.slice(1);

    tableRow.id = `transaction-${transactionData.id}`;
    tableCategory.textContent = `${mixedCategory}`;
    tableAmount.textContent = `${amountFloat.toFixed(2)}`;
    tableDate.textContent = `${formattedDate}`;
    deleteButton.textContent = `X`;
    deleteButton.id = `delete-button-${transactionData.id}`;
    tableRow.classList.add('bg-light-font');

    tableRow.append(tableCategory, tableAmount, tableDate, deleteButton);
    transactionTable.appendChild(tableRow);
}

async function fetchTransaction() {
    const transactions = await fetch("http://localhost:3000/transaction").then(res => res.json())
    transactions.forEach(RenderTransaction);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchTransaction();
})

form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    
    const amountInput = document.querySelector('#amount-input');
    const amount = parseFloat(amountInput.value); // Converta o valor para um número

    balanceInput.placeholder = total.toFixed(2); // Use placeholder em vez de placeHolder

    submitEarningBtn.addEventListener('click', () => {
        transactionType = 'Earning';
        console.log('entrou saldo')
    }) 
    submitExpenseBtn.addEventListener('click', () => {
        transactionType = 'Expense';
        console.log('entrou gasto')
    })

    const transactionData = {
        category: document.querySelector('#category').value,
        amount: amount,
        date: document.querySelector('#date-input').value,
        type: transactionType,
    };

    const response = await fetch("http://localhost:3000/transaction", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transactionData)
    });

    const savedTransaction = await response.json();
    RenderTransaction(savedTransaction);
    form.reset();
});
