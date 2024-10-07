// change taille de la page //
window.onresize = function() {
    alert("Size matters");
};

// Curseur sur l'image //
document.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'IMG') {
        alert("Pretty, isn't it?");
    }
});

