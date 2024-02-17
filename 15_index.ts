// Changing Guest List

let DinnerGuestss: string[] = ["Bilal", "Saad", "Umer"];

// Simulate a guest who can't make it
let unableToAttend: string = DinnerGuestss.pop(); // Remove the last guest from the list
console.log(`${unableToAttend} can't make it to dinner.`);

// Add a new guest to the list
let newGuests: string = "Marie Curie";
DinnerGuestss.push(newGuests);

// Print updated invitation messages
for (let i = 0; i < DinnerGuestss.length; i++) {
    console.log(`Dear ${DinnerGuestss[i]}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.`);
}

// Print the name of the guest who can't make it
console.log(`Unfortunately, ${unableToAttend} can't make it to dinner.`);
