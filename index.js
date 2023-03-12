// Code your solutions in this file
// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

// const name = ["Charlie", "Samip", "Ali"];

// function writeCards(name, eventName) {
//     for (let i = 0; i < name.length; i++) {
//         console.log(`Thank you, ${name}, for the wonderful ${eventName} gift!`);
//         debugger;
//     }
//     return name;
// }


const names =["Guadalupe", "Ollie","Aki"];
const messages = [];

// function writeCards(names, eventNames){    
//     for (let i = 0; i < names.length; i ++) { 
//     const message = `Thank you, ${names[i]}, for the wonderful {eventNames} gift!`;    
//     message.push(message);
//     } 
//     return message;
// }

function writeCards(names, eventNames){
    for (let i = 0; i < names.length; i ++){
    let message =  `Thank you, ${names[i]}, for the wonderful ${eventNames} gift!`;
    messages.push(message);
    }   
    return messages;
}


function countDown(number){   
    while (number >= 0) {       
        console.log(number);       
        number --;   
    }
}




