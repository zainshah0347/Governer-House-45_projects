// Unchanged Magicians
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// Array of magician's names
var magiciansss = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call make_great with a copy of the array
var greatMagicians = make_great(__spreadArray([], magiciansss, true));
// Call show_magicians function with original and modified arrays
console.log("Original Magicians:");
show_magicians(magiciansss);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
