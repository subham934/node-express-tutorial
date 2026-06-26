const names = require("./4-names");
const { sayHi } = require("./5-utils")
const data = require("./6-alternative-flavour")

require('./7-mindgrenade')

sayHi("Susan")
sayHi(names.john)
sayHi(names.peter)
console.log(data)
console.log(data.items)
console.log(data.singlePerson)