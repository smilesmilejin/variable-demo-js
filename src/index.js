let jingsFavNum = 72;
const jingsFavGame = 'night in the woods';
var jingsFavColor = 'green';

console.log(jingsFavNum);
console.log(jingsFavGame);
console.log(jingsFavColor);


// reassigning let variable
jingsFavNum = 100;
console.log(jingsFavNum);
console.log("jingsFavNum: " + jingsFavNum);
// jingsFavNum: 100



// Uncomment this line to see a TypeError
// for re-assigning a const variable:
// jingsFavGame = 'butterfly soup';


// reassigning var
jingsFavColor = 'pink';
console.log(jingsFavColor);
console.log("jingsFavColor: " + jingsFavColor);
// pink

if (true) {
    let message ="Hello";
    const greeting = "Aloha";
    var danger = "uh oh!";
}



// try let message
// console.log(message);
// /Users/xinshuangjin/Downloads/variable-demo-js/src/index.js:36

// console.log(message);
//             ^
// ReferenceError: message is not defined
//     at Object.<anonymous> (/Users/xinshuangjin/Downloads/variable-demo-js/src/index.js:36:13)


// try greeting
// console.log(greeting);
//             ^

// ReferenceError: greeting is not defined
//     at Object.<anonymous> (/Users/xinshuangjin/Downloads/variable-demo-js/src/index.js:46:13)


// try var
// This can be accessed outside, 
console.log(danger);
// uh oh!