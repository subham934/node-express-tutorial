// const amount = 12;

// if (amount < 10) {
//   console.log("small Number");
// } else {
//   console.log("large number");
// }

// console.log("Hey, its my first node app!!!");

// ===============================================

// GLOBALS = anywhere in my application , i'll access them

// __dirname - path to current directory
// __filename - file name
// require - function to use modules
// module - info about current module
// process - info about environment WHERE the program is being executed

// ===============================================

// console.log(__dirname) // D:\NODEJS\nodejs\section3

// setInterval(()=> {
//   console.log("hello world")
// }, 1000)
// ===============================================

// const names = require("./4-names");
// const { sayHi } = require("./5-utils")
// const data = require("./6-alternative-flavour")

// require('./7-mindgrenade')

// sayHi("Susan")
// sayHi(names.john)
// sayHi(names.peter)
// console.log(data)
// console.log(data.items)
// console.log(data.singlePerson)

//every file in node is module. what we did right now is we created a module..
// module = Encapsulated code(only share minimum)

// ===============================================
// const os = require('os');

// // info about current user
// const user = os.userInfo();
// console.log(user)

// // method returns the system uptime in seconds

// console.log(`System uptime is ${os.uptime} seconds`)

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// }

// console.log(currentOS)

// ===============================================


const _ = require("lodash");

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)

// ===============================================



// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================
