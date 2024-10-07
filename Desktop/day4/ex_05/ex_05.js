
window.onload = function() {
    console.log("Page fully loaded");
  
  
    const addToCartButton = document.querySelector('.cart-btn');
  
    if (addToCartButton) {
   
      addToCartButton.addEventListener('click', () => {
   
        alert('Thanks!');
      });
    } else {
      console.log("Button not found");
    }
  };
  