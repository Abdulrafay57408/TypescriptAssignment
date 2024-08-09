var magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return magician + " the Great"; });
    return greatMagicians;
}
// Get the modified list of magicians
var greatMagicians = make_great(magicians);
// Show the original list of magicians
console.log("\n Original Magicians:\n");
show_magicians(magicians);
// Show the modified list of magicians
console.log("\n Great Magicians:\n");
show_magicians(greatMagicians);
