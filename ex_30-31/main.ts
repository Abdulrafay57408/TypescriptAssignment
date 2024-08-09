// Q No 30
console.log("\n **Q NO 30** \n");


let users = ["admin" , "Rafay" , "Areeb" , "Imaan" , "Lareb" , "Hassan"]

for (let i in users){
    if (users[i] == "admin"){
        console.log("\nHello admin, would you like to see a status report?\n");
    }
    else{
        console.log(`Hello ${users[i]}, thank you for logging in again.\n`);
    }
}


// Q No 31
console.log("\n **Q NO 31** \n");

users = []

if (users.length == 0 ){
    console.log("We need to find some users!");
}
else{
    for (let i in users){
        if (users[i] == "admin"){
            console.log("\nHello admin, would you like to see a status report?\n");
        }
        else{
            console.log(`Hello ${users[i]}, thank you for logging in again.\n`);
        }
    }    
}