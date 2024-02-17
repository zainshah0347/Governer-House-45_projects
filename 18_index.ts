// Seeing the world

let placesToVisits: string[] = ["Kyoto", "Machu Picchu", "Santorini", "Banff", "Great Barrier Reef"];

// Print the array in its original order
console.log("Original order:", placesToVisits);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisits].sort());

// Print the array to show it's still in its original order
console.log("Original order:", placesToVisits);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisits].sort().reverse());

// Print the array to show it's still in its original order
console.log("Original order:", placesToVisits);

// Reverse the order of the list
placesToVisits.reverse();

// Print the array to show its order has changed
console.log("Reversed order:", placesToVisits);

// Reverse the order of the list again to get back to its original order
placesToVisits.reverse();

// Print the array to show it's back to its original order
console.log("Original order:", placesToVisits);

// Sort the array to store it in alphabetical order
placesToVisits.sort();

// Print the array to show its order has changed
console.log("Sorted in alphabetical order:", placesToVisits);

// Sort the array to store it in reverse alphabetical order
placesToVisits.sort((a, b) => b.localeCompare(a));

// Print the array to show its order has changed
console.log("Sorted in reverse alphabetical order:", placesToVisits);
