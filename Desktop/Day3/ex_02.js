function findHousing(housingToFind, housingList) {
    let i = 0;  
    while (i < housingList.length) {
        if (housingList[i].toLowerCase() === housingToFind.toLowerCase()) {
            return [i, housingList[i]];  
        }
        i++;  
    }
    return null;  
}

// Exemple d'utilisation
displayResult(findHousing("Igloo", ["Flat", "House", "Hut", "House", "hut", "Igloo"])); 

