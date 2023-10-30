export function UpdateBalance(){
    async function updateBalance() {
        let total = 0.00;
        const balanceField = document.querySelector('#balance-field');
        
        transactionList.forEach((transaction) => {
            total += transaction;
        });
    
        balanceField.placeHolder = `$ ${total.toFixed(2)}`;
        
        if (total >= 0) {
            balanceField.classList.add('text-success');
            balanceField.classList.remove('text-danger');
        } else {
            balanceField.classList.add('text-danger');
            balanceField.classList.remove('text-success');
        }
    }
    
}