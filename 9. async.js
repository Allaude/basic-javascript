// old method
// if calling function below it will running after 1.5 second
// callback is function where will be running after first function, you can call nested function
//const fetchData = callback => {
//    setTimeout(() => {
//        callback('Done');
//    }, 1500);
//}
//
//// function below will running after 2 second
//setTimeout(() => {
//    console.log('Timer is done')
//    fetchData(text => {
//        console.log(text)
//    });
//}, 2000)

// ecmascript method

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, 1500)
    })
    return promise
}

setTimeout(() => {
    console.log('Timer is done');
    fetchData()
    .then(text => {
        console.log(text)
        return fetchData();
    })
    .then(text2 => {
        console.log(text2)
    })
}, 2000);

console.log('Hello')
console.log('Hi')

