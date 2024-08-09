// Q No 42
console.log("\n **Q No 42**\n ");

const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo"];

function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

// Modify the list of magicians
make_great(magicians);

// Show the modified list of magicians
show_magicians(magicians);
