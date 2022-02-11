const mysql = require('mysql');

function db () {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'xp',

    })
    
    return connection
}
