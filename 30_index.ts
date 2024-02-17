// Hello Admin

let usernamess: string[] = ["admin", "Alice", "Bob", "Charlie", "David"];

for (let username of usernamess) {
    if (username === "admin") {
        console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

