const Discord = require('discord.js');
const db = require('./db');

module.exports = function(client){
    client.on("message" , msg=>{
        db.addpoints(msg.author)
    })
}