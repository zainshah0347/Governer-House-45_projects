// More Conditional Tests
var x = 5;
var y = 10;
var string1 = "hello";
var string2 = "world";
// Test 1: Equality check
console.log("Test 1: Equality check");
console.log("Prediction: Is x equal to 5? I predict True.");
console.log(x == 5);
// Test 2: Greater than check
console.log("\nTest 2: Greater than check");
console.log("Prediction: Is y greater than x? I predict True.");
console.log(y > x);
// Test 3: Less than check
console.log("\nTest 3: Less than check");
console.log("Prediction: Is x less than y? I predict True.");
console.log(x < y);
// Test 4: String equality check
console.log("\nTest 4: String equality check");
console.log("Prediction: Are str1 and str2 equal? I predict False.");
console.log(string1 == string2);
// Test 5: Logical AND operator
console.log("\nTest 5: Logical AND operator");
console.log("Prediction: Is x less than 10 and y greater than 5? I predict True.");
console.log(x < 10 && y > 5);
// Test 6: Logical OR operator
console.log("\nTest 6: Logical OR operator");
console.log("Prediction: Is x less than 5 or y greater than 15? I predict False.");
console.log(x < 5 || y > 15);
// Test 7: Identity check (strict equality)
console.log("\nTest 7: Identity check (strict equality)");
console.log("Prediction: Is x identical to the string '5'? I predict False.");
console.log(x === 8);
// Test 8: Existence check
console.log("\nTest 8: Existence check");
var z;
console.log("Prediction: Is z undefined? I predict True.");
console.log(z === undefined);
// Test 9: Not equal check
console.log("\nTest 9: Not equal check");
console.log("Prediction: Is x not equal to 10? I predict True.");
console.log(x != 10);
// Test 10: Less than or equal to check
console.log("\nTest 10: Less than or equal to check");
console.log("Prediction: Is y less than or equal to 10? I predict True.");
console.log(y <= 10);
