let age : number = 20
if (age < 2){
    console.log('Person is a baby.');
} 
else if (age>=2 && age < 4 ){
    console.log('Person is a Todder.');
}
else if (age>=4 && age < 13 ){
    console.log('Person is a Kid.');
}
else if (age>=13 && age < 20){
    console.log('Person is a Teenager.');
}
else if (age>=20 && age < 65 ){
    console.log('Person is a Adult.');
}
else {
    console.log('Person is a Elder.');
}