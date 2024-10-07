document.addEventListener('DOMContentLoaded', function () {
    let paragraphs = document.getElementsByTagName('p');

    // augmente // 
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent = i; 
    }
});