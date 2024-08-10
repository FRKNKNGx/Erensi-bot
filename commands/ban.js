const Discord = require("discord.js");

exports.run = async (client, message, args) => {



        let user = message.mentions.users.first();




        if(!user) return message.channel.send("Lütfen Banlanacak Kişiyi Belirtiniz.")




const üye = message.guild.members.cache.get(user.id)


üye.ban()








message.channel.send("Banladım!")




}

  exports.conf = {
  aliases: []
};

exports.help = {
  name: "ban"
};
