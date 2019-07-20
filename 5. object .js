const person = {
    name: "Riyan",
    age: 22,
    /*
    it will give error because (this keyword) is refer into global js file
    greet: () => {
        console.log('Hi, I am '+this.name)
    }
    */
   // so to refer just only on that object we use javascript function, not arrow function
//    greet(){
//        console.log('Hi, I am '+this.name);
//    }
greet(){
    return this.name
}
}

console.log(person.greet());