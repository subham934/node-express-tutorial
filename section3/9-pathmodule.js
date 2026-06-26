const path = require("path")

console.log(path.sep)
const filePath = path.join("/content", 'file', 'test.txt')

console.log(filePath)
console.log(path.basename(filePath))

const absolute = path.resolve(__dirname, 'content', 'file', 'test.txt')

console.log(absolute)

