// Large Shirts

function make_shirts(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
}

// Call the function with default values
make_shirts(); // Large shirt with default message
make_shirts("Medium"); // Medium shirt with default message

// Call the function with custom values
make_shirts("Small", "Hello, World!"); // Small shirt with custom message
