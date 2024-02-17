// Changing Guest List
var DinnerGuestss = ["Bilal", "Saad", "Umer"];
// Simulate a guest who can't make it
var unableToAttend = DinnerGuestss.pop(); // Remove the last guest from the list
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Add a new guest to the list
var newGuests = "Marie Curie";
DinnerGuestss.push(newGuests);
// Print updated invitation messages
for (var i = 0; i < DinnerGuestss.length; i++) {
    console.log("Dear ".concat(DinnerGuestss[i], ", you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food."));
}
// Print the name of the guest who can't make it
console.log("Unfortunately, ".concat(unableToAttend, " can't make it to dinner."));
