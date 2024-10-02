function getBasketContent() {
    const fruits = [
        { name: 'strawberry', quantity: 3 },
        { name: 'apple', quantity: 2 },
        { name: 'lime', quantity: 2 },
        { name: 'peach', quantity: 1 },
        { name: 'pear', quantity: 2 }
    ];

    let basket = [];
    let totalFruits = 0;

    fruits.forEach(fruit => {
        for (let i = 0; i < fruit.quantity; i++) {
            basket.push(fruit.name);
        }
        totalFruits += fruit.quantity;
    });

    
    console.log(`N ${totalFruits} fruit(s) selected`);

  
    return basket;
}

// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
    const fruits = getBasketContent();
    showMyBasket(fruits);
}
