const mysql = require ('mysql');

function dbconnection(){
var connection = mysql.createConnection({
    host: "localhost",
    port: '8889',
    user: "root",
    password: "root",
    database: "xp",
    charset: "utf8mb4"
});
    connection.connect();
        return connection
}

module.exports.addpoints = function (user){

    return new Promise((resolve, reject) =>{

        var db = new dbconnection();

        db.query ('SELECT * FROM users WHERE user_id = ? ', [user.id], (err, res, fd) => {
            if (err){reject(err)}
            if (res.length == 1){
                console.log('USERS')
            }
            else{'PAS DE USERS'}
        })


    })
}