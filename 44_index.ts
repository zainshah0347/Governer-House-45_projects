// Sandwiches

function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function with different numbers of arguments
makeSandwich("Turkey", "Lettuce", "Tomato");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly", "Banana", "Honey");
