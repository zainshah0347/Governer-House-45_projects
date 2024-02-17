// Checking Usernames

let current_users: string[] = ["zain","bilal","saad","mairaj","umer"];
let new_users: string[] = ["faizan","zain","saad","ayan","affan"];

for (let new_user of new_users) {
    // Convert both the current user and new user to lowercase for case-insensitive comparison
    let lowercase_new_user = new_user.toLowerCase();
    let is_username_taken = false;
    
    for (let current_user of current_users) {
        if (current_user.toLowerCase() === lowercase_new_user) {
            is_username_taken = true;
            break;
        }
    }
    
    if (is_username_taken) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
