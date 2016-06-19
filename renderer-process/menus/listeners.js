const electron = require('electron')
const app = require('electron').app

// Tell main process to show the menu when demo button is clicked
const newGameBtn = document.getElementById('new-game')
newGameBtn.addEventListener('click', function () {
  console.log('new game clicked')
})

const continueBtn = document.getElementById('continue')
continueBtn.addEventListener('click', function () {
  console.log('continue clicked')
})

const aboutBtn = document.getElementById('about')
aboutBtn.addEventListener('click', function () {
  console.log('about clicked')
})

const parametersBtn = document.getElementById('parameters')
parametersBtn.addEventListener('click', function () {
  console.log('parameters clicked')
})

const exitBtn = document.getElementById('exit')
exitBtn.addEventListener('click', function () {
  console.log(electron);
  console.log(app);
  
  app.quit();
})
