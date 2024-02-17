// Conditional Tests

let a: number = 5;
let b: number = 10;

// Test 1: Equality check
console.log("Test 1: Equality check");
console.log("Prediction: x is not equal to y.");
if (a == b) {
    console.log("a is equal to b.");
} else {
    console.log("a is not equal to b.");
}

// Test 2: Greater than check
console.log("\nTest 2: Greater than check");
console.log("Prediction: b is greater than a.");
if (b > a) {
    console.log("b is greater than a.");
} else {
    console.log("a is greater than or equal to b.");
}

// Test 3: Less than check
console.log("\nTest 3: Less than check");
console.log("Prediction: a is less than b.");
if (a < b) {
    console.log("a is less than b.");
} else {
    console.log("a is greater than or equal to b.");
}

// Test 4: Logical AND operator
console.log("\nTest 4: Logical AND operator");
console.log("Prediction: Both conditions will be true.");
if (a < 10 && b > 5) {
    console.log("Both conditions are true.");
} else {
    console.log("At least one condition is false.");
}

// Test 5: Logical OR operator
console.log("\nTest 5: Logical OR operator");
console.log("Prediction: At least one condition will be true.");
if (a < 5 || b > 10) {
    console.log("At least one condition is true.");
} else {
    console.log("Both conditions are false.");
}
