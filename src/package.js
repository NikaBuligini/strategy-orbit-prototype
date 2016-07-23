console.log('Package')

var method = Package.prototype

function Package (age) {
  this._age = age
}

method.getAge = function () {
  return this._age
}

module.exports = Package
