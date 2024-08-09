const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo"];

function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians = magicians.map(magician => magician + " the Great");
    return greatMagicians;
}

// Get the modified list of magicians
const greatMagicians = make_great(magicians);

// Show the original list of magicians
console.log("\n Original Magicians:\n");
show_magicians(magicians);

// Show the modified list of magicians
console.log("\n Great Magicians:\n");
show_magicians(greatMagicians);
