// Dinner Guests

let dinnerGuestsss: string[] = ["Bilal", "Saad", "Umer"];

// Simulate a guest who can't make it
let unableToAttend: string = dinnerGuestsss.pop(); // Remove the last guest from the list
console.log(`${unableToAttend} can't make it to dinner.`);

// Add a new guest to the list
let newGuest2: string = "Marie Curie";
dinnerGuestsss.push(newGuest2);

// Print updated invitation messages
for (let i = 0; i < dinnerGuestsss.length; i++) {
    console.log(`Dear ${dinnerGuestsss[i]}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.`);
}

// Print the name of the guest who can't make it
console.log(`Unfortunately, ${unableToAttend} can't make it to dinner.`);
// Print a message indicating the number of people being invited to dinner
console.log(`You are inviting ${dinnerGuestsss.length} people to dinner.`);

