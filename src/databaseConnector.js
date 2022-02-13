const mysql = require("mysql");

var db = mysql.createConnection({
    host: "localhost",
    port: '8889',
    user: "root",
    password: "root",
    database: "xp",
    charset: "utf8mb4"
});

db.connect(err => {
    if (err) throw err;
    console.log('La connexion avec la base de données a bien été effectuée!');
});


module.exports = db;