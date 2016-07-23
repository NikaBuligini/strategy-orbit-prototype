console.log('Package manager')
const Package = require('./package.js')
const fs = require('fs-plus')

var method = PackageManager.prototype

function PackageManager () {
  let packagesDir = fs.getHomeDirectory() + '/.sop'

  if (!fs.existsSync(packagesDir)) fs.mkdirSync(packagesDir)

  // console.log(JSON.parse(fs.readFileSync(homeDir + '/.sop/packages/packages.json', 'utf8')))
  let packagePaths = packagePaths = fs.listTreeSync(packagesDir).filter((val) => {
    return fs.isDirectorySync(val)
  })
  console.log(packagePaths)
}

method.getAge = function () {
  return this._age
}

module.exports = PackageManager
