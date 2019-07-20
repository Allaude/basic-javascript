// ES have additional for creating function like below.
// you can create function without function keyword and use arrow like below

const summarize = (userName, userAge, userLife) => {
    return 'Username is '+userName+' User Age is '+userAge+' is User life = '+userLife
}
// if you have many arguments but just only return 1 value you can use like below
const add = (a, b) => a+b;
// if you just only have one argument you can use like below
const addOne = a => a+1;
// if don't have any argument you still need () 
const addRand = () => 5+9;

console.log(summarize('Riyan', 22, true));
console.log(add(4, 5));
console.log(addOne(5));
console.log(addRand());