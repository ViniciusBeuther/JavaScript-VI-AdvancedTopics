function createTransactionRow(id){
    const row = document.createElement('tr');
    row.classList.add('table-row');
    row.id = `transactionRow-${id}`
    return row;
}

function createTransactionCategory(category){
    const category = document.createElement('rd');
    category.classList.add('table-data');
    
}