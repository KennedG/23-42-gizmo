const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  var list = [
    '',
    'https://pa1.narvii.com/6723/a62c58fa264cb92a3ba5b2f50446a0541307e528_hq.gif',
    'https://pa1.narvii.com/6210/6b070a4ad63709940582d23dc7345f999c9e7d51_hq.gif',
    'https://c.tenor.com/WZVU6CnhhDEAAAAC/head-pat.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if (!pessoa) return message.channel.send(`**:x: | ${message.author} Mencione alguém para cafuné!**`);

  let kaudrango = new Discord.MessageEmbed()
  .setDescription(`${message.author} **fez cafuné em** ${pessoa}!`)
  .setImage(rand)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(``, message.author.displayAvatarURL({format:"png"}));

  message.channel.send(kaudrango)
  
  }