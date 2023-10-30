export function RenderTransaction(transactionData) {
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