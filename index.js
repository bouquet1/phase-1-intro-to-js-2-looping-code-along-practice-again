// The for loop is made up of four statements in the following structure:
// for([initialization]; [condition]; [iteration]) {
    //[loop body]
// }
// Usage: Use a for loop when you know how many times you want the loop to run (for example, when you're looping through elements in an array).


const names = ["Guadalupe", "Ollie", "Aki"];
const messages = [];

function writeCards(names, occasion){
    for (let i = 0; i < names.length; i ++) {
    let message =  `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
    messages.push(message);
    }   
    return messages;
}

// I tried to write  it in a new way but it didn't work :(
// const writeCArds = (names, occasion) => {
//     for (let i = 0; i < names.length; i ++) {
//         let message =  `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
//         messages.push(message);
//         }   
//     return messages; 
// }

function countDown(number){
    while (number >= 0) {
        console.log(number--);
    }
}

// THIS ONE WORKS TOO!
// for (let countDown = 0; countDown , 10; countDown--) {
//     console.log(countDown)
// }
