// object and array is reference type data
const hobbies = ['Swimming', 'Programming'];

for(let hobby of hobbies){
    // so if you want to iterate value array use (of keyword)
    console.log(hobby)
}

for(let hobby in hobbies){
    // if you want to iterate key array use (in keyword)
    console.log(hobby)
}
// you can manipulate value of array using map like below
console.log(hobbies.map(hobby => 'Hobby is ' + hobby));
console.log(hobbies);
console.log(hobbies.push('Cooking'));
console.log(hobbies);