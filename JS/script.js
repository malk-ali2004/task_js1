
var totalPrice = 0;
var buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const price = parseFloat(button.getAttribute('price').replace('$', ''));
        
        totalPrice += price;
        
        
        alert(`Price of this item: $${price}\nCurrent Total: $${totalPrice}`);
    });
});

const showPriceButton = document.querySelector('.price-button');

showPriceButton.addEventListener('click', () => {
    const priceParent = document.querySelector('.price-parent');
    priceParent.textContent = `Total Price: $${totalPrice}`;
});

const resetButton = document.querySelector('.resetBtn');
resetButton.addEventListener('click', () => {
    totalPrice = 0;
    const priceParent = document.querySelector('.price-parent');
    priceParent.textContent = '';
});
