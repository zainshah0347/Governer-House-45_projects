// Shrinking Guest List
var dinnerguests = ["Bilal", "Umer", "Saad", "Mairaj", "Hammad", "Zohad"];
// Print a message saying that only two people can be invited for dinner
console.log("Due to unforeseen circumstances, we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (dinnerguests.length > 2) {
    var removedGuest = dinnerguests.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print a message to the two people still on the list, letting them know they're still invited
for (var _i = 0, dinnerguests_1 = dinnerguests; _i < dinnerguests_1.length; _i++) {
    var guest = dinnerguests_1[_i];
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
}
// Remove the last two names from the list
dinnerguests.pop();
dinnerguests.pop();
// Print the list to ensure it's empty at the end of the program
console.log("Updated guest list:", dinnerguests);
