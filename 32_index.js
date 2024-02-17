// Checking Usernames
var current_users = ["zain", "bilal", "saad", "mairaj", "umer"];
var new_users = ["faizan", "zain", "saad", "ayan", "affan"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Convert both the current user and new user to lowercase for case-insensitive comparison
    var lowercase_new_user = new_user.toLowerCase();
    var is_username_taken = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (current_user.toLowerCase() === lowercase_new_user) {
            is_username_taken = true;
            break;
        }
    }
    if (is_username_taken) {
        console.log("Sorry, the username \"".concat(new_user, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username \"".concat(new_user, "\" is available."));
    }
}
