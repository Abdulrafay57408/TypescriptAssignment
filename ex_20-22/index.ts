// Q no 20
console.log(`\n "Q NO 20" \n`)

let countries:string[] = ["Pakistan" , "India" , "USA" , "Japan" , "Canada"]

for(let i = 0 ; i<countries.length ; i++){
    console.log(countries[i])
}

// Q no 21
console.log(`\n "Q NO 21" \n`)

interface iPersonObject{

    name: string,
    age : number,
    residence: string
}

let person1: iPersonObject = {
    name : 'Rafay',
    age:20 ,
    residence : "Malir"
}

let person2: iPersonObject = {
    name : 'Hassan',
    age:21 ,
    residence : "Gulshan"
}


// Q no 22
console.log(`\n "Q NO 22" \n`)

let error:string[] = ["Pakistan" , "India" , "USA" , "Japan" , "Canada"]

// invalid index error
console.log("Error Statement: ")
console.log(error[8])

// error resolved
console.log("\nError Resolved Statement: ")
console.log(error[2])
