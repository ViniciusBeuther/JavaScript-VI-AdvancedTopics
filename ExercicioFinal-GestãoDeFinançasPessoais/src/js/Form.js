import { UpdateBalance } from "./UpdateBalance.js";
import { RenderTransaction } from "./RenderTransactions.js";

form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    UpdateBalance();

    const amountInput = document.querySelector('#amount-input');

    const transactionData = {
        category: document.querySelector('#category').value,
        amount: amountInput.value,
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
