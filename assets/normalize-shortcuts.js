let normalize = require('electron-shortcut-normalizer')
let shortcuts = document.querySelectorAll('kbd.normalize-to-platform')

// example: <kbd class="normalize-to-platform">CommandOrControl+Alt+K</kbd>
Array.prototype.forEach.call(shortcuts, function (shortcut) {
  shortcut.innerText = normalize(shortcut.innerText, process.platform)
})
