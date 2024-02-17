// Unchanged Magicians

function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

// Array of magician's names
let magiciansss: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call make_great with a copy of the array
let greatMagicians: string[] = make_great([...magiciansss]);

// Call show_magicians function with original and modified arrays
console.log("Original Magicians:");
show_magicians(magiciansss);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
