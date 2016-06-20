const Sequelize = require('sequelize')
console.log(Sequelize)

const sqlite3 = require('sqlite3')
console.log(sqlite3)

var sequelize1 = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: 'storage/database/Game.sqlite'
})

// console.log('sqlite3');

// var sqlite3 = require('sqlite3').verbose();
// console.log('instance');
// var db = new sqlite3.Database(':memory:');

// console.log('database initialize');

// db.serialize(function() {
//     db.run("CREATE TABLE lorem (info TEXT)");

//     var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//     for (var i = 0; i < 10; i++) {
//         stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();

//     db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//     	console.log(row.id + ": " + row.info);
//     });
// });

// db.close();