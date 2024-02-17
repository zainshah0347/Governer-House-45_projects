// Animals

let animals: string[] = ["Dog", "Cat", "Parrot"];

// Print animal names
console.log("Animals:");
for (let animal of animals) {
    console.log(animal);
}

// Print statements about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print additional statement
console.log("\nAny of these animals would make a great pet!");
