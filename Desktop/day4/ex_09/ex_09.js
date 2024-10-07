document.addEventListener('DOMContentLoaded', function() {
    const yellowSquare = document.querySelector('.wrapper'); 
    let weight = 1; 

    yellowSquare.addEventListener('click', function() {
        weight++; 
        document.querySelector('.ex_09 div:nth-child(2)').textContent = weight + ' kg';
        yellowSquare.style.bottom = Math.min(weight * 30, 300) + 'px';
    });
});
