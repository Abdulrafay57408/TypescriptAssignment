// Q No 42
console.log("\n **Q No 42**\n ");
var magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
// Modify the list of magicians
make_great(magicians);
// Show the modified list of magicians
show_magicians(magicians);
