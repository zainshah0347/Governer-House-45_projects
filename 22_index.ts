// Intentional Error

let fruits: string[] = ["Apple", "Banana", "Orange"];

// Intentional error: accessing an index that doesn't exist
console.log(fruits[3]); // This will produce an index error

// Correcting the error by accessing an existing index
console.log(fruits[1]); // This will print "Banana"
