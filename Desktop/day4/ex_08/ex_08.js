document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.cart-btn');
    const image = document.querySelector('img');


    const inCartLabel = document.createElement('p');
    inCartLabel.textContent = 'In cart: ';

    const cartCount = document.createElement('span');
    cartCount.textContent = '0'; 
    inCartLabel.appendChild(cartCount);

    const addToCartContainer = document.getElementById('addToCart');
    addToCartContainer.appendChild(inCartLabel); 

  
    const newImageSrc = 'Samsung22.png'; 
    button.addEventListener('click', function(event) {
        event.preventDefault();
        cartCount.textContent = parseInt(cartCount.textContent, 10) + 1;

        
        image.src = newImageSrc; 
    });
});
