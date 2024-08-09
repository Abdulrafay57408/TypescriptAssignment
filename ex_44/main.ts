function make_sandwich(...items: string[]) {

    console.log("\nYour sandwich includes the following items:\n");
    
    for (let item of items) {
        console.log(`- ${item}`);

    }

    console.log(""); 
}


make_sandwich("Turkey", "Lettuce", "Tomato");

make_sandwich("Ham", "Cheese");

make_sandwich("Chicken", "Avocado", "Bacon", "Pickles", "Onions");
