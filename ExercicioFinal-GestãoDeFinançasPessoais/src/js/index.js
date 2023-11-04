function createTransactionRow(id){
    const row = document.createElement('tr');
    row.classList.add('table-row');
    row.id = `transactionRow-${id}`
    return row;
}

function createTransactionCategory(category){
    const category = document.createElement('rd');
    category.classList.add('table-data');
    return category
}

function createTransactionAmount(amount){
    const amountData = document.createElement('rd');
    amountData.classList.add('table-data');
    return amountData
}

function createTransactionDate(date){
    const dateData = document.createElement('rd');
    dateData.classList.add('table-data');
    return dateData
}

function renderTransaction(transaction){
    
}
