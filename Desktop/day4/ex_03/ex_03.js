document.addEventListener("DOMContentLoaded", function() {
    var description = document.getElementById('description');
    var newParagraph = document.createElement('p');

    // texte //
    newParagraph.textContent = "Now featuring a headphone jack!";
    description.appendChild(newParagraph);
});