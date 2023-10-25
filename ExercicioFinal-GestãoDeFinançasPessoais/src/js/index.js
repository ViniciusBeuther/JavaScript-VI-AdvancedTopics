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

document.addEventListener("DOMContentLoaded", () => {
    fetchTransactions()
})

const form = document.querySelector('#form-section')
form.addEventListener('Submit',async (ev) => {
    ev.preventDefault()

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

    const savedTransaction = await response.json()
    form.reset()
    renderTransaction(savedTransaction)
})