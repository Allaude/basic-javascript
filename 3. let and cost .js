// var and let is same for declaring variable but the mainly different just only on scope
// var it will read globally and on entire closing 
// let it will read scope on their declare, so it will effective
// because we don't think variable will clash

var global = 'global ';
let array = ['global', 'scope'];

for (let index = 0; index < global.length; index++) {
    let global = 'number';
    console.log(global+index);
}
