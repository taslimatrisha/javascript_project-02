














// Store previous values
let previousValues = {};

// Function to decrement quantity
function decrementQuantity(inputId) {
    let inputElement = document.getElementById(inputId);
    let currentValue = parseInt(inputElement.value);
    if (currentValue > 1) {
        inputElement.value = currentValue - 1;
        updatePrice(inputId);
    }
}

// Function to increment quantity
function incrementQuantity(inputId) {
    let inputElement = document.getElementById(inputId);
    let currentValue = parseInt(inputElement.value);
    inputElement.value = currentValue + 1;
    updatePrice(inputId);
}

// Function to remove quantity
function removeQuantity(inputId) {
    let inputElement = document.getElementById(inputId);
    let currentValue = parseInt(inputElement.value);
    // Store the previous value
    previousValues[inputId] = currentValue;
    inputElement.value = 0;
    updatePrice(inputId);
}

// Function to undo remove operation
function undoRemove(inputId) {
    let inputElement = document.getElementById(inputId);
    // Check if there's a previous value
    if (previousValues[inputId] !== undefined) {
        // Restore the previous value
        inputElement.value = previousValues[inputId];
        updatePrice(inputId);
    }
}

// Function to update price
function updatePrice(inputId) {
    let inputElement = document.getElementById(inputId);
    let quantity = parseInt(inputElement.value);
    let priceElement = document.getElementById('price' + inputId.slice(-1));
    let price = 100 * (inputId === 'quantity2' ? 2 : 1); // Assuming product 1 is $100 and product 2 is $200
    priceElement.textContent = "$" + (price * quantity);
}

// Function to calculate total
function calculateTotal() {
    let quantity1 = parseInt(document.getElementById('quantity1').value);
    let quantity2 = parseInt(document.getElementById('quantity2').value);
    let price1 = parseInt(document.getElementById('price1').textContent.slice(1));
    let price2 = parseInt(document.getElementById('price2').textContent.slice(1));
    let subtotal = (quantity1 * price1) + (quantity2 * price2);
    let tax = subtotal * 0.05; // Assuming 5% tax rate
    let total = subtotal + tax;
    document.getElementById('subtotal').textContent = subtotal;
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}









