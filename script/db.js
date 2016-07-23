const fs = require('fs')
const path = require('path')

let json = fs.readFileSync('package.json').toString()

console.log(JSON.parse(json))
console.log(fs)
