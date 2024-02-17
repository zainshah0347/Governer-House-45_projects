// Large Shirts
function make_shirts(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
// Call the function with default values
make_shirts(); // Large shirt with default message
make_shirts("Medium"); // Medium shirt with default message
// Call the function with custom values
make_shirts("Small", "Hello, World!"); // Small shirt with custom message
