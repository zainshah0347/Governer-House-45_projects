// Shrinking Guest List

let dinnerguests: string[] = ["Bilal", "Umer", "Saad", "Mairaj", "Hammad", "Zohad"];

// Print a message saying that only two people can be invited for dinner
console.log("Due to unforeseen circumstances, we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (dinnerguests.length > 2) {
    let removedGuest: string = dinnerguests.pop()!;
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to the two people still on the list, letting them know they're still invited
for (let guest of dinnerguests) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}

// Remove the last two names from the list
dinnerguests.pop();
dinnerguests.pop();

// Print the list to ensure it's empty at the end of the program
console.log("Updated guest list:", dinnerguests);
