// Seeing the world
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisits = ["Kyoto", "Machu Picchu", "Santorini", "Banff", "Great Barrier Reef"];
// Print the array in its original order
console.log("Original order:", placesToVisits);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], placesToVisits, true).sort());
// Print the array to show it's still in its original order
console.log("Original order:", placesToVisits);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisits, true).sort().reverse());
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
placesToVisits.sort(function (a, b) { return b.localeCompare(a); });
// Print the array to show its order has changed
console.log("Sorted in reverse alphabetical order:", placesToVisits);
