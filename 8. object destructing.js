// if we want to use object and implement into function we can use another way
// in normal function is printName(person.name) but you can destructing object and use into function


const person = {
    name: 'Riyan',
    age: 20
}

const printName = ({age, name}) => {
    console.log(name, age)
}

printName(person);