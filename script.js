document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = document.getElementById('expense-amount').value;
    const expenseDate = document.getElementById('expense-date').value;
    const expenseCategory = document.getElementById('expense-category').value;

    const expenseList = document.getElementById('expense-list');
    const totalAmountElement = document.getElementById('total-amount');
    
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${expenseName}</td>
        <td>$${parseFloat(expenseAmount).toFixed(2)}</td>
        <td>${expenseDate}</td>
        <td>${expenseCategory}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    expenseList.appendChild(row);

    updateTotal(expenseAmount);

    row.querySelector('.delete-btn').addEventListener('click', function() {
        row.remove();
        updateTotal(-expenseAmount);
    });

    document.getElementById('expense-form').reset();
});

function updateTotal(amount) {
    const totalAmountElement = document.getElementById('total-amount');
    let currentTotal = parseFloat(totalAmountElement.innerText);
    currentTotal += parseFloat(amount);
    totalAmountElement.innerText = currentTotal.toFixed(2);
}
