// Q No 32
console.log("\n **Q NO 32** \n");


let current_users = ["admin" , "Rafay" , "Areeb" , "Imaan" , "Lareb" , "Hassan"]

let new_users = ["Pakeeza" , "Areeb" , "Imaan" , "Haris" , "Rameez" , "rafay"]

for (let i in new_users){
    
    for (let j in current_users){
        
        let condition = new_users[i].toLowerCase() == current_users[j].toLowerCase()
        
        if (condition){
            console.log(`\n${new_users[i]} will need to enter a new username.`);
            break

        } 
        else if ( condition ==false &&  current_users.indexOf(current_users[j])== current_users.length-1){
        
            console.log(`\n${new_users[i]} username is available`);
            
        
        }
        
    }

}