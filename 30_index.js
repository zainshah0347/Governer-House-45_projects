// Hello Admin
var usernamess = ["admin", "Alice", "Bob", "Charlie", "David"];
for (var _i = 0, usernamess_1 = usernamess; _i < usernamess_1.length; _i++) {
    var username = usernamess_1[_i];
    if (username === "admin") {
        console.log("Hello ".concat(username, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
