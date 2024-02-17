// More Guests
var DinnerGuests = ["Saad", "Bilal", "Umer"];
// Simulate a guest who can't make it
var notAttend = DinnerGuests.pop();
console.log("".concat(notAttend, " can't make it to dinner."));
// Add a new guest to the list
var NewewGuest = "Zain Shah";
DinnerGuests.push(NewewGuest);
// More space available, so inviting three more guests
DinnerGuests.push("Mairaj", "Saif", "Affan");
// Add one new guest to the beginning of the array
DinnerGuests.unshift("Usama");
// Add one new guest to the middle of the array
var middleIndexs = Math.floor(DinnerGuests.length / 2);
DinnerGuests.splice(middleIndexs, 0, "Ali");
// Add one new guest to the end of your list using push()
var anotherNewGuest1 = "Abrar";
DinnerGuests.push(anotherNewGuest1);
// Print updated invitation messages
for (var i = 0; i < DinnerGuests.length; i++) {
    console.log("Dear ".concat(DinnerGuests[i], ", you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food."));
}
// Informing people about the bigger dinner table
console.log("We found a bigger dinner table!");
