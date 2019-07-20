const person = {
    name: 'Riyan',
    age: 22
}

const hobbies = ['Swimming', 'Programming'];
// spread is operator where it will be pulling out object or array without bracket
// to copy into another object without change on original array or object
// but if we use must have bracket on new object or array

const hobbiesCopied = [...hobbies]
console.log(hobbiesCopied)

// rest is operator where it merge arguments and then implemented into function 
const toArray = (...args) => {
    let result = 0;
    for(let num of args){
        result += num;
    }
    return result;
}
console.log(toArray(1,2,3,4,5))