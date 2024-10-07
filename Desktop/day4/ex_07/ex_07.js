document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.cart-btn');
        if (button) {
            button.textContent = 'CHANGE COLOR';
      
function getRandomColor() {
    const letters = '0123456789ABCDEF';
        let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
}
    return color;
}

button.addEventListener('click', function(event) {
    event.preventDefault(); 
        document.body.style.backgroundColor = getRandomColor();
        });
    }
});
