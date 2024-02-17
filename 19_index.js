// Dinner Guests
var dinnerGuestsss = ["Bilal", "Saad", "Umer"];
// Simulate a guest who can't make it
var unableToAttend = dinnerGuestsss.pop(); // Remove the last guest from the list
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Add a new guest to the list
var newGuest2 = "Marie Curie";
dinnerGuestsss.push(newGuest2);
// Print updated invitation messages
for (var i = 0; i < dinnerGuestsss.length; i++) {
    console.log("Dear ".concat(dinnerGuestsss[i], ", you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food."));
}
// Print the name of the guest who can't make it
console.log("Unfortunately, ".concat(unableToAttend, " can't make it to dinner."));
// Print a message indicating the number of people being invited to dinner
console.log("You are inviting ".concat(dinnerGuestsss.length, " people to dinner."));
